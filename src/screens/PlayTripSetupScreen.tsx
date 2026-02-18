import React, { useMemo, useState } from "react";
import { ActivityIndicator, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ArrowLeft } from "lucide-react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { startPlayTrip } from "../services/playTrips.service";
import { requestNotificationsPermission, scheduleSessionNotifications } from "../services/localNotifications.service";
import { getPlaySessionWithStops } from "../services/playTrips.service";
import { track } from "../services/analytics.service";
import styles from "./PlayTripSetupScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "PlayTripSetup">;

const formatDate = (date: Date) => {
  const yyyy = date.getFullYear();
  const mm = `${date.getMonth() + 1}`.padStart(2, "0");
  const dd = `${date.getDate()}`.padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

export default function PlayTripSetupScreen({ navigation, route }: Props) {
  const { tripId } = route.params;

  const defaultStart = useMemo(() => formatDate(new Date()), []);
  const defaultEnd = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return formatDate(d);
  }, []);

  const [mode, setMode] = useState<"solo" | "shared">("solo");
  const [startDate, setStartDate] = useState(defaultStart);
  const [endDate, setEndDate] = useState(defaultEnd);
  const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone || "Europe/Madrid");
  const [summaryTime, setSummaryTime] = useState("21:00");
  const [includeCollaborators, setIncludeCollaborators] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStart = async () => {
    if (isSubmitting) return;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(startDate) || !/^\d{4}-\d{2}-\d{2}$/.test(endDate)) {
      setError("Usa formato de fecha YYYY-MM-DD.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const permission = await requestNotificationsPermission();
      if (!permission) {
        setError("Activa permisos de notificaciones para usar el viaje activo.");
        return;
      }

      const started = await startPlayTrip({
        tripId,
        mode,
        startDate,
        endDate,
        timezone,
        summaryTimeLocal: summaryTime,
        includeCollaborators,
      });

      const sessionPayload = await getPlaySessionWithStops(started.session_id);
      await scheduleSessionNotifications(
        sessionPayload.session,
        sessionPayload.stops,
        sessionPayload.currentParticipant?.notifications_config || {
          before_10m: true,
          start: true,
          daily_summary: true,
        }
      );

      await track("play_trip_started", {
        trip_id: tripId,
        session_id: started.session_id,
        mode,
      });

      navigation.replace("ActiveTripDetail", { sessionId: started.session_id });
    } catch (err: any) {
      const raw = String(err?.message || "").toLowerCase();
      if (raw.includes("solo owner/editor puede iniciar modo compartido")) {
        setError("Solo el propietario o un editor puede iniciar un modo colaborativo para este viaje.");
      } else {
        setError(err?.message || "No se pudo iniciar el viaje activo.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={["top"]}>
        <KeyboardAvoidingView
          style={styles.safeArea}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <ScrollView
              style={styles.safeArea}
              contentContainerStyle={styles.content}
              keyboardShouldPersistTaps="handled"
              keyboardDismissMode="interactive"
            >
          <View style={styles.headerRow}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <ArrowLeft size={18} color="#111827" />
            </TouchableOpacity>
            <Text style={styles.title}>Viaje activo</Text>
            <View style={{ width: 36 }} />
          </View>

          <Text style={styles.helper}>
            Configura tu viaje activo para recibir avisos y editar el itinerario en ruta.
          </Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Modo</Text>
            <View style={styles.row}>
              <TouchableOpacity
                style={[styles.option, mode === "solo" && styles.optionActive]}
                onPress={() => setMode("solo")}
              >
                <Text style={[styles.optionText, mode === "solo" && styles.optionTextActive]}>Solo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.option, mode === "shared" && styles.optionActive]}
                onPress={() => setMode("shared")}
              >
                <Text style={[styles.optionText, mode === "shared" && styles.optionTextActive]}>
                  Con colaboradores
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Fechas y horario</Text>
            <Text style={styles.label}>Fecha inicio (YYYY-MM-DD)</Text>
            <TextInput style={styles.input} value={startDate} onChangeText={setStartDate} autoCapitalize="none" />
            <Text style={styles.label}>Fecha fin (YYYY-MM-DD)</Text>
            <TextInput style={styles.input} value={endDate} onChangeText={setEndDate} autoCapitalize="none" />
            <Text style={styles.label}>Zona horaria</Text>
            <TextInput style={styles.input} value={timezone} onChangeText={setTimezone} autoCapitalize="none" />
            <Text style={styles.label}>Resumen diario (HH:mm)</Text>
            <TextInput style={styles.input} value={summaryTime} onChangeText={setSummaryTime} autoCapitalize="none" />
          </View>

          {mode === "shared" ? (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Colaboradores</Text>
              <View style={styles.switchRow}>
                <Text style={styles.switchText}>Incluir colaboradores confirmados al iniciar</Text>
                <Switch value={includeCollaborators} onValueChange={setIncludeCollaborators} />
              </View>
            </View>
          ) : null}

          <TouchableOpacity
            style={[styles.primaryButton, isSubmitting && styles.primaryButtonDisabled]}
            onPress={handleStart}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : (
              <Text style={styles.primaryButtonText}>Iniciar viaje activo</Text>
            )}
          </TouchableOpacity>

          {error ? <Text style={styles.error}>{error}</Text> : null}
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}
