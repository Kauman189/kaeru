import { supabase } from "../lib/supabase";

export type NotificationRecord = {
  id: string;
  user_id: string;
  title: string | null;
  body: string | null;
  type: string | null;
  read_at: string | null;
  created_at: string;
  entity_type?: string | null;
  entity_id?: string | null;
  meta?: Record<string, unknown> | null;
};

export async function getMyNotifications(limit = 30) {
  const { data: userData } = await supabase.auth.getUser();
  const userId = userData.user?.id;
  if (!userId) return [] as NotificationRecord[];

  const { data, error } = await supabase
    .from("notifications")
    .select("id,user_id,title,body,type,read_at,created_at,entity_type,entity_id,meta")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw error;
  return (data || []) as NotificationRecord[];
}

export async function markNotificationRead(id: string) {
  const { error } = await supabase
    .from("notifications")
    .update({ read_at: new Date().toISOString() })
    .eq("id", id)
    .is("read_at", null);
  if (error) throw error;
}

export async function markAllNotificationsRead() {
  const { data: userData } = await supabase.auth.getUser();
  const userId = userData.user?.id;
  if (!userId) return;

  const { error } = await supabase
    .from("notifications")
    .update({ read_at: new Date().toISOString() })
    .eq("user_id", userId)
    .is("read_at", null);
  if (error) throw error;
}

export async function getUnreadNotificationsCount() {
  const { data: userData } = await supabase.auth.getUser();
  const userId = userData.user?.id;
  if (!userId) return 0;

  const { count, error } = await supabase
    .from("notifications")
    .select("id", { count: "exact", head: true })
    .eq("user_id", userId)
    .is("read_at", null);

  if (error) throw error;
  return count || 0;
}

export async function deleteNotification(id: string) {
  const { data: userData } = await supabase.auth.getUser();
  const userId = userData.user?.id;
  if (!userId) return;

  const { error } = await supabase
    .from("notifications")
    .delete()
    .eq("id", id)
    .eq("user_id", userId);

  if (error) throw error;
}
