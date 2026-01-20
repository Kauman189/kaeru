import React from "react";
import { StatusBar } from "react-native";
import RootNavigator from "./src/navigation/RootNavigator";
import { TripsProvider } from "./src/store/tripsContext";
import { ProfileProvider } from "./src/store/profileContext";

export default function App() {
  return (
    <ProfileProvider>
      <TripsProvider>
        <StatusBar barStyle="dark-content" />
        <RootNavigator />
      </TripsProvider>
    </ProfileProvider>
  );
}
