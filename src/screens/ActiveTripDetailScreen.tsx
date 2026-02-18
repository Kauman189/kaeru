import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  RefreshControl,
  ScrollView,
  Share,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import * as Clipboard from "expo-clipboard";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ArrowDown, ArrowLeft, ArrowUp, Download, FileText, Plus, Trash2 } from "lucide-react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import {
  addPlayChecklistItem,
  finishPlayTrip,
  getPlaySessionWithStops,
  pausePlayTrip,
  PlayChecklistItem,
  PlayParticipantNotificationConfig,
  PlaySessionPayload,
  PlaySessionRecord,
  PlayStopRecord,
  removePlayChecklistItem,
  reorderPlayStop,
  resumePlayTrip,
  setPlayNotificationConfig,
  togglePlayStopComplete,
  updatePlayChecklistItem,
  updatePlaySummaryLive,
  updatePlayStopLive,
} from "../services/playTrips.service";
import AsyncStateView from "../components/AsyncStateView";
import { rescheduleSessionNotificationsForCurrentUser } from "../services/localNotifications.service";
import { track } from "../services/analytics.service";
import styles from "./ActiveTripDetailScreen.styles";
import {
  addTripPdfRecord,
  createTripInviteLink,
  getSignedTripPdfUrl,
  getTripPdfs,
  MediaRecord,
  removeTripPdfRecord,
} from "../services/trips.service";
import { supabase } from "../lib/supabase";
import { Linking } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "ActiveTripDetail">;

const DEFAULT_NOTIFICATION_CONFIG: PlayParticipantNotificationConfig = {
  before_10m: true,
  start: true,
  daily_summary: true,
};
const MAX_PDF_SIZE_BYTES = 15 * 1024 * 1024;

type SummaryDraft = {
  highlights: string;
  recommended_season: string;
  transport_notes: string;
  meeting_point: string;
  important_notes: string;
};

