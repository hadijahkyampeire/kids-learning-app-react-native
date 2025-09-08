import React, { useMemo, useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { questionsData } from "../data/questions";
import type { Question } from "../types";
import { useSounds } from "../hooks/useSounds";

import { ChoiceQuestion } from "../components/ChoiceQuestion";
import { MultiChoiceQuestion, isMultiChoiceCorrect } from "../components/MultiChoiceQuestion";
import { FillTextQuestion } from "../components/FillTextQuestion";
import { MultiTextQuestion } from "../components/MultiTextQuestion";

import { buildPatterns, matchesAny } from "../utils/answerUtils";
import { shuffle } from "src/utils/shuffle";

type AnswerRecord =
  | { questionId: string | number; type: "choice"; selected: string; isCorrect: boolean }
  | { questionId: string | number; type: "multiChoice"; selected: string[]; isCorrect: boolean }
  | { questionId: string | number; type: "fill-in" | "text"; entered: string; isCorrect: boolean }
  | { questionId: string | number; type: "multiText"; entered: Record<string, string>; isCorrect: boolean; perBlank?: Record<string, boolean> };

const QuizScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { playClick, playCorrect, playWrong } = useSounds();

  const level: string = route.params?.level;
  const klass: string = route.params?.class;
  const subject: string = route.params?.subject;
  const topic: string | undefined = route.params?.topic;

  const allForLevel: Question[] = level ? (questionsData as any)[level] ?? [] : [];
  const questions: Question[] = useMemo(
    () =>
      allForLevel
        .filter(q => q.class === klass && q.subject === subject && (!topic || q.topic === topic))
        .slice(0, 50),
    [allForLevel, klass, subject, topic]
  );

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);
  // state
  const [lastCorrect, setLastCorrect] = useState<boolean | null>(null);


  // type-specific local UI state
  const [picked, setPicked] = useState<string | null>(null);               // choice
  const [pickedMulti, setPickedMulti] = useState<string[]>([]);            // multiChoice
  const [typed, setTyped] = useState<string>("");                           // fill-in / text
  const [multiTyped, setMultiTyped] = useState<Record<string, string>>({}); // multiText
  const [locked, setLocked] = useState(false);                              // disables inputs after submit

  const resetUI = () => {
    setPicked(null);
    setPickedMulti([]);
    setTyped("");
    setMultiTyped({});
    setLocked(false);
    setFeedback(null);
  };

  const currentQ = questions[current];

  const displayOptions = useMemo(() => {
  if (!currentQ?.options || !Array.isArray(currentQ.options)) return [];
  // Shuffle ONCE per question (recomputed when question id changes)
  return shuffle(currentQ.options);
}, [currentQ?._id]);

  const autoMarkMulti = async (finalSel: string[]) => {
  const corr = Array.isArray(currentQ.correct) ? (currentQ.correct as string[]) : [];
  const ok = isMultiChoiceCorrect(finalSel, corr);
  if (ok) { await playCorrect(); } else { await playWrong(); }
  setLocked(true);
  setLastCorrect(ok);
  setFeedback(ok
    ? currentQ.feedback?.correct
    : `Incorrect: ${currentQ.feedback?.incorrect ?? "Review the correct set."}`
  );
  setAnswers(prev => [
    ...prev,
    { questionId: currentQ._id, type: "multiChoice", selected: finalSel, isCorrect: ok },
  ]);
};



  const markAndStore = async () => {
    if (!currentQ) return;

    let isCorrect = false;
    let newRecord: AnswerRecord | null = null;

    switch (currentQ.type) {
      case "choice": {
        if (picked == null) return;
        isCorrect = picked === currentQ.correct;
        newRecord = { questionId: currentQ._id, type: "choice", selected: picked, isCorrect };
        break;
      }
      case "multiChoice": {
        const correctArr = Array.isArray(currentQ.correct) ? currentQ.correct as string[] : [];
        isCorrect = isMultiChoiceCorrect(pickedMulti, correctArr);
        newRecord = { questionId: currentQ._id, type: "multiChoice", selected: pickedMulti, isCorrect };
        break;
      }
      case "fill-in":
      case "text": {
        const patterns = buildPatterns(currentQ);
        isCorrect = matchesAny(typed, patterns);
        newRecord = { questionId: currentQ._id, type: currentQ.type, entered: typed, isCorrect };
        break;
      }
      case "multiText": {
        // expect currentQ.blanks: { key, accepted?/correct?/correctRegex? }[]
        const per: Record<string, boolean> = {};
        let allOk = true;
        (currentQ as any).blanks.forEach((b: any) => {
          const input = multiTyped[b.key] ?? "";
          const pats = buildPatterns({ accepted: b.accepted, correct: b.correct, correctRegex: b.correctRegex });
          const ok = matchesAny(input, pats);
          per[b.key] = ok;
          if (!ok) allOk = false;
        });
        isCorrect = allOk;
        newRecord = { questionId: currentQ._id, type: "multiText", entered: multiTyped, isCorrect, perBlank: per };
        break;
      }
      default: {
        // Fallback treat as choice
        if (picked == null) return;
        isCorrect = picked === (currentQ as any).correct;
        newRecord = { questionId: currentQ._id, type: "choice", selected: picked, isCorrect };
      }
    }

    // play sound
    if (isCorrect) await playCorrect(); else await playWrong();

    // lock UI + show feedback
    setLocked(true);
    setLastCorrect(isCorrect);
    setFeedback(isCorrect
      ? currentQ.feedback?.correct
      : `Incorrect: ${currentQ.feedback?.incorrect ?? "Check spelling/format and try again."}`
    );

    // store answer
    if (newRecord) setAnswers((prev) => [...prev, newRecord]);
  };

  const goNext = async () => {
    await playClick();
    if (current < questions.length - 1) {
      setCurrent((i) => i + 1);
      resetUI();
    } else {
      navigation.navigate("Results", { level, class: klass, subject, topic, answers });
    }
  };

  const renderByType = () => {
    if (!currentQ) return null;

    switch (currentQ.type) {
      case "choice": {
        const corr = typeof currentQ.correct === "string" ? currentQ.correct : "";
        return (
          <ChoiceQuestion
            options={displayOptions}
            correct={corr}
            selected={picked}
            onSelect={async (opt) => {
              setPicked(opt);
              const ok = opt === corr;
              if (ok) await playCorrect(); else await playWrong();
              setLocked(true);
              setLastCorrect(ok);
              setFeedback(ok
                ? currentQ.feedback?.correct
                : `Incorrect: ${currentQ.feedback?.incorrect ?? "Try again."}`
              );
              setAnswers(prev => [
                ...prev,
                { questionId: currentQ._id, type: "choice", selected: opt, isCorrect: ok }
              ]);
            }}
          />
        );
      }


      case "multiChoice": {
        const corr = Array.isArray(currentQ.correct) ? (currentQ.correct as string[]) : [];
        return (
          <MultiChoiceQuestion
            options={displayOptions}
            correct={corr}
            picked={pickedMulti}
            locked={locked}
            onToggle={(opt) =>
              setPickedMulti((arr) =>
                arr.includes(opt) ? arr.filter((x) => x !== opt) : [...arr, opt]
              )
            }
            onReachTarget={(finalSelection) => autoMarkMulti(finalSelection)}
          />
        );
      }



      case "fill-in":
        return (
          <FillTextQuestion
            value={typed}
            onChange={setTyped}
            locked={locked}
            multiline={false}
            placeholder="Type the answer…"
          />
        );

      case "text":
        return (
          <FillTextQuestion
            value={typed}
            onChange={setTyped}
            locked={locked}
            multiline
            placeholder="Write your answer…"
          />
        );

      case "multiText":
        return (
          <MultiTextQuestion
            blanks={(currentQ as any).blanks ?? []}
            values={multiTyped}
            locked={locked}
            onChange={(k, v) => setMultiTyped((m) => ({ ...m, [k]: v }))}
          />
        );

      default:
        // default gracefully to choice
        const opts = Array.isArray(currentQ.options) ? currentQ.options : [];
        const corr = typeof currentQ.correct === "string" ? currentQ.correct : "";
        return (
          <ChoiceQuestion
            options={opts}
            correct={corr}
            selected={picked}
            onSelect={(opt) => setPicked(opt)}
          />
        );
    }
  };

  if (questions.length === 0) {
    return (
      <ImageBackground source={{ uri: "https://kids-app-images.s3.us-east-1.amazonaws.com/quiz-bg.jpg" }} style={styles.container} resizeMode="cover">
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.p}>No questions available</Text>
          <TouchableOpacity style={styles.homeButton} onPress={async () => { await playClick(); navigation.navigate("LevelSelection"); }}>
            <Text style={styles.buttonText}>Back to Levels</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground source={{ uri: "https://kids-app-images.s3.us-east-1.amazonaws.com/quiz-bg.jpg" }} style={styles.container} resizeMode="cover">
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.h1}>{capitalize(subject)} {currentQ.topic ? `• ${currentQ.topic}` : ""}</Text>
        <Text style={styles.h3}>{capitalize(level)} / {klass?.toUpperCase?.()}</Text>

        <View style={styles.card}>
          <Text style={styles.h2}>{currentQ.text}</Text>

          <View style={{ marginTop: 8 }}>
            {renderByType()}
          </View>

          <View style={styles.controlsRow}>
            {!locked && (
              <TouchableOpacity style={styles.submitButton} onPress={markAndStore}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            )}
            {locked && (
              <TouchableOpacity style={styles.nextButton} onPress={goNext}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            )}
          </View>

          {feedback && (
            <View style={styles.feedback}>
              <Text
                style={[
                  styles.feedbackTextBase,
                  lastCorrect === false ? styles.feedbackTextWrong : styles.feedbackTextRight
                ]}
              >
                {feedback}
              </Text>
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const capitalize = (s: string) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

// keep styles same as yours, with small additions:
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 16 },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.2)" },
  content: { flex: 1, alignItems: "center", width: "100%", maxWidth: 600 },
  homeButton: { backgroundColor: "#FBBF24", padding: 12, borderRadius: 12, alignSelf: "flex-end", marginBottom: 16 },
  h1: { fontSize: 28, color: "#efd544ff", marginBottom: 16, marginTop: 16, textShadowColor: "rgba(0,0,0,0.25)", textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 4, fontFamily: "Comic Sans MS", textAlign: "center" },
  card: { backgroundColor: "white", padding: 24, borderRadius: 16, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5, width: "90%" },
  h2: { fontSize: 22, color: "#3B82F6", marginBottom: 16, fontFamily: "Comic Sans MS" },
  h3: { fontSize: 22, color: "#bf17d8ff", marginBottom: 16, fontFamily: "Comic Sans MS" },
  feedback: { marginTop: 12, alignItems: "center" },
  feedbackText: { fontSize: 18, color: "#84CC16", marginTop: 4, fontFamily: "Comic Sans MS" },
  controlsRow: { flexDirection: "row", marginTop: 16, gap: 12, justifyContent: "center" },
  submitButton: { backgroundColor: "#2563EB", padding: 12, borderRadius: 12, minWidth: 120, alignItems: "center", alignSelf: "center" },
  nextButton: { backgroundColor: "#16A34A", padding: 12, borderRadius: 12, minWidth: 120, alignItems: "center", alignSelf: "center" },
  buttonText: { color: "white", fontSize: 18, fontFamily: "Comic Sans MS", textAlign: "center" },
  p: { fontSize: 18, color: "#3B82F6", marginBottom: 16, fontFamily: "Comic Sans MS" },
  feedbackTextBase: {
    fontSize: 18,
    marginTop: 4,
    fontFamily: "Comic Sans MS",
    textAlign: "center",
  },

  feedbackTextRight: { color: "#16A34A" }, // green for correct

  // pick one of these for wrong — red or amber; both included so you can swap
  feedbackTextWrong: { color: "#F97316" },
});

export default QuizScreen;
