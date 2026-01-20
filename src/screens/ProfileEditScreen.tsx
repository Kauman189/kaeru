import React, { useMemo, useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "lucide-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { useProfile } from "../store/profileContext";
import styles from "./ProfileEditScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "ProfileEdit">;

const GENDER_OPTIONS = ["Woman", "Man", "Non-binary", "Prefer not to say"];
const PRONOUN_OPTIONS = ["she/her", "he/him", "they/them", "Prefer not to say"];

export default function ProfileEditScreen({ navigation }: Props) {
  const { profile, completeProfile } = useProfile();
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [location, setLocation] = useState(profile.location);
  const [gender, setGender] = useState(profile.gender);
  const [pronouns, setPronouns] = useState(profile.pronouns);
  const [bio, setBio] = useState(profile.bio);
  const [password, setPassword] = useState("");

  const canSave = useMemo(() => {
    return name.trim().length > 0 && location.trim().length > 0 && pronouns.trim().length > 0;
  }, [location, name, pronouns]);

  const handleSave = () => {
    completeProfile({
      name,
      email,
      location,
      gender,
      pronouns,
      bio,
      password,
    });
    navigation.goBack();
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
        <Text style={styles.title}>Edit profile</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Basic info</Text>
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
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="name@email.com"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
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
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Identity</Text>
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

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>About you</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Bio</Text>
            <TextInput
              style={[styles.input, styles.multiline]}
              placeholder="Short bio about your travel style"
              placeholderTextColor="#9CA3AF"
              value={bio}
              onChangeText={setBio}
              multiline
            />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Security</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>New password</Text>
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>

        <View style={styles.footerRow}>
          <TouchableOpacity
            style={[styles.saveButton, !canSave && styles.saveButtonDisabled]}
            onPress={handleSave}
            disabled={!canSave}
            accessibilityRole="button"
          >
            <Text style={styles.saveButtonText}>Save changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
