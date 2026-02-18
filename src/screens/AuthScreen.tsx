/**
 * Pantalla de acceso tras el CTA principal del onboarding.
 * UI de MVP preparada para integracion con backend.
 */
import React, { useState } from "react";
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
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ArrowLeft } from "lucide-react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { supabase } from "../lib/supabase";
import { useProfile } from "../store/profileContext";
import styles from "./AuthScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "Auth">;

export default function AuthScreen({ navigation, route }: Props) {
  const insets = useSafeAreaInsets();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setNeedsProfileSetup } = useProfile();

  const USERNAME_REGEX = /^[a-z0-9._]{3,20}$/;
  const redirectTo = route.params?.redirectTo;
  const pendingInviteToken = route.params?.pendingInviteToken;
  const playTripTripId = route.params?.playTripTripId;
  const playTripSource = route.params?.playTripSource;

  const redirectAfterAuth = () => {
    if (pendingInviteToken) {
      navigation.reset({
        index: 1,
        routes: [{ name: "Tabs" }, { name: "InviteResolver", params: { token: pendingInviteToken } }],
      });
      return;
    }
    if (redirectTo === "my_trips") {
      navigation.reset({
        index: 0,
        routes: [{ name: "Tabs", params: { targetTab: "my_trips" } }],
      });
      return;
    }
    if (redirectTo === "profile") {
      navigation.reset({
        index: 0,
        routes: [{ name: "Tabs", params: { targetTab: "profile" } }],
      });
      return;
    }
    if (redirectTo === "create_trip") {
      navigation.reset({
        index: 1,
        routes: [{ name: "Tabs" }, { name: "CreateTrip" }],
      });
      return;
    }
    if (redirectTo === "play_trip" && playTripTripId) {
      navigation.reset({
        index: 1,
        routes: [
          { name: "Tabs" },
          {
            name: "PlayTripSetup",
            params: { tripId: playTripTripId, source: playTripSource || "discover" },
          },
        ],
      });
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "Tabs" }],
    });
  };

  const handleSubmit = async () => {
    if (!email.trim() || !password.trim()) {
      setError("El correo y la contraseña son obligatorios.");
      return;
    }
    if (mode === "register") {
      const normalizedUsername = username.trim().toLowerCase();
      if (!fullName.trim()) {
        setError("El nombre completo es obligatorio.");
        return;
      }
      if (!USERNAME_REGEX.test(normalizedUsername)) {
        setError("El usuario debe tener 3-20 caracteres y solo minúsculas, números, . o _.");
        return;
      }
    }
    setIsSubmitting(true);
    setError(null);
    try {
      if (mode === "register") {
        const normalizedUsername = username.trim().toLowerCase();
        const { data: existingUser, error: usernameLookupError } = await supabase
          .from("profiles")
          .select("id")
          .ilike("username", normalizedUsername)
          .limit(1)
          .maybeSingle();

        if (usernameLookupError) {
          setError(usernameLookupError.message);
          return;
        }

        if (existingUser) {
          setError("Ese nombre de usuario ya está en uso.");
          return;
        }

        const { error: signUpError } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: {
              full_name: fullName.trim(),
              username: normalizedUsername,
            },
          },
        });
        if (signUpError) {
          const message = signUpError.message.toLowerCase();
          if (message.includes("already registered") || message.includes("already been registered")) {
            setError("Ese email ya esta registrado.");
          } else {
            setError(signUpError.message);
          }
          return;
        }

        const { data: signInData, error: signInError } =
          await supabase.auth.signInWithPassword({
            email: email.trim(),
            password,
          });
        if (signInError || !signInData.user) {
          setError(signInError?.message || "No se pudo iniciar sesión tras crear la cuenta.");
          return;
        }

        const { error: upsertError } = await supabase.from("profiles").upsert({
          id: signInData.user.id,
          full_name: fullName.trim(),
          username: normalizedUsername,
          profile_complete: false,
          updated_at: new Date().toISOString(),
        });

        if (upsertError) {
          const upsertMessage = upsertError.message.toLowerCase();
          if (upsertMessage.includes("duplicate key") || upsertMessage.includes("username")) {
            setError("Ese nombre de usuario ya esta en uso.");
          } else {
            setError(upsertError.message);
          }
          return;
        }

        setUsername(normalizedUsername);
        setNeedsProfileSetup(true);
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });
        if (signInError) {
          const message = signInError.message.toLowerCase();
          if (message.includes("invalid login credentials")) {
            setError("Email o contrasena incorrectos.");
          } else {
            setError(signInError.message);
          }
          return;
        }
      }
      redirectAfterAuth();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
        </View>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              styles.content,
              { paddingBottom: 32 + insets.bottom },
            ]}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="interactive"
            onScrollBeginDrag={Keyboard.dismiss}
            contentInsetAdjustmentBehavior="always"
            automaticallyAdjustKeyboardInsets
          >
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

            {mode === "register" ? (
              <>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Nombre completo</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Tu nombre"
                    placeholderTextColor="#9CA3AF"
                    value={fullName}
                    onChangeText={setFullName}
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Nombre de usuario</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="ejemplo.usuario"
                    placeholderTextColor="#9CA3AF"
                    value={username}
                    onChangeText={(value) => setUsername(value.toLowerCase())}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
              </>
            ) : null}

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
                  ? "¿No tienes cuenta? Crear una"
                  : "¿Ya tienes cuenta? Inicia sesión"}
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
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
