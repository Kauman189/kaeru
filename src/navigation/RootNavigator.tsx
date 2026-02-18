/**
 * Navegador principal y control de onboarding.
 */
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import type { LinkingOptions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OnboardingScreen from "../screens/OnboardingScreen";
import TabsPager from "../screens/TabsPager";
import TripDetailScreen from "../screens/TripDetailScreen";
import TripMapScreen from "../screens/TripMapScreen";
import AuthScreen from "../screens/AuthScreen";
import CreateTripScreen from "../screens/CreateTripScreen";
import ProfileEditScreen from "../screens/ProfileEditScreen";
import ProfileSetupScreen from "../screens/ProfileSetupScreen";
import SettingsScreen from "../screens/SettingsScreen";
import InviteResolverScreen from "../screens/InviteResolverScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import PlayTripSetupScreen from "../screens/PlayTripSetupScreen";
import ActiveTripsScreen from "../screens/ActiveTripsScreen";
import ActiveTripDetailScreen from "../screens/ActiveTripDetailScreen";
import { supabase } from "../lib/supabase";
import styles from "./RootNavigator.styles";

export type RootStackParamList = {
  Onboarding: undefined;
  Tabs: { targetTab?: "discover" | "my_trips" | "profile" } | undefined;
  CreateTrip: { mode?: "create" | "edit"; tripId?: string } | undefined;
  TripDetail:
    | { tripId?: string; source?: "my" | "my_shared" | "discover"; demoTrip?: "onboarding" }
    | undefined;
  TripMap: { tripId?: string; demoTrip?: "onboarding" } | undefined;
  Auth:
    | {
        redirectTo?: "my_trips" | "profile" | "create_trip" | "play_trip";
        pendingInviteToken?: string;
        playTripTripId?: string;
        playTripSource?: "discover" | "my" | "my_shared";
      }
    | undefined;
  InviteResolver: { token: string };
  Notifications: undefined;
  ProfileEdit: undefined;
  ProfileSetup: undefined;
  Settings: undefined;
  PlayTripSetup: { tripId: string; source: "discover" | "my" | "my_shared" };
  ActiveTrips: undefined;
  ActiveTripDetail: { sessionId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ["kaeru://"],
  config: {
    screens: {
      InviteResolver: "invite/:token",
      TripDetail: "trip/:tripId",
    },
  },
};

export default function RootNavigator() {
  const [isReady, setIsReady] = useState(false);
  const [initialRouteName, setInitialRouteName] = useState<keyof RootStackParamList>("Onboarding");

  useEffect(() => {
    let isMounted = true;

    const loadState = async () => {
      const { data } = await supabase.auth.getSession();
      if (!isMounted) return;
      setInitialRouteName(data.session?.user ? "Tabs" : "Onboarding");
      setIsReady(true);
    };

    loadState();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!isReady) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <View style={styles.loadingContent}>
          <Text style={styles.loadingText}>Cargando...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={initialRouteName}
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Tabs" component={TabsPager} />
        <Stack.Screen name="CreateTrip" component={CreateTripScreen} />
        <Stack.Screen 
          name="TripDetail" 
          component={TripDetailScreen}
          options={{ presentation: 'modal' }}
        />
        <Stack.Screen
          name="TripMap"
          component={TripMapScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name="ProfileEdit"
          component={ProfileEditScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name="ProfileSetup"
          component={ProfileSetupScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="InviteResolver" component={InviteResolverScreen} />
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name="PlayTripSetup"
          component={PlayTripSetupScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name="ActiveTrips"
          component={ActiveTripsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name="ActiveTripDetail"
          component={ActiveTripDetailScreen}
          options={{ presentation: "modal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
