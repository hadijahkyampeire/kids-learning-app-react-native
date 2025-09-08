import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { OptionCheckbox } from "./OptionCheckbox";

export const isMultiChoiceCorrect = (picked: string[], correct: string[]) =>
  picked.length === correct.length && picked.every((x) => correct.includes(x));

type Props = {
  options: string[];
  correct: string[];            // expected answers
  picked: string[];             // current selections
  locked?: boolean;             // true after marking
  onToggle: (option: string) => void;
  onReachTarget: (finalSelection: string[]) => void; // auto-submit hook
};

export const MultiChoiceQuestion: React.FC<Props> = ({
  options,
  correct,
  picked,
  locked = false,
  onToggle,
  onReachTarget,
}) => {
  const need = correct.length;
  const remaining = Math.max(0, need - picked.length);

  // Auto-submit when the learner reaches the exact required count
  useEffect(() => {
    if (!locked && picked.length === need) {
      onReachTarget(picked.slice());
    }
  }, [picked, need, locked, onReachTarget]);

  const variantFor = (opt: string) => {
    if (locked) {
      if (correct.includes(opt)) return "correct";
      if (picked.includes(opt)) return "incorrect";
      return "disabled";
    }
    return picked.includes(opt) ? "picked" : "default";
  };

  // While unlocked, prevent picking more than needed
  const canPick = (opt: string) =>
    locked ||
    picked.includes(opt) ||
    picked.length < need;

  return (
    <View>
      <Text style={styles.helper}>
        Select {need} answer{need > 1 ? "s" : ""} • {remaining} remaining
      </Text>

      <View style={{ marginTop: 8 }}>
        {options.map((opt) => (
          <OptionCheckbox
            key={opt}
            label={opt}
            checked={picked.includes(opt)}
            disabled={!canPick(opt)}
            variant={variantFor(opt) as any}
            onPress={() => onToggle(opt)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helper: { fontSize: 14, color: "#6b7280" },
});
