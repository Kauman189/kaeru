import { supabase } from "../lib/supabase";

export type PlayMode = "solo" | "shared";
export type PlayStatus = "active" | "paused" | "completed" | "cancelled";

export type PlaySessionRecord = {
  id: string;
  trip_id: string;
  owner_user_id: string;
  mode: PlayMode;
  status: PlayStatus;
  start_date: string;
  end_date: string;
  duration_days: number;
  timezone: string;
  summary_time_local: string | null;
  summary_live?: PlaySummaryLive | null;
  checklist_live?: PlayChecklistItem[] | null;
  created_at: string;
  updated_at: string;
  trips?: { title?: string | null; destination?: string | null } | null;
};

export type PlaySummaryLive = {
  highlights?: string;
  recommended_season?: string;
  transport_notes?: string;
  meeting_point?: string;
  important_notes?: string;
};

export type PlayChecklistItem = {
  id: string;
  text: string;
  completed: boolean;
  order: number;
};

export type PlayParticipantNotificationConfig = {
  before_10m: boolean;
  start: boolean;
  daily_summary: boolean;
};

export type PlayParticipantRecord = {
  id: string;
  session_id: string;
  user_id: string;
  role: "owner" | "editor" | "viewer";
  status: "active" | "left";
  notifications_config?: PlayParticipantNotificationConfig | null;
  created_at: string;
  updated_at: string;
};

export type PlayStopRecord = {
  id: string;
  session_id: string;
  original_stop_id: string | null;
  day_number: number;
  order_index: number;
  title: string;
  address: string | null;
  latitude: number | null;
  longitude: number | null;
  start_time_text: string | null;
  end_time_text: string | null;
  is_completed: boolean;
  completed_at: string | null;
  notes_live: string | null;
  points_live: number;
  created_at: string;
  updated_at: string;
};

export type PlayNotificationJobRecord = {
  id: string;
  session_id: string;
  user_id: string;
  stop_id: string | null;
  kind: "before_10m" | "start" | "daily_summary";
  scheduled_for: string;
  local_identifier: string | null;
  status: "scheduled" | "sent" | "cancelled" | "failed";
  meta: Record<string, unknown>;
  created_at: string;
};

export type PlaySessionPayload = {
  session: PlaySessionRecord;
  stops: PlayStopRecord[];
  participants: PlayParticipantRecord[];
  currentParticipant: PlayParticipantRecord | null;
};

export type StartPlayTripParams = {
  tripId: string;
  mode: PlayMode;
  startDate: string;
  endDate: string;
  timezone?: string;
  summaryTimeLocal?: string;
  includeCollaborators?: boolean;
};
// reivsar que no se salte la validacion de fechas en el inicio de play trip 
export async function startPlayTrip(params: StartPlayTripParams) {
  const { data, error } = await supabase.rpc("start_trip_play", {
    p_trip_id: params.tripId,
    p_mode: params.mode,
    p_start_date: params.startDate,
    p_end_date: params.endDate,
    p_timezone: params.timezone || "Europe/Madrid",
    p_summary_time_local: params.summaryTimeLocal || "21:00",
    p_include_collaborators: params.includeCollaborators ?? true,
  });

  if (error) throw error;
  const row = Array.isArray(data) ? data[0] : data;
  if (!row?.session_id) {
    throw new Error("No se pudo iniciar Play Trip.");
  }
  return row as { session_id: string };
}

export async function getMyActivePlaySessions() {
  const { data, error } = await supabase.rpc("get_my_active_play_sessions");
  if (error) throw error;

  const sessions = (data || []) as PlaySessionRecord[];
  if (sessions.length === 0) return sessions;

  const tripIds = Array.from(new Set(sessions.map((s) => s.trip_id)));
  const { data: tripsData, error: tripsError } = await supabase
    .from("trips")
    .select("id,title,destination")
    .in("id", tripIds);

  if (tripsError) throw tripsError;

  const tripById = new Map((tripsData || []).map((row: any) => [row.id, row]));
  return sessions.map((session) => ({
    ...session,
    trips: tripById.get(session.trip_id) || null,
  }));
}

