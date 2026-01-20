import { supabase } from "../lib/supabase";

export type TripVisibility = "public" | "private";

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

export async function createTrip(payload: CreateTripPayload) {
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
  const { data, error } = await supabase
    .from("trips")
    .select("id,title,estimated_budget_text,visibility")
    .eq("visibility", "public")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data as TripRecord[];
}

export async function getTripsByOwner(ownerId: string) {
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
