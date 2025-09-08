import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export type Blank = { key: string; prompt: string; value?: string; };

type Props = {
  blanks: { key: string; prompt: string }[];
  values: Record<string, string>;
  locked: boolean;
  onChange: (key: string, value: string) => void;
};

export const MultiTextQuestion: React.FC<Props> = ({ blanks, values, locked, onChange }) => {
  return (
    <View style={{ gap: 12 }}>
      {blanks.map((b) => (
        <View key={b.key}>
          <Text style={styles.label}>{b.prompt}</Text>
          <TextInput
            style={styles.input}
            editable={!locked}
            value={values[b.key] ?? ""}
            onChangeText={(v) => onChange(b.key, v)}
            placeholder="Type answer…"
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  label: { fontSize: 16, marginBottom: 6, color: "#3B82F6", fontFamily: "Comic Sans MS" },
  input: {
    backgroundColor: "#fff",
    borderColor: "#9333EA",
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    fontSize: 18,
    fontFamily: "Comic Sans MS",
  },
});
