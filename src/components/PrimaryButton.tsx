import React from "react";
import { Pressable, Text } from "react-native";
import styles from "./PrimaryButton.styles";

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
};

export default function PrimaryButton({ label, onPress }: PrimaryButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.button} accessibilityRole="button">
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}
