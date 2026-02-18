import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 4,
  },
  content: {
    flexDirection: "row",
  },
  info: {
    flex: 1,
    paddingRight: 16,
  },
  badge: {
    alignSelf: "flex-start",
    borderRadius: 999,
    backgroundColor: "#EFF6FF",
    borderWidth: 1,
    borderColor: "#BFDBFE",
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginBottom: 6,
  },
  badgeText: {
    color: "#1D4ED8",
    fontSize: 11,
    fontWeight: "700",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E1E1E",
    marginBottom: 8,
  },
  stats: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 12,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  statText: {
    fontSize: 14,
    color: "#6B7280",
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 14,
  },
  tagPeople: {
    backgroundColor: "#F9E547",
  },
  tagTourism: {
    backgroundColor: "#4DA3FF",
  },
  tagFood: {
    backgroundColor: "#FF7A6E",
  },
  tagDefault: {
    backgroundColor: "#F3F4F6",
  },
  tagText: {
    fontSize: 9,
    fontWeight: "500",
  },
  tagTextDark: {
    color: "#1E1E1E",
  },
  tagTextMuted: {
    color: "#6B7280",
  },
  imageContainer: {
    width: 120,
    height: 130,
    borderRadius: 16,
    overflow: "hidden",
  },
  imagePlaceholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E0F2FE",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
