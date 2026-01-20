import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
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
import { useTrips } from "../store/tripsContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { MOCK_USERS } from "../mock/users";

type MyTripsScreenProps = {
  onTabBarVisibilityChange?: (visible: boolean) => void;
};

export default function MyTripsScreen({ onTabBarVisibilityChange }: MyTripsScreenProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { trips, addCollaborator, removeCollaborator } = useTrips();
  const [inviteVisible, setInviteVisible] = useState(false);
  const [invitedIds, setInvitedIds] = useState<string[]>([]);
  const [selectedTripId, setSelectedTripId] = useState<string | null>(null);
  const scrollY = useRef(new Animated.Value(0)).current;
  const lastScrollY = useRef(0);
  const barVisibleRef = useRef(true);
  const mockUsers = MOCK_USERS;

  const tripCards = useMemo<TripData[]>(() => {
    return trips.map((trip) => ({
      id: trip.id,
      title: trip.title,
      price: trip.budget,
      points: `${trip.stops.length} points`,
      tags: trip.tags.length ? trip.tags : ["City Tourism"],
    }));
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
    if (!selectedTripId && trips.length > 0) {
      setSelectedTripId(trips[0].id);
    }
  }, [selectedTripId, trips]);

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

          {tripCards.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>
                Theres no trips right now you can create a new one{"\n"}
                clicking the + icon
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
                  Create a trip before inviting collaborators.
                </Text>
              </View>
            )}
            <View style={styles.inviteList}>
              {mockUsers.map((user) => {
                const invited = invitedIds.includes(user.id);
                const assigned =
                  selectedTripId &&
                  trips.find((trip) => trip.id === selectedTripId)?.collaborators.includes(user.id);
                return (
                  <View key={user.id} style={styles.inviteRow}>
                    <View
                      style={[
                        styles.inviteAvatar,
                        { backgroundColor: user.avatarColor },
                      ]}
                    >
                      <Text style={styles.inviteAvatarText}>{user.initials}</Text>
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
                          setInvitedIds((prev) => prev.filter((id) => id !== user.id));
                          return;
                        }
                        addCollaborator(selectedTripId, user.id);
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
                        {assigned ? "Remove" : invited ? "Sent" : "Invite"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
            <View style={styles.inviteActionsRow}>
              <TouchableOpacity
                style={styles.inviteSecondary}
                onPress={() => setInviteVisible(false)}
                accessibilityRole="button"
              >
                <Text style={styles.inviteSecondaryText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.invitePrimary}
                onPress={() => setInviteVisible(false)}
                accessibilityRole="button"
              >
                <Text style={styles.invitePrimaryText}>Invite more</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
