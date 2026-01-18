/**
 * Boton de texto para acciones secundarias.
 */
import React from "react";
import { Pressable, Text } from "react-native";

type TextButtonProps = {
  label: string;
  onPress: () => void;
  className?: string;
  textClassName?: string;
};

export default function TextButton({
  label,
  onPress,
  className,
  textClassName,
}: TextButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={className}
      accessibilityRole="button"
    >
      <Text className={textClassName}>{label}</Text>
    </Pressable>
  );
}
