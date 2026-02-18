/**
 * Pantalla de detalle con la informacion completa del viaje.
 */
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Animated,
  Easing,
  Image,
  KeyboardAvoidingView,
  Linking,
  Modal,
  Platform,
  Pressable,
  Share,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useFocusEffect } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/RootNavigator";
import {
  Mountain,
  Heart,
  MessageCircle,
  Pencil,
  Play,
  Plus,
  Share2,
  FileText,
  Download,
  Settings,
} from "lucide-react-native";
import { Trash2 } from "lucide-react-native";
import MapView, { Marker, PROVIDER_DEFAULT, Region } from "react-native-maps";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import * as Clipboard from "expo-clipboard";
import styles from "./TripDetailScreen.styles";
import { supabase } from "../lib/supabase";
import {
  addTripPdfRecord,
  addTripMediaRecord,
  createTripComment,
  createTripInviteLink,
  createTripReply,
  deleteTripComment,
  deleteTripCompletely,
  getTripById,
  getTripCollaborators,
  getTripCommentsThread,
  getTripLikeState,
  getTripMedia,
  getSignedTripPdfUrl,
  getTripStops,
  getTripTags,
  MediaRecord,
  removeTripPdfRecord,
  TripCommentRecord,
  TripDetails,
  TripRecord,
  TripStopRecord,
  toggleTripLike,
  updateTripCoverImage,
  updateTripVisibility,
  removeTripMediaRecord,
  removeCollaborator,
} from "../services/trips.service";
import { getProfilesByIds, ProfileRecord } from "../services/profiles.service";
import { resolveLocalCityCenter } from "../services/localPlaces.service";
import { formatStopTimeRange } from "../utils/timeFormat";
import { normalizeImageForUpload } from "../utils/mediaUpload";
import {
  canComment,
  canDeleteMedia,
  canDeletePdf,
  canDeleteTrip,
  canDownloadPdf,
  canEditTrip,
  canInviteToPlaySession,
  canLike,
  canUploadMedia,
  canUploadPdf,
} from "../constants/permissions";
import { track } from "../services/analytics.service";
import AsyncStateView from "../components/AsyncStateView";
import { getActivePlaySessionByTrip, PlaySessionRecord } from "../services/playTrips.service";
import {
  onboardingDemoMedia,
  onboardingDemoStops,
  onboardingDemoTags,
  onboardingDemoTrip,
} from "../mock/onboardingDemoTrip";

type Props = NativeStackScreenProps<RootStackParamList, "TripDetail">;

type CollaboratorRecord = { user_id: string; role: string; status: string };
type TripCommentView = TripCommentRecord & { authorLabel: string; mine: boolean };

const COMMENT_MAX_LENGTH = 500;
const MAX_PDF_SIZE_BYTES = 15 * 1024 * 1024;

