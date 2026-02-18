import * as Notifications from "expo-notifications";
import { supabase } from "../lib/supabase";
import {
  PlayParticipantNotificationConfig,
  PlaySessionRecord,
  PlayStopRecord,
  getPlayNotificationJobsForUser,
  replacePlayNotificationJobsForUser,
} from "./playTrips.service";

type ScheduledJob = {
  stop_id?: string | null;
  kind: "before_10m" | "start" | "daily_summary";
  scheduled_for: string;
  local_identifier: string;
  meta?: Record<string, unknown>;
};

const DAILY_SUMMARY_HOUR = 21;
const DAILY_SUMMARY_MINUTE = 0;

const parseTime = (value?: string | null) => {
  if (!value) return null;
  const match = value.match(/^(\d{1,2}):(\d{2})/);
  if (!match) return null;
  const hour = Number(match[1]);
  const minute = Number(match[2]);
  if (!Number.isFinite(hour) || !Number.isFinite(minute) || hour < 0 || hour > 23 || minute < 0 || minute > 59) {
    return null;
  }
  return { hour, minute };
};

const buildStopBaseDate = (startDate: string, dayNumber: number, time: { hour: number; minute: number }) => {
  const [y, m, d] = startDate.split("-").map(Number);
  const date = new Date(y, (m || 1) - 1, d || 1, time.hour, time.minute, 0, 0);
  date.setDate(date.getDate() + Math.max(0, dayNumber - 1));
  return date;
};

const scheduleLocal = async (title: string, body: string, triggerDate: Date, data: Record<string, unknown>) => {
  const identifier = await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      data,
      sound: true,
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DATE,
      date: triggerDate,
    },
  });
  return identifier;
};

export async function requestNotificationsPermission() {
  const current = await Notifications.getPermissionsAsync();
  if (current.granted || current.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL) {
    return true;
  }
  const requested = await Notifications.requestPermissionsAsync();
  return Boolean(requested.granted || requested.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL);
}

export async function cancelSessionNotifications(sessionId: string) {
  const { data } = await supabase.auth.getUser();
  const userId = data.user?.id;
  if (!userId) return;
  const jobs = await getPlayNotificationJobsForUser(sessionId, userId);
  for (const job of jobs) {
    if (job.local_identifier) {
      try {
        await Notifications.cancelScheduledNotificationAsync(job.local_identifier);
      } catch {
        // ignore
      }
    }
  }
  await replacePlayNotificationJobsForUser(sessionId, userId, []);
}

export async function scheduleSessionNotifications(
  session: PlaySessionRecord,
  stops: PlayStopRecord[],
  config: PlayParticipantNotificationConfig = {
    before_10m: true,
    start: true,
    daily_summary: true,
  }
) {
  // se asume que el usuario ya dio permisos, se puede mejorar pidiendo permiso aquí si no los tiene.
  const { data } = await supabase.auth.getUser();
  const userId = data.user?.id;
  if (!userId) {
    throw new Error("Debes iniciar sesión para programar notificaciones.");
  }

  const now = new Date();
  const jobs: ScheduledJob[] = [];

  for (const stop of stops) {
    const startTime = parseTime(stop.start_time_text);
    if (!startTime) continue;

    const startDate = buildStopBaseDate(session.start_date, stop.day_number || 1, startTime);

    if (config.start && startDate > now) {
      const startIdentifier = await scheduleLocal(
        "Inicio de actividad",
        `Tu siguiente plan es: ${stop.title}`,
        startDate,
        { sessionId: session.id, stopId: stop.id, kind: "start" }
      );
      jobs.push({
        stop_id: stop.id,
        kind: "start",
        scheduled_for: startDate.toISOString(),
        local_identifier: startIdentifier,
        meta: { title: stop.title },
      });
    }

    const beforeDate = new Date(startDate.getTime() - 10 * 60 * 1000);
    if (config.before_10m && beforeDate > now) {
      const beforeIdentifier = await scheduleLocal(
        "Próxima actividad",
        `En 10 min empieza: ${stop.title}`,
        beforeDate,
        { sessionId: session.id, stopId: stop.id, kind: "before_10m" }
      );
      jobs.push({
        stop_id: stop.id,
        kind: "before_10m",
        scheduled_for: beforeDate.toISOString(),
        local_identifier: beforeIdentifier,
        meta: { title: stop.title },
      });
    }
  }

  // Resumen diario 21:00
  const [sy, sm, sd] = session.start_date.split("-").map(Number);
  const [ey, em, ed] = session.end_date.split("-").map(Number);
  const cursor = new Date(sy, (sm || 1) - 1, sd || 1, DAILY_SUMMARY_HOUR, DAILY_SUMMARY_MINUTE, 0, 0);
  const end = new Date(ey, (em || 1) - 1, ed || 1, DAILY_SUMMARY_HOUR, DAILY_SUMMARY_MINUTE, 0, 0);

  while (cursor <= end) {
    if (config.daily_summary && cursor > now) {
      const summaryIdentifier = await scheduleLocal(
        "Resumen del día",
        "Revisa tu progreso de hoy y prepárate para mañana.",
        cursor,
        { sessionId: session.id, kind: "daily_summary" }
      );
      jobs.push({
        kind: "daily_summary",
        scheduled_for: cursor.toISOString(),
        local_identifier: summaryIdentifier,
      });
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  await replacePlayNotificationJobsForUser(
    session.id,
    userId,
    jobs.map((job) => ({
      stop_id: job.stop_id ?? null,
      kind: job.kind,
      scheduled_for: job.scheduled_for,
      local_identifier: job.local_identifier,
      status: "scheduled",
      meta: job.meta || {},
    }))
  );

  return jobs;
}

export async function rescheduleSessionNotifications(session: PlaySessionRecord, stops: PlayStopRecord[]) {
  await cancelSessionNotifications(session.id);
  return scheduleSessionNotifications(session, stops);
}

export async function rescheduleSessionNotificationsForCurrentUser(
  session: PlaySessionRecord,
  stops: PlayStopRecord[],
  config: PlayParticipantNotificationConfig
) {
  // Yo reprogramo por usuario para respetar toggles personales sin afectar al resto de participantes.
  await cancelSessionNotifications(session.id);
  return scheduleSessionNotifications(session, stops, config);
}
