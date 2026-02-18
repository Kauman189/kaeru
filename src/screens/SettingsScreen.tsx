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

  const handleDeleteAccount = async () => {
    if (isDeleting || !canConfirmDelete) return;
    setIsDeleting(true);
    setError(null);

    try {
      const { error: invokeError } = await supabase.functions.invoke("delete-account");
      if (invokeError) {
        throw invokeError;
      }

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
      setError(err?.message || "No se pudo eliminar la cuenta.");
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
