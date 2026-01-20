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
import { Mic, Plus, SlidersHorizontal, User } from "lucide-react-native";
import styles from "./MyTripsScreen.styles";

type MyTripsScreenProps = {
  onTabBarVisibilityChange?: (visible: boolean) => void;
};

export default function MyTripsScreen({ onTabBarVisibilityChange }: MyTripsScreenProps) {
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

          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>
              Theres no trips right now you can create a new one{"\n"}
              clicking the + icon
            </Text>
          </View>
        </Animated.ScrollView>
      </SafeAreaView>

      <TouchableOpacity style={styles.floatingAdd} accessibilityRole="button">
        <Plus size={28} color="#1E1E1E" />
      </TouchableOpacity>

    </View>
  );
}
