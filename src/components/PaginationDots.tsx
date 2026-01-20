import React from "react";
import { View } from "react-native";
import styles from "./PaginationDots.styles";

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
