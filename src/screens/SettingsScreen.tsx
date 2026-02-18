import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ArrowLeft } from "lucide-react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { supabase } from "../lib/supabase";
import styles from "./SettingsScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "Settings">;

export default function SettingsScreen({ navigation }: Props) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canConfirmDelete = confirmText.trim().toUpperCase() === "ELIMINAR";

  const asText = (value: unknown) => {
    if (typeof value === "string") return value;
    if (value == null) return "";
    if (value instanceof Error) return value.message || "";
    try {
      return JSON.stringify(value);
    } catch {
      return String(value);
    }
  };

  const toReadableDeleteError = (err: any, fnName?: string) => {
    const rawMessage = asText(err?.message || err);
    const details = asText(
      err?.context?.error ||
        err?.context?.message ||
        err?.context?.body ||
        err?.details ||
        err?.error ||
        err?.data
    );
    const merged = `${rawMessage} ${details}`.toLowerCase();

    if (merged.includes("non-2xx")) {
      return fnName
        ? `La función "${fnName}" respondió con error. Revisa logs de Supabase Functions.`
        : "La función de borrado respondió con error. Revisa logs de Supabase Functions.";
    }
    if (merged.includes("not found") || merged.includes("404")) {
      return fnName
        ? `No se encontró la función "${fnName}" en Supabase.`
        : "No se encontró la función de borrado en Supabase.";
    }
    if (merged.includes("permission") || merged.includes("not authorized") || merged.includes("jwt")) {
      return "No tienes permisos para eliminar la cuenta con la sesión actual.";
    }
    if (rawMessage.trim().length > 0 && rawMessage.trim().toLowerCase() !== "[object object]") {
      return rawMessage;
    }
    if (details.trim().length > 0 && details.trim().toLowerCase() !== "[object object]") {
      return details;
    }
    return "No se pudo eliminar la cuenta.";
  };

  const invokeDeleteAccount = async () => {
    const candidates = ["delete-account", "delete_account", "deleteAccount"] as const;
    let lastError: { error: any; fnName: string } | null = null;

    for (const fnName of candidates) {
      const { error } = await supabase.functions.invoke(fnName);
      if (!error) {
        return { ok: true as const };
      }

      lastError = { error, fnName };
      const message = String(error?.message || "").toLowerCase();
      // Si no es un 404/not found, dejamos de iterar nombres de function
      // y pasamos al fallback RPC.
      if (!(message.includes("not found") || message.includes("404"))) {
        break;
      }
    }

    // Fallback backend: RPC SQL para entornos donde la Edge Function falla
    // (incluyendo non-2xx) o no está operativa.
    const { error: rpcError } = await supabase.rpc("delete_my_account");
    if (!rpcError) {
      return { ok: true as const };
    }
    if (lastError) {
      throw { error: rpcError, __fnName: lastError.fnName };
    }
    throw { error: rpcError };
  };

  const handleDeleteAccount = async () => {
    if (isDeleting || !canConfirmDelete) return;
    setIsDeleting(true);
    setError(null);

    try {
      await invokeDeleteAccount();

      const { error: signOutError } = await supabase.auth.signOut();
      if (signOutError) {
        throw signOutError;
      }

      setIsDeleteModalOpen(false);
      navigation.reset({
        index: 0,
        routes: [{ name: "Onboarding" }],
      });
    } catch (err: any) {
      setError(toReadableDeleteError(err?.error || err, err?.__fnName));
    } finally {
      setIsDeleting(false);
    }
  };

  const handleSignOut = async () => {
    if (isSigningOut || isDeleting) return;
    setIsSigningOut(true);
    setError(null);
    try {
      const { error: signOutError } = await supabase.auth.signOut();
      if (signOutError) {
        throw signOutError;
      }
      navigation.reset({
        index: 0,
        routes: [{ name: "Onboarding" }],
      });
    } catch (err: any) {
      setError(err?.message || "No se pudo cerrar sesión.");
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={["top"]}>
        <View style={styles.content}>
          <View style={styles.headerRow}>
            <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
              <ArrowLeft size={18} color="#1E1E1E" />
            </Pressable>
            <Text style={styles.headerTitle}>Ajustes</Text>
            <View style={styles.headerSpace} />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Cuenta</Text>
            <Text style={styles.sectionText}>
              Puedes cerrar sesión o eliminar tu cuenta de forma permanente.
            </Text>

            <Pressable
              style={[styles.signOutButton, isSigningOut && styles.signOutButtonDisabled]}
              onPress={handleSignOut}
              disabled={isSigningOut || isDeleting}
            >
              {isSigningOut ? (
                <ActivityIndicator size="small" color="#1D4ED8" />
              ) : (
                <Text style={styles.signOutButtonText}>Cerrar sesión</Text>
              )}
            </Pressable>

            <Pressable
              style={[styles.deleteButton, isDeleting && styles.deleteButtonDisabled]}
              onPress={() => {
                setError(null);
                setConfirmText("");
                setIsDeleteModalOpen(true);
              }}
              disabled={isDeleting || isSigningOut}
            >
              <Text style={styles.deleteButtonText}>Eliminar cuenta</Text>
            </Pressable>

            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        </View>
      </SafeAreaView>

      <Modal
        visible={isDeleteModalOpen}
        transparent
        animationType="slide"
        onRequestClose={() => setIsDeleteModalOpen(false)}
      >
        <Pressable style={styles.modalBackdrop} onPress={() => setIsDeleteModalOpen(false)}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined}>
            <Pressable style={styles.modalSheet} onPress={(event) => event.stopPropagation()}>
              <Text style={styles.modalTitle}>Eliminar cuenta</Text>
              <Text style={styles.modalText}>
                Escribe ELIMINAR para confirmar. Se borrarán tus viajes, fotos, comentarios y perfil.
              </Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Escribe ELIMINAR"
                autoCapitalize="characters"
                autoCorrect={false}
                value={confirmText}
                onChangeText={setConfirmText}
              />
              <View style={styles.modalActions}>
                <Pressable
                  style={styles.modalCancel}
                  onPress={() => {
                    if (isDeleting) return;
                    setIsDeleteModalOpen(false);
                  }}
                >
                  <Text style={styles.modalCancelText}>Cancelar</Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.modalConfirm,
                    (!canConfirmDelete || isDeleting) && styles.modalConfirmDisabled,
                  ]}
                  disabled={!canConfirmDelete || isDeleting}
                  onPress={handleDeleteAccount}
                >
                  {isDeleting ? (
                    <ActivityIndicator size="small" color="#FFFFFF" />
                  ) : (
                    <Text style={styles.modalConfirmText}>Eliminar</Text>
                  )}
                </Pressable>
              </View>
            </Pressable>
          </KeyboardAvoidingView>
        </Pressable>
      </Modal>
    </View>
  );
}
