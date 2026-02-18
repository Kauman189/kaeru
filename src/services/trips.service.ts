import { supabase } from "../lib/supabase";

export type TripVisibility = "public" | "private";

export type TripDetails = {
  highlights?: string;
  recommended_season?: string;
  transport_notes?: string;
  meeting_point?: string;
  important_notes?: string;
  checklist?: string[];
};

export type TripRecord = {
  id: string;
  owner_id: string;
  title: string;
  description: string | null;
  destination: string | null;
  start_date: string | null;
  end_date: string | null;
  estimated_budget_text: string | null;
  visibility: TripVisibility;
  cover_image_url: string | null;
  details?: TripDetails | null;
  created_at: string;
  updated_at: string;
};

export type TripStopRecord = {
  id: string;
  trip_id: string;
  order_index: number;
  title: string;
  notes: string | null;
  start_time_text: string | null;
  end_time_text: string | null;
  place_name: string | null;
  address: string | null;
  latitude: number | null;
  longitude: number | null;
  external_maps_url: string | null;
  created_at: string;
  updated_at: string;
};

export type TagRecord = {
  id: string;
  name: string;
};

export type MediaRecord = {
  id: string;
  owner_id: string;
  trip_id: string | null;
  stop_id: string | null;
  kind: string | null;
  url: string;
  file_name?: string | null;
  mime_type?: string | null;
  file_size_bytes?: number | null;
  created_at: string;
};

export type TripLikeRecord = {
  trip_id: string;
  user_id: string;
  created_at: string;
};

export type TripCommentRecord = {
  id: string;
  trip_id: string;
  user_id: string;
  content: string;
  parent_comment_id: string | null;
  created_at: string;
  updated_at: string;
};

export type SharedTripRecord = TripRecord & {
  collab_role: "viewer" | "editor";
  collab_status: "accepted";
};

export type CreatedInvite = {
  invite_token: string;
  expires_at: string;
  role: "viewer" | "editor";
  trip_id: string;
};

export type ConsumedInvite = {
  trip_id: string;
  role: "viewer" | "editor";
  status: "accepted";
};

export type CreateTripPayload = {
  owner_id: string;
  title: string;
  description?: string | null;
  destination?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  estimated_budget_text?: string | null;
  visibility: TripVisibility;
  cover_image_url?: string | null;
  details?: TripDetails | null;
};

export type CreateStopPayload = {
  trip_id: string;
  order_index: number;
  title: string;
  place_name?: string | null;
  address?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  external_maps_url?: string | null;
};

export type UpdateTripPayload = Partial<
  Pick<
    CreateTripPayload,
    | "title"
    | "description"
    | "destination"
    | "start_date"
    | "end_date"
    | "estimated_budget_text"
    | "visibility"
    | "cover_image_url"
    | "details"
  >
>;

export async function createTrip(payload: CreateTripPayload) {
  // Yo centralizo la creación de viaje aquí para que CreateTripScreen no tenga SQL disperso.
  const { data, error } = await supabase
    .from("trips")
    .insert(payload)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data as TripRecord;
}

export async function addTripStops(tripId: string, stops: CreateStopPayload[]) {
  const payload = stops.map((stop) => ({
    ...stop,
    trip_id: tripId,
  }));

  const { data, error } = await supabase.from("trip_stops").insert(payload).select();
  if (error) {
    throw error;
  }

  return data as TripStopRecord[];
}