export default function TripDetailScreen({ navigation, route }: Props) {
  const tripId = route.params?.tripId;
  const source = route.params?.source;
  const isOnboardingDemo = route.params?.demoTrip === "onboarding";

  const [trip, setTrip] = useState<TripRecord | null>(null);
  const [stops, setStops] = useState<TripStopRecord[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [tripMedia, setTripMedia] = useState<MediaRecord[]>([]);
  const [tripPdfs, setTripPdfs] = useState<MediaRecord[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageFrameWidth, setImageFrameWidth] = useState(0);
  const [collabRows, setCollabRows] = useState<CollaboratorRecord[]>([]);
  const [collaboratorProfiles, setCollaboratorProfiles] = useState<ProfileRecord[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSavingVisibility, setIsSavingVisibility] = useState(false);
  const [isUploadingMedia, setIsUploadingMedia] = useState(false);
  const [isDeletingTrip, setIsDeletingTrip] = useState(false);
  const [isLeavingSharedTrip, setIsLeavingSharedTrip] = useState(false);
  const [isTripSettingsOpen, setIsTripSettingsOpen] = useState(false);
  const [isUploadingPdf, setIsUploadingPdf] = useState(false);
  const [isDownloadingPdfId, setIsDownloadingPdfId] = useState<string | null>(null);
  const [isDeletingPdfId, setIsDeletingPdfId] = useState<string | null>(null);
  const [likedByMe, setLikedByMe] = useState(false);
  const [isTogglingLike, setIsTogglingLike] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [comments, setComments] = useState<TripCommentView[]>([]);
  const [isLoadingComments, setIsLoadingComments] = useState(false);
  const [commentDraft, setCommentDraft] = useState("");
  const [replyTarget, setReplyTarget] = useState<{ id: string; author: string } | null>(null);
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activePlaySession, setActivePlaySession] = useState<PlaySessionRecord | null>(null);
  const [isCreatingPlayInvite, setIsCreatingPlayInvite] = useState(false);

  const scrollY = useRef(new Animated.Value(0)).current;
  const lastScrollY = useRef(0);
  const [tabBarVisible, setTabBarVisible] = useState(true);
  const barTranslate = useRef(new Animated.Value(0)).current;
  const barOpacity = useRef(new Animated.Value(1)).current;

  const getTagVariant = (tag: string) => {
    const lower = tag.toLowerCase();
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

  const loadTripDetail = React.useCallback(async () => {
    if (isOnboardingDemo) {
      setIsLoading(true);
      setError(null);
      setCurrentUserId(null);
      setTrip(onboardingDemoTrip);
      setStops(onboardingDemoStops);
      setTags(onboardingDemoTags);
      setCollabRows([]);
      setCollaboratorProfiles([]);
      setTripMedia(onboardingDemoMedia);
      setTripPdfs([]);
      setLikedByMe(false);
      setComments([]);
      setCommentDraft("");
      setReplyTarget(null);
      setActiveImageIndex(0);
      setIsLoading(false);
      return;
    }

    if (!tripId) {
      setError("No se ha encontrado el viaje.");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const [{ data: userData }, tripData, stopData, tagData, collabData, mediaData, playSessionData] =
        await Promise.all([
          supabase.auth.getUser(),
          getTripById(tripId),
          getTripStops(tripId),
          getTripTags(tripId),
          getTripCollaborators(tripId),
          getTripMedia(tripId),
          getActivePlaySessionByTrip(tripId),
        ]);

      setCurrentUserId(userData.user?.id ?? null);
      setTrip(tripData);
      setStops(stopData);
      setTags(tagData);
      setCollabRows(collabData);
      setTripMedia(mediaData.filter((item) => item.kind !== "pdf"));
      setTripPdfs(mediaData.filter((item) => item.kind === "pdf"));
      setActivePlaySession(playSessionData);
      setActiveImageIndex(0);
      setCommentDraft("");
      setReplyTarget(null);

      const collaboratorIds = collabData
        .filter((row) => row.status === "invited" || row.status === "accepted")
        .map((row) => row.user_id);

      if (collaboratorIds.length > 0) {
        const profiles = await getProfilesByIds(collaboratorIds);
        setCollaboratorProfiles(
          profiles.sort((a, b) => collaboratorIds.indexOf(a.id) - collaboratorIds.indexOf(b.id))
        );
      } else {
        setCollaboratorProfiles([]);
      }

      const likeState = await getTripLikeState(tripId, userData.user?.id ?? null);
      setLikedByMe(likeState.likedByMe);
    } catch (err: any) {
      setError(err?.message || "No se pudo cargar el detalle del viaje.");
      setTrip(null);
      setStops([]);
      setTags([]);
      setCollabRows([]);
      setCollaboratorProfiles([]);
      setTripMedia([]);
      setTripPdfs([]);
      setActivePlaySession(null);
      setLikedByMe(false);
      setComments([]);
      setReplyTarget(null);
    } finally {
      setIsLoading(false);
    }
  }, [isOnboardingDemo, tripId]);

  useFocusEffect(
    React.useCallback(() => {
      loadTripDetail();
      return undefined;
    }, [loadTripDetail])
  );

  const markers = stops.filter((stop) => stop.latitude != null && stop.longitude != null);

  const mapRegion: Region = useMemo(() => {
    if (markers.length > 0) {
      return {
        latitude: markers[0].latitude as number,
        longitude: markers[0].longitude as number,
        latitudeDelta: 0.08,
        longitudeDelta: 0.08,
      };
    }
    const cityRegion = resolveLocalCityCenter((trip?.destination || trip?.title || "").trim());
    if (cityRegion) {
      return {
        latitude: cityRegion.latitude,
        longitude: cityRegion.longitude,
        latitudeDelta: 0.18,
        longitudeDelta: 0.18,
      };
    }
    return {
      latitude: 40.4168,
      longitude: -3.7038,
      latitudeDelta: 7.0,
      longitudeDelta: 7.0,
    };
  }, [markers, trip?.destination, trip?.title]);

  const isOwner = Boolean(trip && currentUserId && trip.owner_id === currentUserId);
  const isAcceptedCollaborator = Boolean(
    currentUserId &&
      collabRows.some((row) => row.user_id === currentUserId && row.status === "accepted")
  );
  const currentCollabRole =
    (collabRows.find((row) => row.user_id === currentUserId && row.status === "accepted")
      ?.role as "viewer" | "editor" | undefined) || null;
  const permissionInput = {
    source,
    isOwner,
    isAcceptedCollaborator,
    collabRole: currentCollabRole,
    visibility: trip?.visibility ?? null,
  } as const;
  const allowEditTrip = canEditTrip(permissionInput);
  const allowDeleteTrip = canDeleteTrip(permissionInput);
  const allowUploadMedia = canUploadMedia(permissionInput);
  const allowDeleteMedia = canDeleteMedia(permissionInput);
  const allowUploadPdf = canUploadPdf(permissionInput);
  const allowDeletePdf = canDeletePdf(permissionInput);
  const allowDownloadPdf = canDownloadPdf(permissionInput);
  const allowLike = canLike(permissionInput);
  const allowComment = canComment(permissionInput);
  const allowInviteToPlay = canInviteToPlaySession(permissionInput);
  const allowPublicDiscoverComment =
    source === "discover" && trip?.visibility === "public";
  const allowCommentAction = allowComment || allowPublicDiscoverComment;
  const canShowPlayInviteCta = Boolean(
    tripId &&
      activePlaySession &&
      activePlaySession.mode === "shared" &&
      activePlaySession.status !== "completed" &&
      activePlaySession.status !== "cancelled" &&
      allowInviteToPlay &&
      (source !== "discover" || allowInviteToPlay)
  );

  const canEditVisibility = Boolean(
    tripId && source === "my" && currentUserId && trip && trip.owner_id === currentUserId
  );

  const canUploadMediaAction = Boolean(trip && allowUploadMedia);
  const canDeleteMediaAction = Boolean(trip && allowDeleteMedia);
  const canUploadPdfAction = Boolean(trip && allowUploadPdf);
  const canLeaveSharedTrip = Boolean(
    source === "my_shared" &&
      tripId &&
      currentUserId &&
      isAcceptedCollaborator &&
      !isOwner
  );
  const canShowTripSettings = Boolean(allowDeleteTrip || canLeaveSharedTrip);

  const tripVisibility = trip?.visibility ?? "public";

  const handleVisibilityChange = async (visibility: "public" | "private") => {
    if (!tripId || !canEditVisibility || isSavingVisibility || tripVisibility === visibility) {
      return;
    }

    setIsSavingVisibility(true);
    try {
      const updated = await updateTripVisibility(tripId, visibility);
      setTrip(updated);
    } catch (err: any) {
      setError(err?.message || "No se pudo actualizar la visibilidad.");
    } finally {
      setIsSavingVisibility(false);
    }
  };

  const handleAddMedia = async () => {
    if (!tripId || !currentUserId || !canUploadMediaAction || isUploadingMedia) {
      return;
    }

    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      setError("Debes permitir acceso a la galeria para subir fotos.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsMultipleSelection: true,
      selectionLimit: 10,
      quality: 0.9,
    });

    if (result.canceled || !result.assets?.length) {
      return;
    }

    setIsUploadingMedia(true);
    setError(null);

    try {
      for (let index = 0; index < result.assets.length; index += 1) {
        const asset = result.assets[index];
        const normalizedImage = await normalizeImageForUpload(asset, { quality: 0.85 });
        const extension = normalizedImage.extension;
        const filePath = `${currentUserId}/${tripId}/${Date.now()}-${index}.${extension}`;

        const response = await fetch(normalizedImage.uri);
        const buffer = await response.arrayBuffer();

        const { error: uploadError } = await supabase.storage
          .from("trip-media")
          .upload(filePath, buffer, {
            contentType: normalizedImage.mimeType,
            upsert: false,
          });

        if (uploadError) {
          throw uploadError;
        }

        const { data: publicData } = supabase.storage.from("trip-media").getPublicUrl(filePath);

        await addTripMediaRecord({
          owner_id: currentUserId,
          trip_id: tripId,
          kind: "image",
          url: publicData.publicUrl,
        });
      }

      const mediaData = await getTripMedia(tripId);
      const imageData = mediaData.filter((item) => item.kind !== "pdf");
      setTripMedia(imageData);
      setTripPdfs(mediaData.filter((item) => item.kind === "pdf"));
      setActiveImageIndex(0);
      if ((!trip?.cover_image_url || trip.cover_image_url.trim() === "") && imageData.length > 0) {
        const updatedTrip = await updateTripCoverImage(tripId, imageData[0].url);
        setTrip(updatedTrip);
      }
    } catch (err: any) {
      setError(err?.message || "No se pudieron subir las fotos.");
    } finally {
      setIsUploadingMedia(false);
    }
  };

  const getStoragePathFromUrl = (url: string, bucket: "trip-media" | "trip-documents") => {
    if (!url) return null;
    const publicMarker = `/storage/v1/object/public/${bucket}/`;
    const signMarker = `/storage/v1/object/sign/${bucket}/`;
    const rawMarker = `/storage/v1/object/${bucket}/`;
    const marker = [publicMarker, signMarker, rawMarker].find((candidate) =>
      url.includes(candidate)
    );
    if (marker) {
      const markerIndex = url.indexOf(marker);
      const raw = url.slice(markerIndex + marker.length).split("?")[0];
      return decodeURIComponent(raw);
    }
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return null;
    }
    return url;
  };

  const handleDeleteCurrentMedia = async () => {
    if (!tripId || !canDeleteMediaAction || tripMedia.length === 0 || isUploadingMedia) {
      return;
    }

    const current = tripMedia[activeImageIndex] || tripMedia[0];
    if (!current) return;

    setIsUploadingMedia(true);
    setError(null);
    try {
      const storagePath = getStoragePathFromUrl(current.url, "trip-media");
      if (storagePath) {
        const { error: storageDeleteError } = await supabase.storage
          .from("trip-media")
          .remove([storagePath]);
        if (storageDeleteError) {
          throw storageDeleteError;
        }
      }

      await removeTripMediaRecord(current.id);

      const nextMedia = tripMedia.filter((item) => item.id !== current.id);
      setTripMedia(nextMedia);
      setActiveImageIndex((prev) => {
        if (nextMedia.length === 0) return 0;
        return Math.min(prev, nextMedia.length - 1);
      });

      const nextCover = nextMedia.length > 0 ? nextMedia[0].url : null;
      const updatedTrip = await updateTripCoverImage(tripId, nextCover);
      setTrip(updatedTrip);
    } catch (err: any) {
      setError(err?.message || "No se pudo eliminar la foto.");
    } finally {
      setIsUploadingMedia(false);
    }
  };

  const handleDeleteTrip = () => {
    if (!tripId || !currentUserId || !allowDeleteTrip || isDeletingTrip) return;
    Alert.alert(
      "Eliminar viaje",
      "Esta acción no se puede deshacer. ¿Quieres eliminar este viaje?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: async () => {
            try {
              setIsDeletingTrip(true);
              setError(null);
              await deleteTripCompletely(tripId, currentUserId);
              navigation.goBack();
            } catch (err: any) {
              setError(err?.message || "No se pudo eliminar el viaje.");
            } finally {
              setIsDeletingTrip(false);
            }
          },
        },
      ]
    );
  };

  const closeTripSettings = () => {
    setIsTripSettingsOpen(false);
  };

  const handleLeaveSharedTrip = () => {
    if (!tripId || !currentUserId || !canLeaveSharedTrip || isLeavingSharedTrip) return;
    Alert.alert(
      "Abandonar viaje compartido",
      "Dejarás de ver este viaje en Compartidos. ¿Quieres continuar?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Abandonar",
          style: "destructive",
          onPress: async () => {
            try {
              setIsLeavingSharedTrip(true);
              setError(null);
              await removeCollaborator(tripId, currentUserId);
              navigation.reset({
                index: 0,
                routes: [{ name: "Tabs", params: { targetTab: "my_trips" } }],
              });
            } catch (err: any) {
              setError(err?.message || "No se pudo abandonar el viaje compartido.");
            } finally {
              setIsLeavingSharedTrip(false);
            }
          },
        },
      ]
    );
  };

  const handleAddPdf = async () => {
    if (!tripId || !currentUserId || !canUploadPdfAction || isUploadingPdf) {
      return;
    }

    setError(null);
    const result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
      multiple: false,
      copyToCacheDirectory: true,
    });

    if (result.canceled || !result.assets?.length) {
      return;
    }

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
      const safeName = lowerFileName.replace(/[^a-z0-9._-]/g, "-");
      const filePath = `${tripId}/${currentUserId}/${Date.now()}-${safeName}`;
      const response = await fetch(asset.uri);
      const buffer = await response.arrayBuffer();

      const { error: uploadError } = await supabase.storage
        .from("trip-documents")
        .upload(filePath, buffer, {
          contentType: "application/pdf",
          upsert: false,
        });

      if (uploadError) {
        throw uploadError;
      }

      await addTripPdfRecord({
        owner_id: currentUserId,
        trip_id: tripId,
        url: filePath,
        file_name: fileName,
        mime_type: "application/pdf",
        file_size_bytes: size,
      });

      const mediaData = await getTripMedia(tripId);
      setTripMedia(mediaData.filter((item) => item.kind !== "pdf"));
      setTripPdfs(mediaData.filter((item) => item.kind === "pdf"));
      await track("trip_pdf_upload", { trip_id: tripId });
    } catch (err: any) {
      const raw = String(err?.message || err || "").toLowerCase();
      if (raw.includes("bucket") || raw.includes("not found")) {
        setError("No se encontró el bucket 'trip-documents' en Supabase.");
      } else if (raw.includes("mime") || raw.includes("not supported")) {
        setError("Ese tipo de PDF no está permitido en el bucket.");
      } else if (
        raw.includes("policy") ||
        raw.includes("permission") ||
        raw.includes("not authorized") ||
        raw.includes("jwt") ||
        raw.includes("row-level security")
      ) {
        setError("No tienes permisos para subir PDF en este viaje.");
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
    if (source === "discover") {
      setError("Los documentos no están disponibles desde Descubrir.");
      return;
    }
    if (!allowDownloadPdf) {
      setError("No tienes permisos para descargar este PDF.");
      return;
    }
    if (!ensureAuthenticated()) return;
    setError(null);
    setIsDownloadingPdfId(pdf.id);
    try {
      const storagePath = getStoragePathFromUrl(pdf.url, "trip-documents");
      if (!storagePath) {
        throw new Error("No se encontró la ruta del documento.");
      }
      const signedUrl = await getSignedTripPdfUrl(storagePath, 120);
      await Linking.openURL(signedUrl);
    } catch (err: any) {
      const raw = String(err?.message || err || "").toLowerCase();
      if (
        raw.includes("policy") ||
        raw.includes("permission") ||
        raw.includes("not authorized") ||
        raw.includes("jwt") ||
        raw.includes("row-level security")
      ) {
        setError("No tienes permisos para descargar este PDF.");
      } else if (raw.includes("[pdf:getsignedurl]")) {
        setError("No se pudo generar el enlace seguro de descarga.");
      } else {
        setError("No se pudo descargar el documento.");
      }
    } finally {
      setIsDownloadingPdfId(null);
    }
  };

  const handleDeletePdf = async (pdf: MediaRecord) => {
    if (!tripId || !currentUserId || !allowDeletePdf) return;

    setError(null);
    setIsDeletingPdfId(pdf.id);
    try {
      const storagePath = getStoragePathFromUrl(pdf.url, "trip-documents");
      if (storagePath) {
        const { error: storageDeleteError } = await supabase.storage
          .from("trip-documents")
          .remove([storagePath]);
        if (storageDeleteError) {
          throw storageDeleteError;
        }
      }

      await removeTripPdfRecord(pdf.id);
      const mediaData = await getTripMedia(tripId);
      setTripMedia(mediaData.filter((item) => item.kind !== "pdf"));
      setTripPdfs(mediaData.filter((item) => item.kind === "pdf"));
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

  const normalizeCommentError = (err: any, mode: "comment" | "reply") => {
    const raw = String(err?.message || err || "").toLowerCase();
    if (raw.includes("jwt") || raw.includes("auth") || raw.includes("permission")) {
      return "Necesitas iniciar sesión para continuar.";
    }
    if (raw.includes("policy") || raw.includes("rls") || raw.includes("not allowed")) {
      return mode === "reply"
        ? "No tienes permisos para responder este comentario."
        : "No tienes permisos para publicar comentarios en este viaje.";
    }
    if (raw.includes("network") || raw.includes("fetch") || raw.includes("timeout")) {
      return "Error de red. Inténtalo de nuevo.";
    }
    return mode === "reply"
      ? "No se pudo publicar la respuesta."
      : "No se pudo publicar el comentario.";
  };

  const closeComments = () => {
    setIsCommentsOpen(false);
    setReplyTarget(null);
    setCommentDraft("");
  };

  const ensureAuthenticated = () => {
    if (currentUserId) return true;
    navigation.navigate("Auth");
    return false;
  };

  const loadComments = React.useCallback(async () => {
    if (!tripId) return;

    setIsLoadingComments(true);
    try {
      const rows = await getTripCommentsThread(tripId);
      const userIds = Array.from(new Set(rows.map((row) => row.user_id)));
      const profiles = await getProfilesByIds(userIds);
      const profileById = new Map(
        profiles.map((profile) => [
          profile.id,
          (profile.full_name || profile.username || "Usuario").trim() || "Usuario",
        ])
      );

      const enriched = rows.map((row) => ({
        ...row,
        authorLabel: profileById.get(row.user_id) || "Usuario",
        mine: Boolean(currentUserId && row.user_id === currentUserId),
      }));
      const roots = enriched
        .filter((row) => !row.parent_comment_id)
        .sort((a, b) => a.created_at.localeCompare(b.created_at));
      const replies = enriched
        .filter((row) => row.parent_comment_id)
        .sort((a, b) => {
          const parentCompare = (a.parent_comment_id || "").localeCompare(b.parent_comment_id || "");
          if (parentCompare !== 0) return parentCompare;
          return a.created_at.localeCompare(b.created_at);
        });
      setComments([...roots, ...replies]);
    } catch (err: any) {
      setError(normalizeCommentError(err, "comment"));
    } finally {
      setIsLoadingComments(false);
    }
  }, [currentUserId, tripId]);

  const handlePrimaryAction = async () => {
    if (!tripId) {
      if (!isOnboardingDemo) return;
      try {
        await Share.share({
          message: `${tripTitle}\nhttps://kaeru.app`,
        });
      } catch (err: any) {
        setError(err?.message || "No se pudo compartir el viaje.");
      }
      return;
    }
    if (allowEditTrip) {
      navigation.navigate("CreateTrip", { mode: "edit", tripId });
      return;
    }

    try {
      const deepLink = `kaeru://trip/${tripId}`;
      const webLink = `https://kaeru.app/trips/${tripId}`;
      await Clipboard.setStringAsync(deepLink);
      await Share.share({
        message: `${tripTitle}\n${webLink}\n${deepLink}`,
      });
    } catch (err: any) {
      setError(err?.message || "No se pudo compartir el viaje.");
    }
  };

  const handleOpenPlay = () => {
    if (!tripId) return;
    if (!currentUserId) {
      navigation.navigate("Auth", {
        redirectTo: "play_trip",
        playTripTripId: tripId,
        playTripSource:
          source === "my_shared" ? "my_shared" : source === "my" ? "my" : "discover",
      });
      return;
    }
    navigation.navigate("PlayTripSetup", {
      tripId,
      source: source === "my_shared" ? "my_shared" : source === "my" ? "my" : "discover",
    });
  };

  const handleSharePlayInvite = async () => {
    if (!tripId || !canShowPlayInviteCta || isCreatingPlayInvite) return;
    setIsCreatingPlayInvite(true);
    try {
      const invite = await createTripInviteLink(tripId, "editor");
      const url = `kaeru://invite/${invite.invite_token}`;
      await Clipboard.setStringAsync(url);
      await Share.share({
        message: `Únete al viaje en Kaeru:\n${url}`,
        url,
      });
      await track("play_invite_link_created", { trip_id: tripId, session_id: activePlaySession?.id });
    } catch (err: any) {
      const message = String(err?.message || err || "").replace("[invite:create] ", "").trim();
      setError(message || "No se pudo crear el enlace de invitación.");
    } finally {
      setIsCreatingPlayInvite(false);
    }
  };

  const handleToggleLike = async () => {
    if (!tripId || isTogglingLike || !allowLike) return;
    if (!ensureAuthenticated() || !currentUserId) return;

    const nextLiked = !likedByMe;
    setIsTogglingLike(true);
    setLikedByMe(nextLiked);

    try {
      await toggleTripLike(tripId, currentUserId, likedByMe);
    } catch (err: any) {
      setLikedByMe((prev) => !prev);
      setError(err?.message || "No se pudo actualizar el like.");
    } finally {
      setIsTogglingLike(false);
    }
  };

  const openComments = async () => {
    if (!allowCommentAction) {
      setError("No tienes permisos para comentar este viaje.");
      return;
    }
    if (!ensureAuthenticated()) return;
    setIsCommentsOpen(true);
    await loadComments();
  };

  const handleSubmitComment = async () => {
    if (!tripId || !currentUserId || isSubmittingComment) return;
    const normalized = commentDraft.trim();
    if (!normalized) return;
    if (normalized.length > COMMENT_MAX_LENGTH) {
      setError(`El texto no puede superar ${COMMENT_MAX_LENGTH} caracteres.`);
      return;
    }

    setIsSubmittingComment(true);
    try {
      if (replyTarget) {
        await createTripReply(tripId, currentUserId, replyTarget.id, normalized);
        await track("trip_comment_create", { trip_id: tripId, type: "reply" });
      } else {
        await createTripComment(tripId, currentUserId, normalized);
        await track("trip_comment_create", { trip_id: tripId, type: "comment" });
      }
      setCommentDraft("");
      setReplyTarget(null);
      await loadComments();
    } catch (err: any) {
      setError(normalizeCommentError(err, replyTarget ? "reply" : "comment"));
    } finally {
      setIsSubmittingComment(false);
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    if (!currentUserId || isSubmittingComment) return;
    setIsSubmittingComment(true);
    try {
      await deleteTripComment(commentId, currentUserId);
      setComments((prev) => prev.filter((item) => item.id !== commentId));
      setReplyTarget((prev) => (prev?.id === commentId ? null : prev));
    } catch (err: any) {
      setError("No se pudo eliminar el comentario. Inténtalo de nuevo.");
    } finally {
      setIsSubmittingComment(false);
    }
  };

  const tripTitle = trip?.title ?? "Viaje";
  const tripBudget = trip?.estimated_budget_text ?? "-";
  const tripPoints = stops.length ? `${stops.length} puntos` : "0 puntos";
  const tripDurationDays = (() => {
    if (!trip?.start_date || !trip?.end_date) return null;
    const start = new Date(`${trip.start_date}T00:00:00`);
    const end = new Date(`${trip.end_date}T00:00:00`);
    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return null;
    const diffMs = end.getTime() - start.getTime();
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
    return days > 0 ? days : null;
  })();
  const tripDurationLabel = tripDurationDays ? `${tripDurationDays} días` : "Plan flexible";
  const tripTags = tags.length > 0 ? tags : ["Sin etiquetas"];
  const tripDescription =
    trip?.description?.trim() ||
    (trip?.destination
      ? `Ruta por ${trip.destination}, con planes y paradas personalizadas.`
      : "Este viaje aun no tiene descripcion.");
  const tripDetails = (trip?.details || {}) as TripDetails;
  const detailRows = [
    { label: "Lo mejor", value: tripDetails.highlights?.trim() || "" },
    { label: "Temporada recomendada", value: tripDetails.recommended_season?.trim() || "" },
    { label: "Transporte", value: tripDetails.transport_notes?.trim() || "" },
    { label: "Punto de encuentro", value: tripDetails.meeting_point?.trim() || "" },
    { label: "Notas importantes", value: tripDetails.important_notes?.trim() || "" },
  ].filter((row) => row.value.length > 0);
  const detailChecklist = Array.isArray(tripDetails.checklist)
    ? tripDetails.checklist
        .map((item) => (typeof item === "string" ? item.trim() : ""))
        .filter((item) => item.length > 0)
    : [];

  const formatFileSize = (bytes?: number | null) => {
    if (!bytes || bytes <= 0) return "Tamaño desconocido";
    if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };
  const rootComments = comments.filter((comment) => !comment.parent_comment_id);
  const repliesByParent = new Map<string, TripCommentView[]>();
  comments
    .filter((comment) => comment.parent_comment_id)
    .forEach((comment) => {
      const parentId = comment.parent_comment_id as string;
      const rows = repliesByParent.get(parentId) || [];
      rows.push(comment);
      repliesByParent.set(parentId, rows);
    });

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: false,
      listener: (event: any) => {
        const currentY = event.nativeEvent.contentOffset.y;
        if (currentY > lastScrollY.current && currentY > 50) {
          setTabBarVisible(false);
        } else if (currentY < lastScrollY.current) {
          setTabBarVisible(true);
        }
        lastScrollY.current = currentY;
      },
    }
  );

  useEffect(() => {
    Animated.parallel([
      Animated.timing(barTranslate, {
        toValue: tabBarVisible ? 0 : 70,
        duration: 240,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(barOpacity, {
        toValue: tabBarVisible ? 1 : 0,
        duration: 220,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  }, [barOpacity, barTranslate, tabBarVisible]);

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <View style={[styles.cloud, { left: 20, top: 20, width: 150, height: 60 }]} />
        <View style={[styles.cloud, { right: -20, top: 40, width: 120, height: 50 }]} />
      </View>

      <SafeAreaView edges={["top"]} style={styles.dragIndicatorContainer}>
        <View style={styles.dragIndicator} />
      </SafeAreaView>

      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.imageContainer}>
          <View
            style={styles.imageViewport}
            onLayout={(event) => {
              const width = event.nativeEvent.layout.width;
              if (width > 0 && width !== imageFrameWidth) {
                setImageFrameWidth(width);
              }
            }}
          >
            {tripMedia.length > 0 ? (
              <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={(event) => {
                  const width = event.nativeEvent.layoutMeasurement.width;
                  const offsetX = event.nativeEvent.contentOffset.x;
                  const nextIndex = Math.round(offsetX / width);
                  setActiveImageIndex(nextIndex);
                }}
              >
                {tripMedia.map((item) => (
                  <View
                    key={item.id}
                    style={{ width: imageFrameWidth || 320, height: 280, backgroundColor: "#111827" }}
                  >
                    <Image source={{ uri: item.url }} style={styles.mainImage} />
                  </View>
                ))}
              </ScrollView>
            ) : trip?.cover_image_url ? (
              <Image source={{ uri: trip.cover_image_url }} style={styles.mainImage} />
            ) : (
              <View style={styles.mainImagePlaceholder}>
                <Mountain size={80} color="white" />
                <Text style={styles.mainImageText}>{tripTitle}</Text>
              </View>
            )}
          </View>

          {canUploadMediaAction && (
            <Pressable
              style={styles.addMediaButton}
              onPress={handleAddMedia}
              accessibilityRole="button"
            >
              <Plus size={14} color="#FFFFFF" />
              <Text style={styles.addMediaText}>
                {isUploadingMedia ? "Subiendo..." : "Añadir fotos"}
              </Text>
            </Pressable>
          )}

          {canDeleteMediaAction && tripMedia.length > 0 && (
            <Pressable
              style={styles.deleteMediaButton}
              onPress={handleDeleteCurrentMedia}
              accessibilityRole="button"
            >
              <Trash2 size={14} color="#FFFFFF" />
            </Pressable>
          )}

          {canShowTripSettings && (
            <Pressable
              style={[
                styles.tripSettingsButton,
                canDeleteMediaAction && styles.tripSettingsButtonWithDelete,
              ]}
              onPress={() => setIsTripSettingsOpen(true)}
              accessibilityRole="button"
            >
              <Settings size={14} color="#FFFFFF" />
            </Pressable>
          )}

          {isUploadingMedia && (
            <View style={styles.uploadingOverlay}>
              <ActivityIndicator size="small" color="#FFFFFF" />
              <Text style={styles.uploadingText}>Subiendo imágenes...</Text>
            </View>
          )}

          <View style={styles.imageIndicators}>
            {(tripMedia.length > 0 ? tripMedia : [{ id: "placeholder" } as MediaRecord]).map(
              (item, index) => (
                <View
                  key={item.id}
                  style={[
                    styles.imageIndicator,
                    index === activeImageIndex && styles.imageIndicatorActive,
                  ]}
                />
              )
            )}
          </View>
        </View>

        {isLoading ? (
          <AsyncStateView isLoading loadingText="Cargando detalle del viaje..." />
        ) : error ? (
          <AsyncStateView isLoading={false} error={error} onRetry={loadTripDetail} />
        ) : (
          <>
            <View style={styles.tagsContainer}>
              {tripTags.map((tag) => {
                const variant = getTagVariant(tag);
                return (
                  <View
                    key={tag}
                    style={[
                      styles.tag,
                      variant === "people" && styles.tagPeople,
                      variant === "tourism" && styles.tagTourism,
                      variant === "food" && styles.tagFood,
                      variant === "default" && styles.tagDefault,
                    ]}
                  >
                    <Text
                      style={[
                        styles.tagText,
                        variant === "default" ? styles.tagTextMuted : styles.tagTextDark,
                      ]}
                    >
                      {tag}
                    </Text>
                  </View>
                );
              })}
            </View>

            <Text style={styles.tripTitle}>{tripTitle}</Text>

            <View style={styles.statsRow}>
              <View style={styles.statCard}>
                <Text style={styles.statLabel}>Presupuesto</Text>
                <Text style={styles.statValue}>{tripBudget}</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statLabel}>Paradas</Text>
                <Text style={styles.statValue}>{tripPoints}</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statLabel}>Duración</Text>
                <Text style={styles.statValue} numberOfLines={1}>
                  {tripDurationLabel}
                </Text>
              </View>
            </View>

            {canEditVisibility && (
              <View style={styles.visibilityRow}>
                <Text style={styles.visibilityLabel}>Visibilidad</Text>
                <View style={styles.visibilityOptions}>
                  <Pressable
                    style={[
                      styles.visibilityChip,
                      tripVisibility === "public" && styles.visibilityChipActive,
                    ]}
                    onPress={() => handleVisibilityChange("public")}
                    disabled={isSavingVisibility}
                  >
                    <Text
                      style={[
                        styles.visibilityChipText,
                        tripVisibility === "public" && styles.visibilityChipTextActive,
                      ]}
                    >
                      Publico
                    </Text>
                  </Pressable>
                  <Pressable
                    style={[
                      styles.visibilityChip,
                      tripVisibility === "private" && styles.visibilityChipActive,
                    ]}
                    onPress={() => handleVisibilityChange("private")}
                    disabled={isSavingVisibility}
                  >
                    <Text
                      style={[
                        styles.visibilityChipText,
                        tripVisibility === "private" && styles.visibilityChipTextActive,
                      ]}
                    >
                      Privado
                    </Text>
                  </Pressable>
                </View>
              </View>
            )}

            <View style={styles.divider} />

            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>{tripDescription}</Text>
            </View>

            {canShowPlayInviteCta ? (
              <Pressable
                style={styles.playInviteButton}
                onPress={handleSharePlayInvite}
                disabled={isCreatingPlayInvite}
              >
                <Text style={styles.playInviteButtonText}>
                  {isCreatingPlayInvite ? "Generando enlace..." : "Invitar al viaje activo"}
                </Text>
              </Pressable>
            ) : null}

            {(detailRows.length > 0 || detailChecklist.length > 0) && (
              <View style={styles.detailsSection}>
                <Text style={styles.sectionTitle}>Información del viaje</Text>
                <Text style={styles.detailsSubtitle}>Resumen rápido para tener todo claro.</Text>
                {detailRows.map((item) => (
                  <View key={item.label} style={styles.detailRow}>
                    <Text style={styles.detailLabel}>{item.label}</Text>
                    <Text style={styles.detailValue}>{item.value}</Text>
                  </View>
                ))}
                {detailChecklist.length > 0 && (
                  <View style={styles.detailChecklistWrap}>
                    <Text style={styles.detailLabel}>Checklist</Text>
                    {detailChecklist.map((item, index) => (
                      <View key={`${item}-${index}`} style={styles.checklistItem}>
                        <Text style={styles.checklistBullet}>•</Text>
                        <Text style={styles.checklistText}>{item}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            )}

            <View style={styles.mapSection}>
              <Text style={styles.sectionTitle}>Mapa del viaje</Text>
              <Pressable
                style={styles.mapContainer}
                onPress={() => navigation.navigate("TripMap", { tripId, demoTrip: route.params?.demoTrip })}
              >
                <View style={styles.mapPlaceholder}>
                  <MapView
                    style={{ flex: 1 }}
                    provider={PROVIDER_DEFAULT}
                    pointerEvents="none"
                    region={mapRegion}
                  >
                    {markers.map((stop) => (
                      <Marker
                        key={stop.id}
                        coordinate={{
                          latitude: stop.latitude as number,
                          longitude: stop.longitude as number,
                        }}
                        title={stop.title}
                        description={`${formatStopTimeRange(
                          stop.start_time_text,
                          stop.end_time_text
                        )} · ${stop.address || stop.place_name || ""}`}
                      />
                    ))}
                  </MapView>
                  <View style={styles.mapPreviewBadge}>
                    <Text style={styles.mapPreviewText}>Vista previa del mapa</Text>
                  </View>
                  {markers.length === 0 ? (
                    <Text style={styles.mapSubtext}>Añade paradas para ver marcadores</Text>
                  ) : null}
                </View>
              </Pressable>
            </View>

            <View style={styles.divider} />

            <View style={styles.itinerarySection}>
              <Text style={styles.sectionTitle}>Itinerario</Text>
              {stops.length > 0 ? (
                stops.map((stop, index) => (
                  <View key={stop.id} style={styles.itineraryItem}>
                    <View style={styles.dayBadge}>
                      <Text style={styles.dayText}>Parada {index + 1}</Text>
                    </View>
                    <View style={styles.itineraryContent}>
                      <Text style={styles.itineraryText}>{stop.title}</Text>
                      <Text style={styles.itineraryTime}>
                        {formatStopTimeRange(stop.start_time_text, stop.end_time_text)}
                      </Text>
                    </View>
                  </View>
                ))
              ) : (
                <View style={styles.itineraryItem}>
                  <View style={styles.dayBadge}>
                    <Text style={styles.dayText}>Sin paradas</Text>
                  </View>
                  <Text style={styles.itineraryText}>Este viaje aun no tiene itinerario.</Text>
                </View>
              )}
            </View>

            <View style={styles.divider} />

            {source !== "discover" ? (
              <View style={styles.pdfSection}>
                <View style={styles.pdfHeaderRow}>
                  <Text style={styles.pdfSectionTitle}>Documentos del viaje</Text>
                  {canUploadPdfAction && (
                    <Pressable
                      style={styles.pdfUploadButton}
                      onPress={handleAddPdf}
                      disabled={isUploadingPdf}
                    >
                      <Plus size={14} color="#FFFFFF" />
                      <Text style={styles.pdfUploadButtonText}>
                        {isUploadingPdf ? "Subiendo..." : "Adjuntar PDF"}
                      </Text>
                    </Pressable>
                  )}
                </View>

                {tripPdfs.length === 0 ? (
                  <Text style={styles.pdfEmptyText}>Aún no hay documentos.</Text>
                ) : (
                  tripPdfs.map((pdf) => {
                    const canDeletePdfAction = Boolean(allowDeletePdf);
                    return (
                      <View key={pdf.id} style={styles.pdfCard}>
                        <View style={styles.pdfMeta}>
                          <FileText size={18} color="#1F2937" />
                          <View style={styles.pdfMetaTextWrap}>
                            <Text style={styles.pdfTitle}>{pdf.file_name || "Documento.pdf"}</Text>
                            <Text style={styles.pdfSubtitle}>{formatFileSize(pdf.file_size_bytes)}</Text>
                          </View>
                        </View>
                        <View style={styles.pdfActions}>
                          <Pressable
                            style={styles.pdfDownloadButton}
                            onPress={() => handleDownloadPdf(pdf)}
                            disabled={isDownloadingPdfId === pdf.id}
                          >
                            <Download size={14} color="#1F2937" />
                            <Text style={styles.pdfDownloadText}>
                              {isDownloadingPdfId === pdf.id ? "Descargando..." : "Descargar"}
                            </Text>
                          </Pressable>
                          {canDeletePdfAction && (
                            <Pressable
                              style={styles.pdfDeleteButton}
                              onPress={() => handleDeletePdf(pdf)}
                              disabled={isDeletingPdfId === pdf.id}
                            >
                              <Trash2 size={14} color="#FFFFFF" />
                              <Text style={styles.pdfDeleteText}>
                                {isDeletingPdfId === pdf.id ? "Eliminando..." : "Eliminar"}
                              </Text>
                            </Pressable>
                          )}
                        </View>
                      </View>
                    );
                  })
                )}
              </View>
            ) : null}
          </>
        )}

        <View style={styles.bottomSpacer} />
      </Animated.ScrollView>

      <Animated.View
        style={[
          styles.floatingBar,
          {
            transform: [{ translateY: barTranslate }],
            opacity: barOpacity,
          },
        ]}
      >
        <Pressable
          onPress={source === "discover" ? handleOpenPlay : handlePrimaryAction}
          accessibilityRole="button"
        >
          <View style={styles.actionItem}>
            <View style={[styles.actionButton, styles.actionCopy]}>
              {source === "discover" ? (
                <Play size={18} color="#1E1E1E" />
              ) : allowEditTrip ? (
                <Pencil size={18} color="#1E1E1E" />
              ) : (
                <Share2 size={18} color="#1E1E1E" />
              )}
            </View>
          </View>
        </Pressable>
        {source === "my" || source === "my_shared" ? (
          <Pressable onPress={handleOpenPlay} accessibilityRole="button">
            <View style={styles.actionItem}>
              <View style={[styles.actionButton, styles.actionLike]}>
                <Play size={18} color="#1E1E1E" />
              </View>
            </View>
          </Pressable>
        ) : (
          <Pressable onPress={handleToggleLike} accessibilityRole="button">
            <View style={styles.actionItem}>
              <View
                style={[
                  styles.actionButton,
                  styles.actionLike,
                  likedByMe && styles.actionLikeActive,
                ]}
              >
                <Heart
                  size={18}
                  color={likedByMe ? "#FFFFFF" : "#1E1E1E"}
                  fill={likedByMe ? "#FFFFFF" : "transparent"}
                />
              </View>
            </View>
          </Pressable>
        )}
        <Pressable onPress={openComments} accessibilityRole="button">
          <View style={styles.actionItem}>
            <View style={[styles.actionButton, styles.actionAsk]}>
              <MessageCircle size={18} color="#1E1E1E" />
            </View>
          </View>
        </Pressable>
      </Animated.View>

      <Modal
        visible={isTripSettingsOpen}
        transparent
        animationType="fade"
        onRequestClose={closeTripSettings}
      >
        <View style={styles.tripSettingsBackdrop}>
          <Pressable style={styles.tripSettingsOverlayTap} onPress={closeTripSettings} />
          <View style={styles.tripSettingsSheet}>
            <Text style={styles.tripSettingsTitle}>Ajustes del viaje</Text>
            {allowDeleteTrip ? (
              <Pressable
                style={[
                  styles.tripSettingsDangerButton,
                  isDeletingTrip && styles.tripSettingsDangerButtonDisabled,
                ]}
                onPress={() => {
                  closeTripSettings();
                  handleDeleteTrip();
                }}
                disabled={isDeletingTrip}
              >
                <Trash2 size={16} color="#FFFFFF" />
                <Text style={styles.tripSettingsDangerText}>
                  {isDeletingTrip ? "Eliminando..." : "Eliminar viaje"}
                </Text>
              </Pressable>
            ) : null}
            {canLeaveSharedTrip ? (
              <Pressable
                style={[
                  styles.tripSettingsLeaveButton,
                  isLeavingSharedTrip && styles.tripSettingsDangerButtonDisabled,
                ]}
                onPress={() => {
                  closeTripSettings();
                  handleLeaveSharedTrip();
                }}
                disabled={isLeavingSharedTrip}
              >
                <Text style={styles.tripSettingsLeaveText}>
                  {isLeavingSharedTrip ? "Abandonando..." : "Abandonar viaje compartido"}
                </Text>
              </Pressable>
            ) : null}
            {!allowDeleteTrip && !canLeaveSharedTrip ? (
              <Text style={styles.tripSettingsInfoText}>
                No hay acciones de edición disponibles para este viaje.
              </Text>
            ) : null}
            <Pressable style={styles.tripSettingsCancelButton} onPress={closeTripSettings}>
              <Text style={styles.tripSettingsCancelText}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        visible={isCommentsOpen}
        transparent
        animationType="slide"
        onRequestClose={closeComments}
      >
        <View style={styles.commentsBackdrop}>
          <Pressable style={styles.commentsOverlayTap} onPress={closeComments} />
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            style={styles.commentsKeyboardWrap}
          >
            <View style={styles.commentsSheet}>
              <View style={styles.commentsHandle} />
              <Text style={styles.commentsTitle}>Comentarios</Text>
              {replyTarget ? (
                <View style={styles.replyBanner}>
                  <Text style={styles.replyBannerText}>Respondiendo a {replyTarget.author}</Text>
                  <Pressable onPress={() => setReplyTarget(null)}>
                    <Text style={styles.replyBannerCancel}>Cancelar</Text>
                  </Pressable>
                </View>
              ) : null}

              {isLoadingComments ? (
                <View style={styles.commentsLoading}>
                  <ActivityIndicator size="small" color="#111827" />
                </View>
              ) : comments.length === 0 ? (
                <Text style={styles.commentsEmptyText}>Aun no hay comentarios.</Text>
              ) : (
                <ScrollView
                  style={styles.commentsList}
                  contentContainerStyle={styles.commentsListContent}
                  keyboardShouldPersistTaps="handled"
                >
                  {rootComments.map((comment) => {
                    const replies = repliesByParent.get(comment.id) || [];
                    return (
                      <View key={comment.id} style={styles.commentThread}>
                        <View style={styles.commentCard}>
                          <View style={styles.commentHeader}>
                            <Text style={styles.commentAuthor}>{comment.authorLabel}</Text>
                            <View style={styles.commentActions}>
                              <Pressable
                                onPress={() =>
                                  setReplyTarget({ id: comment.id, author: comment.authorLabel })
                                }
                              >
                                <Text style={styles.commentReply}>Responder</Text>
                              </Pressable>
                              {comment.mine ? (
                                <Pressable onPress={() => handleDeleteComment(comment.id)}>
                                  <Text style={styles.commentDelete}>Eliminar</Text>
                                </Pressable>
                              ) : null}
                            </View>
                          </View>
                          <Text style={styles.commentBody}>{comment.content}</Text>
                        </View>
                        {replies.map((reply) => (
                          <View key={reply.id} style={styles.replyCard}>
                            <View style={styles.commentHeader}>
                              <Text style={styles.commentAuthor}>{reply.authorLabel}</Text>
                              {reply.mine ? (
                                <Pressable onPress={() => handleDeleteComment(reply.id)}>
                                  <Text style={styles.commentDelete}>Eliminar</Text>
                                </Pressable>
                              ) : null}
                            </View>
                            <Text style={styles.commentBody}>{reply.content}</Text>
                          </View>
                        ))}
                      </View>
                    );
                  })}
                </ScrollView>
              )}

              <View style={styles.commentComposer}>
                <TextInput
                  style={styles.commentInput}
                  placeholder={replyTarget ? "Escribe una respuesta" : "Escribe un comentario"}
                  placeholderTextColor="#9CA3AF"
                  value={commentDraft}
                  onChangeText={setCommentDraft}
                  multiline
                  maxLength={COMMENT_MAX_LENGTH}
                />
                <Pressable
                  style={[
                    styles.commentSendButton,
                    (!commentDraft.trim() || isSubmittingComment) && styles.commentSendButtonDisabled,
                  ]}
                  onPress={handleSubmitComment}
                  disabled={!commentDraft.trim() || isSubmittingComment}
                >
                  <Text style={styles.commentSendText}>
                    {isSubmittingComment ? "..." : "Enviar"}
                  </Text>
                </Pressable>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </View>
  );
}
