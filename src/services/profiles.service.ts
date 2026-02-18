import { supabase } from "../lib/supabase";

export type ProfileRecord = {
  id: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  banner_url?: string | null;
  instagram_url?: string | null;
  twitter_url?: string | null;
  threads_url?: string | null;
  bio?: string | null;
  location?: string | null;
  gender?: string | null;
  pronouns?: string | null;
  created_at: string;
};

export async function getProfiles() {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
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
    .select("*")
    .in("id", ids);

  if (error) {
    throw error;
  }

  return data as ProfileRecord[];
}

export async function getProfileById(userId: string) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) {
    throw error;
  }

  return data as ProfileRecord;
}
