import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 16,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  headerLeft: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1E1E1E",
    lineHeight: 36,
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginBottom: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#1E1E1E",
  },
  discoverHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  discoverLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
    flex: 1,
  },
  discoverTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E1E1E",
    marginRight: 4,
  },
  filterChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  filterChipPeople: {
    backgroundColor: "#F9E547",
  },
  filterChipTourism: {
    backgroundColor: "#4DA3FF",
  },
  filterChipFood: {
    backgroundColor: "#FF7A6E",
  },
  filterChipDefault: {
    backgroundColor: "#FFFFFF",
  },
  filterText: {
    fontSize: 9,
    fontWeight: "500",
  },
  filterTextDark: {
    color: "#1E1E1E",
  },
  filterTextMuted: {
    color: "#4B5563",
  },
  filterButton: {
    position: "relative",
    padding: 8,
  },
  filterBadge: {
    position: "absolute",
    top: 2,
    right: 2,
    backgroundColor: "#1E1E1E",
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  filterBadgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "600",
  },
  bottomGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 150,
    flexDirection: "column",
  },
  gradientLayer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  bottomSpacer: {
    height: 120,
  },
  profilePromptOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "rgba(15, 23, 42, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  profilePromptCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 4,
  },
  profilePromptTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E1E1E",
    marginBottom: 6,
  },
  profilePromptText: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 20,
  },
  profilePromptActions: {
    flexDirection: "row",
    gap: 10,
    marginTop: 16,
  },
  profilePromptSecondary: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
  },
  profilePromptSecondaryText: {
    color: "#6B7280",
    fontWeight: "600",
  },
  profilePromptPrimary: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
  },
  profilePromptPrimaryText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});

export default styles;
