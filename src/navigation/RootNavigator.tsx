/**
 * Navegador principal y control de onboarding.
 */
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OnboardingScreen from "../screens/OnboardingScreen";
import HomeScreen from "../screens/HomeScreen";
import TripDetailScreen from "../screens/TripDetailScreen";
import AuthScreen from "../screens/AuthScreen";
import { getOnboardingSeen } from "../storage/onboardingStorage";

export type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
  TripDetail: undefined;
  Auth: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const [isReady, setIsReady] = useState(false);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadState = async () => {
      // Lee el estado persistido antes de renderizar la navegacion.
      const seen = await getOnboardingSeen();
      if (isMounted) {
        setHasSeenOnboarding(seen);
        setIsReady(true);
      }
    };

    loadState();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!isReady) {
    return (
      <SafeAreaView className="flex-1 bg-[#D9F1FF]">
        <View className="flex-1 items-center justify-center">
          <Text className="text-sm text-[#4B5563]">Cargando...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        // TODO: Cambiar a hasSeenOnboarding ? "Home" : "Onboarding" en produccion
        initialRouteName="Onboarding"
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen 
          name="TripDetail" 
          component={TripDetailScreen}
          options={{ presentation: 'modal' }}
        />
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ presentation: "modal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
