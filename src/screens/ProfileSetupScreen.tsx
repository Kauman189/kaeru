import React, { useMemo, useState } from "react";
import {
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
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { useProfile } from "../store/profileContext";
import { supabase } from "../lib/supabase";
import styles from "./ProfileSetupScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "ProfileSetup">;

const GENDER_OPTIONS = ["Mujer", "Hombre", "No binario", "Prefiero no decirlo"];
const PRONOUN_OPTIONS = ["ella", "él", "elle", "Prefiero no decirlo"];

export default function ProfileSetupScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { profile, completeProfile } = useProfile();
  const [step, setStep] = useState(1);
  const [name, setName] = useState(profile.name);
  const [location, setLocation] = useState(profile.location);
  const [gender, setGender] = useState(profile.gender);
  const [pronouns, setPronouns] = useState(profile.pronouns);
  const [bio, setBio] = useState(profile.bio);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canContinue = useMemo(() => {
    if (step === 1) {
      return name.trim().length > 0 && location.trim().length > 0 && pronouns.trim().length > 0;
    }
    return true;
  }, [location, name, pronouns, step]);

  const handleNext = async () => {
    if (step === 1) {
      setStep(2);
      return;
    }
    setIsSubmitting(true);
    setError(null);
    try {
      const { data: userData, error: userError } = await supabase.auth.getUser();
      if (userError || !userData.user) {
        setError("Inicia sesión para actualizar tu perfil.");
        setIsSubmitting(false);
        return;
      }
      const fallbackUsername = `user_${userData.user.id.slice(0, 8)}`;
      const { data: existingProfile } = await supabase
        .from("profiles")
        .select("id,username")
        .eq("id", userData.user.id)
        .maybeSingle();

      if (existingProfile) {
        const { error: updateError } = await supabase
          .from("profiles")
          .update({
            full_name: name,
            location,
            gender,
            pronouns,
            bio,
            profile_complete: true,
            updated_at: new Date().toISOString(),
          })
          .eq("id", userData.user.id);
        if (updateError) {
          setError(updateError.message);
          return;
        }
      } else {
        const usernameFromMetadata =
          (userData.user.user_metadata?.username as string | undefined)?.trim().toLowerCase() ||
          fallbackUsername;
        const { error: insertError } = await supabase.from("profiles").insert({
          id: userData.user.id,
          username: usernameFromMetadata,
          full_name: name,
          location,
          gender,
          pronouns,
          bio,
          profile_complete: true,
          updated_at: new Date().toISOString(),
        });
        if (insertError) {
          setError(insertError.message);
          return;
        }
      }

      completeProfile({ name, location, gender, pronouns, bio });
      navigation.goBack();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
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
          <View>
            <Text style={styles.stepLabel}>Paso {step} de 2</Text>
            <Text style={styles.title}>Completa tu perfil</Text>
          </View>
        </View>

        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: step === 1 ? "50%" : "100%" }]} />
        </View>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.body}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.content}
              keyboardShouldPersistTaps="handled"
              keyboardDismissMode="interactive"
              onScrollBeginDrag={Keyboard.dismiss}
            >
              {step === 1 ? (
                <View style={styles.card}>
                  <Text style={styles.sectionTitle}>Datos básicos</Text>
                  <Text style={styles.sectionSubtitle}>
                    Cuéntanos cómo quieres aparecer en Kaeru.
                  </Text>

                  <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Nombre</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Tu nombre"
                      placeholderTextColor="#9CA3AF"
                      value={name}
                      onChangeText={setName}
                      returnKeyType="next"
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
              ) : (
                <View style={styles.card}>
                  <Text style={styles.sectionTitle}>Sobre ti</Text>
                  <Text style={styles.sectionSubtitle}>
                    Comparte una bio corta para mostrar tu estilo de viaje.
                  </Text>

                  <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Biografía</Text>
                    <TextInput
                      style={[styles.input, styles.multiline]}
                      placeholder="Describe qué tipo de viajes te gustan"
                      placeholderTextColor="#9CA3AF"
                      value={bio}
                      onChangeText={setBio}
                      multiline
                    />
                  </View>
                </View>
              )}
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 14) }]}>
          <TouchableOpacity
            style={[styles.secondaryButton, step === 1 && styles.secondaryButtonDisabled]}
            onPress={() => setStep(1)}
            disabled={step === 1}
            accessibilityRole="button"
          >
            <Text style={styles.secondaryText}>Atrás</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.primaryButton,
              (!canContinue || isSubmitting) && styles.primaryButtonDisabled,
            ]}
            onPress={handleNext}
            disabled={!canContinue || isSubmitting}
            accessibilityRole="button"
          >
            <Text style={styles.primaryText}>
              {isSubmitting ? "Guardando..." : step === 1 ? "Continuar" : "Finalizar"}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
