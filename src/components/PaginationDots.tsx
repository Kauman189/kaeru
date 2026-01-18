import React from "react";
import { StyleSheet, View } from "react-native";

type PaginationDotsProps = {
  count: number;
  activeIndex: number;
};

export default function PaginationDots({
  count,
  activeIndex,
}: PaginationDotsProps) {
  return (
    <View style={styles.container}>
      {Array.from({ length: count }).map((_, index) => {
        const isActive = index === activeIndex;
        return (
          <View
            key={`dot-${index}`}
            style={[
              styles.dot,
              isActive ? styles.dotActive : styles.dotInactive,
            ]}
          />
        );
      })}
    </View>
  );
}

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
