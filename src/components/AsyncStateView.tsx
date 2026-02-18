import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

type Props = {
  isLoading: boolean;
  error?: string | null;
  isEmpty?: boolean;
  loadingText?: string;
  emptyText?: string;
  onRetry?: () => void;
};

export default function AsyncStateView({
  isLoading,
  error,
  isEmpty,
  loadingText = "Cargando...",
  emptyText = "No hay datos.",
  onRetry,
}: Props) {
  if (isLoading) {
    return (
      <View style={{ paddingHorizontal: 20, paddingVertical: 20, alignItems: "center" }}>
        <ActivityIndicator size="small" color="#2563EB" />
        <Text style={{ marginTop: 10, color: "#6B7280", fontSize: 14 }}>{loadingText}</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
        <Text style={{ color: "#111827", fontSize: 14, marginBottom: 6 }}>
          No se ha podido cargar la información.
        </Text>
        <Text style={{ color: "#B91C1C", fontSize: 12, marginBottom: 10 }} numberOfLines={3}>
          {error}
        </Text>
        {onRetry ? (
          <TouchableOpacity
            onPress={onRetry}
            style={{
              alignSelf: "flex-start",
              borderWidth: 1,
              borderColor: "#DBEAFE",
              borderRadius: 12,
              paddingHorizontal: 12,
              paddingVertical: 8,
              backgroundColor: "#FFFFFF",
            }}
          >
            <Text style={{ color: "#1D4ED8", fontWeight: "600", fontSize: 12 }}>Reintentar</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }

  if (isEmpty) {
    return (
      <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
        <Text style={{ color: "#6B7280", fontSize: 14, lineHeight: 20 }}>{emptyText}</Text>
      </View>
    );
  }

  return null;
}
