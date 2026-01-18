/**
 * Pantalla de acceso tras el CTA principal del onboarding.
 * UI de MVP preparada para integracion con backend.
 */
import React from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ArrowLeft } from "lucide-react-native";
import { RootStackParamList } from "../navigation/RootNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Auth">;

export default function AuthScreen({ navigation }: Props) {
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
        <Text style={styles.title}>Iniciar sesion o registrarse</Text>
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
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Contrasena</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.primaryButton} accessibilityRole="button">
          <Text style={styles.primaryButtonText}>Continuar</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1E1E1E",
    marginTop: 16,
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 8,
    marginBottom: 24,
    lineHeight: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: "#1E1E1E",
    backgroundColor: "#FFFFFF",
  },
  primaryButton: {
    backgroundColor: "#1E1E1E",
    borderRadius: 18,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 8,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  separatorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E7EB",
  },
  separatorText: {
    marginHorizontal: 10,
    fontSize: 12,
    color: "#9CA3AF",
  },
  providerButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 18,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
  },
  providerIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  providerIconText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1E1E1E",
  },
  providerText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1E1E1E",
  },
});
