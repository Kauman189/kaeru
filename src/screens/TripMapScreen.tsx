import React, { useMemo } from "react";
import { Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker, PROVIDER_DEFAULT, Region } from "react-native-maps";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ArrowLeft } from "lucide-react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { useTrips } from "../store/tripsContext";
import styles from "./TripMapScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "TripMap">;

export default function TripMapScreen({ navigation, route }: Props) {
  const { trips } = useTrips();
  const tripId = route.params?.tripId;
  const trip = tripId ? trips.find((item) => item.id === tripId) : undefined;
  const markers = trip?.stops?.filter(
    (stop) => stop.latitude != null && stop.longitude != null
  );

  const region = useMemo<Region>(() => {
    if (markers && markers.length > 0) {
      return {
        latitude: markers[0].latitude as number,
        longitude: markers[0].longitude as number,
        latitudeDelta: 0.08,
        longitudeDelta: 0.08,
      };
    }
    return {
      latitude: 39.4699,
      longitude: -0.3763,
      latitudeDelta: 0.18,
      longitudeDelta: 0.18,
    };
  }, [markers]);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} provider={PROVIDER_DEFAULT} initialRegion={region}>
        {markers?.map((stop) => (
          <Marker
            key={stop.id}
            coordinate={{
              latitude: stop.latitude as number,
              longitude: stop.longitude as number,
            }}
            title={stop.title}
            description={stop.address}
          />
        ))}
      </MapView>

      <SafeAreaView edges={["top"]} style={styles.header}>
        <View style={styles.headerRow}>
          <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
            <ArrowLeft size={18} color="#1E1E1E" />
          </Pressable>
          <Text style={styles.title}>{trip?.title || "Trip map"}</Text>
          <View style={{ width: 36 }} />
        </View>
        <Text style={styles.subtitle}>
          {trip ? `${markers?.length ?? 0} stops pinned` : "No trip selected"}
        </Text>
      </SafeAreaView>

      {(!markers || markers.length === 0) && (
        <View style={styles.emptyHint}>
          <Text style={styles.emptyText}>No stops with coordinates yet.</Text>
        </View>
      )}
    </View>
  );
}