export async function getPlaySessionWithStops(sessionId: string) {
  const { data: userData } = await supabase.auth.getUser();
  const currentUserId = userData.user?.id ?? null;
  const [{ data: sessionData, error: sessionError }, { data: stopsData, error: stopsError }, { data: participantsData, error: participantsError }] =
    await Promise.all([
      supabase
        .from("trip_play_sessions")
        .select("*, trips(title,destination)")
        .eq("id", sessionId)
        .single(),
      supabase
        .from("trip_play_stops")
        .select("*")
        .eq("session_id", sessionId)
        .order("day_number", { ascending: true })
        .order("order_index", { ascending: true }),
      supabase
        .from("trip_play_participants")
        .select("*")
        .eq("session_id", sessionId)
        .eq("status", "active"),
    ]);

  if (sessionError) throw sessionError;
  if (stopsError) throw stopsError;
  if (participantsError) throw participantsError;

  const normalizedSession = {
    ...(sessionData as PlaySessionRecord),
    summary_live:
      (sessionData as any)?.summary_live && typeof (sessionData as any).summary_live === "object"
        ? ((sessionData as any).summary_live as PlaySummaryLive)
        : {},
    checklist_live: normalizeChecklist((sessionData as any)?.checklist_live),
  };
  const normalizedParticipants = (participantsData || []).map((participant) => ({
    ...(participant as PlayParticipantRecord),
    notifications_config: normalizeNotificationConfig((participant as any)?.notifications_config),
  })) as PlayParticipantRecord[];
  const currentParticipant =
    normalizedParticipants.find((participant) => participant.user_id === currentUserId) || null;

  return {
    session: normalizedSession,
    stops: (stopsData || []) as PlayStopRecord[],
    participants: normalizedParticipants,
    currentParticipant,
  } as PlaySessionPayload;
}

export async function pausePlayTrip(sessionId: string) {
  const { data, error } = await supabase.rpc("stop_trip_play", {
    p_session_id: sessionId,
    p_new_status: "paused",
  });
  if (error) throw error;
  return data as PlaySessionRecord;
}

export async function resumePlayTrip(sessionId: string) {
  const { data, error } = await supabase.rpc("stop_trip_play", {
    p_session_id: sessionId,
    p_new_status: "active",
  });
  if (error) throw error;
  return data as PlaySessionRecord;
}

export async function finishPlayTrip(sessionId: string) {
  const { data, error } = await supabase.rpc("stop_trip_play", {
    p_session_id: sessionId,
    p_new_status: "completed",
  });
  if (error) throw error;
  return data as PlaySessionRecord;
}

export async function togglePlayStopComplete(sessionId: string, stopId: string, isCompleted: boolean) {
  const { data, error } = await supabase.rpc("toggle_play_stop_complete", {
    p_session_id: sessionId,
    p_stop_id: stopId,
    p_is_completed: isCompleted,
  });

  if (error) throw error;
  return data as PlayStopRecord;
}

export async function updatePlayStopLive(
  sessionId: string,
  stopId: string,
  payload: {
    notesLive?: string;
    pointsLive?: number;
    startTimeText?: string;
    endTimeText?: string;
  }
) {
  const { data, error } = await supabase.rpc("update_play_stop_live_fields", {
    p_session_id: sessionId,
    p_stop_id: stopId,
    p_notes_live: payload.notesLive ?? null,
    p_points_live: payload.pointsLive ?? null,
    p_start_time_text: payload.startTimeText ?? null,
    p_end_time_text: payload.endTimeText ?? null,
  });

  if (error) throw error;
  return data as PlayStopRecord;
}

export async function reorderPlayStop(sessionId: string, stopId: string, newIndex: number) {
  const { error } = await supabase.rpc("reorder_play_stop", {
    p_session_id: sessionId,
    p_stop_id: stopId,
    p_new_index: newIndex,
  });

  if (error) throw error;
}

export async function getPlayNotificationJobs(sessionId: string) {
  const { data, error } = await supabase
    .from("trip_play_notification_jobs")
    .select("*")
    .eq("session_id", sessionId)
    .order("scheduled_for", { ascending: true });

  if (error) throw error;
  return (data || []) as PlayNotificationJobRecord[];
}

export async function getPlayNotificationJobsForUser(sessionId: string, userId: string) {
  const { data, error } = await supabase
    .from("trip_play_notification_jobs")
    .select("*")
    .eq("session_id", sessionId)
    .eq("user_id", userId)
    .order("scheduled_for", { ascending: true });

  if (error) throw error;
  return (data || []) as PlayNotificationJobRecord[];
}

export async function replacePlayNotificationJobs(
  sessionId: string,
  jobs: Array<{
    user_id: string;
    stop_id?: string | null;
    kind: "before_10m" | "start" | "daily_summary";
    scheduled_for: string;
    local_identifier?: string | null;
    status?: "scheduled" | "sent" | "cancelled" | "failed";
    meta?: Record<string, unknown>;
  }>
) {
  const uniqueUserIds = Array.from(new Set(jobs.map((job) => job.user_id)));
  if (uniqueUserIds.length === 0) {
    const { error: deleteError } = await supabase
      .from("trip_play_notification_jobs")
      .delete()
      .eq("session_id", sessionId);
    if (deleteError) throw deleteError;
    return [];
  }
  for (const userId of uniqueUserIds) {
    const { error: deleteError } = await supabase
      .from("trip_play_notification_jobs")
      .delete()
      .eq("session_id", sessionId)
      .eq("user_id", userId);
    if (deleteError) throw deleteError;
  }

  const payload = jobs.map((job) => ({
    session_id: sessionId,
    user_id: job.user_id,
    stop_id: job.stop_id ?? null,
    kind: job.kind,
    scheduled_for: job.scheduled_for,
    local_identifier: job.local_identifier ?? null,
    status: job.status ?? "scheduled",
    meta: job.meta ?? {},
  }));

  const { data, error } = await supabase
    .from("trip_play_notification_jobs")
    .insert(payload)
    .select("*");

  if (error) throw error;
  return (data || []) as PlayNotificationJobRecord[];
}

