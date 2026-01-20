/**
 * Pantalla de acceso tras el CTA principal del onboarding.
 * UI de MVP preparada para integracion con backend.
 */
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ArrowLeft } from "lucide-react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import styles from "./AuthScreen.styles";

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
