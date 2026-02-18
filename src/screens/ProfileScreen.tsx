import React, { useEffect, useMemo, useRef, useState } from "react";
import { Animated, Image, Linking, RefreshControl, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AtSign, Instagram, Settings, Twitter, User } from "lucide-react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import styles from "./ProfileScreen.styles";
import { supabase } from "../lib/supabase";
import { getProfileById } from "../services/profiles.service";
import { getTripsByOwner } from "../services/trips.service";
import AsyncStateView from "../components/AsyncStateView";

type ProfileScreenProps = {
  onTabBarVisibilityChange?: (visible: boolean) => void;
  isOwnProfile?: boolean;
};

const BADGE_ICON_BY_LABEL: Record<string, string> = {
  "Primer viaje":
    "https://imagedelivery.net/KDDQj0cyVxgL0U8f_B7cQQ/39121b-medal/dynamic/200/color.webp",
  "5 viajes":
    "https://imagedelivery.net/KDDQj0cyVxgL0U8f_B7cQQ/744cc0-rocket/dynamic/200/color.webp",
  "10 me gusta":
    "https://imagedelivery.net/KDDQj0cyVxgL0U8f_B7cQQ/4e7918-thumb-up/dynamic/200/color.webp",
  "10 seguidores":
    "https://imagedelivery.net/KDDQj0cyVxgL0U8f_B7cQQ/f0f795-chat-text/dynamic/200/color.webp",
  Foodie:
    "https://imagedelivery.net/KDDQj0cyVxgL0U8f_B7cQQ/200404-party-popper/dynamic/200/color.webp",
  Popular:
    "https://imagedelivery.net/KDDQj0cyVxgL0U8f_B7cQQ/4e7918-thumb-up/dynamic/200/color.webp",
  "Explorador urbano":
    "https://imagedelivery.net/KDDQj0cyVxgL0U8f_B7cQQ/744cc0-rocket/dynamic/200/color.webp",
};

