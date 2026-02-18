import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  Modal,
  Pressable,
  RefreshControl,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { User, Mic, SlidersHorizontal, Bell } from "lucide-react-native";
import TripCard, { TripData } from "../components/TripCard";
import styles from "./HomeScreen.styles";
import { RootStackParamList } from "../navigation/RootNavigator";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useProfile } from "../store/profileContext";
import { getPublicTrips, getTripTags } from "../services/trips.service";
import { getProfileById } from "../services/profiles.service";
import { supabase } from "../lib/supabase";
import { t } from "../i18n";
import { toTagLabelEs } from "../utils/tagLabels";
import { getUnreadNotificationsCount } from "../services/notifications.service";
import { getCacheItem, setCacheItem } from "../storage/cacheStorage";
import AsyncStateView from "../components/AsyncStateView";

const TAG_FILTERS = [
  "Solo",
  "Couple",
  "2-4 Friends",
  "Family",
  "City Tourism",
  "Food Tour",
  "Adventure",
  "Cultural",
  "Nature",
];
const BUDGET_FILTERS = [
  t.discover.budgetLow,
  t.discover.budgetMid,
  t.discover.budgetHigh,
] as const;

type HomeScreenProps = {
  onTabBarVisibilityChange?: (visible: boolean) => void;
  onOpenProfile?: () => void;
};

type DiscoverTrip = TripData & {
  destination?: string | null;
};