export default function ActiveTripDetailScreen({ navigation, route }: Props) {
  const sessionId = route.params.sessionId;
  const [session, setSession] = useState<PlaySessionRecord | null>(null);
  const [stops, setStops] = useState<PlayStopRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isInviting, setIsInviting] = useState(false);
  const [summaryDraft, setSummaryDraft] = useState<SummaryDraft>({
    highlights: "",
    recommended_season: "",
    transport_notes: "",
    meeting_point: "",
    important_notes: "",
  });
  const [checklist, setChecklist] = useState<PlayChecklistItem[]>([]);
  const [newChecklistText, setNewChecklistText] = useState("");
  const [notificationConfig, setNotificationConfigState] = useState<PlayParticipantNotificationConfig>(
    DEFAULT_NOTIFICATION_CONFIG
  );
  const [participantRole, setParticipantRole] = useState<"owner" | "editor" | "viewer" | null>(null);
  const [tripPdfs, setTripPdfs] = useState<MediaRecord[]>([]);
  const [isUploadingPdf, setIsUploadingPdf] = useState(false);
  const [isDownloadingPdfId, setIsDownloadingPdfId] = useState<string | null>(null);
  const [isDeletingPdfId, setIsDeletingPdfId] = useState<string | null>(null);

  const applyPayload = useCallback((payload: PlaySessionPayload) => {
    setSession(payload.session);
    setStops(payload.stops);
    setChecklist(payload.session.checklist_live || []);
    setSummaryDraft({
      highlights: payload.session.summary_live?.highlights || "",
      recommended_season: payload.session.summary_live?.recommended_season || "",
      transport_notes: payload.session.summary_live?.transport_notes || "",
      meeting_point: payload.session.summary_live?.meeting_point || "",
      important_notes: payload.session.summary_live?.important_notes || "",
    });
    setParticipantRole(payload.currentParticipant?.role || null);
    setNotificationConfigState(
      payload.currentParticipant?.notifications_config || DEFAULT_NOTIFICATION_CONFIG
    );
  }, []);

  const loadTripPdfs = useCallback(async (tripId: string) => {
    try {
      const rows = await getTripPdfs(tripId);
      setTripPdfs(rows);
    } catch (err: any) {
      setError(err?.message || "No se pudieron cargar los documentos del viaje.");
      setTripPdfs([]);
    }
  }, []);

  const loadSession = useCallback(
    async (silent = false) => {
      if (!silent) setIsLoading(true);
      setError(null);
      try {
        const data = await getPlaySessionWithStops(sessionId);
        applyPayload(data);
        await loadTripPdfs(data.session.trip_id);
      } catch (err: any) {
        setError(err?.message || "No se pudo cargar el viaje activo.");
        setSession(null);
        setStops([]);
        setChecklist([]);
        setTripPdfs([]);
      } finally {
        if (!silent) setIsLoading(false);
      }
    },
    [applyPayload, loadTripPdfs, sessionId]
  );

  useEffect(() => {
    loadSession();
  }, [loadSession]);

  const canManageSession = participantRole === "owner" || participantRole === "editor";
  const canInviteToPlay = canManageSession && session?.mode === "shared";
  const tripTitle = session?.trips?.title?.trim() || "Viaje";
  const tripDestination = session?.trips?.destination?.trim() || "";
  const sessionStatusLabel = (() => {
    if (!session) return "";
    if (session.status === "active") return "En curso";
    if (session.status === "paused") return "En pausa";
    if (session.status === "completed") return "Finalizado";
    if (session.status === "cancelled") return "Cancelado";
    return session.status;
  })();

  const groupedStops = useMemo(() => {
    const sorted = [...stops].sort(
      (a, b) => a.day_number - b.day_number || a.order_index - b.order_index
    );
    const map = new Map<number, PlayStopRecord[]>();
    sorted.forEach((stop) => {
      const rows = map.get(stop.day_number) || [];
      rows.push(stop);
      map.set(stop.day_number, rows);
    });
    return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
  }, [stops]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await loadSession(true);
    setIsRefreshing(false);
  }, [loadSession]);

  const refreshWithReschedule = async () => {
    const fresh = await getPlaySessionWithStops(sessionId);
    applyPayload(fresh);
    await loadTripPdfs(fresh.session.trip_id);
    await rescheduleSessionNotificationsForCurrentUser(
      fresh.session,
      fresh.stops,
      fresh.currentParticipant?.notifications_config || DEFAULT_NOTIFICATION_CONFIG
    );
  };

  const getStoragePathFromUrl = (url: string) => {
    if (!url) return null;
    const publicMarker = `/storage/v1/object/public/trip-documents/`;
    const signMarker = `/storage/v1/object/sign/trip-documents/`;
    const rawMarker = `/storage/v1/object/trip-documents/`;
    const marker = [publicMarker, signMarker, rawMarker].find((candidate) => url.includes(candidate));
    if (marker) {
      const markerIndex = url.indexOf(marker);
      const raw = url.slice(markerIndex + marker.length).split("?")[0];
      return decodeURIComponent(raw);
    }
    if (url.startsWith("http://") || url.startsWith("https://")) return null;
    return url;
  };

  const handleToggleDone = async (stop: PlayStopRecord) => {
    if (!session || isSaving || !canManageSession) return;
    setIsSaving(true);
    setError(null);
    try {
      await togglePlayStopComplete(session.id, stop.id, !stop.is_completed);
      await track("play_stop_completed", {
        session_id: session.id,
        stop_id: stop.id,
        is_completed: !stop.is_completed,
      });
      await refreshWithReschedule();
    } catch (err: any) {
      setError(err?.message || "No se pudo actualizar la parada.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleMove = async (stop: PlayStopRecord, direction: -1 | 1) => {
    if (!session || isSaving || !canManageSession) return;
    setIsSaving(true);
    try {
      await reorderPlayStop(session.id, stop.id, stop.order_index + direction);
      await refreshWithReschedule();
    } catch (err: any) {
      setError(err?.message || "No se pudo reordenar la parada.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleUpdateNotes = (stop: PlayStopRecord, notes: string) => {
    if (!session || !canManageSession) return;
    setStops((prev) => prev.map((row) => (row.id === stop.id ? { ...row, notes_live: notes } : row)));
  };

  const handleSaveLive = async (stop: PlayStopRecord) => {
    if (!session || isSaving || !canManageSession) return;
    const current = stops.find((row) => row.id === stop.id);
    if (!current) return;

    setIsSaving(true);
    try {
      await updatePlayStopLive(session.id, stop.id, {
        notesLive: current.notes_live || "",
        pointsLive: current.points_live || 0,
      });
      await track("play_stop_points_updated", {
        session_id: session.id,
        stop_id: stop.id,
        points_live: current.points_live || 0,
      });
      await refreshWithReschedule();
    } catch (err: any) {
      setError(err?.message || "No se pudo guardar cambios de la parada.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleUpdatePointsLocal = (stopId: string, value: string) => {
    if (!canManageSession) return;
    const points = parseInt(value.replace(/[^0-9-]/g, ""), 10);
    setStops((prev) =>
      prev.map((row) =>
        row.id === stopId ? { ...row, points_live: Number.isFinite(points) ? points : 0 } : row
      )
    );
  };

  const handlePauseResume = async () => {
    if (!session || isSaving || !canManageSession) return;
    setIsSaving(true);
    try {
      if (session.status === "active") {
        const updated = await pausePlayTrip(session.id);
        setSession(updated);
        await track("play_trip_paused", { session_id: session.id });
      } else {
        const updated = await resumePlayTrip(session.id);
        setSession(updated);
        await track("play_trip_resumed", { session_id: session.id });
      }
      await refreshWithReschedule();
    } catch (err: any) {
      setError(err?.message || "No se pudo actualizar el estado del trip activo.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleFinish = async () => {
    if (!session || isSaving || !canManageSession) return;
    Alert.alert("Finalizar trip activo", "Se cerrará esta sesión de viaje.", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Finalizar",
        style: "destructive",
        onPress: async () => {
          setIsSaving(true);
          try {
            await finishPlayTrip(session.id);
            await track("play_trip_completed", { session_id: session.id });
            navigation.goBack();
          } catch (err: any) {
            setError(err?.message || "No se pudo finalizar el trip activo.");
          } finally {
            setIsSaving(false);
          }
        },
      },
    ]);
  };

  const handleSaveSummary = async () => {
    if (!session || isSaving || !canManageSession) return;
    setIsSaving(true);
    try {
      await updatePlaySummaryLive(session.id, {
        highlights: summaryDraft.highlights,
        recommended_season: summaryDraft.recommended_season,
        transport_notes: summaryDraft.transport_notes,
        meeting_point: summaryDraft.meeting_point,
        important_notes: summaryDraft.important_notes,
      });
      await track("play_summary_updated", { session_id: session.id });
      await loadSession(true);
    } catch (err: any) {
      setError(err?.message || "No se pudo guardar el resumen activo.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleChecklistAdd = async () => {
    if (!session || !canManageSession || isSaving) return;
    const text = newChecklistText.trim();
    if (!text) return;
    setIsSaving(true);
    try {
      const created = await addPlayChecklistItem(session.id, text);
      setChecklist((prev) => [...prev, created].sort((a, b) => a.order - b.order));
      setNewChecklistText("");
      await track("play_checklist_item_add", { session_id: session.id });
    } catch (err: any) {
      setError(err?.message || "No se pudo añadir el item.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleChecklistToggle = async (item: PlayChecklistItem) => {
    if (!session || !canManageSession || isSaving) return;
    setIsSaving(true);
    try {
      const updated = await updatePlayChecklistItem(session.id, item.id, {
        completed: !item.completed,
      });
      setChecklist((prev) => prev.map((row) => (row.id === updated.id ? updated : row)));
      await track("play_checklist_item_toggle", {
        session_id: session.id,
        item_id: item.id,
        completed: !item.completed,
      });
    } catch (err: any) {
      setError(err?.message || "No se pudo actualizar el item.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleChecklistTextSave = async (item: PlayChecklistItem, text: string) => {
    if (!session || !canManageSession || isSaving) return;
    const trimmed = text.trim();
    if (!trimmed || trimmed === item.text) return;
    setIsSaving(true);
    try {
      const updated = await updatePlayChecklistItem(session.id, item.id, { text: trimmed });
      setChecklist((prev) => prev.map((row) => (row.id === updated.id ? updated : row)));
    } catch (err: any) {
      setError(err?.message || "No se pudo editar el item.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleChecklistRemove = async (item: PlayChecklistItem) => {
    if (!session || !canManageSession || isSaving) return;
    setIsSaving(true);
    try {
      await removePlayChecklistItem(session.id, item.id);
      setChecklist((prev) => prev.filter((row) => row.id !== item.id));
      await track("play_checklist_item_remove", { session_id: session.id, item_id: item.id });
    } catch (err: any) {
      setError(err?.message || "No se pudo eliminar el item.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleNotificationToggle = async (
    key: keyof PlayParticipantNotificationConfig,
    value: boolean
  ) => {
    if (!session || isSaving) return;
    const next = { ...notificationConfig, [key]: value };
    setNotificationConfigState(next);
    setIsSaving(true);
    try {
      const updatedParticipant = await setPlayNotificationConfig(session.id, next);
      const normalized = updatedParticipant.notifications_config || DEFAULT_NOTIFICATION_CONFIG;
      setNotificationConfigState(normalized);
      await rescheduleSessionNotificationsForCurrentUser(session, stops, normalized);
      await track("play_notification_config_updated", { session_id: session.id, ...normalized });
    } catch (err: any) {
      setError(err?.message || "No se pudo actualizar la configuración de notificaciones.");
      setNotificationConfigState(notificationConfig);
    } finally {
      setIsSaving(false);
    }
  };

  const handleInviteToPlay = async () => {
    if (!session || isInviting || !canManageSession) return;
    setIsInviting(true);
    try {
      const invite = await createTripInviteLink(session.trip_id, "editor");
      const url = `kaeru://invite/${invite.invite_token}`;
      await Clipboard.setStringAsync(url);
      await Share.share({
        message: `Únete a este viaje en Kaeru:\n${url}`,
        url,
      });
      await track("play_invite_link_created", { session_id: session.id, trip_id: session.trip_id });
    } catch (err: any) {
      const message = String(err?.message || err || "").replace("[invite:create] ", "").trim();
      setError(message || "No se pudo generar el enlace de invitación.");
    } finally {
      setIsInviting(false);
    }
  };

  const handleAddPdf = async () => {
    if (!session || !canManageSession || isUploadingPdf) return;
    setError(null);
    const result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
      multiple: false,
      copyToCacheDirectory: true,
    });
    if (result.canceled || !result.assets?.length) return;

    const asset = result.assets[0];
    const size = asset.size ?? 0;
    const fileName = (asset.name || "documento.pdf").trim();
    const lowerFileName = fileName.toLowerCase();
    const mimeType = (asset.mimeType || "").toLowerCase();

    if (!lowerFileName.endsWith(".pdf") && mimeType !== "application/pdf") {
      setError("El archivo debe ser PDF.");
      return;
    }
    if (size > MAX_PDF_SIZE_BYTES) {
      setError("El PDF supera 15 MB.");
      return;
    }

    setIsUploadingPdf(true);
    try {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) {
        setError("Necesitas iniciar sesión.");
        return;
      }
      const safeName = lowerFileName.replace(/[^a-z0-9._-]/g, "-");
      const filePath = `${session.trip_id}/${userData.user.id}/${Date.now()}-${safeName}`;
      const response = await fetch(asset.uri);
      const buffer = await response.arrayBuffer();

      const { error: uploadError } = await supabase.storage
        .from("trip-documents")
        .upload(filePath, buffer, {
          contentType: "application/pdf",
          upsert: false,
        });
      if (uploadError) throw uploadError;

      await addTripPdfRecord({
        owner_id: userData.user.id,
        trip_id: session.trip_id,
        url: filePath,
        file_name: fileName,
        mime_type: "application/pdf",
        file_size_bytes: size,
      });
      await loadTripPdfs(session.trip_id);
      await track("trip_pdf_upload", { trip_id: session.trip_id, session_id: session.id });
    } catch (err: any) {
      const raw = String(err?.message || err || "").toLowerCase();
      if (raw.includes("mime") || raw.includes("not supported")) {
        setError("Ese tipo de PDF no está permitido en el bucket.");
      } else if (raw.includes("bucket") || raw.includes("not found")) {
        setError("No se encontró el bucket 'trip-documents' en Supabase.");
      } else if (
        raw.includes("policy") ||
        raw.includes("permission") ||
        raw.includes("not authorized") ||
        raw.includes("row-level security")
      ) {
        setError("No tienes permisos para subir documentos en este viaje.");
      } else if (raw.includes("[pdf:addrecord]")) {
        setError("No se pudo guardar el PDF en la base de datos del viaje.");
      } else {
        setError(err?.message || "No se pudo subir el documento.");
      }
    } finally {
      setIsUploadingPdf(false);
    }
  };

  const handleDownloadPdf = async (pdf: MediaRecord) => {
    if (!session) return;
    setError(null);
    setIsDownloadingPdfId(pdf.id);
    try {
      const storagePath = getStoragePathFromUrl(pdf.url);
      if (!storagePath) throw new Error("No se encontró la ruta del documento.");
      const signedUrl = await getSignedTripPdfUrl(storagePath, 120);
      await Linking.openURL(signedUrl);
    } catch (err: any) {
      const raw = String(err?.message || err || "").toLowerCase();
      if (
        raw.includes("policy") ||
        raw.includes("permission") ||
        raw.includes("not authorized") ||
        raw.includes("row-level security")
      ) {
        setError("No tienes permisos para descargar este documento.");
      } else if (raw.includes("[pdf:getsignedurl]")) {
        setError("No se pudo generar el enlace seguro de descarga.");
      } else {
        setError(err?.message || "No se pudo descargar el documento.");
      }
    } finally {
      setIsDownloadingPdfId(null);
    }
  };

  const handleDeletePdf = async (pdf: MediaRecord) => {
    if (!session || !canManageSession) return;
    setError(null);
    setIsDeletingPdfId(pdf.id);
    try {
      const storagePath = getStoragePathFromUrl(pdf.url);
      if (storagePath) {
        const { error: storageDeleteError } = await supabase.storage
          .from("trip-documents")
          .remove([storagePath]);
        if (storageDeleteError) throw storageDeleteError;
      }
      await removeTripPdfRecord(pdf.id);
      await loadTripPdfs(session.trip_id);
    } catch (err: any) {
      const raw = String(err?.message || err || "").toLowerCase();
      if (raw.includes("[pdf:removerecord]") || raw.includes("row-level security")) {
        setError("No tienes permisos para eliminar este documento.");
      } else {
        setError(err?.message || "No se pudo eliminar el documento.");
      }
    } finally {
      setIsDeletingPdfId(null);
    }
  };

  const formatFileSize = (bytes?: number | null) => {
    if (!bytes || bytes <= 0) return "Tamaño desconocido";
    if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={["top"]}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />}
        >
          <View style={styles.headerRow}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <ArrowLeft size={18} color="#111827" />
            </TouchableOpacity>
            <Text style={styles.title}>Viaje activo</Text>
            <View style={{ width: 36 }} />
          </View>

          {isLoading || !session ? (
            <AsyncStateView
              isLoading={isLoading}
              error={error}
              isEmpty={!isLoading && !error && !session}
              emptyText="No hay un viaje activo."
              onRetry={() => loadSession()}
            />
          ) : (
            <>
              <View style={styles.sessionMetaCard}>
                <Text style={styles.tripTitle}>{tripTitle}</Text>
                {tripDestination ? <Text style={styles.tripDestination}>{tripDestination}</Text> : null}
                <Text style={styles.sessionMetaTitle}>
                  {session.mode === "shared" ? "Modo colaborativo" : "Modo individual"}
                </Text>
                <Text style={styles.sessionMetaSub}>
                  {session.start_date} · {session.end_date}
                </Text>
                <Text style={styles.sessionMetaStatus}>Estado: {sessionStatusLabel}</Text>
              </View>

              {error ? (
                <View style={styles.inlineErrorBanner}>
                  <Text style={styles.inlineErrorText}>{error}</Text>
                </View>
              ) : null}

              <View style={styles.actionsRow}>
                <TouchableOpacity
                  style={[styles.actionBtn, styles.actionBtnPrimary, !canManageSession && styles.actionBtnDisabled]}
                  onPress={handlePauseResume}
                  disabled={isSaving || !canManageSession}
                >
                  <Text style={styles.actionBtnText}>{session.status === "active" ? "Pausar" : "Reanudar"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.actionBtn, styles.actionBtnDanger, !canManageSession && styles.actionBtnDisabled]}
                  onPress={handleFinish}
                  disabled={isSaving || !canManageSession}
                >
                  <Text style={styles.actionBtnText}>Finalizar</Text>
                </TouchableOpacity>
              </View>

              {canInviteToPlay && (
                <TouchableOpacity
                  style={styles.inviteButton}
                  onPress={handleInviteToPlay}
                  disabled={isInviting}
                >
                  <Text style={styles.inviteButtonText}>
                    {isInviting ? "Generando enlace..." : "Invitar al viaje activo"}
                  </Text>
                </TouchableOpacity>
              )}

              <View style={styles.summaryCard}>
                <Text style={styles.sectionTitle}>Resumen activo</Text>
                <TextInput
                  style={styles.summaryInput}
                  value={summaryDraft.highlights}
                  onChangeText={(value) => setSummaryDraft((prev) => ({ ...prev, highlights: value }))}
                  placeholder="Lo mejor"
                  editable={canManageSession}
                />
                <TextInput
                  style={styles.summaryInput}
                  value={summaryDraft.recommended_season}
                  onChangeText={(value) =>
                    setSummaryDraft((prev) => ({ ...prev, recommended_season: value }))
                  }
                  placeholder="Temporada recomendada"
                  editable={canManageSession}
                />
                <TextInput
                  style={styles.summaryInput}
                  value={summaryDraft.transport_notes}
                  onChangeText={(value) =>
                    setSummaryDraft((prev) => ({ ...prev, transport_notes: value }))
                  }
                  placeholder="Transporte"
                  editable={canManageSession}
                />
                <TextInput
                  style={styles.summaryInput}
                  value={summaryDraft.meeting_point}
                  onChangeText={(value) => setSummaryDraft((prev) => ({ ...prev, meeting_point: value }))}
                  placeholder="Punto de encuentro"
                  editable={canManageSession}
                />
                <TextInput
                  style={[styles.summaryInput, styles.summaryInputMultiline]}
                  value={summaryDraft.important_notes}
                  onChangeText={(value) =>
                    setSummaryDraft((prev) => ({ ...prev, important_notes: value }))
                  }
                  placeholder="Notas importantes"
                  editable={canManageSession}
                  multiline
                />
                {canManageSession && (
                  <TouchableOpacity style={styles.saveButton} onPress={handleSaveSummary}>
                    <Text style={styles.saveButtonText}>Guardar resumen</Text>
                  </TouchableOpacity>
                )}
              </View>

              <View style={styles.checklistCard}>
                <Text style={styles.sectionTitle}>Qué llevar</Text>
                {checklist.length === 0 ? (
                  <Text style={styles.emptyText}>No hay items todavía.</Text>
                ) : (
                  checklist.map((item) => (
                    <View key={item.id} style={styles.checklistRow}>
                      <TouchableOpacity
                        style={[styles.checklistToggle, item.completed && styles.checklistToggleActive]}
                        onPress={() => handleChecklistToggle(item)}
                        disabled={!canManageSession}
                      >
                        <Text style={styles.checklistToggleText}>{item.completed ? "✓" : ""}</Text>
                      </TouchableOpacity>
                      <TextInput
                        style={[styles.checklistInput, item.completed && styles.checklistInputDone]}
                        defaultValue={item.text}
                        editable={canManageSession}
                        onEndEditing={(event) =>
                          handleChecklistTextSave(item, event.nativeEvent.text || item.text)
                        }
                      />
                      {canManageSession && (
                        <TouchableOpacity
                          style={styles.removeChecklistButton}
                          onPress={() => handleChecklistRemove(item)}
                        >
                          <Trash2 size={14} color="#B91C1C" />
                        </TouchableOpacity>
                      )}
                    </View>
                  ))
                )}

                {canManageSession && (
                  <View style={styles.addChecklistRow}>
                    <TextInput
                      style={styles.newChecklistInput}
                      value={newChecklistText}
                      onChangeText={setNewChecklistText}
                      placeholder="Añadir item"
                    />
                    <TouchableOpacity style={styles.addChecklistButton} onPress={handleChecklistAdd}>
                      <Plus size={16} color="#FFFFFF" />
                    </TouchableOpacity>
                  </View>
                )}
              </View>

              <View style={styles.notificationConfigCard}>
                <Text style={styles.sectionTitle}>Notificaciones de esta sesión</Text>
                <View style={styles.switchRow}>
                  <Text style={styles.switchLabel}>Aviso 10 minutos antes</Text>
                  <Switch
                    value={notificationConfig.before_10m}
                    onValueChange={(value) => handleNotificationToggle("before_10m", value)}
                  />
                </View>
                <View style={styles.switchRow}>
                  <Text style={styles.switchLabel}>Inicio de actividad</Text>
                  <Switch
                    value={notificationConfig.start}
                    onValueChange={(value) => handleNotificationToggle("start", value)}
                  />
                </View>
                <View style={styles.switchRow}>
                  <Text style={styles.switchLabel}>Resumen diario</Text>
                  <Switch
                    value={notificationConfig.daily_summary}
                    onValueChange={(value) => handleNotificationToggle("daily_summary", value)}
                  />
                </View>
              </View>

              <View style={styles.pdfSection}>
                <View style={styles.pdfHeaderRow}>
                  <Text style={styles.sectionTitle}>Documentos del viaje</Text>
                  {canManageSession && (
                    <TouchableOpacity
                      style={styles.pdfUploadButton}
                      onPress={handleAddPdf}
                      disabled={isUploadingPdf}
                    >
                      <Plus size={14} color="#FFFFFF" />
                      <Text style={styles.pdfUploadButtonText}>
                        {isUploadingPdf ? "Subiendo..." : "Adjuntar PDF"}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
                {tripPdfs.length === 0 ? (
                  <Text style={styles.emptyText}>Aún no hay documentos.</Text>
                ) : (
                  tripPdfs.map((pdf) => (
                    <View key={pdf.id} style={styles.pdfCard}>
                      <View style={styles.pdfMeta}>
                        <FileText size={16} color="#1F2937" />
                        <View style={styles.pdfMetaTextWrap}>
                          <Text style={styles.pdfTitle}>{pdf.file_name || "Documento.pdf"}</Text>
                          <Text style={styles.pdfSubtitle}>{formatFileSize(pdf.file_size_bytes)}</Text>
                        </View>
                      </View>
                      <View style={styles.pdfActions}>
                        <TouchableOpacity
                          style={styles.pdfDownloadButton}
                          onPress={() => handleDownloadPdf(pdf)}
                          disabled={isDownloadingPdfId === pdf.id}
                        >
                          <Download size={14} color="#1F2937" />
                          <Text style={styles.pdfDownloadText}>
                            {isDownloadingPdfId === pdf.id ? "Descargando..." : "Descargar"}
                          </Text>
                        </TouchableOpacity>
                        {canManageSession && (
                          <TouchableOpacity
                            style={styles.pdfDeleteButton}
                            onPress={() => handleDeletePdf(pdf)}
                            disabled={isDeletingPdfId === pdf.id}
                          >
                            <Trash2 size={14} color="#FFFFFF" />
                            <Text style={styles.pdfDeleteText}>
                              {isDeletingPdfId === pdf.id ? "Eliminando..." : "Eliminar"}
                            </Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                  ))
                )}
              </View>

              {isSaving ? <ActivityIndicator size="small" color="#2563EB" style={{ marginBottom: 10 }} /> : null}

              {groupedStops.map(([day, dayStops]) => (
                <View key={day} style={styles.daySection}>
                  <Text style={styles.dayTitle}>Día {day}</Text>
                  {dayStops.map((stop) => (
                    <View key={stop.id} style={styles.stopCard}>
                      <View style={styles.stopHeader}>
                        <Text style={styles.stopTitle}>{stop.title}</Text>
                        {stop.is_completed ? <Text style={styles.badgeDone}>Completada</Text> : null}
                      </View>
                      <Text style={styles.stopMeta}>
                        {stop.start_time_text || "--:--"} - {stop.end_time_text || "--:--"}
                      </Text>
                      <Text style={styles.stopAddress}>{stop.address || "Sin dirección"}</Text>

                      <View style={styles.row}>
                        <TouchableOpacity
                          style={[styles.miniBtn, !canManageSession && styles.actionBtnDisabled]}
                          onPress={() => handleMove(stop, -1)}
                          disabled={!canManageSession}
                        >
                          <ArrowUp size={14} color="#374151" />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[styles.miniBtn, !canManageSession && styles.actionBtnDisabled]}
                          onPress={() => handleMove(stop, 1)}
                          disabled={!canManageSession}
                        >
                          <ArrowDown size={14} color="#374151" />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[styles.doneBtn, !canManageSession && styles.actionBtnDisabled]}
                          onPress={() => handleToggleDone(stop)}
                          disabled={!canManageSession}
                        >
                          <Text style={styles.doneBtnText}>{stop.is_completed ? "Desmarcar" : "Completar"}</Text>
                        </TouchableOpacity>
                        <TextInput
                          style={[styles.input, styles.inputPoints, !canManageSession && styles.inputDisabled]}
                          value={`${stop.points_live}`}
                          onChangeText={(value) => handleUpdatePointsLocal(stop.id, value)}
                          keyboardType="numeric"
                          placeholder="Pts"
                          editable={canManageSession}
                        />
                      </View>

                      <TextInput
                        style={[styles.input, styles.inputNotes, !canManageSession && styles.inputDisabled]}
                        value={stop.notes_live || ""}
                        onChangeText={(value) => handleUpdateNotes(stop, value)}
                        placeholder="Notas rápidas de esta parada"
                        multiline
                        editable={canManageSession}
                      />

                      {canManageSession && (
                        <TouchableOpacity
                          style={[styles.doneBtn, { alignSelf: "flex-end", marginTop: 8 }]}
                          onPress={() => handleSaveLive(stop)}
                        >
                          <Text style={styles.doneBtnText}>Guardar cambios</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  ))}
                </View>
              ))}
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
