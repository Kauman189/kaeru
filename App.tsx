import React from "react";
import { StatusBar } from "react-native";
import RootNavigator from "./src/navigation/RootNavigator";
import { TripsProvider } from "./src/store/tripsContext";

export default function App() {
  return (
    <TripsProvider>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
    </TripsProvider>
  );
}
