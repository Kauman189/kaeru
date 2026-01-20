/**
 * Pantalla de acceso tras el CTA principal del onboarding.
 * UI de MVP preparada para integracion con backend.
 */
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ArrowLeft } from "lucide-react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { supabase } from "../lib/supabase";
import { useProfile } from "../store/profileContext";
import styles from "./AuthScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "Auth">;

export default function AuthScreen({ navigation }: Props) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setNeedsProfileSetup } = useProfile();

  const handleSubmit = async () => {
    if (!email.trim() || !password.trim()) {
      setError("Email and password are required.");
      return;
    }
    setIsSubmitting(true);
    setError(null);
    try {
      if (mode === "register") {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
        });
        if (signUpError) {
          setError(signUpError.message);
          return;
        }
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (signInError) {
          setError(signInError.message);
          return;
        }
        setNeedsProfileSetup(true);
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (signInError) {
          setError(signInError.message);
          return;
        }
      }
      navigation.reset({
        index: 0,
        routes: [{ name: "Tabs" }],
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          accessibilityRole="button"
        >
          <ArrowLeft size={22} color="#1E1E1E" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          {mode === "login" ? "Iniciar sesion" : "Crear cuenta"}
        </Text>
        <Text style={styles.subtitle}>
          Accede para guardar tus viajes, colaborar y mantener tus planes.
        </Text>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Correo electronico</Text>
          <TextInput
            style={styles.input}
            placeholder="tucorreo@ejemplo.com"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Contrasena</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          accessibilityRole="button"
          onPress={handleSubmit}
          disabled={isSubmitting}
        >
          <Text style={styles.primaryButtonText}>
            {isSubmitting
              ? "Procesando..."
              : mode === "login"
              ? "Entrar"
              : "Crear cuenta"}
          </Text>
        </TouchableOpacity>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity
          style={styles.modeToggle}
          onPress={() =>
            setMode((prev) => (prev === "login" ? "register" : "login"))
          }
          accessibilityRole="button"
        >
          <Text style={styles.modeToggleText}>
            {mode === "login"
              ? "No tienes cuenta? Crear una"
              : "Ya tienes cuenta? Inicia sesion"}
          </Text>
        </TouchableOpacity>

        <View style={styles.separatorRow}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>o</Text>
          <View style={styles.separatorLine} />
        </View>

        <TouchableOpacity style={styles.providerButton} accessibilityRole="button">
          <View style={styles.providerIcon}>
            <Text style={styles.providerIconText}>G</Text>
          </View>
          <Text style={styles.providerText}>Continuar con Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.providerButton} accessibilityRole="button">
          <View style={styles.providerIcon}>
            <Text style={styles.providerIconText}>A</Text>
          </View>
          <Text style={styles.providerText}>Continuar con Apple</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