const BADGE_FALLBACK_ICON =
  "https://imagedelivery.net/KDDQj0cyVxgL0U8f_B7cQQ/39121b-medal/dynamic/200/color.webp";

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
  const actionLabel = isOwnProfile ? "Editar" : "Seguir +";
  const [displayName, setDisplayName] = useState("Tu nombre");
  const [displayBio, setDisplayBio] = useState("Aun no has añadido una bio.");
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [bannerUrl, setBannerUrl] = useState<string | null>(null);
  const [instagramUrl, setInstagramUrl] = useState<string | null>(null);
  const [twitterUrl, setTwitterUrl] = useState<string | null>(null);
  const [threadsUrl, setThreadsUrl] = useState<string | null>(null);
  const [badges, setBadges] = useState<{ id: string; label: string }[]>([]);
  const [trips, setTrips] = useState<
    { id: string; title: string; budget: string | null }[]
  >([]);
  const [likesCount, setLikesCount] = useState(0);
  const [followersCount, setFollowersCount] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [failedBadgeIcons, setFailedBadgeIcons] = useState<Record<string, boolean>>({});
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  const [profileError, setProfileError] = useState<string | null>(null);
  const [hasSession, setHasSession] = useState(true);
  const computedBadges = useMemo(() => {
    const autoBadges: { id: string; label: string }[] = [];
    if (trips.length >= 1) autoBadges.push({ id: "auto-first-trip", label: "Primer viaje" });
    if (trips.length >= 5) autoBadges.push({ id: "auto-five-trips", label: "5 viajes" });
    if (likesCount >= 10) autoBadges.push({ id: "auto-10-likes", label: "10 me gusta" });
    if (followersCount >= 10) autoBadges.push({ id: "auto-10-followers", label: "10 seguidores" });
    const merged = [...badges, ...autoBadges];
    if (merged.length === 0) {
      return [{ id: "auto-welcome", label: "Cuenta activa" }];
    }
    return merged;
  }, [badges, followersCount, likesCount, trips.length]);

  const getBadgeEmoji = (label: string) => {
    if (label.includes("viaje")) return "🧳";
    if (label.includes("me gusta")) return "❤️";
    if (label.includes("seguidores")) return "👥";
    if (label.includes("Food")) return "🍽️";
    return "🏅";
  };
  const tabContent = useMemo(() => {
    if (activeTab === "badges") {
      return (
        <View style={styles.badgesGrid}>
          {computedBadges.map((badge) => (
            <View key={badge.id} style={styles.badgeItem}>
              <View style={styles.badgeIcon}>
                {!failedBadgeIcons[badge.id] ? (
                  <Image
                    source={{ uri: BADGE_ICON_BY_LABEL[badge.label] || BADGE_FALLBACK_ICON }}
                    style={styles.badgeIconImage}
                    onError={() =>
                      setFailedBadgeIcons((prev) => ({ ...prev, [badge.id]: true }))
                    }
                  />
                ) : (
                  <Text style={styles.badgeEmoji}>{getBadgeEmoji(badge.label)}</Text>
                )}
              </View>
              <Text style={styles.badgeText}>{badge.label}</Text>
            </View>
          ))}
        </View>
      );
    }

    if (activeTab === "friends") {
      return (
        <View style={styles.friendsGrid}>
          <Text style={styles.sectionEmpty}>
            La sección de amigos se activará en una próxima versión.
          </Text>
        </View>
      );
    }

    if (trips.length === 0) {
      return <Text style={styles.sectionEmpty}>Actualmente no tienes viajes.</Text>;
    }

    return (
      <View style={styles.tripList}>
        {trips.map((trip) => (
          <View style={styles.tripCard} key={trip.id}>
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
        ))}
      </View>
    );
  }, [activeTab, computedBadges, trips]);

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

  const loadAllProfileData = React.useCallback(async () => {
    setProfileError(null);
    setIsLoadingProfile(true);
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) {
      setHasSession(false);
      setProfileError("No se ha encontrado una sesión activa.");
      setIsLoadingProfile(false);
      return;
    }
    setHasSession(true);

    const userId = userData.user.id;

    try {
      const profile = await getProfileById(userId);
      setDisplayName(profile.full_name || profile.username || "Tu nombre");
      setDisplayBio(profile.bio || "Aun no has añadido una bio.");
      setAvatarUrl(profile.avatar_url || null);
      setBannerUrl(profile.banner_url || null);
      setInstagramUrl(profile.instagram_url || null);
      setTwitterUrl(profile.twitter_url || null);
      setThreadsUrl(profile.threads_url || null);
    } catch (error) {
      setDisplayName("Tu nombre");
      setProfileError("No se pudo cargar el perfil.");
    }

    try {
      const data = await getTripsByOwner(userId);
      setTrips(
        data.map((trip) => ({
          id: trip.id,
          title: trip.title,
          budget: trip.estimated_budget_text || null,
        }))
      );

      if (data.length > 0) {
        const tripIds = data.map((row) => row.id);
        const { count } = await supabase
          .from("trip_likes")
          .select("*", { count: "exact", head: true })
          .in("trip_id", tripIds);
        setLikesCount(count || 0);
      } else {
        setLikesCount(0);
      }
    } catch (error) {
      setTrips([]);
      setLikesCount(0);
      setProfileError((prev) => prev || "No se pudieron cargar tus viajes.");
    }

    try {
      const { data, error } = await supabase
        .from("user_badges")
        .select("badge:badges(id,label)")
        .eq("user_id", userId);
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
    } catch (error) {
      setBadges([]);
      setProfileError((prev) => prev || "No se pudieron cargar tus insignias.");
    }

    try {
      const { data, error } = await supabase
        .from("follows")
        .select("following_id")
        .eq("follower_id", userId);
      if (error || !data) {
        // Ignoro este error porque en esta versión la pestaña de amigos es placeholder.
      }

      const { count } = await supabase
        .from("follows")
        .select("*", { count: "exact", head: true })
        .eq("following_id", userId);
      setFollowersCount(count || 0);
    } catch (error) {
      setFollowersCount(0);
      setProfileError((prev) => prev || "No se pudieron cargar tus seguidores.");
    }
    setIsLoadingProfile(false);
  }, []);

  useEffect(() => {
    loadAllProfileData();
  }, [loadAllProfileData]);

  useFocusEffect(
    React.useCallback(() => {
      loadAllProfileData();
      return undefined;
    }, [loadAllProfileData])
  );

  const handleRefresh = React.useCallback(async () => {
    setIsRefreshing(true);
    await loadAllProfileData();
    setIsRefreshing(false);
  }, [loadAllProfileData]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={["top"]}>
        {!isLoadingProfile && !hasSession ? (
          <View style={styles.guestBlockedCard}>
            <Text style={styles.guestBlockedTitle}>Inicia sesión para ver tu perfil</Text>
            <Text style={styles.guestBlockedText}>
              Necesitas una cuenta para acceder a Perfil y gestionar tus viajes.
            </Text>
            <TouchableOpacity
              style={styles.guestBlockedButton}
              onPress={() => navigation.navigate("Auth", { redirectTo: "profile" })}
            >
              <Text style={styles.guestBlockedButtonText}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>
        ) : null}
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} tintColor="#1E1E1E" />
          }
        >
          <View style={styles.card}>
            <View style={styles.cover}>
              {bannerUrl ? (
                <Image source={{ uri: bannerUrl }} style={styles.coverImage} />
              ) : (
                <>
                  <View style={[styles.coverCloud, { top: 24, left: 24, width: 90, height: 40 }]} />
                  <View
                    style={[styles.coverCloud, { top: 40, right: 30, width: 120, height: 50 }]}
                  />
                </>
              )}
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
                {avatarUrl ? (
                  <Image source={{ uri: avatarUrl }} style={styles.avatarImage} />
                ) : (
                  <User size={34} color="#6B7280" />
                )}
              </View>
              {isOwnProfile ? (
                <TouchableOpacity
                  style={styles.settingsButton}
                  onPress={() => navigation.navigate("Settings")}
                  accessibilityRole="button"
                >
                  <Settings size={16} color="#1E1E1E" />
                </TouchableOpacity>
              ) : null}
            </View>

            <Text style={styles.name}>{displayName}</Text>
            <Text style={styles.bio}>{displayBio}</Text>

            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{likesCount}</Text>
                <Text style={styles.statLabel}>Me gusta</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{trips.length}</Text>
                <Text style={styles.statLabel}>Viajes</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{followersCount}</Text>
                <Text style={styles.statLabel}>Seguidores</Text>
              </View>
            </View>

            <View style={styles.socialsRow}>
              <TouchableOpacity
                style={styles.socialItem}
                disabled={!instagramUrl}
                onPress={() => instagramUrl && Linking.openURL(instagramUrl)}
              >
                <Instagram size={18} color="#1E1E1E" />
              </TouchableOpacity>
              <View style={styles.socialDivider} />
              <TouchableOpacity
                style={styles.socialItem}
                disabled={!twitterUrl}
                onPress={() => twitterUrl && Linking.openURL(twitterUrl)}
              >
                <Twitter size={18} color="#1E1E1E" />
              </TouchableOpacity>
              <View style={styles.socialDivider} />
              <TouchableOpacity
                style={styles.socialItem}
                disabled={!threadsUrl}
                onPress={() => threadsUrl && Linking.openURL(threadsUrl)}
              >
                <AtSign size={18} color="#1E1E1E" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.section}>
            {isLoadingProfile || profileError ? (
              <AsyncStateView
                isLoading={isLoadingProfile}
                error={profileError}
                onRetry={handleRefresh}
                loadingText="Cargando perfil..."
              />
            ) : null}
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
                  Viajes
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
                  Insignias
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
                  Amigos
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
