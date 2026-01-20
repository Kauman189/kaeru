import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 120,
  },
  cloud: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 40,
  },
  dragIndicatorContainer: {
    alignItems: "center",
    paddingTop: 8,
  },
  dragIndicator: {
    width: 40,
    height: 5,
    backgroundColor: "#D1D5DB",
    borderRadius: 3,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  imageContainer: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#E5E7EB",
  },
  mainImage: {
    width: "100%",
    height: 280,
    backgroundColor: "#4A7C59",
  },
  mainImagePlaceholder: {
    width: "100%",
    height: 280,
    backgroundColor: "#4A7C59",
    alignItems: "center",
    justifyContent: "center",
  },
  mainImageText: {
    color: "white",
    fontSize: 16,
    marginTop: 8,
    fontWeight: "600",
  },
  avatarsContainer: {
    position: "absolute",
    top: 16,
    right: 16,
    flexDirection: "row",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  imageIndicators: {
    position: "absolute",
    bottom: 16,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
  },
  imageIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  imageIndicatorActive: {
    backgroundColor: "white",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 16,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 12,
    fontWeight: "600",
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
    backgroundColor: "#E5E7EB",
  },
  tagTextDark: {
    color: "#1E1E1E",
  },
  tagTextMuted: {
    color: "#4B5563",
  },
  tripTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1E1E1E",
    marginTop: 20,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  statText: {
    fontSize: 14,
    color: "#4B5563",
  },
  statDivider: {
    width: 1,
    height: 16,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 20,
  },
  descriptionContainer: {
    marginBottom: 16,
  },
  descriptionText: {
    fontSize: 15,
    lineHeight: 24,
    color: "#374151",
  },
  mapContainer: {
    marginBottom: 8,
  },
  mapPlaceholder: {
    height: 160,
    backgroundColor: "#E8F4FC",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },
  mapSubtext: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  floatingBar: {
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
  actionItem: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 44,
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  actionCopy: {
    backgroundColor: "#C8F06A",
  },
  actionLike: {
    backgroundColor: "#FF6B6B",
  },
  actionAsk: {
    backgroundColor: "#FFFFFF",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E1E1E",
    marginBottom: 16,
  },
  itineraryItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  dayBadge: {
    backgroundColor: "#DFF8AE",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginRight: 12,
  },
  dayText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1E1E1E",
  },
  itineraryText: {
    fontSize: 15,
    color: "#374151",
  },
  bottomSpacer: {
    height: 110,
  },
});

export default styles;
