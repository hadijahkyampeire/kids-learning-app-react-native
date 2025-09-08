import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

type Props = {
  value: string;
  onChange: (v: string) => void;
  locked: boolean;
  multiline?: boolean; // true for "text", false for "fill-in"
  placeholder?: string;
};

export const FillTextQuestion: React.FC<Props> = ({ value, onChange, locked, multiline, placeholder }) => {
  return (
    <View>
      <TextInput
        style={[styles.input, multiline && styles.multiline]}
        value={value}
        onChangeText={onChange}
        editable={!locked}
        placeholder={placeholder ?? (multiline ? "Type your answer…" : "Type the missing word…")}
        multiline={!!multiline}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    borderColor: "#9333EA",
    borderWidth: 2,
    borderRadius: 12,
    padding: 12,
    fontSize: 18,
    fontFamily: "Comic Sans MS",
  },
  multiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
