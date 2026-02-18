import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  map: {
    flex: 1,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 12,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: "rgba(255,255,255,0.92)",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E1E1E",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 12,
    color: "#6B7280",
  },
  emptyHint: {
    position: "absolute",
    bottom: 28,
    left: 20,
    right: 20,
    padding: 12,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  emptyText: {
    fontSize: 12,
    color: "#6B7280",
    textAlign: "center",
  },
  stopsPanel: {
    position: "absolute",
    left: 12,
    right: 12,
    bottom: 22,
    maxHeight: 220,
    backgroundColor: "rgba(255,255,255,0.96)",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 8,
  },
  stopsTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },
  stopsList: {
    flexGrow: 0,
  },
  stopsListContent: {
    gap: 8,
    paddingBottom: 8,
  },
  stopRow: {
    flexDirection: "row",
    gap: 8,
  },
  stopIndexBadge: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#DCFCE7",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  stopIndexText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#166534",
  },
  stopInfo: {
    flex: 1,
  },
  stopTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#111827",
  },
  stopTime: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: "600",
    color: "#1D4ED8",
  },
  stopAddress: {
    marginTop: 1,
    fontSize: 12,
    color: "#6B7280",
  },
});

export default styles;
