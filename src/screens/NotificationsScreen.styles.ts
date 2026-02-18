import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFC" },
  safeArea: { flex: 1 },
  content: { flex: 1, paddingHorizontal: 20, paddingTop: 6 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    minHeight: 44,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: { fontSize: 20, fontWeight: "700", color: "#0F172A" },
  markAll: {
    borderWidth: 1,
    borderColor: "#BFDBFE",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#EFF6FF",
    minWidth: 96,
    alignItems: "center",
    justifyContent: "center",
  },
  markAllText: { fontSize: 12, fontWeight: "700", color: "#1D4ED8" },
  item: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 10,
  },
  itemUnread: {
    borderColor: "#93C5FD",
    backgroundColor: "#F8FAFF",
  },
  title: { fontSize: 14, fontWeight: "700", color: "#111827" },
  body: { marginTop: 4, fontSize: 13, color: "#475569", lineHeight: 19 },
  itemFooter: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  date: { fontSize: 11, color: "#94A3B8" },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderWidth: 1,
    borderColor: "#FECACA",
    backgroundColor: "#FEF2F2",
    borderRadius: 9,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  deleteText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#B91C1C",
  },
});

export default styles;
