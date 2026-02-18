import React from "react";
import { StatusBar } from "react-native";
import * as Notifications from "expo-notifications";
import RootNavigator from "./src/navigation/RootNavigator";
import { TripsProvider } from "./src/store/tripsContext";
import { ProfileProvider } from "./src/store/profileContext";
import { startAnalyticsAutoFlush, stopAnalyticsAutoFlush } from "./src/services/analytics.service";

export default function App() {
  React.useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldShowBanner: true,
        shouldShowList: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });
    startAnalyticsAutoFlush();
    return () => {
      stopAnalyticsAutoFlush();
    };
  }, []);

  return (
    <ProfileProvider>
      <TripsProvider>
        <StatusBar barStyle="dark-content" />
        <RootNavigator />
      </TripsProvider>
    </ProfileProvider>
  );
}
