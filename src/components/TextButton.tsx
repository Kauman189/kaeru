/**
 * Boton de texto para acciones secundarias.
 */
import React from "react";
import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from "react-native";

type TextButtonProps = {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export default function TextButton({
  label,
  onPress,
  style,
  textStyle,
}: TextButtonProps) {
  return (
    <Pressable onPress={onPress} style={style} accessibilityRole="button">
      <Text style={textStyle}>{label}</Text>
    </Pressable>
  );
}
