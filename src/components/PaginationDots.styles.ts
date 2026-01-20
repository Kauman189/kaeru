import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  dot: {
    height: 10,
    width: 40,
    borderRadius: 999,
  },
  dotActive: {
    backgroundColor: "#1E1E1E",
  },
  dotInactive: {
    backgroundColor: "rgba(30,30,30,0.25)",
  },
});

export default styles;
