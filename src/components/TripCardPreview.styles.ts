import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 16,
    width: 320,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  contentRow: {
    flexDirection: "row",
  },
  infoSection: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E1E1E",
    marginBottom: 8,
  },
  statsRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  stat: {
    fontSize: 13,
    color: "#4B5563",
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  tagText: {
    fontSize: 10,
    fontWeight: "500",
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
  tagTextDark: {
    color: "#1E1E1E",
  },
  tagTextMuted: {
    color: "#4B5563",
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 12,
    overflow: "hidden",
  },
  imagePlaceholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E8F4FC",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
