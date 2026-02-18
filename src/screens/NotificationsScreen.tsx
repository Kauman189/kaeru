import React, { useCallback, useEffect, useState } from "react";
import { RefreshControl, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ArrowLeft, Trash2 } from "lucide-react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import {
  deleteNotification,
  getMyNotifications,
  getUnreadNotificationsCount,
  markAllNotificationsRead,
  markNotificationRead,
  NotificationRecord,
} from "../services/notifications.service";
import AsyncStateView from "../components/AsyncStateView";
import styles from "./NotificationsScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "Notifications">;

export default function NotificationsScreen({ navigation }: Props) {
  const [items, setItems] = useState<NotificationRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [unreadCount, setUnreadCount] = useState(0);

  const loadNotifications = useCallback(async (silent = false) => {
    if (!silent) setIsLoading(true);
    setError(null);
    try {
      const [data, unread] = await Promise.all([getMyNotifications(50), getUnreadNotificationsCount()]);
      setItems(data);
      setUnreadCount(unread);
    } catch (err: any) {
      setError(err?.message || "No se han podido cargar las notificaciones.");
      setItems([]);
    } finally {
      if (!silent) setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadNotifications();
  }, [loadNotifications]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await loadNotifications(true);
    setIsRefreshing(false);
  }, [loadNotifications]);

  const handlePressItem = async (item: NotificationRecord) => {
    if (!item.read_at) {
      await markNotificationRead(item.id);
      setItems((prev) => prev.map((row) => (row.id === item.id ? { ...row, read_at: new Date().toISOString() } : row)));
      setUnreadCount((prev) => Math.max(0, prev - 1));
    }

    if (item.entity_type === "trip" && item.entity_id) {
      navigation.navigate("TripDetail", { tripId: item.entity_id, source: "my_shared" });
    }
  };

  const handleMarkAll = async () => {
    await markAllNotificationsRead();
    setItems((prev) => prev.map((row) => ({ ...row, read_at: row.read_at || new Date().toISOString() })));
    setUnreadCount(0);
  };

  const handleDeleteItem = async (item: NotificationRecord) => {
    await deleteNotification(item.id);
    setItems((prev) => prev.filter((row) => row.id !== item.id));
    if (!item.read_at) {
      setUnreadCount((prev) => Math.max(0, prev - 1));
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={["top"]}>
        <View style={styles.content}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <ArrowLeft size={18} color="#111827" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Notificaciones</Text>
            <TouchableOpacity style={styles.markAll} onPress={handleMarkAll} disabled={unreadCount === 0}>
              <Text style={styles.markAllText}>Marcar todo</Text>
            </TouchableOpacity>
          </View>

          {isLoading || error || items.length === 0 ? (
            <AsyncStateView
              isLoading={isLoading}
              error={error}
              isEmpty={!isLoading && !error && items.length === 0}
              emptyText="Todavía no tienes notificaciones."
              loadingText="Cargando notificaciones..."
              onRetry={() => loadNotifications()}
            />
          ) : (
            <ScrollView
              showsVerticalScrollIndicator={false}
              refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />}
            >
              {items.map((item) => (
                <View key={item.id} style={[styles.item, !item.read_at && styles.itemUnread]}>
                  <TouchableOpacity onPress={() => handlePressItem(item)}>
                    <Text style={styles.title}>{item.title || "Notificación"}</Text>
                    <Text style={styles.body}>{item.body || "Sin contenido"}</Text>
                  </TouchableOpacity>
                  <View style={styles.itemFooter}>
                    <Text style={styles.date}>{new Date(item.created_at).toLocaleString("es-ES")}</Text>
                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={() => handleDeleteItem(item)}
                      accessibilityRole="button"
                    >
                      <Trash2 size={13} color="#DC2626" />
                      <Text style={styles.deleteText}>Eliminar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </ScrollView>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}
