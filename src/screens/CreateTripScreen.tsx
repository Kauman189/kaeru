import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { ArrowDown, ArrowUp, Check, Plus, Trash2 } from "lucide-react-native";
import MapView, { Marker, PROVIDER_DEFAULT, Region } from "react-native-maps";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { TripStop } from "../store/tripsContext";
import { supabase } from "../lib/supabase";
import {
  addTripStops,
  addTripTags,
  createTrip,
  getTripById,
  getTripStops,
  getTripTags,
  replaceTripStops,
  replaceTripTags,
  TripDetails,
  updateTrip,
  ensureTags,
} from "../services/trips.service";
import {
  getLocalPlaceById,
  resolveLocalCityCenter,
  searchLocalPlaces,
} from "../services/localPlaces.service";
import { track } from "../services/analytics.service";
import styles from "./CreateTripScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "CreateTrip">;

const TAGS = [
  { value: "City Tourism", label: "Turismo urbano" },
  { value: "Food Tour", label: "Ruta gastronómica" },
  { value: "Adventure", label: "Aventura" },
  { value: "Cultural", label: "Cultural" },
  { value: "Nature", label: "Naturaleza" },
  { value: "Solo", label: "Solo" },
  { value: "Couple", label: "En pareja" },
  { value: "2-4 Friends", label: "2-4 amigos" },
];

const INITIAL_REGION: Region = {
  latitude: 39.4699,
  longitude: -0.3763,
  latitudeDelta: 0.08,
  longitudeDelta: 0.08,
};

