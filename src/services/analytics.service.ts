import AsyncStorage from "@react-native-async-storage/async-storage";
import { supabase } from "../lib/supabase";

type ProductEvent = {
  event_name: string;
  payload: Record<string, unknown>;
  platform: string;
  app_version: string;
  event_ts: string;
  user_id: string | null;
};

const STORAGE_KEY = "analytics_queue_v1";
const FLUSH_SIZE = 10;
const FLUSH_INTERVAL_MS = 15_000;

let queue: ProductEvent[] = [];
let isFlushing = false;
let flushTimer: ReturnType<typeof setInterval> | null = null;
let hasBootstrapped = false;

const buildEvent = async (eventName: string, payload: Record<string, unknown>): Promise<ProductEvent> => {
  const { data } = await supabase.auth.getUser();
  return {
    event_name: eventName,
    payload,
    platform: "ios",
    app_version: "1.0.0",
    event_ts: new Date().toISOString(),
    user_id: data.user?.id ?? null,
  };
};

async function persistQueue() {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(queue));
}

async function bootstrapQueue() {
  if (hasBootstrapped) return;
  hasBootstrapped = true;
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw) as ProductEvent[];
    if (Array.isArray(parsed)) {
      queue = parsed;
    }
  } catch {
    queue = [];
  }
}

export async function flushAnalytics() {
  await bootstrapQueue();
  if (isFlushing || queue.length === 0) return;
  isFlushing = true;
  try {
    const batch = queue.slice(0, FLUSH_SIZE);
    const { error } = await supabase.from("product_events").insert(batch);
    if (error) {
      throw error;
    }
    queue = queue.slice(batch.length);
    await persistQueue();
  } catch {
    await persistQueue();
  } finally {
    isFlushing = false;
  }
}

export async function track(eventName: string, payload: Record<string, unknown> = {}) {
  await bootstrapQueue();
  const event = await buildEvent(eventName, payload);
  queue.push(event);
  await persistQueue();
  if (queue.length >= FLUSH_SIZE) {
    await flushAnalytics();
  }
}

export function startAnalyticsAutoFlush() {
  if (flushTimer) return;
  flushTimer = setInterval(() => {
    flushAnalytics();
  }, FLUSH_INTERVAL_MS);
}

export function stopAnalyticsAutoFlush() {
  if (!flushTimer) return;
  clearInterval(flushTimer);
  flushTimer = null;
}
