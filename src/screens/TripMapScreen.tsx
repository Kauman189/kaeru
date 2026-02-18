import React, { useEffect, useMemo, useState } from "react";
import { ScrollView, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker, PROVIDER_DEFAULT, Region } from "react-native-maps";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ArrowLeft } from "lucide-react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import {
  getTripById,
  getTripStops,
  TripRecord,
  TripStopRecord,
} from "../services/trips.service";
import { resolveLocalCityCenter } from "../services/localPlaces.service";
import { onboardingDemoStops, onboardingDemoTrip } from "../mock/onboardingDemoTrip";
import { formatStopTimeRange } from "../utils/timeFormat";
import styles from "./TripMapScreen.styles";
import AsyncStateView from "../components/AsyncStateView";

type Props = NativeStackScreenProps<RootStackParamList, "TripMap">;

export default function TripMapScreen({ navigation, route }: Props) {
  const tripId = route.params?.tripId;
  const isOnboardingDemo = route.params?.demoTrip === "onboarding";
  const [trip, setTrip] = useState<TripRecord | null>(null);
  const [stops, setStops] = useState<TripStopRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [fallbackRegion, setFallbackRegion] = useState<Region | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadMapData = async () => {
      if (isOnboardingDemo) {
        if (!mounted) return;
        setTrip(onboardingDemoTrip);
        setStops(onboardingDemoStops);
        setError(null);
        setIsLoading(false);
        return;
      }

      if (!tripId) {
        if (mounted) {
          setError("No se ha seleccionado ningun viaje.");
          setIsLoading(false);
        }
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const [tripData, stopData] = await Promise.all([getTripById(tripId), getTripStops(tripId)]);
        if (!mounted) return;
        setTrip(tripData);
        setStops(stopData);
      } catch (err: any) {
        if (!mounted) return;
        setError(err?.message || "No se pudo cargar el mapa del viaje.");
        setTrip(null);
        setStops([]);
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    loadMapData();

    return () => {
      mounted = false;
    };
  }, [isOnboardingDemo, tripId]);

  const markers = stops.filter((stop) => stop.latitude != null && stop.longitude != null);

  useEffect(() => {
    let mounted = true;
    if (isLoading || markers.length > 0 || !trip) {
      return;
    }
    const query = (trip.destination || trip.title || "").trim();
    if (!query) {
      return;
    }

    const resolveRegion = async () => {
      const geo = resolveLocalCityCenter(query);
      if (!mounted) return;
      if (geo) {
        setFallbackRegion({
          latitude: geo.latitude,
          longitude: geo.longitude,
          latitudeDelta: 0.14,
          longitudeDelta: 0.14,
        });
      } else {
        setFallbackRegion({
          latitude: 40.0,
          longitude: -3.5,
          latitudeDelta: 7.0,
          longitudeDelta: 7.0,
        });
      }
    };

    resolveRegion();

    return () => {
      mounted = false;
    };
  }, [isLoading, markers.length, trip]);

  const region = useMemo<Region>(() => {
    if (markers.length > 0) {
      return {
        latitude: markers[0].latitude as number,
        longitude: markers[0].longitude as number,
        latitudeDelta: 0.08,
        longitudeDelta: 0.08,
      };
    }
    if (fallbackRegion) {
      return fallbackRegion;
    }
    return {
      latitude: 40.4168,
      longitude: -3.7038,
      latitudeDelta: 7.0,
      longitudeDelta: 7.0,
    };
  }, [fallbackRegion, markers]);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} provider={PROVIDER_DEFAULT} region={region}>
        {markers.map((stop) => (
          <Marker
            key={stop.id}
            coordinate={{
              latitude: stop.latitude as number,
              longitude: stop.longitude as number,
            }}
            title={stop.title}
            description={`${formatStopTimeRange(
              stop.start_time_text,
              stop.end_time_text
            )} · ${stop.address || stop.place_name || ""}`}
          />
        ))}
      </MapView>

      <SafeAreaView edges={["top"]} style={styles.header}>
        <View style={styles.headerRow}>
          <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
            <ArrowLeft size={18} color="#1E1E1E" />
          </Pressable>
          <Text style={styles.title}>{trip?.title || "Mapa del viaje"}</Text>
          <View style={{ width: 36 }} />
        </View>
        <Text style={styles.subtitle}>
          {isLoading
            ? "Cargando paradas..."
            : error
            ? "No se ha podido cargar el mapa"
            : trip
            ? `${markers.length} paradas con ubicacion`
            : "No hay viaje seleccionado"}
        </Text>
      </SafeAreaView>

      {!isLoading && !error && stops.length > 0 ? (
        <View style={styles.stopsPanel}>
          <Text style={styles.stopsTitle}>Actividades</Text>
          <ScrollView
            style={styles.stopsList}
            contentContainerStyle={styles.stopsListContent}
            showsVerticalScrollIndicator={false}
          >
            {stops.map((stop, index) => (
              <View key={stop.id} style={styles.stopRow}>
                <View style={styles.stopIndexBadge}>
                  <Text style={styles.stopIndexText}>{index + 1}</Text>
                </View>
                <View style={styles.stopInfo}>
                  <Text style={styles.stopTitle}>{stop.title}</Text>
                  <Text style={styles.stopTime}>
                    {formatStopTimeRange(stop.start_time_text, stop.end_time_text)}
                  </Text>
                  <Text style={styles.stopAddress}>{stop.address || stop.place_name || "-"}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      ) : null}

      {(!isLoading && markers.length === 0) || error ? (
        <View style={styles.emptyHint}>
          <AsyncStateView
            isLoading={false}
            error={error}
            isEmpty={!error}
            emptyText="Este viaje todavía no tiene paradas con coordenadas."
          />
        </View>
      ) : null}
    </View>
  );
}
