/**
 * Helpers de AsyncStorage para persistir el onboarding.
 */
import AsyncStorage from "@react-native-async-storage/async-storage";

const ONBOARDING_KEY = "hasSeenOnboarding";

export async function getOnboardingSeen(): Promise<boolean> {
  try {
    const stored = await AsyncStorage.getItem(ONBOARDING_KEY);
    return stored === "true";
  } catch (error) {
    console.warn("Failed to read onboarding state.", error);
    return false;
  }
}

export async function setOnboardingSeen(): Promise<void> {
  try {
    await AsyncStorage.setItem(ONBOARDING_KEY, "true");
  } catch (error) {
    console.warn("Failed to persist onboarding state.", error);
  }
}
