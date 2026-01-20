import React, { useEffect, useRef } from "react";
import {
  Animated,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { User, Mic, SlidersHorizontal } from "lucide-react-native";
import TripCard, { TripData } from "../components/TripCard";
import styles from "./HomeScreen.styles";
import { RootStackParamList } from "../navigation/RootNavigator";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const TRIPS: TripData[] = [
  {
    id: "1",
    title: "Tokyo in 5 days",
    price: "$620 avg",
    points: "8 points",
    tags: ["2-4 Friends", "City Tourism", "Foodie"],
    authorId: "user1",
  },
  {
    id: "2",
    title: "Sevilla Food Weekend",
    price: "$280 avg",
    points: "4 points",
    tags: ["Couple", "City Tourism", "Food Tour"],
    authorId: "user2",
  },
  {
    id: "3",
    title: "Alps Hike 3 days",
    price: "$420 avg",
    points: "6 points",
    tags: ["2-4 Friends", "Adventure", "Nature"],
    authorId: "user3",
  },
  {
    id: "4",
    title: "Lisbon Culture Sprint",
    price: "$350 avg",
    points: "5 points",
    tags: ["Solo", "Cultural", "City Tourism"],
    authorId: "user4",
  },
];

const FILTERS = ["2-4 Friends", "< 600 $"];

type HomeScreenProps = {
  onTabBarVisibilityChange?: (visible: boolean) => void;
};

export default function HomeScreen({ onTabBarVisibilityChange }: HomeScreenProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const scrollY = useRef(new Animated.Value(0)).current;
  const lastScrollY = useRef(0);
  const barVisibleRef = useRef(true);

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

  const getFilterVariant = (filter: string) => {
    const lower = filter.toLowerCase();
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

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea} edges={['top']}>
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

          <View style={styles.discoverHeader}>
            <View style={styles.discoverLeft}>
              <Text style={styles.discoverTitle}>Discover</Text>
              {FILTERS.map((filter, index) => (
                <View
                  key={index}
                  style={[
                    styles.filterChip,
                    getFilterVariant(filter) === "people" && styles.filterChipPeople,
                    getFilterVariant(filter) === "tourism" && styles.filterChipTourism,
                    getFilterVariant(filter) === "food" && styles.filterChipFood,
                    getFilterVariant(filter) === "default" && styles.filterChipDefault,
                  ]}
                >
                  <Text
                    style={[
                      styles.filterText,
                      getFilterVariant(filter) === "default"
                        ? styles.filterTextMuted
                        : styles.filterTextDark,
                    ]}
                  >
                    {filter}
                  </Text>
                </View>
              ))}
            </View>
            <TouchableOpacity style={styles.filterButton}>
              <SlidersHorizontal size={20} color="#4B5563" />
              <View style={styles.filterBadge}>
                <Text style={styles.filterBadgeText}>2</Text>
              </View>
            </TouchableOpacity>
          </View>

          {TRIPS.map((trip, index) => (
            <TripCard
              key={trip.id}
              trip={trip}
              showAuthor={index === 0}
              onPress={() => navigation.navigate("TripDetail", { source: "discover" })}
            />
          ))}

          <View style={styles.bottomSpacer} />
        </Animated.ScrollView>
      </SafeAreaView>

      <View style={styles.bottomGradient} pointerEvents="none">
        <View style={[styles.gradientLayer, { opacity: 0 }]} />
        <View style={[styles.gradientLayer, { opacity: 0.3 }]} />
        <View style={[styles.gradientLayer, { opacity: 0.5 }]} />
        <View style={[styles.gradientLayer, { opacity: 0.7 }]} />
        <View style={[styles.gradientLayer, { opacity: 0.85 }]} />
        <View style={[styles.gradientLayer, { opacity: 1 }]} />
      </View>

    </View>
  );
}
