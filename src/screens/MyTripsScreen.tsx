import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  Share,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Mic, Plus, SlidersHorizontal, Share2, Send } from "lucide-react-native";
import styles from "./MyTripsScreen.styles";
import TripCard, { TripData } from "../components/TripCard";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { supabase } from "../lib/supabase";
import { getProfiles } from "../services/profiles.service";
import {
  getTripCollaborators,
  getTripsByOwner,
  inviteCollaborator,
  removeCollaborator,
} from "../services/trips.service";

type MyTripsScreenProps = {
  onTabBarVisibilityChange?: (visible: boolean) => void;
};

export default function MyTripsScreen({ onTabBarVisibilityChange }: MyTripsScreenProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [trips, setTrips] = useState<TripData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [profiles, setProfiles] = useState<
    { id: string; name: string; avatarUrl: string | null }[]
  >([]);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [selectedTripCollaborators, setSelectedTripCollaborators] = useState<string[]>([]);
  const [inviteVisible, setInviteVisible] = useState(false);
  const [invitedIds, setInvitedIds] = useState<string[]>([]);
  const [selectedTripId, setSelectedTripId] = useState<string | null>(null);
  const scrollY = useRef(new Animated.Value(0)).current;
  const lastScrollY = useRef(0);
  const barVisibleRef = useRef(true);
  const mockUsers = profiles.filter((profile) => profile.name.trim().length > 0);

  const tripCards = useMemo<TripData[]>(() => {
    return trips;
  }, [trips]);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: false,
      listener: (event: any) => {
        const currentY = event.nativeEvent.contentOffset.y;
        if (currentY > lastScrollY.current && currentY > 50) {
          if (barVisibleRef.current) {
            barVisibleRef.current = false;
            onTabBarVisibilityChange?.(false);
          }
        } else if (currentY < lastScrollY.current) {
          if (!barVisibleRef.current) {
            barVisibleRef.current = true;
            onTabBarVisibilityChange?.(true);
          }
        }
        lastScrollY.current = currentY;
      },
    }
  );

  useEffect(() => {
    onTabBarVisibilityChange?.(true);
  }, [onTabBarVisibilityChange]);

  useEffect(() => {
    const loadTrips = async () => {
      setIsLoading(true);
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) {
        setTrips([]);
        setIsLoading(false);
        return;
      }
      setCurrentUserId(userData.user.id);
      try {
        const data = await getTripsByOwner(userData.user.id);
        setTrips(
          data.map((trip) => ({
            id: trip.id,
            title: trip.title,
            price: trip.estimated_budget_text || "-",
            points: "0 puntos",
            tags: [],
          }))
        );
      } catch (error) {
        setTrips([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadTrips();
  }, []);

  useEffect(() => {
    if (!selectedTripId && trips.length > 0) {
      setSelectedTripId(trips[0].id);
    }
  }, [selectedTripId, trips]);

  useEffect(() => {
    const loadProfiles = async () => {
      try {
        const data = await getProfiles();
        setProfiles(
          data
            .filter((profile) => profile.id !== currentUserId)
            .map((profile) => ({
              id: profile.id,
              name: (profile.full_name || profile.username || "").trim(),
              avatarUrl: profile.avatar_url,
            }))
        );
      } catch (error) {
        setProfiles([]);
      }
    };

    if (inviteVisible) {
      loadProfiles();
    }
  }, [inviteVisible, currentUserId]);

  const handleShareTrip = async () => {
    if (!selectedTripId) return;
    const trip = trips.find((item) => item.id === selectedTripId);
    const shareUrl = `https://kaeru.app/invite?trip=${selectedTripId}`;
    const message = `Te invito a colaborar en "${trip?.title || "Kaeru trip"}": ${shareUrl}`;
    try {
      await Share.share({ message, url: shareUrl });
    } catch (error) {
      // Ignore share errors for now.
    }
  };

  useEffect(() => {
    const loadCollaborators = async () => {
      if (!selectedTripId) {
        setSelectedTripCollaborators([]);
        return;
      }
      try {
        const data = await getTripCollaborators(selectedTripId);
        setSelectedTripCollaborators(data.map((item) => item.user_id));
      } catch (error) {
        setSelectedTripCollaborators([]);
      }
    };

    loadCollaborators();
  }, [selectedTripId]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea} edges={["top"]}>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Text style={styles.title}>Let's plan your</Text>
              <Text style={styles.title}>next trip</Text>
            </View>
            <TouchableOpacity
              style={styles.inviteButton}
              onPress={() => setInviteVisible(true)}
              accessibilityRole="button"
            >
              <Share2 size={22} color="#1E1E1E" />
            </TouchableOpacity>
          </View>

          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search preffer destination"
              placeholderTextColor="#9CA3AF"
            />
            <Mic size={20} color="#9CA3AF" />
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My trips</Text>
            <TouchableOpacity accessibilityRole="button">
              <SlidersHorizontal size={20} color="#4B5563" />
            </TouchableOpacity>
          </View>

          <View style={styles.sectionDivider} />

          {isLoading ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>Cargando tus viajes...</Text>
            </View>
          ) : tripCards.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>
                Actualmente no tienes viajes.{"\n"}Crea uno con el boton +.
              </Text>
            </View>
          ) : (
            tripCards.map((trip, index) => (
              <TripCard
                key={trip.id}
                trip={trip}
                showAuthor={index === 0}
                onPress={() =>
                  navigation.navigate("TripDetail", { tripId: trip.id, source: "my" })
                }
              />
            ))
          )}
        </Animated.ScrollView>
      </SafeAreaView>

      <TouchableOpacity
        style={styles.floatingAdd}
        accessibilityRole="button"
        onPress={() => navigation.navigate("CreateTrip")}
      >
        <Plus size={28} color="#fcfcfc" />
      </TouchableOpacity>

      {inviteVisible && (
        <View style={styles.inviteOverlay}>
          <View style={styles.inviteCard}>
            <Text style={styles.inviteTitle}>Invite collaborators</Text>
            <Text style={styles.inviteSubtitle}>
              Choose who can edit this trip with you.
            </Text>
            {trips.length > 0 ? (
              <View style={styles.inviteTripSelector}>
                {trips.map((trip) => {
                  const active = trip.id === selectedTripId;
                  return (
                    <TouchableOpacity
                      key={trip.id}
                      onPress={() => setSelectedTripId(trip.id)}
                      style={[
                        styles.inviteTripPill,
                        active && styles.inviteTripPillActive,
                      ]}
                      accessibilityRole="button"
                    >
                      <Text
                        style={[
                          styles.inviteTripText,
                          active && styles.inviteTripTextActive,
                        ]}
                        numberOfLines={1}
                      >
                        {trip.title}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : (
              <View style={styles.inviteEmpty}>
                <Text style={styles.inviteEmptyText}>
                  Crea un viaje antes de invitar colaboradores.
                </Text>
              </View>
            )}
            {selectedTripCollaborators.length > 0 && (
              <View style={styles.inviteCurrent}>
                <Text style={styles.inviteCurrentTitle}>Invitados actuales</Text>
                <View style={styles.inviteCurrentList}>
                  {mockUsers
                    .filter((user) => selectedTripCollaborators.includes(user.id))
                    .map((user) => (
                      <View key={user.id} style={styles.inviteCurrentItem}>
                        <View style={styles.inviteAvatar}>
                          <Text style={styles.inviteAvatarText}>
                            {user.name
                              .split(" ")
                              .slice(0, 2)
                              .map((chunk) => chunk[0])
                              .join("")
                              .toUpperCase()}
                          </Text>
                        </View>
                        <Text style={styles.inviteName}>{user.name}</Text>
                        <Text style={styles.inviteStatus}>Invitado</Text>
                      </View>
                    ))}
                </View>
              </View>
            )}
            {trips.length > 0 && (
              <View style={styles.inviteList}>
                {mockUsers.length === 0 ? (
                  <Text style={styles.inviteEmptyText}>
                    No hay usuarios disponibles para invitar.
                  </Text>
                ) : (
                  mockUsers.map((user) => {
                    const invited = invitedIds.includes(user.id);
                    const assigned = selectedTripCollaborators.includes(user.id);
                    return (
                      <View key={user.id} style={styles.inviteRow}>
                        <View
                          style={[
                            styles.inviteAvatar,
                            { backgroundColor: "#E5E7EB" },
                          ]}
                        >
                          <Text style={styles.inviteAvatarText}>
                            {user.name
                              .split(" ")
                              .slice(0, 2)
                              .map((chunk) => chunk[0])
                              .join("")
                              .toUpperCase()}
                          </Text>
                        </View>
                        <Text style={styles.inviteName}>{user.name}</Text>
                        <TouchableOpacity
                          style={[
                            styles.inviteAction,
                            (invited || assigned) && styles.inviteActionActive,
                          ]}
                          onPress={() => {
                            if (!selectedTripId) return;
                            if (assigned) {
                              removeCollaborator(selectedTripId, user.id);
                              setSelectedTripCollaborators((prev) =>
                                prev.filter((id) => id !== user.id)
                              );
                              return;
                            }
                            inviteCollaborator(selectedTripId, user.id);
                            setInvitedIds((prev) =>
                              prev.includes(user.id) ? prev : [...prev, user.id]
                            );
                          }}
                          accessibilityRole="button"
                        >
                          <Send
                            size={14}
                            color={invited || assigned ? "#FFFFFF" : "#1E1E1E"}
                          />
                          <Text
                            style={[
                              styles.inviteActionText,
                              (invited || assigned) && styles.inviteActionTextActive,
                            ]}
                          >
                            {assigned ? "Eliminar" : invited ? "Enviado" : "Invitar"}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    );
                  })
                )}
              </View>
            )}
            <View style={styles.inviteActionsRow}>
              <TouchableOpacity
                style={styles.inviteSecondary}
                onPress={() => setInviteVisible(false)}
                accessibilityRole="button"
              >
                <Text style={styles.inviteSecondaryText}>Cerrar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.invitePrimary}
                onPress={handleShareTrip}
                accessibilityRole="button"
              >
                <Text style={styles.invitePrimaryText}>Invitar con link</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