export async function inviteCollaborator(tripId: string, userId: string) {
  const { data, error } = await supabase
    .from("trip_collaborators")
    .insert({
      trip_id: tripId,
      user_id: userId,
      role: "editor",
      status: "invited",
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function removeCollaborator(tripId: string, userId: string) {
  const { error } = await supabase
    .from("trip_collaborators")
    .delete()
    .eq("trip_id", tripId)
    .eq("user_id", userId);

  if (error) {
    throw error;
  }

  return true;
}

export async function getTripCollaborators(tripId: string) {
  const { data, error } = await supabase
    .from("trip_collaborators")
    .select("user_id, role, status")
    .eq("trip_id", tripId)
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data as { user_id: string; role: string; status: string }[];
}

export async function getPublicTrips() {
  // Yo uso este punto único para Discover; si cambiamos filtros backend, se toca solo aquí.
  const { data, error } = await supabase
    .from("trips")
    .select("id,title,estimated_budget_text,visibility,owner_id,destination,created_at,cover_image_url")
    .eq("visibility", "public")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`[getPublicTrips] ${error.message}`);
  }

  return data as TripRecord[];
}

export async function getTripsByOwner(ownerId: string) {
  // Yo separo viajes propios para que MyTrips tenga un origen de datos claro.
  const { data, error } = await supabase
    .from("trips")
    .select("*")
    .eq("owner_id", ownerId)
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data as TripRecord[];
}

export async function getTripsSharedWithUser(userId: string) {
  // Yo resuelvo aquí la pestaña "Compartidos", incluyendo rol colaborativo.
  const { data, error } = await supabase
    .from("trip_collaborators")
    .select("role,status,trips(*)")
    .eq("user_id", userId)
    .eq("status", "accepted")
    .in("role", ["editor", "viewer"]);

  if (error) {
    throw error;
  }

  const rows = (data || []) as Array<{
    role: "viewer" | "editor";
    status: "accepted";
    trips: TripRecord | TripRecord[] | null;
  }>;

  return rows
    .map((row) => {
      const tripValue = Array.isArray(row.trips) ? row.trips[0] : row.trips;
      return {
        trip: tripValue || null,
        role: row.role,
        status: row.status,
      };
    })
    .filter((row) => Boolean(row.trip))
    .map((row) => ({
      ...(row.trip as TripRecord),
      collab_role: row.role,
      collab_status: row.status,
    }))
    .sort((a, b) => b.updated_at.localeCompare(a.updated_at)) as SharedTripRecord[];
}

export async function getTripById(tripId: string) {
  const { data, error } = await supabase
    .from("trips")
    .select("*")
    .eq("id", tripId)
    .single();

  if (error) {
    throw error;
  }

  return data as TripRecord;
}

export async function getTripStops(tripId: string) {
  const { data, error } = await supabase
    .from("trip_stops")
    .select("*")
    .eq("trip_id", tripId)
    .order("order_index", { ascending: true });

  if (error) {
    throw error;
  }

  return data as TripStopRecord[];
}

export async function getTripTags(tripId: string) {
  const { data, error } = await supabase
    .from("trip_tags")
    .select("tags(name)")
    .eq("trip_id", tripId);

  if (error) {
    throw error;
  }

  return (data || [])
    .map((item: any) => item.tags?.name)
    .filter((name: string | undefined) => Boolean(name)) as string[];
}

export async function ensureTags(names: string[]) {
  if (names.length === 0) return [];
  const payload = names.map((name) => ({ name }));
  const { data, error } = await supabase
    .from("tags")
    .upsert(payload, { onConflict: "name" })
    .select("id,name");

  if (error) {
    throw error;
  }

  return data as TagRecord[];
}

export async function addTripTags(tripId: string, tagIds: string[]) {
  if (tagIds.length === 0) return [];
  const payload = tagIds.map((tagId) => ({ trip_id: tripId, tag_id: tagId }));
  const { data, error } = await supabase.from("trip_tags").insert(payload).select();

  if (error) {
    throw error;
  }

  return data;
}

export async function updateTripVisibility(tripId: string, visibility: TripVisibility) {
  const { data, error } = await supabase
    .from("trips")
    .update({ visibility })
    .eq("id", tripId)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data as TripRecord;
}

export async function updateTrip(tripId: string, payload: UpdateTripPayload) {
  const { data, error } = await supabase
    .from("trips")
    .update(payload)
    .eq("id", tripId)
    .select("*")
    .single();

  if (error) {
    throw error;
  }

  return data as TripRecord;
}

export async function replaceTripStops(tripId: string, stops: CreateStopPayload[]) {
  const { error: deleteError } = await supabase.from("trip_stops").delete().eq("trip_id", tripId);
  if (deleteError) {
    throw deleteError;
  }

  if (stops.length === 0) {
    return [];
  }

  const payload = stops.map((stop, index) => ({
    trip_id: tripId,
    order_index: index + 1,
    title: stop.title,
    place_name: stop.place_name ?? null,
    address: stop.address ?? null,
    latitude: stop.latitude ?? null,
    longitude: stop.longitude ?? null,
    external_maps_url: stop.external_maps_url ?? null,
  }));

  const { data, error } = await supabase.from("trip_stops").insert(payload).select("*");
  if (error) {
    throw error;
  }

  return data as TripStopRecord[];
}

export async function replaceTripTags(tripId: string, tagNames: string[]) {
  const { error: deleteError } = await supabase.from("trip_tags").delete().eq("trip_id", tripId);
  if (deleteError) {
    throw deleteError;
  }

  if (tagNames.length === 0) {
    return [];
  }

  const ensured = await ensureTags(tagNames);
  const payload = ensured.map((tag) => ({ trip_id: tripId, tag_id: tag.id }));
  const { data, error } = await supabase.from("trip_tags").insert(payload).select("*");

  if (error) {
    throw error;
  }

  return data;
}

export async function getTripMedia(tripId: string) {
  // Yo cargo aquí todo el media del viaje y luego la UI separa imagen/pdf por kind.
  const { data, error } = await supabase
    .from("media")
    .select("id,owner_id,trip_id,stop_id,kind,url,file_name,mime_type,file_size_bytes,created_at")
    .eq("trip_id", tripId)
    .order("created_at", { ascending: true });

  if (error) {
    throw error;
  }

  return data as MediaRecord[];
}

export async function addTripMediaRecord(payload: {
  owner_id: string;
  trip_id: string;
  kind?: string;
  url: string;
  file_name?: string;
  mime_type?: string;
  file_size_bytes?: number;
}) {
  const { data, error } = await supabase
    .from("media")
    .insert({
      owner_id: payload.owner_id,
      trip_id: payload.trip_id,
      kind: payload.kind || "image",
      url: payload.url,
      file_name: payload.file_name ?? null,
      mime_type: payload.mime_type ?? null,
      file_size_bytes: payload.file_size_bytes ?? null,
    })
    .select("id,owner_id,trip_id,stop_id,kind,url,file_name,mime_type,file_size_bytes,created_at")
    .single();

  if (error) {
    throw error;
  }

  return data as MediaRecord;
}

export async function removeTripMediaRecord(mediaId: string) {
  const { error } = await supabase.from("media").delete().eq("id", mediaId);
  if (error) {
    throw error;
  }
  return true;
}

export async function getTripPdfs(tripId: string) {
  // Yo fuerzo que los PDFs salgan por trip_id para que TripDetail y Viaje activo compartan la misma fuente.
  const { data, error } = await supabase
    .from("media")
    .select("id,owner_id,trip_id,stop_id,kind,url,file_name,mime_type,file_size_bytes,created_at")
    .eq("trip_id", tripId)
    .eq("kind", "pdf")
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error(`[pdf:getList] ${error.message}`);
  }

  return data as MediaRecord[];
}

