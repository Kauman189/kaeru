import React, { useEffect, useMemo, useRef, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AtSign, Instagram, Twitter, User } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import styles from "./ProfileScreen.styles";
import { supabase } from "../lib/supabase";
import { getProfileById, getProfilesByIds } from "../services/profiles.service";
import { getTripsByOwner } from "../services/trips.service";

type ProfileScreenProps = {
  onTabBarVisibilityChange?: (visible: boolean) => void;
  isOwnProfile?: boolean;
};

export default function ProfileScreen({
  onTabBarVisibilityChange,
  isOwnProfile = true,
}: ProfileScreenProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const scrollY = useRef(new Animated.Value(0)).current;
  const lastScrollY = useRef(0);
  const barVisibleRef = useRef(true);
  const [activeTab, setActiveTab] = useState<"trips" | "badges" | "friends">(
    "trips"
  );
  const tabAnim = useRef(new Animated.Value(1)).current;
  const actionLabel = isOwnProfile ? "Edit" : "Follow +";
  const [displayName, setDisplayName] = useState("Tu nombre");
  const [displayBio, setDisplayBio] = useState("Aun no has añadido una bio.");
  const [friends, setFriends] = useState<{ id: string; name: string }[]>([]);
  const [badges, setBadges] = useState<{ id: string; label: string }[]>([]);
  const [trips, setTrips] = useState<
    { id: string; title: string; budget: string | null }[]
  >([]);
  const [likesCount, setLikesCount] = useState(0);
  const [followersCount, setFollowersCount] = useState(0);
  const tabContent = useMemo(() => {
    if (activeTab === "badges") {
      return (
        <View style={styles.badgesGrid}>
          {badges.length === 0 ? (
            <Text style={styles.sectionEmpty}>Actualmente no tienes insignias.</Text>
          ) : (
            badges.map((badge) => (
              <View key={badge.id} style={styles.badgeItem}>
                <View style={styles.badgeIcon} />
                <Text style={styles.badgeText}>{badge.label}</Text>
              </View>
            ))
          )}
        </View>
      );
    }

    if (activeTab === "friends") {
      return (
        <View style={styles.friendsGrid}>
          {friends.length === 0 ? (
            <Text style={styles.sectionEmpty}>Actualmente no sigues a nadie.</Text>
          ) : (
            friends.map((friend) => (
              <View key={friend.id} style={styles.friendItem}>
                <View style={styles.friendAvatar}>
                  <User size={18} color="#6B7280" />
                </View>
                <Text style={styles.friendName}>{friend.name}</Text>
              </View>
            ))
          )}
        </View>
      );
    }

    if (trips.length === 0) {
      return <Text style={styles.sectionEmpty}>Actualmente no tienes viajes.</Text>;
    }

    const trip = trips[0];
    return (
      <View style={styles.tripCard}>
        <View style={styles.tripInfo}>
          <Text style={styles.tripTitle}>{trip.title}</Text>
          <View style={styles.tripMetaRow}>
            <Text style={styles.tripMeta}>{trip.budget || "-"}</Text>
            <View style={styles.tripDot} />
            <Text style={styles.tripMeta}>0 puntos</Text>
          </View>
        </View>
        <View style={styles.tripImage}>
          <View style={styles.tripImageInner} />
        </View>
      </View>
    );
  }, [activeTab, badges, friends, trips]);

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

  useEffect(() => {
    const loadProfile = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return;
      try {
        const profile = await getProfileById(userData.user.id);
        setDisplayName(profile.full_name || profile.username || "Tu nombre");
        setDisplayBio(profile.bio || "Aun no has añadido una bio.");
      } catch (error) {
        setDisplayName("Tu nombre");
      }
    };

    loadProfile();
  }, []);

  useEffect(() => {
    const loadTrips = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return;
      try {
        const data = await getTripsByOwner(userData.user.id);
        setTrips(
          data.map((trip) => ({
            id: trip.id,
            title: trip.title,
            budget: trip.estimated_budget_text || null,
          }))
        );
      } catch (error) {
        setTrips([]);
      }
    };

    loadTrips();
  }, []);

  useEffect(() => {
    const loadBadges = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return;
      const { data, error } = await supabase
        .from("user_badges")
        .select("badge:badges(id,label)")
        .eq("user_id", userData.user.id);
      if (!error && data) {
        setBadges(
          data
            .map((row: any) => row.badge)
            .filter(Boolean)
            .map((badge: any) => ({ id: badge.id, label: badge.label }))
        );
      } else {
        setBadges([]);
      }
    };

    loadBadges();
  }, []);

  useEffect(() => {
    const loadFriendsAndFollowers = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return;
      const { data, error } = await supabase
        .from("follows")
        .select("following_id")
        .eq("follower_id", userData.user.id);
      if (error || !data) {
        setFriends([]);
      } else {
        const profiles = await getProfilesByIds(
          data.map((row: any) => row.following_id)
        );
        setFriends(
          profiles.map((profile) => ({
            id: profile.id,
            name: profile.full_name || profile.username || "Sin nombre",
          }))
        );
      }

      const { count } = await supabase
        .from("follows")
        .select("*", { count: "exact", head: true })
        .eq("following_id", userData.user.id);
      setFollowersCount(count || 0);
    };

    loadFriendsAndFollowers();
  }, []);

  useEffect(() => {
    const loadLikesCount = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return;
      const { data, error } = await supabase
        .from("trips")
        .select("id")
        .eq("owner_id", userData.user.id);
      if (error || !data || data.length === 0) {
        setLikesCount(0);
        return;
      }
      const tripIds = data.map((row: any) => row.id);
      const { count } = await supabase
        .from("trip_likes")
        .select("*", { count: "exact", head: true })
        .in("trip_id", tripIds);
      setLikesCount(count || 0);
    };

    loadLikesCount();
  }, []);

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
                <Text style={styles.statValue}>{likesCount}</Text>
                <Text style={styles.statLabel}>Likes</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{trips.length}</Text>
                <Text style={styles.statLabel}>Trips</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{followersCount}</Text>
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
