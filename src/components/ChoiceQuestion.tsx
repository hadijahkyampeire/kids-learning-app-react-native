import React from "react";
import { View } from "react-native";
import { OptionButton } from "./OptionButton";

type Props = {
  options: string[];
  correct: string;
  selected: string | null;
  onSelect: (option: string) => void;
};

export const ChoiceQuestion: React.FC<Props> = ({ options, correct, selected, onSelect }) => {
  return (
    <View>
      {options.map((opt, i) => {
        const picked = selected === opt;
        const variant =
          picked ? (opt === correct ? "correct" : "incorrect") : "default";
        return (
          <OptionButton
            key={i}
            text={opt}
            onPress={() => onSelect(opt)}
            disabled={!!selected}
            variant={variant as any}
          />
        );
      })}
    </View>
  );
};
