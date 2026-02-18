import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFC" },
  safeArea: { flex: 1 },
  content: { flex: 1, paddingHorizontal: 20, paddingTop: 8 },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F5F9",
  },
  title: { fontSize: 22, fontWeight: "700", color: "#0F172A" },
  card: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
  },
  cardTitle: { fontSize: 15, fontWeight: "700", color: "#111827" },
  cardMeta: { marginTop: 5, fontSize: 12, color: "#6B7280" },
  row: { marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  status: {
    fontSize: 11,
    fontWeight: "700",
    color: "#1D4ED8",
    backgroundColor: "#EFF6FF",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  openBtn: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#BFDBFE",
    backgroundColor: "#EFF6FF",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  openBtnText: { color: "#1D4ED8", fontSize: 12, fontWeight: "700" },
});

export default styles;
