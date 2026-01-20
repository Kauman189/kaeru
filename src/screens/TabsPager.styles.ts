import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F7",
  },
  pager: {
    flex: 1,
  },
  tabBar: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "#1E1E1E",
    borderRadius: 32,
    paddingVertical: 8,
    paddingHorizontal: 14,
    gap: 14,
  },
  tabItem: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  tabItemActive: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
  },
  tabIndicator: {
    position: "absolute",
    top: 8,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
  },
});

export default styles;
