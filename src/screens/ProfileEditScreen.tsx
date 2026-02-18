import React, { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { ArrowLeft } from "lucide-react-native";
import * as ImagePicker from "expo-image-picker";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { useProfile } from "../store/profileContext";
import { supabase } from "../lib/supabase";
import styles from "./ProfileEditScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "ProfileEdit">;

const GENDER_OPTIONS = ["Mujer", "Hombre", "No binario", "Prefiero no decirlo"];
const PRONOUN_OPTIONS = ["ella", "él", "elle", "Prefiero no decirlo"];

export default function ProfileEditScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { profile, completeProfile } = useProfile();
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [location, setLocation] = useState(profile.location);
  const [gender, setGender] = useState(profile.gender);
  const [pronouns, setPronouns] = useState(profile.pronouns);
  const [bio, setBio] = useState(profile.bio);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [bannerUrl, setBannerUrl] = useState<string | null>(null);
  const [instagramUrl, setInstagramUrl] = useState("");
  const [twitterUrl, setTwitterUrl] = useState("");
  const [threadsUrl, setThreadsUrl] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [initialValues, setInitialValues] = useState<{
    name: string;
    location: string;
    gender: string;
    pronouns: string;
    bio: string;
    avatarUrl: string | null;
    bannerUrl: string | null;
    instagramUrl: string;
    twitterUrl: string;
    threadsUrl: string;
  } | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return;
      const { data, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userData.user.id)
        .single();
      if (profileError || !data) return;
      setName(data.full_name || data.username || "");
      setLocation(data.location || "");
      setGender(data.gender || "");
      setPronouns(data.pronouns || "");
      setBio(data.bio || "");
      setAvatarUrl(data.avatar_url || null);
      setBannerUrl(data.banner_url || null);
      setInstagramUrl(data.instagram_url || "");
      setTwitterUrl(data.twitter_url || "");
      setThreadsUrl(data.threads_url || "");
      setInitialValues({
        name: data.full_name || data.username || "",
        location: data.location || "",
        gender: data.gender || "",
        pronouns: data.pronouns || "",
        bio: data.bio || "",
        avatarUrl: data.avatar_url || null,
        bannerUrl: data.banner_url || null,
        instagramUrl: data.instagram_url || "",
        twitterUrl: data.twitter_url || "",
        threadsUrl: data.threads_url || "",
      });
    };

    loadProfile();
  }, []);

  const canSave = useMemo(() => {
    if (isSubmitting || isUploadingImage) return false;
    if (!initialValues) return true;
    const hasProfileChanges =
      name !== initialValues.name ||
      location !== initialValues.location ||
      gender !== initialValues.gender ||
      pronouns !== initialValues.pronouns ||
      bio !== initialValues.bio ||
      avatarUrl !== initialValues.avatarUrl ||
      bannerUrl !== initialValues.bannerUrl ||
      instagramUrl !== initialValues.instagramUrl ||
      twitterUrl !== initialValues.twitterUrl ||
      threadsUrl !== initialValues.threadsUrl;
    const wantsPasswordChange = newPassword.trim().length > 0 || currentPassword.trim().length > 0;
    return hasProfileChanges || wantsPasswordChange;
  }, [
    avatarUrl,
    bannerUrl,
    bio,
    currentPassword,
    gender,
    initialValues,
    instagramUrl,
    isSubmitting,
    isUploadingImage,
    location,
    name,
    newPassword,
    pronouns,
    threadsUrl,
    twitterUrl,
  ]);

  const handleSave = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      const { data: userData, error: userError } = await supabase.auth.getUser();
      if (userError || !userData.user) {
        setError("Debes iniciar sesion para guardar.");
        return;
      }
      const fallbackUsername =
        (userData.user.user_metadata?.username as string | undefined)?.trim().toLowerCase() ||
        `user_${userData.user.id.slice(0, 8)}`;
      const payload: any = {
        full_name: name,
        location,
        gender,
        pronouns,
        bio,
        avatar_url: avatarUrl,
        banner_url: bannerUrl,
        instagram_url: instagramUrl.trim() || null,
        twitter_url: twitterUrl.trim() || null,
        threads_url: threadsUrl.trim() || null,
        profile_complete: true,
        updated_at: new Date().toISOString(),
      };
      const { data: existingProfile } = await supabase
        .from("profiles")
        .select("id,username")
        .eq("id", userData.user.id)
        .maybeSingle();

      if (existingProfile) {
        const { error: updateError } = await supabase
          .from("profiles")
          .update(payload)
          .eq("id", userData.user.id);
        if (updateError) {
          const fallbackUpdatePayload = {
            full_name: name,
            location,
            gender,
            pronouns,
            bio,
            avatar_url: avatarUrl,
            profile_complete: true,
            updated_at: new Date().toISOString(),
          };
          const { error: fallbackUpdateError } = await supabase
            .from("profiles")
            .update(fallbackUpdatePayload)
            .eq("id", userData.user.id);
          if (fallbackUpdateError) {
            setError(fallbackUpdateError.message);
            return;
          }
        }
      } else {
        const { error: insertError } = await supabase.from("profiles").insert({
          id: userData.user.id,
          username: fallbackUsername,
          ...payload,
        });
        if (insertError) {
          setError(insertError.message);
          return;
        }
      }

      if (newPassword.trim().length > 0) {
        if (!currentPassword.trim()) {
          setError("Para cambiar la contraseña, introduce primero tu contraseña actual.");
          return;
        }
        const authEmail = userData.user.email || email.trim();
        if (!authEmail) {
          setError("No se pudo verificar tu sesion. Vuelve a iniciar sesion.");
          return;
        }
        const { error: reauthError } = await supabase.auth.signInWithPassword({
          email: authEmail,
          password: currentPassword,
        });
        if (reauthError) {
          setError("La contraseña actual no es correcta.");
          return;
        }

        const { error: passError } = await supabase.auth.updateUser({
          password: newPassword,
        });
        if (passError) {
          setError(passError.message);
          return;
        }
      }

      completeProfile({
        name,
        email,
        location,
        gender,
        pronouns,
        bio,
      });
      setCurrentPassword("");
      setNewPassword("");
      navigation.goBack();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePickImage = async (type: "avatar" | "banner") => {
    if (isUploadingImage) return;
    setError(null);
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData.user) {
      setError("Debes iniciar sesion para subir imagen.");
      return;
    }

    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      setError("Debes dar permiso a galeria.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsMultipleSelection: false,
      quality: 0.9,
    });

    if (result.canceled || !result.assets?.length) {
      return;
    }

    setIsUploadingImage(true);
    try {
      const asset = result.assets[0];
      const extRaw =
        asset.fileName?.split(".").pop()?.toLowerCase() ||
        asset.mimeType?.split("/").pop()?.toLowerCase() ||
        "jpg";
      const extension = extRaw.replace(/[^a-z0-9]/g, "") || "jpg";
      const path = `${userData.user.id}/profile/${type}-${Date.now()}.${extension}`;

      const response = await fetch(asset.uri);
      const bytes = await response.arrayBuffer();
      const { error: uploadError } = await supabase.storage.from("trip-media").upload(path, bytes, {
        contentType: asset.mimeType || "image/jpeg",
        upsert: true,
      });
      if (uploadError) {
        throw uploadError;
      }

      const { data: publicData } = supabase.storage.from("trip-media").getPublicUrl(path);
      if (type === "avatar") {
        setAvatarUrl(publicData.publicUrl);
      } else {
        setBannerUrl(publicData.publicUrl);
      }
    } catch (err: any) {
      setError(err?.message || "No se pudo subir la imagen.");
    } finally {
      setIsUploadingImage(false);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
            accessibilityRole="button"
          >
            <ArrowLeft size={22} color="#1E1E1E" />
          </TouchableOpacity>
          <Text style={styles.title}>Editar perfil</Text>
        </View>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[styles.content, { paddingBottom: 120 + insets.bottom }]}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="interactive"
            onScrollBeginDrag={Keyboard.dismiss}
          >
            <View style={styles.card}>
              <Text style={styles.sectionTitle}>Foto de perfil y banner</Text>
              <View style={styles.mediaRow}>
                <TouchableOpacity
                  style={styles.mediaPicker}
                  onPress={() => handlePickImage("avatar")}
                  disabled={isUploadingImage}
                >
                  {avatarUrl ? (
                    <Image source={{ uri: avatarUrl }} style={styles.mediaAvatar} />
                  ) : (
                    <Text style={styles.mediaPlaceholder}>Avatar</Text>
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.mediaPickerBanner}
                  onPress={() => handlePickImage("banner")}
                  disabled={isUploadingImage}
                >
                  {bannerUrl ? (
                    <Image source={{ uri: bannerUrl }} style={styles.mediaBanner} />
                  ) : (
                    <Text style={styles.mediaPlaceholder}>Banner</Text>
                  )}
                </TouchableOpacity>
              </View>
              {isUploadingImage ? (
                <View style={styles.uploadingRow}>
                  <ActivityIndicator size="small" color="#1E1E1E" />
                  <Text style={styles.uploadingText}>Subiendo imagen...</Text>
                </View>
              ) : null}
            </View>

            <View style={styles.card}>
              <Text style={styles.sectionTitle}>Datos básicos</Text>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Nombre</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Tu nombre"
                  placeholderTextColor="#9CA3AF"
                  value={name}
                  onChangeText={setName}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Correo electrónico</Text>
                <TextInput
                  style={styles.input}
                  placeholder="nombre@email.com"
                  placeholderTextColor="#9CA3AF"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Ubicación</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ciudad, país"
                  placeholderTextColor="#9CA3AF"
                  value={location}
                  onChangeText={setLocation}
                />
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.sectionTitle}>Identidad</Text>
              <Text style={styles.inputLabel}>Género</Text>
              <View style={styles.optionRow}>
                {GENDER_OPTIONS.map((option) => (
                  <TouchableOpacity
                    key={option}
                    onPress={() => setGender(option)}
                    style={[
                      styles.optionChip,
                      gender === option && styles.optionChipActive,
                    ]}
                    accessibilityRole="button"
                  >
                    <Text
                      style={[
                        styles.optionText,
                        gender === option && styles.optionTextActive,
                      ]}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={[styles.inputLabel, styles.optionLabel]}>Pronombres</Text>
              <View style={styles.optionRow}>
                {PRONOUN_OPTIONS.map((option) => (
                  <TouchableOpacity
                    key={option}
                    onPress={() => setPronouns(option)}
                    style={[
                      styles.optionChip,
                      pronouns === option && styles.optionChipActive,
                    ]}
                    accessibilityRole="button"
                  >
                    <Text
                      style={[
                        styles.optionText,
                        pronouns === option && styles.optionTextActive,
                      ]}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.sectionTitle}>Sobre ti</Text>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Biografía</Text>
                <TextInput
                  style={[styles.input, styles.multiline]}
                  placeholder="Breve bio sobre tu estilo de viaje"
                  placeholderTextColor="#9CA3AF"
                  value={bio}
                  onChangeText={setBio}
                  multiline
                />
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.sectionTitle}>Redes sociales</Text>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Instagram</Text>
                <TextInput
                  style={styles.input}
                  placeholder="https://instagram.com/tuusuario"
                  placeholderTextColor="#9CA3AF"
                  value={instagramUrl}
                  onChangeText={setInstagramUrl}
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>X / Twitter</Text>
                <TextInput
                  style={styles.input}
                  placeholder="https://x.com/tuusuario"
                  placeholderTextColor="#9CA3AF"
                  value={twitterUrl}
                  onChangeText={setTwitterUrl}
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Threads</Text>
                <TextInput
                  style={styles.input}
                  placeholder="https://threads.net/@tuusuario"
                  placeholderTextColor="#9CA3AF"
                  value={threadsUrl}
                  onChangeText={setThreadsUrl}
                  autoCapitalize="none"
                />
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.sectionTitle}>Seguridad</Text>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Contraseña actual</Text>
                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry
                  value={currentPassword}
                  onChangeText={setCurrentPassword}
                />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Nueva contraseña</Text>
                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry
                  value={newPassword}
                  onChangeText={setNewPassword}
                />
              </View>
            </View>

            <View style={styles.footerRow}>
              <TouchableOpacity
                style={[
                  styles.saveButton,
                  (!canSave || isSubmitting) && styles.saveButtonDisabled,
                ]}
                onPress={handleSave}
                disabled={!canSave || isSubmitting}
                accessibilityRole="button"
              >
                <Text style={styles.saveButtonText}>
                  {isSubmitting ? "Guardando..." : "Guardar cambios"}
                </Text>
              </TouchableOpacity>
            </View>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