export async function replacePlayNotificationJobsForUser(
  sessionId: string,
  userId: string,
  jobs: Array<{
    stop_id?: string | null;
    kind: "before_10m" | "start" | "daily_summary";
    scheduled_for: string;
    local_identifier?: string | null;
    status?: "scheduled" | "sent" | "cancelled" | "failed";
    meta?: Record<string, unknown>;
  }>
) {
  const { error: deleteError } = await supabase
    .from("trip_play_notification_jobs")
    .delete()
    .eq("session_id", sessionId)
    .eq("user_id", userId);
  if (deleteError) throw deleteError;

  if (jobs.length === 0) return [];

  const payload = jobs.map((job) => ({
    session_id: sessionId,
    user_id: userId,
    stop_id: job.stop_id ?? null,
    kind: job.kind,
    scheduled_for: job.scheduled_for,
    local_identifier: job.local_identifier ?? null,
    status: job.status ?? "scheduled",
    meta: job.meta ?? {},
  }));

  const { data, error } = await supabase
    .from("trip_play_notification_jobs")
    .insert(payload)
    .select("*");
  if (error) throw error;
  return (data || []) as PlayNotificationJobRecord[];
}

export async function updatePlaySummaryLive(sessionId: string, summary: PlaySummaryLive) {
  const { data, error } = await supabase.rpc("update_play_summary_live", {
    p_session_id: sessionId,
    p_summary: summary,
  });
  if (error) throw error;
  return data as PlaySessionRecord;
}

export async function addPlayChecklistItem(sessionId: string, text: string) {
  const { data, error } = await supabase.rpc("add_play_checklist_item", {
    p_session_id: sessionId,
    p_text: text,
  });
  if (error) throw error;
  return normalizeChecklistItem(data);
}

export async function updatePlayChecklistItem(
  sessionId: string,
  itemId: string,
  payload: { text?: string; completed?: boolean }
) {
  const { data, error } = await supabase.rpc("update_play_checklist_item", {
    p_session_id: sessionId,
    p_item_id: itemId,
    p_text: payload.text ?? null,
    p_completed: payload.completed ?? null,
  });
  if (error) throw error;
  return normalizeChecklistItem(data);
}

export async function removePlayChecklistItem(sessionId: string, itemId: string) {
  const { data, error } = await supabase.rpc("remove_play_checklist_item", {
    p_session_id: sessionId,
    p_item_id: itemId,
  });
  if (error) throw error;
  return Boolean(data);
}

export async function setPlayNotificationConfig(
  sessionId: string,
  config: PlayParticipantNotificationConfig
) {
  const { data, error } = await supabase.rpc("set_play_notification_config", {
    p_session_id: sessionId,
    p_config: config,
  });
  if (error) throw error;
  return {
    ...(data as PlayParticipantRecord),
    notifications_config: normalizeNotificationConfig((data as any)?.notifications_config),
  } as PlayParticipantRecord;
}

export async function getActivePlaySessionByTrip(tripId: string) {
  const { data, error } = await supabase
    .from("trip_play_sessions")
    .select("id,trip_id,owner_user_id,mode,status,start_date,end_date,duration_days,timezone,summary_time_local,created_at,updated_at")
    .eq("trip_id", tripId)
    .in("status", ["active", "paused"])
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error) throw error;
  return (data || null) as PlaySessionRecord | null;
}

const normalizeChecklistItem = (value: any): PlayChecklistItem => ({
  id: String(value?.id || ""),
  text: String(value?.text || ""),
  completed: Boolean(value?.completed),
  order: Number.isFinite(Number(value?.order)) ? Number(value?.order) : 0,
});

const normalizeChecklist = (value: any): PlayChecklistItem[] => {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item) => item && typeof item === "object")
    .map(normalizeChecklistItem)
    .filter((item) => item.id && item.text)
    .sort((a, b) => a.order - b.order);
};

const normalizeNotificationConfig = (value: any): PlayParticipantNotificationConfig => ({
  before_10m: value?.before_10m !== false,
  start: value?.start !== false,
  daily_summary: value?.daily_summary !== false,
});