export async function addTripPdfRecord(payload: {
  owner_id: string;
  trip_id: string;
  url: string;
  file_name: string;
  mime_type: string;
  file_size_bytes: number;
}) {
  try {
    // Yo guardo el path interno de Storage (no URL pública) para poder firmar descargas de forma segura.
    return await addTripMediaRecord({
      owner_id: payload.owner_id,
      trip_id: payload.trip_id,
      kind: "pdf",
      url: payload.url,
      file_name: payload.file_name,
      mime_type: payload.mime_type,
      file_size_bytes: payload.file_size_bytes,
    });
  } catch (error: any) {
    throw new Error(`[pdf:addRecord] ${error?.message || "No se pudo guardar el PDF."}`);
  }
}

export async function removeTripPdfRecord(mediaId: string) {
  try {
    return await removeTripMediaRecord(mediaId);
  } catch (error: any) {
    throw new Error(`[pdf:removeRecord] ${error?.message || "No se pudo eliminar el PDF."}`);
  }
}

export async function getSignedTripPdfUrl(storagePath: string, expiresIn = 120) {
  // Yo genero URL firmada corta para descarga segura sin exponer bucket privado.
  const { data, error } = await supabase.storage
    .from("trip-documents")
    .createSignedUrl(storagePath, expiresIn);

  if (error || !data?.signedUrl) {
    const message = error?.message || "No se pudo crear la URL de descarga.";
    throw new Error(`[pdf:getSignedUrl] ${message}`);
  }

  return data.signedUrl;
}

export async function getTripLikeState(tripId: string, userId?: string | null) {
  const [{ count, error: countError }, likedResult] = await Promise.all([
    supabase
      .from("trip_likes")
      .select("*", { count: "exact", head: true })
      .eq("trip_id", tripId),
    userId
      ? supabase
          .from("trip_likes")
          .select("trip_id,user_id,created_at")
          .eq("trip_id", tripId)
          .eq("user_id", userId)
          .maybeSingle()
      : Promise.resolve({ data: null, error: null } as any),
  ]);

  if (countError) {
    throw countError;
  }

  if (likedResult.error) {
    throw likedResult.error;
  }

  return {
    count: count || 0,
    likedByMe: Boolean(likedResult.data),
  };
}

