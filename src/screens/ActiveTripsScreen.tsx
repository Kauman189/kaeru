import React, { useCallback, useEffect, useState } from "react";
import { RefreshControl, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ArrowLeft } from "lucide-react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { getMyActivePlaySessions, PlaySessionRecord } from "../services/playTrips.service";
import AsyncStateView from "../components/AsyncStateView";
import styles from "./ActiveTripsScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "ActiveTrips">;

export default function ActiveTripsScreen({ navigation }: Props) {
  const [sessions, setSessions] = useState<PlaySessionRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadSessions = useCallback(async (silent = false) => {
    if (!silent) setIsLoading(true);
    setError(null);
    try {
      const data = await getMyActivePlaySessions();
      setSessions(data);
    } catch (err: any) {
      setError(err?.message || "No se pudieron cargar los trips activos.");
      setSessions([]);
    } finally {
      if (!silent) setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadSessions();
  }, [loadSessions]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await loadSessions(true);
    setIsRefreshing(false);
  }, [loadSessions]);

  const toStatusLabel = (status: PlaySessionRecord["status"]) => {
    if (status === "active") return "En curso";
    if (status === "paused") return "En pausa";
    if (status === "completed") return "Finalizado";
    if (status === "cancelled") return "Cancelado";
    return status;
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={["top"]}>
        <View style={styles.content}>
          <View style={styles.headerRow}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <ArrowLeft size={18} color="#111827" />
            </TouchableOpacity>
            <Text style={styles.title}>Viajes activos</Text>
            <View style={{ width: 36 }} />
          </View>

          {isLoading || error || sessions.length === 0 ? (
            <AsyncStateView
              isLoading={isLoading}
              error={error}
              isEmpty={!isLoading && !error && sessions.length === 0}
              emptyText="No tienes viajes activos ahora mismo."
              loadingText="Cargando viajes activos..."
              onRetry={() => loadSessions()}
            />
          ) : (
            <ScrollView
              showsVerticalScrollIndicator={false}
              refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />}
            >
              {sessions.map((session) => (
                <View key={session.id} style={styles.card}>
                  <Text style={styles.cardTitle}>{session.trips?.title || "Viaje activo"}</Text>
                  <Text style={styles.cardMeta}>
                    {session.mode === "shared" ? "Colaborativo" : "Individual"} · {session.start_date} -{" "}
                    {session.end_date}
                  </Text>
                  <View style={styles.row}>
                    <Text style={styles.status}>{toStatusLabel(session.status)}</Text>
                    <TouchableOpacity
                      style={styles.openBtn}
                      onPress={() => navigation.navigate("ActiveTripDetail", { sessionId: session.id })}
                    >
                      <Text style={styles.openBtnText}>Abrir</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </ScrollView>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}
