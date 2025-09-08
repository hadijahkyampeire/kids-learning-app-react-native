import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

type Variant = "default" | "picked" | "correct" | "incorrect" | "disabled";

type Props = {
  label: string;
  checked: boolean;
  onPress: () => void;
  disabled?: boolean;
  variant?: Variant;
};

export const OptionCheckbox: React.FC<Props> = ({
  label,
  checked,
  onPress,
  disabled = false,
  variant = "default",
}) => {
  const v = disabled ? "disabled" : variant;
  return (
    <TouchableOpacity
      style={[styles.row, styles[v]]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.85}
    >
      <View style={[styles.box, checked ? styles.boxChecked : undefined]}>
        {checked ? <View style={styles.tick} /> : null}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
  },
  default: { backgroundColor: "#fff", borderColor: "#d1d5db" },
  picked: { backgroundColor: "#eef2ff", borderColor: "#6366f1" },
  correct: { backgroundColor: "#ecfdf5", borderColor: "#10b981" },
  incorrect: { backgroundColor: "#fef2f2", borderColor: "#ef4444" },
  disabled: { backgroundColor: "#f3f4f6", borderColor: "#e5e7eb" },

  box: {
    width: 22, height: 22, borderRadius: 6, borderWidth: 2,
    borderColor: "#6b7280", alignItems: "center", justifyContent: "center",
    marginRight: 12, backgroundColor: "#fff",
  },
  boxChecked: { borderColor: "#4f46e5", backgroundColor: "#eef2ff" },
  tick: { width: 10, height: 10, backgroundColor: "#4f46e5", borderRadius: 2 },
  label: { fontSize: 16, color: "#111827" },
});