export default function CreateTripScreen({ navigation, route }: Props) {
  const insets = useSafeAreaInsets();
  const mode = route.params?.mode ?? "create";
  const editingTripId = route.params?.tripId;
  const isEditMode = mode === "edit" && Boolean(editingTripId);
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [visibility, setVisibility] = useState<"public" | "private">("public");
  const [stops, setStops] = useState<TripStop[]>([]);
  const [highlights, setHighlights] = useState("");
  const [recommendedSeason, setRecommendedSeason] = useState("");
  const [transportNotes, setTransportNotes] = useState("");
  const [meetingPoint, setMeetingPoint] = useState("");
  const [importantNotes, setImportantNotes] = useState("");
  const [checklistText, setChecklistText] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [placeSuggestions, setPlaceSuggestions] = useState<
    { placeId: string; title: string; address: string }[]
  >([]);
  const [isSearchingPlaces, setIsSearchingPlaces] = useState(false);
  const [stopTitle, setStopTitle] = useState("");
  const [stopAddress, setStopAddress] = useState("");
  const [stopTime, setStopTime] = useState("");
  const [stopPrice, setStopPrice] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBootstrapping, setIsBootstrapping] = useState(isEditMode);
  const [error, setError] = useState<string | null>(null);
  const [stepError, setStepError] = useState<string | null>(null);
  const [mapRegion, setMapRegion] = useState<Region>(INITIAL_REGION);
  const searchDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const destinationDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const progress = useMemo(() => ((step + 1) / 3) * 100, [step]);
  const canContinueStep0 = title.trim().length > 0 && destination.trim().length > 0;
  const canContinueStep1 = stops.length > 0;

  const totalStopsPrice = useMemo(() => {
    return stops.reduce((acc, stop) => {
      const value = parseFloat((stop.price || "").replace(",", "."));
      return acc + (Number.isNaN(value) ? 0 : value);
    }, 0);
  }, [stops]);

  const availableTags = useMemo(
    () => Array.from(new Set([...TAGS.map((tag) => tag.value), ...selectedTags])),
    [selectedTags]
  );

  useEffect(() => {
    let mounted = true;
    const ensureAuth = async () => {
      const { data } = await supabase.auth.getUser();
      if (!mounted) return;
      if (!data.user) {
        navigation.replace("Auth", { redirectTo: "create_trip" });
      }
    };
    ensureAuth();
    return () => {
      mounted = false;
    };
  }, [navigation]);

  useEffect(() => {
    if (!isEditMode || !editingTripId) {
      return;
    }

    let isMounted = true;

    const loadTripForEdit = async () => {
      setIsBootstrapping(true);
      setError(null);
      try {
        const [trip, stopRows, tagNames] = await Promise.all([
          getTripById(editingTripId),
          getTripStops(editingTripId),
          getTripTags(editingTripId),
        ]);

        if (!isMounted) return;

        setTitle(trip.title || "");
        setDestination(trip.destination || "");
        setBudget(trip.estimated_budget_text || "");
        setVisibility(trip.visibility || "public");
        setSelectedTags(tagNames);
        const details = (trip.details || {}) as TripDetails;
        setHighlights(details.highlights || "");
        setRecommendedSeason(details.recommended_season || "");
        setTransportNotes(details.transport_notes || "");
        setMeetingPoint(details.meeting_point || "");
        setImportantNotes(details.important_notes || "");
        setChecklistText(Array.isArray(details.checklist) ? details.checklist.join("\n") : "");
        setStops(
          stopRows.map((stop) => ({
            id: stop.id,
            title: stop.title,
            address: stop.address || stop.place_name || "",
            latitude: stop.latitude ?? undefined,
            longitude: stop.longitude ?? undefined,
            time: stop.start_time_text || undefined,
            price: undefined,
          }))
        );
      } catch (err: any) {
        if (isMounted) {
          setError(err?.message || "No se pudo cargar el viaje para editar.");
        }
      } finally {
        if (isMounted) {
          setIsBootstrapping(false);
        }
      }
    };

    loadTripForEdit();

    return () => {
      isMounted = false;
    };
  }, [editingTripId, isEditMode]);

  useEffect(() => {
    const query = searchQuery.trim();
    if (!query) {
      setPlaceSuggestions([]);
      setIsSearchingPlaces(false);
      return;
    }

    if (searchDebounceRef.current) {
      clearTimeout(searchDebounceRef.current);
    }

    searchDebounceRef.current = setTimeout(async () => {
      setIsSearchingPlaces(true);
      const result = searchLocalPlaces(query, destination);
      setPlaceSuggestions(
        result.map((item) => ({
          placeId: item.id,
          title: item.title,
          address: item.address,
        }))
      );
      if (result.length === 0) {
        setStepError("No hay sugerencias para esa búsqueda en modo demo.");
      } else {
        setStepError(null);
      }
      setIsSearchingPlaces(false);
    }, 350);

    return () => {
      if (searchDebounceRef.current) {
        clearTimeout(searchDebounceRef.current);
      }
    };
  }, [searchQuery]);

  useEffect(() => {
    const withCoords = stops.filter((stop) => stop.latitude != null && stop.longitude != null);
    if (withCoords.length > 0) {
      setMapRegion({
        latitude: withCoords[0].latitude as number,
        longitude: withCoords[0].longitude as number,
        latitudeDelta: 0.08,
        longitudeDelta: 0.08,
      });
      return;
    }

    const query = destination.trim();
    if (!query) {
      setMapRegion(INITIAL_REGION);
      return;
    }

    if (destinationDebounceRef.current) {
      clearTimeout(destinationDebounceRef.current);
    }

    destinationDebounceRef.current = setTimeout(async () => {
      const city = resolveLocalCityCenter(query);
      if (city) {
        setMapRegion({
          latitude: city.latitude,
          longitude: city.longitude,
          latitudeDelta: 0.12,
          longitudeDelta: 0.12,
        });
        setStepError(null);
      } else {
        setMapRegion({
          latitude: 40.0,
          longitude: -3.5,
          latitudeDelta: 7.0,
          longitudeDelta: 7.0,
        });
        setStepError("Ciudad no incluida en demo. Usa Madrid, Barcelona o Valencia.");
      }
    }, 500);

    return () => {
      if (destinationDebounceRef.current) {
        clearTimeout(destinationDebounceRef.current);
      }
    };
  }, [destination, stops]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const addStop = (payload: {
    title: string;
    address: string;
    latitude?: number;
    longitude?: number;
    time?: string;
    price?: string;
  }) => {
    if (!payload.title.trim() || !payload.address.trim()) return;

    setStops((prev) => [
      ...prev,
      {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: payload.title.trim(),
        address: payload.address.trim(),
        latitude: payload.latitude,
        longitude: payload.longitude,
        time: payload.time?.trim() || undefined,
        price: payload.price?.trim() || undefined,
      },
    ]);
  };

  const addPlaceFromSearch = (place: { placeId: string; title: string; address: string }) => {
    const details = getLocalPlaceById(place.placeId);
    if (!details) {
      setStepError("No se pudo resolver la parada seleccionada.");
      return;
    }
    addStop({
      title: details.title,
      address: details.address,
      latitude: details.latitude,
      longitude: details.longitude,
    });
    setMapRegion({
      latitude: details.latitude,
      longitude: details.longitude,
      latitudeDelta: 0.08,
      longitudeDelta: 0.08,
    });
    setSearchQuery("");
    setPlaceSuggestions([]);
  };

  const addManualStop = () => {
    if (!stopTitle.trim() || !stopAddress.trim()) {
      setStepError("Para añadir una parada manual, completa titulo y direccion.");
      return;
    }
    setStepError(null);
    addStop({
      title: stopTitle,
      address: stopAddress,
      time: stopTime,
      price: stopPrice,
    });
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

  const removeStop = (id: string) => {
    setStops((prev) => prev.filter((stop) => stop.id !== id));
  };

  const updateStopPrice = (id: string, value: string) => {
    setStops((prev) => prev.map((stop) => (stop.id === id ? { ...stop, price: value } : stop)));
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const { data: userData, error: userError } = await supabase.auth.getUser();
      if (userError || !userData.user) {
        setError("Debes iniciar sesion para crear un viaje.");
        return;
      }

      const normalizedStops = stops.map((stop, index) => ({
        trip_id: isEditMode && editingTripId ? editingTripId : "",
        order_index: index + 1,
        title: stop.title,
        place_name: stop.title,
        address: stop.address,
        latitude: stop.latitude ?? null,
        longitude: stop.longitude ?? null,
        external_maps_url:
          stop.latitude != null && stop.longitude != null
            ? `https://maps.apple.com/?ll=${stop.latitude},${stop.longitude}&q=${encodeURIComponent(
                stop.title
              )}`
            : null,
      }));

      const normalizedChecklist = checklistText
        .split("\n")
        .map((item) => item.trim())
        .filter((item) => item.length > 0);
      const tripDetails: TripDetails = {
        highlights: highlights.trim() || undefined,
        recommended_season: recommendedSeason.trim() || undefined,
        transport_notes: transportNotes.trim() || undefined,
        meeting_point: meetingPoint.trim() || undefined,
        important_notes: importantNotes.trim() || undefined,
        checklist: normalizedChecklist.length > 0 ? normalizedChecklist : undefined,
      };

      if (isEditMode && editingTripId) {
        const updatePayload: any = {
          title: title || "Viaje sin título",
          description: null,
          destination: destination || null,
          start_date: null,
          end_date: null,
          estimated_budget_text: budget || null,
          visibility,
          details: tripDetails,
        };
        await updateTrip(editingTripId, updatePayload);

        await replaceTripStops(editingTripId, normalizedStops);
        await replaceTripTags(editingTripId, selectedTags);
      } else {
        const createPayload: any = {
          owner_id: userData.user.id,
          title: title || "Viaje sin título",
          description: null,
          destination: destination || null,
          start_date: null,
          end_date: null,
          estimated_budget_text: budget || null,
          visibility,
          details: tripDetails,
        };
        const trip = await createTrip(createPayload);
        await track("trip_create", {
          trip_id: trip.id,
          visibility,
          stops_count: stops.length,
        });

        if (stops.length > 0) {
          await addTripStops(
            trip.id,
            normalizedStops.map((stop) => ({
              ...stop,
              trip_id: trip.id,
            }))
          );
        }

        if (selectedTags.length > 0) {
          const tags = await ensureTags(selectedTags);
          await addTripTags(
            trip.id,
            tags.map((tag) => tag.id)
          );
        }
      }

      navigation.goBack();
    } catch (err: any) {
      setError(err?.message || "No se pudo guardar el viaje.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContinue = () => {
    if (step === 0) {
      if (!canContinueStep0) {
        setStepError("Completa titulo y destino para continuar.");
        return;
      }
      setStepError(null);
      setStep(1);
      return;
    }

    if (step === 1) {
      if (!canContinueStep1) {
        setStepError("Añade al menos una parada para continuar.");
        return;
      }
      setStepError(null);
      setStep(2);
      return;
    }

    handleSubmit();
  };

  if (isBootstrapping) {
    return (
      <SafeAreaView style={styles.container} edges={["top"]}>
        <View style={styles.header}>
          <Text style={styles.stepLabel}>Cargando</Text>
          <Text style={styles.title}>Editar viaje</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.header}>
          <Text style={styles.stepLabel}>Paso {step + 1} de 3</Text>
          <Text style={styles.title}>{isEditMode ? "Editar viaje" : "Crear viaje"}</Text>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
          <View style={styles.stepDots}>
            <View style={[styles.stepDot, step >= 0 && styles.stepDotActive]} />
            <View style={[styles.stepDot, step >= 1 && styles.stepDotActive]} />
            <View style={[styles.stepDot, step >= 2 && styles.stepDotActive]} />
          </View>
        </View>

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {step === 0 && (
            <>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Informacion basica</Text>
                <Text style={styles.inputLabel}>Titulo del viaje *</Text>
                <TextInput
                  style={[styles.input, !title.trim() && stepError ? styles.inputRequired : null]}
                  placeholder="Escapada en Valencia"
                  placeholderTextColor="#9CA3AF"
                  value={title}
                  onChangeText={setTitle}
                />

                <Text style={styles.inputLabel}>Destino *</Text>
                <TextInput
                  style={[
                    styles.input,
                    !destination.trim() && stepError ? styles.inputRequired : null,
                  ]}
                  placeholder="Valencia, España"
                  placeholderTextColor="#9CA3AF"
                  value={destination}
                  onChangeText={setDestination}
                />

                <View style={styles.inputRow}>
                  <View style={styles.inputCol}>
                    <Text style={styles.inputLabel}>Duracion</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="3 dias"
                      placeholderTextColor="#9CA3AF"
                      value={duration}
                      onChangeText={setDuration}
                    />
                  </View>

                  <View style={styles.inputCol}>
                    <Text style={styles.inputLabel}>Presupuesto</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="420€ aprox."
                      placeholderTextColor="#9CA3AF"
                      value={budget}
                      onChangeText={setBudget}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTitle}>Estilo del viaje</Text>
                <View style={styles.chipRow}>
                  {availableTags.map((tagValue) => {
                    const tag = TAGS.find((item) => item.value === tagValue);
                    const active = selectedTags.includes(tagValue);
                    return (
                      <Pressable
                        key={tagValue}
                        onPress={() => toggleTag(tagValue)}
                        style={[styles.chip, active && styles.chipActive]}
                      >
                        <Text style={[styles.chipText, active && styles.chipTextActive]}>
                          {tag?.label || tagValue}
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>
              </View>
            </>
          )}

          {step === 1 && (
            <>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Mapa y paradas *</Text>
                <Text style={styles.helperText}>
                  Busca lugares o crea paradas manuales. Necesitas al menos una parada.
                </Text>

                <View style={styles.searchRow}>
                  <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar lugares"
                    placeholderTextColor="#9CA3AF"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                  />
                </View>

                {isSearchingPlaces ? (
                  <Text style={styles.helperText}>Buscando lugares...</Text>
                ) : null}

                {placeSuggestions.length > 0 && (
                  <View style={styles.searchResults}>
                    {placeSuggestions.map((place) => (
                      <Pressable
                        key={place.placeId}
                        style={styles.searchResultItem}
                        onPress={() => addPlaceFromSearch(place)}
                      >
                        <Text style={styles.searchResultTitle}>{place.title}</Text>
                        <Text style={styles.searchResultMeta}>{place.address}</Text>
                      </Pressable>
                    ))}
                  </View>
                )}

                <MapView style={styles.map} provider={PROVIDER_DEFAULT} region={mapRegion}>
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
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTitle}>Añadir parada manual</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Titulo de la parada"
                  placeholderTextColor="#9CA3AF"
                  value={stopTitle}
                  onChangeText={setStopTitle}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Dirección"
                  placeholderTextColor="#9CA3AF"
                  value={stopAddress}
                  onChangeText={setStopAddress}
                />
                <View style={styles.inputRow}>
                  <View style={styles.inputCol}>
                    <TextInput
                      style={styles.input}
                      placeholder="Hora"
                      placeholderTextColor="#9CA3AF"
                      value={stopTime}
                      onChangeText={setStopTime}
                    />
                  </View>
                  <View style={styles.inputCol}>
                    <TextInput
                      style={styles.input}
                      placeholder="Precio"
                      placeholderTextColor="#9CA3AF"
                      keyboardType="numeric"
                      value={stopPrice}
                      onChangeText={setStopPrice}
                    />
                  </View>
                </View>

                <Pressable style={styles.addStopButton} onPress={addManualStop}>
                  <Plus size={16} color="#FFFFFF" />
                  <Text style={styles.addStopText}>Añadir parada</Text>
                </Pressable>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTitle}>Paradas ({stops.length})</Text>
                {stops.length === 0 ? (
                  <Text style={styles.helperText}>Aun no has añadido paradas.</Text>
                ) : (
                  stops.map((stop, index) => (
                    <View key={stop.id} style={styles.stopItem}>
                      <View style={styles.stopHeader}>
                        <Text style={styles.stopTitle}>{stop.title}</Text>
                        <View style={styles.stopActions}>
                          <Pressable onPress={() => moveStop(index, -1)} style={styles.iconButton}>
                            <ArrowUp size={14} color="#1E1E1E" />
                          </Pressable>
                          <Pressable onPress={() => moveStop(index, 1)} style={styles.iconButton}>
                            <ArrowDown size={14} color="#1E1E1E" />
                          </Pressable>
                          <Pressable onPress={() => removeStop(stop.id)} style={styles.iconButton}>
                            <Trash2 size={14} color="#B91C1C" />
                          </Pressable>
                        </View>
                      </View>

                      <Text style={styles.stopMeta}>{stop.address}</Text>

                      <View style={styles.inputRow}>
                        <View style={styles.inputCol}>
                          <TextInput
                            style={styles.input}
                            placeholder="Hora"
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
                        </View>
                        <View style={styles.inputCol}>
                          <TextInput
                            style={styles.input}
                            placeholder="Precio"
                            placeholderTextColor="#9CA3AF"
                            keyboardType="numeric"
                            value={stop.price ?? ""}
                            onChangeText={(value) => updateStopPrice(stop.id, value)}
                          />
                        </View>
                      </View>
                    </View>
                  ))
                )}
              </View>
            </>
          )}

          {step === 2 && (
            <>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Resumen</Text>
                <View style={styles.reviewLine}>
                  <Text style={styles.reviewLabel}>Viaje</Text>
                  <Text style={styles.reviewValue}>{title || "Sin titulo"}</Text>
                </View>
                <View style={styles.reviewLine}>
                  <Text style={styles.reviewLabel}>Destino</Text>
                  <Text style={styles.reviewValue}>{destination || "-"}</Text>
                </View>
                <View style={styles.reviewLine}>
                  <Text style={styles.reviewLabel}>Duracion</Text>
                  <Text style={styles.reviewValue}>{duration || "-"}</Text>
                </View>
                <View style={styles.reviewLine}>
                  <Text style={styles.reviewLabel}>Presupuesto</Text>
                  <Text style={styles.reviewValue}>{budget || "-"}</Text>
                </View>
                <View style={styles.reviewLine}>
                  <Text style={styles.reviewLabel}>Total paradas</Text>
                  <Text style={styles.reviewValue}>
                    {totalStopsPrice > 0 ? `$${totalStopsPrice.toFixed(2)}` : "-"}
                  </Text>
                </View>
                <View style={styles.reviewLine}>
                  <Text style={styles.reviewLabel}>Visibilidad</Text>
                  <Text style={styles.reviewValue}>
                    {visibility === "public" ? "Publico" : "Privado"}
                  </Text>
                </View>
                <View style={styles.reviewLine}>
                  <Text style={styles.reviewLabel}>Lo mejor</Text>
                  <Text style={styles.reviewValue}>{highlights.trim() || "-"}</Text>
                </View>
                <View style={styles.reviewLine}>
                  <Text style={styles.reviewLabel}>Temporada</Text>
                  <Text style={styles.reviewValue}>{recommendedSeason.trim() || "-"}</Text>
                </View>
                <View style={styles.reviewLine}>
                  <Text style={styles.reviewLabel}>Transporte</Text>
                  <Text style={styles.reviewValue}>{transportNotes.trim() || "-"}</Text>
                </View>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTitle}>Información del viaje</Text>
                <Text style={styles.inputLabel}>Lo mejor del viaje</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Plan ideal para cultura + comida + paseo"
                  placeholderTextColor="#9CA3AF"
                  value={highlights}
                  onChangeText={setHighlights}
                />

                <Text style={styles.inputLabel}>Temporada recomendada</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Primavera y otoño"
                  placeholderTextColor="#9CA3AF"
                  value={recommendedSeason}
                  onChangeText={setRecommendedSeason}
                />

                <Text style={styles.inputLabel}>Notas de transporte</Text>
                <TextInput
                  style={[styles.input, styles.multilineInput]}
                  placeholder="Metro, bus, trayectos andando..."
                  placeholderTextColor="#9CA3AF"
                  multiline
                  textAlignVertical="top"
                  value={transportNotes}
                  onChangeText={setTransportNotes}
                />

                <Text style={styles.inputLabel}>Punto de encuentro</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Puerta del Sol"
                  placeholderTextColor="#9CA3AF"
                  value={meetingPoint}
                  onChangeText={setMeetingPoint}
                />

                <Text style={styles.inputLabel}>Notas importantes</Text>
                <TextInput
                  style={[styles.input, styles.multilineInput]}
                  placeholder="Reserva entradas, evitar horas punta..."
                  placeholderTextColor="#9CA3AF"
                  multiline
                  textAlignVertical="top"
                  value={importantNotes}
                  onChangeText={setImportantNotes}
                />

                <Text style={styles.inputLabel}>Checklist (una línea por ítem)</Text>
                <TextInput
                  style={[styles.input, styles.multilineInput]}
                  placeholder={"Billetes\nReservas\nPowerbank"}
                  placeholderTextColor="#9CA3AF"
                  multiline
                  textAlignVertical="top"
                  value={checklistText}
                  onChangeText={setChecklistText}
                />
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTitle}>Visibilidad</Text>
                <View style={styles.visibilityRow}>
                  <Pressable
                    style={[
                      styles.visibilityOption,
                      visibility === "public" && styles.visibilityOptionActive,
                    ]}
                    onPress={() => setVisibility("public")}
                  >
                    <Text
                      style={[
                        styles.visibilityText,
                        visibility === "public" && styles.visibilityTextActive,
                      ]}
                    >
                      Publico
                    </Text>
                    <Text style={styles.visibilitySubtext}>Visible en Discover</Text>
                  </Pressable>

                  <Pressable
                    style={[
                      styles.visibilityOption,
                      visibility === "private" && styles.visibilityOptionActive,
                    ]}
                    onPress={() => setVisibility("private")}
                  >
                    <Text
                      style={[
                        styles.visibilityText,
                        visibility === "private" && styles.visibilityTextActive,
                      ]}
                    >
                      Privado
                    </Text>
                    <Text style={styles.visibilitySubtext}>Solo tu y colaboradores</Text>
                  </Pressable>
                </View>
              </View>

              {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </>
          )}
        </ScrollView>

        <View style={[styles.footer, { paddingBottom: 16 + insets.bottom }]}> 
          {stepError ? <Text style={styles.errorText}>{stepError}</Text> : null}
          <View style={styles.footerRow}>
            <Pressable
              style={styles.secondaryButton}
              onPress={() => (step === 0 ? navigation.goBack() : setStep(step - 1))}
            >
              <Text style={styles.secondaryText}>{step === 0 ? "Cancelar" : "Atras"}</Text>
            </Pressable>

            <Pressable
              style={[
                styles.primaryButton,
                (isSubmitting ||
                  (step === 0 && !canContinueStep0) ||
                  (step === 1 && !canContinueStep1)) &&
                  styles.primaryButtonDisabled,
              ]}
              onPress={handleContinue}
              disabled={isSubmitting}
            >
              <Text style={styles.primaryText}>
                {isSubmitting
                  ? isEditMode
                    ? "Guardando..."
                    : "Creando..."
                  : step === 2
                    ? isEditMode
                      ? "Guardar cambios"
                      : "Crear viaje"
                    : "Continuar"}
              </Text>
            </Pressable>
          </View>

          {step === 2 ? (
            <View style={styles.footerHint}>
              <Check size={14} color="#6B7280" />
              <Text style={styles.helperText}>Podras editar detalles mas tarde.</Text>
            </View>
          ) : null}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
