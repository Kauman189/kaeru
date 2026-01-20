import React, { useEffect, useMemo, useRef, useState } from "react";
import { Animated, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AtSign, Instagram, Twitter, User } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { useProfile } from "../store/profileContext";
import styles from "./ProfileScreen.styles";

type ProfileScreenProps = {
  onTabBarVisibilityChange?: (visible: boolean) => void;
  isOwnProfile?: boolean;
};

export default function ProfileScreen({
  onTabBarVisibilityChange,
  isOwnProfile = true,
}: ProfileScreenProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { profile } = useProfile();
  const scrollY = useRef(new Animated.Value(0)).current;
  const lastScrollY = useRef(0);
  const barVisibleRef = useRef(true);
  const [activeTab, setActiveTab] = useState<"trips" | "badges" | "friends">(
    "trips"
  );
  const tabAnim = useRef(new Animated.Value(1)).current;
  const actionLabel = isOwnProfile ? "Edit" : "Follow +";
  const displayName = profile.name || "Noah Thompson";
  const displayBio =
    profile.bio || "Product Designer who focuses on simplicity & usability.";
  const friends = [
    { id: "1", name: "Maya Costa" },
    { id: "2", name: "Leo Park" },
    { id: "3", name: "Ava Ruiz" },
    { id: "4", name: "Noah Kim" },
  ];
  const badges = [
    { id: "1", label: "City Expert" },
    { id: "2", label: "Food Hunter" },
    { id: "3", label: "Weekend Pro" },
    { id: "4", label: "Solo Spark" },
  ];
  const tabContent = useMemo(() => {
    if (activeTab === "badges") {
      return (
        <View style={styles.badgesGrid}>
          {badges.map((badge) => (
            <View key={badge.id} style={styles.badgeItem}>
              <View style={styles.badgeIcon} />
              <Text style={styles.badgeText}>{badge.label}</Text>
            </View>
          ))}
        </View>
      );
    }

    if (activeTab === "friends") {
      return (
        <View style={styles.friendsGrid}>
          {friends.map((friend) => (
            <View key={friend.id} style={styles.friendItem}>
              <View style={styles.friendAvatar}>
                <User size={18} color="#6B7280" />
              </View>
              <Text style={styles.friendName}>{friend.name}</Text>
            </View>
          ))}
        </View>
      );
    }

    return (
      <View style={styles.tripCard}>
        <View style={styles.tripInfo}>
          <Text style={styles.tripTitle}>Trip to Tokyo 5 days</Text>
          <View style={styles.tripMetaRow}>
            <Text style={styles.tripMeta}>$600 avg</Text>
            <View style={styles.tripDot} />
            <Text style={styles.tripMeta}>5 points</Text>
          </View>
          <View style={styles.tripChipsRow}>
            <View style={styles.tripChip}>
              <Text style={styles.tripChipText}>2-4 Friends</Text>
            </View>
            <View style={[styles.tripChip, styles.tripChipCity]}>
              <Text style={styles.tripChipText}>City Tourism</Text>
            </View>
            <View style={[styles.tripChip, styles.tripChipFood]}>
              <Text style={styles.tripChipText}>Foodie</Text>
            </View>
          </View>
        </View>
        <View style={styles.tripImage}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=400&q=80",
            }}
            style={styles.tripImageInner}
          />
        </View>
      </View>
    );
  }, [activeTab, badges, friends]);

  const handleTabPress = (tab: "trips" | "badges" | "friends") => {
    if (tab === activeTab) return;
    Animated.sequence([
      Animated.timing(tabAnim, {
        toValue: 0,
        duration: 120,
        useNativeDriver: true,
      }),
      Animated.timing(tabAnim, {
        toValue: 1,
        duration: 180,
        useNativeDriver: true,
      }),
    ]).start();
    setActiveTab(tab);
  };

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
      <SafeAreaView style={styles.safeArea} edges={["top"]}>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <View style={styles.card}>
            <View style={styles.cover}>
              <View style={[styles.coverCloud, { top: 24, left: 24, width: 90, height: 40 }]} />
              <View
                style={[styles.coverCloud, { top: 40, right: 30, width: 120, height: 50 }]}
              />
              <TouchableOpacity
                style={styles.followButton}
                accessibilityRole="button"
                onPress={() => {
                  if (isOwnProfile) {
                    navigation.navigate("ProfileEdit");
                  }
                }}
              >
                <Text style={styles.followText}>{actionLabel}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.avatarWrap}>
              <View style={styles.avatar}>
                <User size={34} color="#6B7280" />
              </View>
            </View>

            <Text style={styles.name}>{displayName}</Text>
            <Text style={styles.bio}>{displayBio}</Text>

            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>72.9K</Text>
                <Text style={styles.statLabel}>Likes</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>828</Text>
                <Text style={styles.statLabel}>Trips</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>342.9K</Text>
                <Text style={styles.statLabel}>Followers</Text>
              </View>
            </View>

            <View style={styles.socialsRow}>
              <View style={styles.socialItem}>
                <Instagram size={18} color="#1E1E1E" />
              </View>
              <View style={styles.socialDivider} />
              <View style={styles.socialItem}>
                <Twitter size={18} color="#1E1E1E" />
              </View>
              <View style={styles.socialDivider} />
              <View style={styles.socialItem}>
                <AtSign size={18} color="#1E1E1E" />
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionTabs}>
              <TouchableOpacity
                style={[
                  styles.sectionTab,
                  activeTab === "trips" && styles.sectionTabActive,
                ]}
                onPress={() => handleTabPress("trips")}
                accessibilityRole="button"
              >
                <Text
                  style={[
                    styles.sectionTabText,
                    activeTab === "trips" && styles.sectionTabTextActive,
                  ]}
                >
                  Trips
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.sectionTab,
                  activeTab === "badges" && styles.sectionTabActive,
                ]}
                onPress={() => handleTabPress("badges")}
                accessibilityRole="button"
              >
                <Text
                  style={[
                    styles.sectionTabText,
                    activeTab === "badges" && styles.sectionTabTextActive,
                  ]}
                >
                  Badges
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.sectionTab,
                  activeTab === "friends" && styles.sectionTabActive,
                ]}
                onPress={() => handleTabPress("friends")}
                accessibilityRole="button"
              >
                <Text
                  style={[
                    styles.sectionTabText,
                    activeTab === "friends" && styles.sectionTabTextActive,
                  ]}
                >
                  Friends
                </Text>
              </TouchableOpacity>
            </View>

            <Animated.View
              style={[
                styles.sectionContent,
                {
                  opacity: tabAnim,
                  transform: [
                    {
                      translateY: tabAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [8, 0],
                      }),
                    },
                  ],
                },
              ]}
            >
              {tabContent}
            </Animated.View>
          </View>
        </Animated.ScrollView>
      </SafeAreaView>
    </View>
  );
}
