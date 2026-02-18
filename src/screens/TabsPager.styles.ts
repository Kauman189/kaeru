import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  pager: {
    flex: 1,
  },
  tabBar: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "transparent",
    borderRadius: 32,
    paddingVertical: 8,
    paddingHorizontal: 14,
    gap: 14,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    shadowColor: "#000000",
    shadowOpacity: 0.24,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 7,
  },
  tabBarGradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 32,
  },
  tabBarGloss: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 32,
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