export default function HomeScreen({ onTabBarVisibilityChange, onOpenProfile }: HomeScreenProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { needsProfileSetup, profileComplete, setNeedsProfileSetup } = useProfile();
  const [dismissedPrompt, setDismissedPrompt] = useState(false);
  const [trips, setTrips] = useState<DiscoverTrip[]>([]);
  const [query, setQuery] = useState("");
  const [appliedTags, setAppliedTags] = useState<string[]>([]);
  const [appliedBudget, setAppliedBudget] = useState<string | null>(null);
  const [draftTags, setDraftTags] = useState<string[]>([]);
  const [draftBudget, setDraftBudget] = useState<string | null>(null);
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [isLoadingAvatar, setIsLoadingAvatar] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [cacheNotice, setCacheNotice] = useState<string | null>(null);
  const [unreadNotifications, setUnreadNotifications] = useState(0);
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

  useEffect(() => {
    if (needsProfileSetup && !profileComplete) {
      setDismissedPrompt(false);
    }
  }, [needsProfileSetup, profileComplete]);

  const loadAvatar = React.useCallback(async () => {
    setIsLoadingAvatar(true);
    try {
      const { data: userData } = await supabase.auth.getUser();
      const userId = userData.user?.id;
      if (!userId) {
        setAvatarUrl(null);
        return;
      }
      const profile = await getProfileById(userId);
      setAvatarUrl(profile.avatar_url || null);
    } catch {
      setAvatarUrl(null);
    } finally {
      setIsLoadingAvatar(false);
    }
  }, []);

  const loadUnreadNotifications = React.useCallback(async () => {
    try {
      const count = await getUnreadNotificationsCount();
      setUnreadNotifications(count);
    } catch {
      setUnreadNotifications(0);
    }
  }, []);

  const loadPublicTrips = React.useCallback(async (options?: { silent?: boolean }) => {
    const silent = options?.silent ?? false;
    if (!silent) {
      setIsLoading(true);
    }
    setLoadError(null);
    setCacheNotice(null);
    try {
      const data = await getPublicTrips();
      const tagSets = await Promise.all(
        data.map(async (trip) => {
          try {
            return await getTripTags(trip.id);
          } catch {
            return [];
          }
        })
      );
      setTrips(
        data.map((trip, index) => ({
          id: trip.id,
          title: trip.title,
          price: trip.estimated_budget_text || "-",
          points: "0 puntos",
          tags: tagSets[index] || [],
          destination: trip.destination || null,
          imageUrl: trip.cover_image_url || undefined,
          authorId: trip.owner_id,
        }))
      );
      await setCacheItem("cache_discover_v1", data.map((trip, index) => ({
        id: trip.id,
        title: trip.title,
        price: trip.estimated_budget_text || "-",
        points: "0 puntos",
        tags: tagSets[index] || [],
        destination: trip.destination || null,
        imageUrl: trip.cover_image_url || undefined,
        authorId: trip.owner_id,
      })));
    } catch (error: any) {
      const cache = await getCacheItem<DiscoverTrip[]>("cache_discover_v1");
      if (cache?.payload?.length) {
        setTrips(cache.payload);
        setCacheNotice("Mostrando datos guardados por falta de conexión.");
      } else {
        setTrips([]);
        setLoadError(error?.message || "Error desconocido al cargar Descubrir.");
      }
    } finally {
      if (!silent) {
        setIsLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    loadPublicTrips();
    loadAvatar();
    loadUnreadNotifications();
  }, [loadPublicTrips, loadAvatar, loadUnreadNotifications]);

  useFocusEffect(
    React.useCallback(() => {
      loadPublicTrips({ silent: true });
      loadAvatar();
      loadUnreadNotifications();
    }, [loadPublicTrips, loadAvatar, loadUnreadNotifications])
  );

  const handleRefresh = React.useCallback(async () => {
    setIsRefreshing(true);
    try {
      await Promise.all([loadPublicTrips({ silent: true }), loadAvatar(), loadUnreadNotifications()]);
    } finally {
      setIsRefreshing(false);
    }
  }, [loadPublicTrips, loadAvatar, loadUnreadNotifications]);

  const getFilterVariant = (filter: string) => {
    const lower = filter.toLowerCase();
    if (
      lower.includes("friend") ||
      lower.includes("people") ||
      lower.includes("solo") ||
      lower.includes("couple") ||
      lower.includes("family")
    ) {
      return "people";
    }
    if (lower.includes("food")) {
      return "food";
    }
    if (
      lower.includes("tourism") ||
      lower.includes("city") ||
      lower.includes("cultural") ||
      lower.includes("adventure") ||
      lower.includes("nature")
    ) {
      return "tourism";
    }
    return "default";
  };

  const parseBudget = (value: string) => {
    const numeric = parseFloat(value.replace(",", ".").replace(/[^0-9.]/g, ""));
    return Number.isFinite(numeric) ? numeric : null;
  };

  const toggleDraftTag = (tag: string) => {
    setDraftTags((prev) => (prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]));
  };

  const applyFilters = () => {
    setAppliedTags(draftTags);
    setAppliedBudget(draftBudget);
    setIsFilterSheetOpen(false);
  };

  const clearFilters = () => {
    setDraftTags([]);
    setDraftBudget(null);
    setAppliedTags([]);
    setAppliedBudget(null);
  };

  const openFilters = () => {
    setDraftTags(appliedTags);
    setDraftBudget(appliedBudget);
    setIsFilterSheetOpen(true);
  };

  const activeFilterCount = appliedTags.length + (appliedBudget ? 1 : 0) + (query.trim() ? 1 : 0);

  const filteredTrips = trips.filter((trip) => {
    const normalizedQuery = query.trim().toLowerCase();
    if (normalizedQuery) {
      const translatedTags = trip.tags.map((tag) => toTagLabelEs(tag));
      const searchable = `${trip.title} ${trip.destination || ""} ${translatedTags.join(" ")} ${
        trip.tags.join(" ")
      }`.toLowerCase();
      if (!searchable.includes(normalizedQuery)) {
        return false;
      }
    }

    if (appliedTags.length > 0) {
      const tripTags = new Set(trip.tags.map((tag) => tag.toLowerCase()));
      const hasSelectedTag = appliedTags.some((tag) => tripTags.has(tag.toLowerCase()));
      if (!hasSelectedTag) {
        return false;
      }
    }

    if (appliedBudget) {
      const amount = parseBudget(trip.price);
      if (amount == null) return false;
      if (appliedBudget === t.discover.budgetLow && !(amount < 300)) return false;
      if (appliedBudget === t.discover.budgetMid && !(amount >= 300 && amount <= 600)) return false;
      if (appliedBudget === t.discover.budgetHigh && !(amount > 600)) return false;
    }

    return true;
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea} edges={["top"]}>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} tintColor="#2563EB" />}
        >
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Text style={styles.title}>{t.discover.headerLine1}</Text>
              <Text style={styles.title}>{t.discover.headerLine2}</Text>
            </View>
            <View style={styles.headerActions}>
              <TouchableOpacity
                style={styles.notifyButton}
                onPress={async () => {
                  const { data } = await supabase.auth.getUser();
                  if (!data.user) {
                    navigation.navigate("Auth", { redirectTo: "profile" });
                    return;
                  }
                  navigation.navigate("Notifications");
                }}
                accessibilityRole="button"
              >
                <Bell size={20} color="#374151" />
                {unreadNotifications > 0 ? (
                  <View style={styles.notifyBadge}>
                    <Text style={styles.notifyBadgeText}>{unreadNotifications > 9 ? "9+" : unreadNotifications}</Text>
                  </View>
                ) : null}
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.avatarContainer}
                onPress={async () => {
                  const { data } = await supabase.auth.getUser();
                  if (!data.user) {
                    navigation.navigate("Auth", { redirectTo: "profile" });
                    return;
                  }
                  onOpenProfile?.();
                }}
                accessibilityRole="button"
              >
                {isLoadingAvatar ? (
                  <View style={styles.avatarSkeleton} />
                ) : avatarUrl ? (
                  <Image source={{ uri: avatarUrl }} style={styles.avatarImage} />
                ) : (
                  <User size={24} color="#6B7280" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder={t.discover.searchPlaceholder}
              placeholderTextColor="#9CA3AF"
              value={query}
              onChangeText={setQuery}
            />
            <Mic size={20} color="#9CA3AF" />
          </View>

          <View style={styles.discoverHeader}>
            <View style={styles.discoverLeft}>
              <Text style={styles.discoverTitle}>{t.discover.title}</Text>
            </View>
            <TouchableOpacity style={styles.filterButton} onPress={openFilters}>
              <SlidersHorizontal size={20} color="#2563EB" />
              {activeFilterCount > 0 && (
                <View style={styles.filterBadge}>
                  <Text style={styles.filterBadgeText}>{activeFilterCount}</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>

          {isLoading ? (
            <AsyncStateView isLoading loadingText={t.discover.loadingTrips} />
          ) : loadError ? (
            <AsyncStateView isLoading={false} error={loadError} onRetry={() => loadPublicTrips()} />
          ) : filteredTrips.length === 0 ? (
            <AsyncStateView isLoading={false} isEmpty emptyText={t.discover.emptyFiltered} />
          ) : (
            <>
              {cacheNotice ? (
                <View style={styles.emptyState}>
                  <Text style={styles.emptyText}>{cacheNotice}</Text>
                </View>
              ) : null}
              {filteredTrips.map((trip) => (
                <TripCard
                  key={trip.id}
                  trip={trip}
                  onPress={() => navigation.navigate("TripDetail", { tripId: trip.id, source: "discover" })}
                />
              ))}
            </>
          )}

          <View style={styles.bottomSpacer} />
        </Animated.ScrollView>
      </SafeAreaView>

      <Modal visible={isFilterSheetOpen} transparent animationType="slide" onRequestClose={() => setIsFilterSheetOpen(false)}>
        <View style={styles.sheetBackdrop}>
          <Pressable style={styles.sheetOverlayTap} onPress={() => setIsFilterSheetOpen(false)} />
          <View style={styles.sheetContainer}>
            <View style={styles.sheetHandle} />
            <Text style={styles.sheetTitle}>{t.discover.filtersTitle}</Text>

            <Text style={styles.sheetSectionTitle}>{t.discover.filtersTripType}</Text>
            <View style={styles.sheetChipsWrap}>
              {TAG_FILTERS.map((filter) => {
                const active = draftTags.includes(filter);
                return (
                  <TouchableOpacity
                    key={filter}
                    style={[
                      styles.filterChip,
                      getFilterVariant(filter) === "people" && styles.filterChipPeople,
                      getFilterVariant(filter) === "tourism" && styles.filterChipTourism,
                      getFilterVariant(filter) === "food" && styles.filterChipFood,
                      getFilterVariant(filter) === "default" && styles.filterChipDefault,
                      active && styles.filterChipActive,
                    ]}
                    onPress={() => toggleDraftTag(filter)}
                  >
                    <Text
                      style={[
                        styles.filterText,
                        getFilterVariant(filter) === "default" ? styles.filterTextMuted : styles.filterTextDark,
                        active && styles.filterTextActive,
                      ]}
                    >
                      {toTagLabelEs(filter)}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <Text style={styles.sheetSectionTitle}>{t.discover.filtersBudget}</Text>
            <View style={styles.sheetChipsWrap}>
              {BUDGET_FILTERS.map((filter) => {
                const active = draftBudget === filter;
                return (
                  <TouchableOpacity
                    key={filter}
                    style={[styles.filterChip, styles.filterChipDefault, active && styles.filterChipActive]}
                    onPress={() => setDraftBudget((prev) => (prev === filter ? null : filter))}
                  >
                    <Text style={[styles.filterText, styles.filterTextMuted, active && styles.filterTextActive]}>{filter}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <View style={styles.sheetActionsRow}>
              <TouchableOpacity style={styles.sheetSecondaryButton} onPress={clearFilters}>
                <Text style={styles.sheetSecondaryText}>{t.discover.filtersClear}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sheetSecondaryButton} onPress={() => setIsFilterSheetOpen(false)}>
                <Text style={styles.sheetSecondaryText}>{t.discover.filtersClose}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sheetPrimaryButton} onPress={applyFilters}>
                <Text style={styles.sheetPrimaryText}>{t.discover.filtersApply}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.bottomGradient} pointerEvents="none">
        <View style={[styles.gradientLayer, { opacity: 0 }]} />
        <View style={[styles.gradientLayer, { opacity: 0.3 }]} />
        <View style={[styles.gradientLayer, { opacity: 0.5 }]} />
        <View style={[styles.gradientLayer, { opacity: 0.7 }]} />
        <View style={[styles.gradientLayer, { opacity: 0.85 }]} />
        <View style={[styles.gradientLayer, { opacity: 1 }]} />
      </View>

      {needsProfileSetup && !profileComplete && !dismissedPrompt && (
        <View style={styles.profilePromptOverlay}>
          <View style={styles.profilePromptCard}>
            <Text style={styles.profilePromptTitle}>Completa tu perfil</Text>
            <Text style={styles.profilePromptText}>
              Ayuda a personalizar tus viajes y a encontrarte con otros viajeros.
            </Text>
            <View style={styles.profilePromptActions}>
              <TouchableOpacity
                style={styles.profilePromptSecondary}
                onPress={() => {
                  setDismissedPrompt(true);
                  setNeedsProfileSetup(true);
                }}
                accessibilityRole="button"
              >
                <Text style={styles.profilePromptSecondaryText}>Más tarde</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.profilePromptPrimary}
                onPress={() => navigation.navigate("ProfileSetup")}
                accessibilityRole="button"
              >
                <Text style={styles.profilePromptPrimaryText}>Completar ahora</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
