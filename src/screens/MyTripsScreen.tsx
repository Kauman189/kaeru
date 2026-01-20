import React, { useEffect, useMemo, useRef } from "react";
import {
  Animated,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Mic, Plus, SlidersHorizontal, User } from "lucide-react-native";
import styles from "./MyTripsScreen.styles";
import TripCard, { TripData } from "../components/TripCard";
import { useTrips } from "../store/tripsContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";

type MyTripsScreenProps = {
  onTabBarVisibilityChange?: (visible: boolean) => void;
};

export default function MyTripsScreen({ onTabBarVisibilityChange }: MyTripsScreenProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { trips } = useTrips();
  const scrollY = useRef(new Animated.Value(0)).current;
  const lastScrollY = useRef(0);
  const barVisibleRef = useRef(true);

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
            <View style={styles.avatarContainer}>
              <User size={28} color="#4B5563" />
            </View>
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
        <Plus size={28} color="#1E1E1E" />
      </TouchableOpacity>

    </View>
  );
}
