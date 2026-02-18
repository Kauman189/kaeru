import AsyncStorage from "@react-native-async-storage/async-storage";

type CacheEnvelope<T> = {
  version: number;
  createdAt: number;
  expiresAt: number;
  payload: T;
};

const DEFAULT_VERSION = 1;
const DEFAULT_TTL_MS = 15 * 60 * 1000;

export async function setCacheItem<T>(key: string, payload: T, ttlMs = DEFAULT_TTL_MS) {
  const envelope: CacheEnvelope<T> = {
    version: DEFAULT_VERSION,
    createdAt: Date.now(),
    expiresAt: Date.now() + ttlMs,
    payload,
  };
  await AsyncStorage.setItem(key, JSON.stringify(envelope));
}

export async function getCacheItem<T>(key: string): Promise<{ payload: T; isExpired: boolean } | null> {
  const raw = await AsyncStorage.getItem(key);
  if (!raw) return null;
  try {
    const envelope = JSON.parse(raw) as CacheEnvelope<T>;
    if (!envelope || envelope.version !== DEFAULT_VERSION) {
      await AsyncStorage.removeItem(key);
      return null;
    }
    return {
      payload: envelope.payload,
      isExpired: Date.now() > envelope.expiresAt,
    };
  } catch {
    await AsyncStorage.removeItem(key);
    return null;
  }
}

export async function removeCacheItem(key: string) {
  await AsyncStorage.removeItem(key);
}
