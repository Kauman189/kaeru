import React, { useMemo, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "lucide-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { useProfile } from "../store/profileContext";
import { supabase } from "../lib/supabase";
import styles from "./ProfileSetupScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "ProfileSetup">;

const GENDER_OPTIONS = ["Woman", "Man", "Non-binary", "Prefer not to say"];
const PRONOUN_OPTIONS = ["she/her", "he/him", "they/them", "Prefer not to say"];

export default function ProfileSetupScreen({ navigation }: Props) {
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
        setError("Sign in to update your profile.");
        setIsSubmitting(false);
        return;
      }

      const { error: upsertError } = await supabase
        .from("profiles")
        .upsert({
          id: userData.user.id,
          full_name: name,
          location,
          gender,
          pronouns,
          bio,
          profile_complete: true,
          updated_at: new Date().toISOString(),
        });

      if (upsertError) {
        setError(upsertError.message);
        setIsSubmitting(false);
        return;
      }

      completeProfile({ name, location, gender, pronouns, bio });
      navigation.goBack();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          accessibilityRole="button"
        >
          <ArrowLeft size={22} color="#1E1E1E" />
        </TouchableOpacity>
        <View>
          <Text style={styles.stepLabel}>Step {step} of 2</Text>
          <Text style={styles.title}>Complete your profile</Text>
        </View>
      </View>

      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: step === 1 ? "50%" : "100%" }]} />
      </View>

      <View style={styles.content}>
        {step === 1 ? (
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Basics</Text>
            <Text style={styles.sectionSubtitle}>
              Tell us how you want to appear in Kaeru.
            </Text>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Your name"
                placeholderTextColor="#9CA3AF"
                value={name}
                onChangeText={setName}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Location</Text>
              <TextInput
                style={styles.input}
                placeholder="City, country"
                placeholderTextColor="#9CA3AF"
                value={location}
                onChangeText={setLocation}
              />
            </View>

            <Text style={styles.inputLabel}>Gender</Text>
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

            <Text style={[styles.inputLabel, styles.optionLabel]}>Pronouns</Text>
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
            <Text style={styles.sectionTitle}>About you</Text>
            <Text style={styles.sectionSubtitle}>
              Share a short bio so people understand your travel style.
            </Text>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Bio</Text>
              <TextInput
                style={[styles.input, styles.multiline]}
                placeholder="Describe what kind of trips you love"
                placeholderTextColor="#9CA3AF"
                value={bio}
                onChangeText={setBio}
                multiline
              />
            </View>
          </View>
        )}
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.secondaryButton, step === 1 && styles.secondaryButtonDisabled]}
          onPress={() => setStep(1)}
          disabled={step === 1}
          accessibilityRole="button"
        >
          <Text style={styles.secondaryText}>Back</Text>
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
            {isSubmitting ? "Saving..." : step === 1 ? "Continue" : "Finish"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