export async function toggleTripLike(tripId: string, userId: string, liked: boolean) {
  if (liked) {
    const { error } = await supabase
      .from("trip_likes")
      .delete()
      .eq("trip_id", tripId)
      .eq("user_id", userId);
    if (error) {
      throw error;
    }
    return;
  }

  const { error } = await supabase.from("trip_likes").insert({ trip_id: tripId, user_id: userId });
  if (error) {
    throw error;
  }
}

export async function getTripCommentsThread(tripId: string) {
  const { data, error } = await supabase
    .from("trip_comments")
    .select("id,trip_id,user_id,content,parent_comment_id,created_at,updated_at")
    .eq("trip_id", tripId)
    .order("created_at", { ascending: true });

  if (error) {
    throw error;
  }

  return (data || []) as TripCommentRecord[];
}

export async function createTripComment(tripId: string, userId: string, content: string) {
  const { data, error } = await supabase
    .from("trip_comments")
    .insert({
      trip_id: tripId,
      user_id: userId,
      content: content.trim(),
      parent_comment_id: null,
    })
    .select("id,trip_id,user_id,content,parent_comment_id,created_at,updated_at")
    .single();

  if (error) {
    throw error;
  }

  return data as TripCommentRecord;
}

export async function createTripReply(
  tripId: string,
  userId: string,
  parentCommentId: string,
  content: string
) {
  const { data, error } = await supabase
    .from("trip_comments")
    .insert({
      trip_id: tripId,
      user_id: userId,
      parent_comment_id: parentCommentId,
      content: content.trim(),
    })
    .select("id,trip_id,user_id,content,parent_comment_id,created_at,updated_at")
    .single();

  if (error) {
    throw error;
  }

  return data as TripCommentRecord;
}

export async function deleteTripComment(commentId: string, userId: string) {
  const { error } = await supabase
    .from("trip_comments")
    .delete()
    .eq("id", commentId)
    .eq("user_id", userId);

  if (error) {
    throw error;
  }

  return true;
}

export async function updateTripCoverImage(tripId: string, coverImageUrl: string | null) {
  const { data, error } = await supabase
    .from("trips")
    .update({ cover_image_url: coverImageUrl })
    .eq("id", tripId)
    .select("*")
    .single();

  if (error) {
    throw error;
  }

  return data as TripRecord;
}

export async function createTripInviteLink(
  tripId: string,
  role: "viewer" | "editor" = "editor"
) {
  const { data, error } = await supabase.rpc("create_trip_invite", {
    p_trip_id: tripId,
    p_role: role,
    p_expires_in_hours: 168,
    p_max_uses: 50,
  });

  if (error) {
    throw error;
  }

  const row = Array.isArray(data) ? data[0] : data;
  if (!row?.invite_token) {
    throw new Error("No se pudo generar el enlace de invitación.");
  }

  return row as CreatedInvite;
}

export async function acceptTripInviteToken(token: string) {
  const { data, error } = await supabase.functions.invoke("accept-trip-invite", {
    body: { token },
  });

  if (error) {
    throw error;
  }

  return data as ConsumedInvite;
}

export async function deleteTripCompletely(tripId: string, ownerId: string) {
  const tables = [
    "trip_comments",
    "trip_likes",
    "trip_collaborators",
    "media",
    "trip_stops",
    "trip_tags",
  ] as const;

  for (const table of tables) {
    const { error } = await supabase.from(table).delete().eq("trip_id", tripId);
    if (error) {
      throw error;
    }
  }

  const { error: copiesByOriginalError } = await supabase
    .from("trip_copies")
    .delete()
    .eq("original_trip_id", tripId);
  if (copiesByOriginalError) {
    throw copiesByOriginalError;
  }

  const { error: copiesByCopyError } = await supabase
    .from("trip_copies")
    .delete()
    .eq("copied_trip_id", tripId);
  if (copiesByCopyError) {
    throw copiesByCopyError;
  }

  const { error: tripError } = await supabase
    .from("trips")
    .delete()
    .eq("id", tripId)
    .eq("owner_id", ownerId);
  if (tripError) {
    throw tripError;
  }

  return true;
}
