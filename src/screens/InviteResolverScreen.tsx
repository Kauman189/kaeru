import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { supabase } from "../lib/supabase";
import { acceptTripInviteToken } from "../services/trips.service";
import { track } from "../services/analytics.service";
import styles from "./InviteResolverScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "InviteResolver">;

export default function InviteResolverScreen({ navigation, route }: Props) {
  const token = route.params?.token;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const resolveInvite = useCallback(async () => {
    if (!token) {
      setError("No se ha encontrado el token de invitación.");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        navigation.replace("Auth", { pendingInviteToken: token });
        return;
      }

      const result = await acceptTripInviteToken(token);
      await track("trip_invite_accepted", {
        trip_id: result.trip_id,
        role: result.role,
      });
      navigation.reset({
        index: 1,
        routes: [{ name: "Tabs", params: { targetTab: "my_trips" } }, { name: "TripDetail", params: { tripId: result.trip_id, source: "my_shared" } }],
      });
    } catch (err: any) {
      setError(err?.message || "No se pudo aceptar la invitación.");
    } finally {
      setIsLoading(false);
    }
  }, [navigation, token]);

  useEffect(() => {
    resolveInvite();
  }, [resolveInvite]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.center}>
          {isLoading ? (
            <>
              <ActivityIndicator size="small" color="#2563EB" />
              <Text style={styles.title}>Validando invitación</Text>
              <Text style={styles.text}>Estamos añadiéndote al viaje…</Text>
            </>
          ) : error ? (
            <>
              <Text style={styles.title}>No se pudo abrir la invitación</Text>
              <Text style={styles.text}>{error}</Text>
              <TouchableOpacity style={styles.retryButton} onPress={resolveInvite}>
                <Text style={styles.retryText}>Reintentar</Text>
              </TouchableOpacity>
            </>
          ) : null}
        </View>
      </SafeAreaView>
    </View>
  );
}
