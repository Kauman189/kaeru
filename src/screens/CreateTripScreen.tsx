import React, { useMemo, useRef, useState } from "react";
import {
  Animated,
  KeyboardAvoidingView,
  PanResponder,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { Plus, Check, ArrowUp, ArrowDown } from "lucide-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { TripStop, useTrips } from "../store/tripsContext";
import styles from "./CreateTripScreen.styles";
import MapView, { Marker, PROVIDER_DEFAULT, Region } from "react-native-maps";

type Props = NativeStackScreenProps<RootStackParamList, "CreateTrip">;

const TAGS = ["City Tourism", "Food Tour", "Adventure", "Cultural", "Nature", "Solo", "Couple", "2-4 Friends"];
const MOCK_PLACES = [
  { title: "City of Arts & Sciences", address: "Quatre Carreres, Valencia", latitude: 39.4531, longitude: -0.3493 },
  { title: "Central Market", address: "Ciutat Vella, Valencia", latitude: 39.4745, longitude: -0.3787 },
  { title: "Valencia Cathedral", address: "Plaza de la Reina", latitude: 39.4769, longitude: -0.3757 },
  { title: "Turia Gardens", address: "Jardin del Turia", latitude: 39.4699, longitude: -0.3662 },
  { title: "La Malvarrosa Beach", address: "Poblats Maritims", latitude: 39.4856, longitude: -0.3236 },
];

export default function CreateTripScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { addTrip } = useTrips();
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [stops, setStops] = useState<TripStop[]>([]);
  const [stopTitle, setStopTitle] = useState("");
  const [stopAddress, setStopAddress] = useState("");
  const [stopTime, setStopTime] = useState("");
  const [stopPrice, setStopPrice] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [region, setRegion] = useState<Region>({
    latitude: 39.4699,
    longitude: -0.3763,
    latitudeDelta: 0.08,
    longitudeDelta: 0.08,
  });
  const [customStopCoords, setCustomStopCoords] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const lastTapRef = useRef(0);
  const footerHeight = 110 + insets.bottom;
  const sheetMaxTranslate = 260;
  const sheetTranslate = useRef(new Animated.Value(200)).current;
  const sheetOffset = useRef(200);
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) =>
        Math.abs(gesture.dy) > 6 && Math.abs(gesture.dx) < 10,
      onPanResponderMove: (_, gesture) => {
        const next = Math.min(
          sheetMaxTranslate,
          Math.max(0, sheetOffset.current + gesture.dy)
        );
        sheetTranslate.setValue(next);
      },
      onPanResponderRelease: (_, gesture) => {
        const shouldCollapse =
          gesture.vy > 0.2 || sheetOffset.current + gesture.dy > sheetMaxTranslate / 2;
        const target = shouldCollapse ? sheetMaxTranslate : 0;
        sheetOffset.current = target;
        Animated.spring(sheetTranslate, {
          toValue: target,
          useNativeDriver: true,
          damping: 18,
          stiffness: 180,
        }).start();
      },
    })
  ).current;

  const progress = useMemo(() => ((step + 1) / 3) * 100, [step]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const addStop = (payload?: Partial<TripStop>) => {
    const nextTitle = payload?.title ?? stopTitle;
    const nextAddress = payload?.address ?? stopAddress;
    if (!nextTitle.trim() || !nextAddress.trim()) {
      return;
    }
    setStops((prev) => [
      ...prev,
      {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: nextTitle.trim(),
        address: nextAddress.trim(),
        time: (payload?.time ?? stopTime).trim() || undefined,
        price: (payload?.price ?? stopPrice).trim() || undefined,
        latitude: payload?.latitude,
        longitude: payload?.longitude,
      },
    ]);
    setStopTitle("");
    setStopAddress("");
    setStopTime("");
    setStopPrice("");
  };

  const moveStop = (index: number, direction: number) => {
    setStops((prev) => {
      const next = [...prev];
      const target = index + direction;
      if (target < 0 || target >= next.length) return prev;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  };

  const updateStopPrice = (id: string, value: string) => {
    setStops((prev) =>
      prev.map((stop) => (stop.id === id ? { ...stop, price: value } : stop))
    );
  };

  const filteredPlaces = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return MOCK_PLACES.filter(
      (place) =>
        place.title.toLowerCase().includes(query) ||
        place.address.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const addPlaceFromSearch = (place: typeof MOCK_PLACES[number]) => {
    addStop({
      title: place.title,
      address: place.address,
      latitude: place.latitude,
      longitude: place.longitude,
      time: "",
      price: "",
    });
    setSearchQuery("");
    setRegion((prev) => ({
      ...prev,
      latitude: place.latitude,
      longitude: place.longitude,
    }));
  };

  const totalStopsPrice = useMemo(() => {
    return stops.reduce((acc, stop) => {
      const value = parseFloat((stop.price || "").replace(",", "."));
      return acc + (Number.isNaN(value) ? 0 : value);
    }, 0);
  }, [stops]);

  const handleMapPress = (event: any) => {
    const now = Date.now();
    if (now - lastTapRef.current < 280) {
      const { coordinate } = event.nativeEvent;
      setCustomStopCoords({
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
      });
      setStopTitle("");
      setStopAddress("");
      setStopTime("");
      setStopPrice("");
      sheetOffset.current = 0;
      Animated.spring(sheetTranslate, {
        toValue: 0,
        useNativeDriver: true,
        damping: 18,
        stiffness: 180,
      }).start();
    }
    lastTapRef.current = now;
  };

  const handleCreate = () => {
    addTrip({
      title: title || "Untitled trip",
      destination: destination || "Unknown",
      duration: duration || "-",
      budget: budget || "-",
      tags: selectedTags,
      stops,
    });
    navigation.navigate("Tabs");
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <KeyboardAvoidingView
        style={styles.safeArea}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.header}>
          <Text style={styles.stepLabel}>Step {step + 1} of 3</Text>
          <Text style={styles.title}>Create a memorable trip</Text>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
        </View>

        {step === 1 ? (
          <View style={styles.mapStage}>
            <MapView
              style={styles.map}
              provider={PROVIDER_DEFAULT}
              region={region}
              onRegionChangeComplete={setRegion}
              onPress={handleMapPress}
            >
              {stops
                .filter((stop) => stop.latitude != null && stop.longitude != null)
                .map((stop) => (
                  <Marker
                    key={stop.id}
                    coordinate={{
                      latitude: stop.latitude as number,
                      longitude: stop.longitude as number,
                    }}
                    title={stop.title}
                    description={stop.address}
                  />
                ))}
            </MapView>

            <View style={styles.mapSearchBar}>
              <TextInput
                style={styles.mapSearchInput}
                placeholder="Search places in Valencia"
                placeholderTextColor="#9CA3AF"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>

            {filteredPlaces.length > 0 && (
              <View style={styles.searchResults}>
                {filteredPlaces.map((place) => (
                  <Pressable
                    key={place.title}
                    style={styles.searchResultItem}
                    onPress={() => addPlaceFromSearch(place)}
                  >
                    <Text style={styles.searchResultTitle}>{place.title}</Text>
                    <Text style={styles.searchResultMeta}>{place.address}</Text>
                  </Pressable>
                ))}
              </View>
            )}

            <Animated.View
              style={[
                styles.stopsSheet,
                { bottom: footerHeight, transform: [{ translateY: sheetTranslate }] },
              ]}
            >
              <View style={styles.sheetHandle} {...panResponder.panHandlers}>
                <View style={styles.sheetHandleBar} />
              </View>
              <View style={styles.stopsHeader}>
                <Text style={styles.stopsTitle}>Stops</Text>
                <Text style={styles.mapHint}>{stops.length} added</Text>
              </View>

              <ScrollView showsVerticalScrollIndicator={false}>
                {customStopCoords == null && (
                  <Text style={styles.mapHint}>Double tap the map to add a custom stop.</Text>
                )}
                {stops.length === 0 && (
                  <Text style={styles.mapHint}>Search above to add your first stop.</Text>
                )}
                {stops.map((stop, index) => (
                  <View key={stop.id} style={styles.stopItem}>
                    <View style={styles.stopTopRow}>
                      <Text style={styles.stopTitle}>{stop.title}</Text>
                      <View style={styles.stopActions}>
                        <Pressable
                          style={styles.stopActionButton}
                          onPress={() => moveStop(index, -1)}
                        >
                          <ArrowUp size={14} color="#1E1E1E" />
                        </Pressable>
                        <Pressable
                          style={styles.stopActionButton}
                          onPress={() => moveStop(index, 1)}
                        >
                          <ArrowDown size={14} color="#1E1E1E" />
                        </Pressable>
                      </View>
                    </View>
                    <Text style={styles.stopMeta}>{stop.address}</Text>
                    <View style={styles.stopRowInput}>
                      <TextInput
                        style={styles.stopInput}
                        placeholder="Time"
                        placeholderTextColor="#9CA3AF"
                        value={stop.time ?? ""}
                        onChangeText={(value) =>
                          setStops((prev) =>
                            prev.map((item) =>
                              item.id === stop.id ? { ...item, time: value } : item
                            )
                          )
                        }
                      />
                      <TextInput
                        style={styles.stopInput}
                        placeholder="Price"
                        placeholderTextColor="#9CA3AF"
                        keyboardType="numeric"
                        value={stop.price ?? ""}
                        onChangeText={(value) => updateStopPrice(stop.id, value)}
                      />
                    </View>
                  </View>
                ))}
              </ScrollView>

              {customStopCoords && (
                <View style={styles.addStopRow}>
                  <TextInput
                    style={styles.input}
                    placeholder="Custom stop title"
                    placeholderTextColor="#9CA3AF"
                    value={stopTitle}
                    onChangeText={setStopTitle}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Address"
                    placeholderTextColor="#9CA3AF"
                    value={stopAddress}
                    onChangeText={setStopAddress}
                  />
                  <View style={styles.inputRow}>
                    <TextInput
                      style={styles.input}
                      placeholder="Time"
                      placeholderTextColor="#9CA3AF"
                      value={stopTime}
                      onChangeText={setStopTime}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Price"
                      placeholderTextColor="#9CA3AF"
                      keyboardType="numeric"
                      value={stopPrice}
                      onChangeText={setStopPrice}
                    />
                  </View>
                  <View style={styles.footerRow}>
                    <Pressable
                      style={styles.secondaryButton}
                      onPress={() => setCustomStopCoords(null)}
                    >
                      <Text style={styles.secondaryText}>Cancel</Text>
                    </Pressable>
                    <Pressable
                      style={styles.primaryButton}
                      onPress={() => {
                        addStop({
                          latitude: customStopCoords.latitude,
                          longitude: customStopCoords.longitude,
                        });
                        setCustomStopCoords(null);
                      }}
                    >
                      <Text style={styles.primaryText}>Add stop</Text>
                    </Pressable>
                  </View>
                </View>
              )}
              <View style={styles.sheetFooterGap} />
            </Animated.View>
          </View>
        ) : (
          <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            {step === 0 && (
              <>
                <View style={styles.card}>
                  <Text style={styles.cardTitle}>Basics</Text>
                  <Text style={styles.inputLabel}>Trip title</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Valencia hidden gems"
                    placeholderTextColor="#9CA3AF"
                    value={title}
                    onChangeText={setTitle}
                  />
                  <View style={{ height: 12 }} />
                  <Text style={styles.inputLabel}>Destination</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Valencia, Spain"
                    placeholderTextColor="#9CA3AF"
                    value={destination}
                    onChangeText={setDestination}
                  />
                  <View style={{ height: 12 }} />
                  <View style={styles.inputRow}>
                    <View style={styles.inputCol}>
                      <Text style={styles.inputLabel}>Duration</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="3 days"
                        placeholderTextColor="#9CA3AF"
                        value={duration}
                        onChangeText={setDuration}
                      />
                    </View>
                    <View style={styles.inputCol}>
                      <Text style={styles.inputLabel}>Budget</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="$420 avg"
                        placeholderTextColor="#9CA3AF"
                        value={budget}
                        onChangeText={setBudget}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.card}>
                  <Text style={styles.cardTitle}>Tags</Text>
                  <View style={styles.chipRow}>
                    {TAGS.map((tag) => {
                      const active = selectedTags.includes(tag);
                      return (
                        <Pressable
                          key={tag}
                          onPress={() => toggleTag(tag)}
                          style={[styles.chip, active && styles.chipActive]}
                        >
                          <Text style={[styles.chipText, active && styles.chipTextActive]}>
                            {tag}
                          </Text>
                        </Pressable>
                      );
                    })}
                  </View>
                </View>
              </>
            )}

            {step === 2 && (
              <>
                <View style={styles.card}>
                  <Text style={styles.cardTitle}>Review</Text>
                  <View style={styles.reviewLine}>
                    <Text style={styles.reviewLabel}>Trip</Text>
                    <Text style={styles.reviewValue}>{title || "Untitled trip"}</Text>
                  </View>
                  <View style={styles.reviewLine}>
                    <Text style={styles.reviewLabel}>Destination</Text>
                    <Text style={styles.reviewValue}>{destination || "-"}</Text>
                  </View>
                  <View style={styles.reviewLine}>
                    <Text style={styles.reviewLabel}>Duration</Text>
                    <Text style={styles.reviewValue}>{duration || "-"}</Text>
                  </View>
                  <View style={styles.reviewLine}>
                    <Text style={styles.reviewLabel}>Budget</Text>
                    <Text style={styles.reviewValue}>{budget || "-"}</Text>
                  </View>
                  <View style={styles.reviewLine}>
                    <Text style={styles.reviewLabel}>Stops total</Text>
                    <Text style={styles.reviewValue}>
                      {totalStopsPrice > 0 ? `$${totalStopsPrice.toFixed(2)}` : "-"}
                    </Text>
                  </View>
                  <View style={{ height: 6 }} />
                  <Text style={styles.mapHint}>{stops.length} stops</Text>
                </View>

                <View style={styles.card}>
                  <Text style={styles.cardTitle}>Stops</Text>
                  {stops.map((stop) => (
                    <View key={stop.id} style={styles.stopRow}>
                      <Text style={styles.stopTitle}>{stop.title}</Text>
                      <Text style={styles.stopMeta}>
                        {stop.address}
                        {stop.time ? ` • ${stop.time}` : ""}
                        {stop.price ? ` • $${stop.price}` : ""}
                      </Text>
                    </View>
                  ))}
                  {stops.length === 0 && (
                    <Text style={styles.mapHint}>No stops yet.</Text>
                  )}
                </View>
              </>
            )}
          </ScrollView>
        )}

        <View
          style={[
            styles.footer,
            { paddingBottom: 16 + insets.bottom, height: footerHeight },
          ]}
        >
          <View pointerEvents="none" style={styles.footerScrim} />
          <View style={styles.footerRow}>
            <Pressable
              style={styles.secondaryButton}
              onPress={() => (step === 0 ? navigation.goBack() : setStep(step - 1))}
            >
              <Text style={styles.secondaryText}>{step === 0 ? "Cancel" : "Back"}</Text>
            </Pressable>
            <Pressable
              style={styles.primaryButton}
              onPress={() => (step === 2 ? handleCreate() : setStep(step + 1))}
            >
              <Text style={styles.primaryText}>{step === 2 ? "Create trip" : "Continue"}</Text>
            </Pressable>
          </View>
          {step === 2 && (
            <View style={{ alignItems: "center", marginTop: 10 }}>
              <Check size={14} color="#6B7280" />
              <Text style={styles.mapHint}>You can edit details later.</Text>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
