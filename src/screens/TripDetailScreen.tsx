/**
 * Pantalla de detalle con la informacion completa del viaje.
 */
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { User, Mountain, Map, Copy, Heart, MessageCircle, Pencil } from "lucide-react-native";
import styles from "./TripDetailScreen.styles";
import { useTrips } from "../store/tripsContext";
import MapView, { Marker, PROVIDER_DEFAULT, Region } from "react-native-maps";
import { MOCK_USERS } from "../mock/users";

type Props = NativeStackScreenProps<RootStackParamList, "TripDetail">;

export default function TripDetailScreen({ navigation, route }: Props) {
  const { trips, updateTripVisibility } = useTrips();
  const tripId = route.params?.tripId;
  const source = route.params?.source;
  const trip = tripId ? trips.find((item) => item.id === tripId) : undefined;
  const markers = trip?.stops?.filter(
    (stop) => stop.latitude != null && stop.longitude != null
  );
  const scrollY = useRef(new Animated.Value(0)).current;
  const lastScrollY = useRef(0);
  const [tabBarVisible, setTabBarVisible] = useState(true);
  const barTranslate = useRef(new Animated.Value(0)).current;
  const barOpacity = useRef(new Animated.Value(1)).current;

  const getTagVariant = (tag: string) => {
    const lower = tag.toLowerCase();
    if (lower.includes("friend") || lower.includes("people") || lower.includes("solo") || lower.includes("couple") || lower.includes("family")) {
      return "people";
    }
    if (lower.includes("food")) {
      return "food";
    }
    if (lower.includes("tourism") || lower.includes("city") || lower.includes("cultural") || lower.includes("adventure") || lower.includes("nature")) {
      return "tourism";
    }
    return "default";
  };

  const tripTitle = trip?.title ?? "Trip to Tokyo 5 days";
  const tripBudget = trip?.budget ?? "600$avg";
  const tripPoints = trip?.stops?.length
    ? `${trip.stops.length} points`
    : "5 points";
  const tripDuration = trip?.duration ?? "October 3 days";
  const tripTags = trip?.tags?.length ? trip.tags : ["Cultural", "Adventure", "Food Tour", "City"];
  const tripVisibility = trip?.visibility ?? "public";
  const canEditVisibility = source === "my" && tripId != null;
  const collaboratorUsers = (trip?.collaborators || [])
    .map((id) => MOCK_USERS.find((user) => user.id === id))
    .filter(Boolean);
  const visibleCollaborators = collaboratorUsers.slice(0, 3) as typeof MOCK_USERS;
  const extraCollaborators = collaboratorUsers.length - visibleCollaborators.length;
  const tripDescription =
    trip?.destination
      ? `Trip through ${trip.destination}, combining local culture, food, and hidden spots tailored to your route.`
      : "En este viaje pasamos por Tokio, recorriendo barrios como Shibuya Crossing y Asakusa, combinando modernidad y tradición visitamos templos, parques y mercados locales, y dedicamos un día a una excursión a Monte Fuji para disfrutar del paisaje.";

  const mapRegion: Region = markers && markers.length > 0
    ? {
        latitude: markers[0].latitude as number,
        longitude: markers[0].longitude as number,
        latitudeDelta: 0.08,
        longitudeDelta: 0.08,
      }
    : {
        latitude: 35.6762,
        longitude: 139.6503,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      };

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: false,
      listener: (event: any) => {
        const currentY = event.nativeEvent.contentOffset.y;
        if (currentY > lastScrollY.current && currentY > 50) {
          setTabBarVisible(false);
        } else if (currentY < lastScrollY.current) {
          setTabBarVisible(true);
        }
        lastScrollY.current = currentY;
      },
    }
  );

  useEffect(() => {
    Animated.parallel([
      Animated.timing(barTranslate, {
        toValue: tabBarVisible ? 0 : 70,
        duration: 240,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(barOpacity, {
        toValue: tabBarVisible ? 1 : 0,
        duration: 220,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  }, [barOpacity, barTranslate, tabBarVisible]);

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <View style={[styles.cloud, { left: 20, top: 20, width: 150, height: 60 }]} />
        <View style={[styles.cloud, { right: -20, top: 40, width: 120, height: 50 }]} />
      </View>

      {/* Indicador de arrastre */}
      <SafeAreaView edges={['top']} style={styles.dragIndicatorContainer}>
        <View style={styles.dragIndicator} />
      </SafeAreaView>

      <Animated.ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.imageContainer}>
          <View style={styles.mainImagePlaceholder}>
            <Mountain size={80} color="white" />
            <Text style={styles.mainImageText}>Great Buddha of Kamakura</Text>
          </View>
          {visibleCollaborators.length > 0 && (
            <View style={styles.avatarsContainer}>
              {visibleCollaborators.map((user, index) => (
                <View
                  key={user.id}
                  style={[
                    styles.avatar,
                    { backgroundColor: user.avatarColor },
                    index > 0 && styles.avatarStacked,
                  ]}
                >
                  <Text style={styles.avatarText}>{user.initials}</Text>
                </View>
              ))}
              {extraCollaborators > 0 && (
                <View style={[styles.avatar, styles.avatarStacked]}>
                  <Text style={styles.avatarText}>+{extraCollaborators}</Text>
                </View>
              )}
            </View>
          )}
          <View style={styles.imageIndicators}>
            <View style={[styles.imageIndicator, styles.imageIndicatorActive]} />
            <View style={styles.imageIndicator} />
            <View style={styles.imageIndicator} />
            <View style={styles.imageIndicator} />
          </View>
        </View>

        <View style={styles.tagsContainer}>
          {tripTags.map((tag) => {
            const variant = getTagVariant(tag);
            return (
              <View
                key={tag}
                style={[
                  styles.tag,
                  variant === "people" && styles.tagPeople,
                  variant === "tourism" && styles.tagTourism,
                  variant === "food" && styles.tagFood,
                  variant === "default" && styles.tagDefault,
                ]}
              >
                <Text
                  style={[
                    styles.tagText,
                    variant === "default" ? styles.tagTextMuted : styles.tagTextDark,
                  ]}
                >
                  {tag}
                </Text>
              </View>
            );
          })}
        </View>

        <Text style={styles.tripTitle}>{tripTitle}</Text>
        
        <View style={styles.statsRow}>
          <Text style={styles.statText}>{tripBudget}</Text>
          <View style={styles.statDivider} />
          <Text style={styles.statText}>{tripPoints}</Text>
          <View style={styles.statDivider} />
          <Text style={styles.statText}>{tripDuration}</Text>
        </View>

        {canEditVisibility && (
          <View style={styles.visibilityRow}>
            <Text style={styles.visibilityLabel}>Visibility</Text>
            <View style={styles.visibilityOptions}>
              <Pressable
                style={[
                  styles.visibilityChip,
                  tripVisibility === "public" && styles.visibilityChipActive,
                ]}
                onPress={() => updateTripVisibility(tripId!, "public")}
              >
                <Text
                  style={[
                    styles.visibilityChipText,
                    tripVisibility === "public" && styles.visibilityChipTextActive,
                  ]}
                >
                  Public
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.visibilityChip,
                  tripVisibility === "private" && styles.visibilityChipActive,
                ]}
                onPress={() => updateTripVisibility(tripId!, "private")}
              >
                <Text
                  style={[
                    styles.visibilityChipText,
                    tripVisibility === "private" && styles.visibilityChipTextActive,
                  ]}
                >
                  Private
                </Text>
              </Pressable>
            </View>
          </View>
        )}

        <View style={styles.divider} />

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{tripDescription}</Text>
        </View>

        <Pressable
          style={styles.mapContainer}
          onPress={() => navigation.navigate("TripMap", { tripId })}
        >
          <View style={styles.mapPlaceholder}>
            <MapView
              style={{ flex: 1 }}
              provider={PROVIDER_DEFAULT}
              pointerEvents="none"
              initialRegion={mapRegion}
            >
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
          </View>
        </Pressable>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Itinerary</Text>
        
        {trip?.stops?.length ? (
          trip.stops.map((stop, index) => (
            <View key={stop.id} style={styles.itineraryItem}>
              <View style={styles.dayBadge}>
                <Text style={styles.dayText}>Stop {index + 1}</Text>
              </View>
              <Text style={styles.itineraryText}>{stop.title}</Text>
            </View>
          ))
        ) : (
          <>
            <View style={styles.itineraryItem}>
              <View style={styles.dayBadge}>
                <Text style={styles.dayText}>Day 1</Text>
              </View>
              <Text style={styles.itineraryText}>Llegada a Tokyo - Shibuya</Text>
            </View>
            
            <View style={styles.itineraryItem}>
              <View style={styles.dayBadge}>
                <Text style={styles.dayText}>Day 2</Text>
              </View>
              <Text style={styles.itineraryText}>Asakusa - Senso-ji Temple</Text>
            </View>
            
            <View style={styles.itineraryItem}>
              <View style={styles.dayBadge}>
                <Text style={styles.dayText}>Day 3</Text>
              </View>
              <Text style={styles.itineraryText}>Excursión Monte Fuji</Text>
            </View>
          </>
        )}

        <View style={styles.bottomSpacer} />
      </Animated.ScrollView>

      <Animated.View
        style={[
          styles.floatingBar,
          {
            transform: [{ translateY: barTranslate }],
            opacity: barOpacity,
          },
        ]}
      >
        <Pressable onPress={() => console.log("Copy trip")} accessibilityRole="button">
          <View style={styles.actionItem}>
            <View style={[styles.actionButton, styles.actionCopy]}>
              {source === "my" ? (
                <Pencil size={18} color="#1E1E1E" />
              ) : (
                <Copy size={18} color="#1E1E1E" />
              )}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => console.log("Like trip")} accessibilityRole="button">
          <View style={styles.actionItem}>
            <View style={[styles.actionButton, styles.actionLike]}>
              <Heart size={18} color="#1E1E1E" />
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => console.log("Ask creator")} accessibilityRole="button">
          <View style={styles.actionItem}>
            <View style={[styles.actionButton, styles.actionAsk]}>
              <MessageCircle size={18} color="#1E1E1E" />
            </View>
          </View>
        </Pressable>
      </Animated.View>
    </View>
  );
}
