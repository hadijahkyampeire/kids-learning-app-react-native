import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";

type Props = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: "default" | "correct" | "incorrect";
  style?: ViewStyle;
};

export const OptionButton: React.FC<Props> = ({ text, onPress, disabled, variant = "default", style }) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[styles.optionButton, styles[variant], style]}
  >
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  optionButton: {
    padding: 12, borderRadius: 12,
    shadowColor: "#000", shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25, shadowRadius: 4, elevation: 5, marginBottom: 12,
  },
  default: { backgroundColor: "#9333EA" },
  correct: { backgroundColor: "#84CC16" },
  incorrect: { backgroundColor: "#F87171" },
  text: { color: "white", fontSize: 18, fontFamily: "Comic Sans MS", textAlign: "center" },
});
