import { supabase } from "../lib/supabase";

export type ProfileRecord = {
  id: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  bio?: string | null;
  created_at: string;
};

export async function getProfiles() {
  const { data, error } = await supabase
    .from("profiles")
    .select("id,username,full_name,avatar_url,created_at")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data as ProfileRecord[];
}

export async function getProfilesByIds(ids: string[]) {
  if (ids.length === 0) return [];
  const { data, error } = await supabase
    .from("profiles")
    .select("id,username,full_name,avatar_url,created_at")
    .in("id", ids);

  if (error) {
    throw error;
  }

  return data as ProfileRecord[];
}

export async function getProfileById(userId: string) {
  const { data, error } = await supabase
    .from("profiles")
    .select("id,username,full_name,avatar_url,bio,created_at")
    .eq("id", userId)
    .single();

  if (error) {
    throw error;
  }

  return data as ProfileRecord;
}
