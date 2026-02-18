import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  Modal,
  Pressable,
  RefreshControl,
  Share,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import { SafeAreaView } from "react-native-safe-area-context";
import { Mic, Play, Plus, SlidersHorizontal, Share2 } from "lucide-react-native";
import styles from "./MyTripsScreen.styles";
import TripCard, { TripData } from "../components/TripCard";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { supabase } from "../lib/supabase";
import {
  createTripInviteLink,
  getTripTags,
  getTripsByOwner,
  getTripsSharedWithUser,
  SharedTripRecord,
  TripRecord,
} from "../services/trips.service";
import { t } from "../i18n";
import { toTagLabelEs } from "../utils/tagLabels";
import { getCacheItem, setCacheItem } from "../storage/cacheStorage";
import { track } from "../services/analytics.service";
import AsyncStateView from "../components/AsyncStateView";

type MyTripsScreenProps = {
  onTabBarVisibilityChange?: (visible: boolean) => void;
};

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

export default function MyTripsScreen({ onTabBarVisibilityChange }: MyTripsScreenProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [ownedTrips, setOwnedTrips] = useState<TripData[]>([]);
  const [sharedTrips, setSharedTrips] = useState<TripData[]>([]);
  const [activeTab, setActiveTab] = useState<"owned" | "shared">("owned");
  const [query, setQuery] = useState("");
  const [appliedTags, setAppliedTags] = useState<string[]>([]);
  const [appliedBudget, setAppliedBudget] = useState<string | null>(null);
  const [draftTags, setDraftTags] = useState<string[]>([]);
  const [draftBudget, setDraftBudget] = useState<string | null>(null);
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [inviteVisible, setInviteVisible] = useState(false);
  const [selectedTripId, setSelectedTripId] = useState<string | null>(null);
  const [generatedInviteUrl, setGeneratedInviteUrl] = useState<string | null>(null);
  const [isGeneratingInvite, setIsGeneratingInvite] = useState(false);
  const [inviteError, setInviteError] = useState<string | null>(null);
  const [inviteStatus, setInviteStatus] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [cacheNotice, setCacheNotice] = useState<string | null>(null);
  const scrollY = useRef(new Animated.Value(0)).current;
  const lastScrollY = useRef(0);
  const barVisibleRef = useRef(true);

  const tripCards = useMemo<TripData[]>(() => {
    return activeTab === "owned" ? ownedTrips : sharedTrips;
  }, [activeTab, ownedTrips, sharedTrips]);

  const shareUrl = generatedInviteUrl || "";
  const activeFilterCount = appliedTags.length + (appliedBudget ? 1 : 0) + (query.trim() ? 1 : 0);

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

  const loadTrips = React.useCallback(async () => {
    setIsLoading(true);
    setLoadError(null);
    setCacheNotice(null);
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) {
      setOwnedTrips([]);
      setSharedTrips([]);
      setIsLoading(false);
      return;
    }
    try {
      const [ownedData, sharedData] = await Promise.all([
        getTripsByOwner(userData.user.id),
        getTripsSharedWithUser(userData.user.id),
      ]);

      const mapTripsToCards = async (
        records: Array<TripRecord | SharedTripRecord>,
        badge: "Mío" | "Compartido"
      ) => {
        const tagSets = await Promise.all(
          records.map(async (trip) => {
            try {
              return await getTripTags(trip.id);
            } catch (error) {
              return [];
            }
          })
        );
        return records.map((trip, index) => ({
          id: trip.id,
          title: trip.title,
          price: trip.estimated_budget_text || "-",
          points: "0 puntos",
          tags: tagSets[index] || [],
          imageUrl: trip.cover_image_url || undefined,
          badge:
            badge === "Compartido"
              ? `Compartido · ${
                  (trip as SharedTripRecord).collab_role === "editor" ? "Editor" : "Lector"
                }`
              : badge,
        }));
      };

      const [ownedCards, sharedCards] = await Promise.all([
        mapTripsToCards(ownedData, "Mío"),
        mapTripsToCards(sharedData, "Compartido"),
      ]);

      setOwnedTrips(ownedCards);
      setSharedTrips(sharedCards);
      await Promise.all([
        setCacheItem(`cache_my_trips_owned_v1_${userData.user.id}`, ownedCards),
        setCacheItem(`cache_my_trips_shared_v1_${userData.user.id}`, sharedCards),
      ]);
    } catch (error) {
      const message = (error as any)?.message || "No se pudieron cargar los viajes.";
      const [ownedCache, sharedCache] = await Promise.all([
        getCacheItem<TripData[]>(`cache_my_trips_owned_v1_${userData.user.id}`),
        getCacheItem<TripData[]>(`cache_my_trips_shared_v1_${userData.user.id}`),
      ]);
      const hasCache = Boolean((ownedCache?.payload?.length || 0) + (sharedCache?.payload?.length || 0));
      if (hasCache) {
        setOwnedTrips(ownedCache?.payload || []);
        setSharedTrips(sharedCache?.payload || []);
        setCacheNotice("Mostrando datos guardados por falta de conexión.");
      } else {
        setOwnedTrips([]);
        setSharedTrips([]);
        setLoadError(message);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTrips();
  }, [loadTrips]);

  useFocusEffect(
    React.useCallback(() => {
      loadTrips();
    }, [loadTrips])
  );

  useEffect(() => {
    if (!selectedTripId && ownedTrips.length > 0) {
      setSelectedTripId(ownedTrips[0].id);
    }
  }, [ownedTrips, selectedTripId]);

  useEffect(() => {
    setGeneratedInviteUrl(null);
    setInviteError(null);
    setInviteStatus(null);
  }, [selectedTripId]);

  useEffect(() => {
    if (activeTab === "shared") {
      setInviteVisible(false);
    }
  }, [activeTab]);

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

  const filteredTrips = tripCards.filter((trip) => {
    const normalizedQuery = query.trim().toLowerCase();
    if (normalizedQuery) {
      const translatedTags = trip.tags.map((tag) => toTagLabelEs(tag));
      const searchable = `${trip.title} ${translatedTags.join(" ")} ${trip.tags.join(" ")}`.toLowerCase();
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

  const handleShareTrip = async () => {
    if (!selectedTripId) return;
    const trip = ownedTrips.find((item) => item.id === selectedTripId);
    setIsGeneratingInvite(true);
    setInviteError(null);
    setInviteStatus(null);
    try {
      const invite = await createTripInviteLink(selectedTripId, "editor");
      const url = `kaeru://invite/${invite.invite_token}`;
      const message = `Te invito a este viaje: "${trip?.title || "Viaje en Kaeru"}"\n${url}`;
      setGeneratedInviteUrl(url);
      await Clipboard.setStringAsync(url);
      setInviteStatus("Enlace copiado al portapapeles.");
      await track("trip_share_link_created", { trip_id: selectedTripId });
      await Share.share({ message, url });
    } catch (err: any) {
      const rawMessage = String(err?.message || err || "");
      const cleaned = rawMessage.replace("[invite:create] ", "").trim();
      setInviteError(cleaned || "No se pudo compartir el enlace.");
    } finally {
      setIsGeneratingInvite(false);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await loadTrips();
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea} edges={["top"]}>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
          }
        >
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Text style={styles.title}>Planifica tu</Text>
              <Text style={styles.title}>siguiente viaje</Text>
            </View>
            <View style={styles.headerRightActions}>
              <TouchableOpacity
                style={styles.activeTripsButton}
                onPress={() => navigation.navigate("ActiveTrips")}
                accessibilityRole="button"
              >
                <Play size={20} color="#1E1E1E" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.inviteButton,
                  activeTab === "shared" && styles.inviteButtonDisabled,
                ]}
                onPress={() => activeTab === "owned" && setInviteVisible(true)}
                accessibilityRole="button"
                disabled={activeTab === "shared"}
              >
                <Share2 size={22} color={activeTab === "shared" ? "#9CA3AF" : "#1E1E1E"} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar destino o viaje"
              placeholderTextColor="#9CA3AF"
              value={query}
              onChangeText={setQuery}
            />
            <Mic size={20} color="#9CA3AF" />
          </View>

          <View style={styles.sectionHeader}>
            <View style={styles.toggleWrap}>
              <TouchableOpacity
                style={[styles.toggleButton, activeTab === "owned" && styles.toggleButtonActive]}
                onPress={() => setActiveTab("owned")}
                accessibilityRole="button"
              >
                <Text style={[styles.toggleText, activeTab === "owned" && styles.toggleTextActive]}>
                  Míos
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.toggleButton, activeTab === "shared" && styles.toggleButtonActive]}
                onPress={() => setActiveTab("shared")}
                accessibilityRole="button"
              >
                <Text style={[styles.toggleText, activeTab === "shared" && styles.toggleTextActive]}>
                  Compartidos
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.filterButton} onPress={openFilters} accessibilityRole="button">
              <SlidersHorizontal size={20} color="#2563EB" />
              {activeFilterCount > 0 && (
                <View style={styles.filterBadge}>
                  <Text style={styles.filterBadgeText}>{activeFilterCount}</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.sectionDivider} />

          {isLoading ? (
            <AsyncStateView isLoading loadingText="Cargando tus viajes..." />
          ) : loadError ? (
            <AsyncStateView
              isLoading={false}
              error={loadError}
              onRetry={() => loadTrips()}
            />
          ) : tripCards.length === 0 ? (
            <AsyncStateView
              isLoading={false}
              isEmpty
              emptyText={activeTab === "owned" ? "No tienes viajes propios." : "No tienes viajes compartidos."}
            />
          ) : filteredTrips.length === 0 ? (
            <AsyncStateView
              isLoading={false}
              isEmpty
              emptyText="No hay viajes que coincidan con tus filtros."
            />
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
                  onPress={() =>
                    navigation.navigate("TripDetail", {
                      tripId: trip.id,
                      source: activeTab === "owned" ? "my" : "my_shared",
                    })
                  }
                />
              ))}
            </>
          )}
        </Animated.ScrollView>
      </SafeAreaView>

      <TouchableOpacity
        style={styles.floatingAdd}
        accessibilityRole="button"
        onPress={async () => {
          const { data } = await supabase.auth.getUser();
          if (!data.user) {
            navigation.navigate("Auth", { redirectTo: "create_trip" });
            return;
          }
          navigation.navigate("CreateTrip");
        }}
      >
        <Plus size={28} color="#fcfcfc" />
      </TouchableOpacity>

      {inviteVisible && (
        <View style={styles.inviteOverlay}>
          <View style={styles.inviteCard}>
            <Text style={styles.inviteTitle}>Invitar con enlace</Text>
            <Text style={styles.inviteSubtitle}>
              Comparte este enlace para que otras personas puedan acceder al viaje.
            </Text>

            {ownedTrips.length > 0 ? (
              <View style={styles.inviteTripSelector}>
                {ownedTrips.map((trip) => {
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
                  Crea un viaje antes de compartir enlaces.
                </Text>
              </View>
            )}

            {selectedTripId ? (
              <View style={styles.inviteEmpty}>
                <Text style={styles.inviteCurrentTitle}>Enlace generado</Text>
                <Text style={styles.inviteEmptyText}>
                  {isGeneratingInvite ? "Generando enlace seguro..." : shareUrl || "Pulsa \"Compartir enlace\""}
                </Text>
                {inviteStatus ? <Text style={styles.inviteEmptyText}>{inviteStatus}</Text> : null}
                {inviteError ? (
                  <Text style={[styles.inviteEmptyText, { color: "#B91C1C" }]}>{inviteError}</Text>
                ) : null}
              </View>
            ) : null}

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
                disabled={!selectedTripId}
              >
                <Text style={styles.invitePrimaryText}>Compartir enlace</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

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
    </View>
  );
}
