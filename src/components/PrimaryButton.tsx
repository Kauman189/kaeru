import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

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

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E1E1E',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 30,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
