import React, { useMemo, useState, useRef } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  Platform,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av';

import type { Story } from '../types';
import { storiesData as ALL_STORIES } from '../data/storiesData';

const BG_URL =
  'https://kids-app-images.s3.us-east-1.amazonaws.com/stories-bg.jpg';
const DEFAULT_IMG =
  'https://kids-app-images.s3.us-east-1.amazonaws.com/general-image.webp';

const StoryContentScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const level: string | undefined = route.params?.level;
  const storyId: string | undefined = route.params?.storyId;

  // answers[idx] = selected option string
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({ correct: 0, total: 0 });

  const scrollRef = useRef<ScrollView>(null);

  const story: Story | undefined = useMemo(
    () => ALL_STORIES.find((s) => s._id === String(storyId)),
    [storyId]
  );

  const onSelect = async (qIdx: number, opt: string) => {
    try {
      const s = new Audio.Sound();
      await s.loadAsync(require('../assets/sounds/click.mp3'));
      await s.playAsync();
      s.unloadAsync();
    } catch {}
    setAnswers((prev) => ({ ...prev, [qIdx]: opt }));
  };

  const submitAnswers = async () => {
    if (!story) return;

    const total = story.questions.length;
    const allAnswered = story.questions.every(
      (_, idx) => !!answers[idx]?.trim()
    );
    if (!allAnswered) {
      setResult({ correct: 0, total });
      setShowResult(true);
      return;
    }

    const correctCount = story.questions.reduce(
      (sum, q, idx) => sum + (answers[idx] === q.correct ? 1 : 0),
      0
    );

    try {
      const s = new Audio.Sound();
      await s.loadAsync(require('../assets/sounds/correct-sound.wav'));
      await s.playAsync();
      s.unloadAsync();
    } catch {}

    setResult({ correct: correctCount, total });
    setShowResult(true);
  };

  const handleReadAgain = async () => {
    try {
      const s = new Audio.Sound();
      await s.loadAsync(require('../assets/sounds/click.mp3'));
      await s.playAsync();
      s.unloadAsync();
    } catch {}
    setShowResult(false);
    setAnswers({});

    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  const handleBackToStories = async () => {
    try {
      const s = new Audio.Sound();
      await s.loadAsync(require('../assets/sounds/click.mp3'));
      await s.playAsync();
      s.unloadAsync();
    } catch {}
    setShowResult(false);
    navigation.navigate('Stories', { level });
  };

  if (!story) {
    return (
      <ImageBackground
        source={{ uri: BG_URL }}
        style={styles.container}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <View style={[styles.contentCenter]}>
          <Text style={styles.p}>No story with this ID!</Text>
        </View>
      </ImageBackground>
    );
  }

  const ratio = result.total ? result.correct / result.total : 0;
  const emoji =
    result.total === 0
      ? '📝'
      : ratio === 1
      ? '🏆✨'
      : ratio >= 0.7
      ? '🎉😄'
      : '🙂💪';
  const headline =
    result.total === 0
      ? 'Almost there!'
      : ratio === 1
      ? 'Perfect!'
      : ratio >= 0.7
      ? 'Great job!'
      : 'Nice try!';
  const scoreText =
    result.total === 0
      ? 'Please answer all questions.'
      : `You got ${result.correct}/${result.total}`;

  return (
    <ImageBackground
      source={{ uri: BG_URL }}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{ padding: 16, paddingBottom: 28 }}
      >
        <View style={styles.sheet}>
          <Text style={styles.h1}>
            <FontAwesome name="star" size={22} color="#FFD700" /> {story.title}
          </Text>

          <Image
            source={{ uri: story.image || DEFAULT_IMG }}
            style={styles.image}
            resizeMode="cover"
          />

          <Text style={styles.storyText}>{story.text}</Text>

          {!!story.questions?.length && (
            <View style={{ marginTop: 12 }}>
              <Text style={styles.h2}>Story Questions</Text>

              {story.questions.map((q, idx) => {
                const selected = answers[idx];
                const isCorrect = selected ? selected === q.correct : null;

                return (
                  <View key={idx} style={styles.qBlock}>
                    <Text style={styles.questionText}>{q.q}</Text>

                    <View style={{ gap: 8 }}>
                      {q.options.map((opt, i) => {
                        const isPicked = selected === opt;
                        const showState = !!selected;
                        const bg =
                          showState && isPicked
                            ? opt === q.correct
                              ? '#16a34a' // green-600
                              : '#dc2626' // red-600
                            : '#3b82f6'; // blue-500 default

                        return (
                          <TouchableOpacity
                            key={`${idx}-${i}-${opt}`}
                            style={[styles.optBtn, { backgroundColor: bg }]}
                            onPress={() => onSelect(idx, opt)}
                            activeOpacity={0.9}
                          >
                            <Text style={styles.optText}>{opt}</Text>
                          </TouchableOpacity>
                        );
                      })}
                    </View>

                    {selected && (
                      <Text
                        style={[
                          styles.feedback,
                          { color: isCorrect ? '#166534' : '#b91c1c' }, // green-800 / red-700
                        ]}
                      >
                        {isCorrect ? q.feedback.correct : q.feedback.incorrect}
                      </Text>
                    )}
                  </View>
                );
              })}

              <TouchableOpacity
                style={styles.submitBtn}
                onPress={submitAnswers}
              >
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>

      {/* RESULT MODAL */}
      <Modal
        visible={showResult}
        animationType="fade"
        transparent
        statusBarTranslucent
        onRequestClose={() => setShowResult(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalEmoji}>{emoji}</Text>
            <Text style={styles.modalHeadline}>{headline}</Text>
            <Text style={styles.modalScore}>{scoreText}</Text>

            <View style={styles.modalRow}>
              <TouchableOpacity
                style={[styles.modalBtn, styles.modalPrimary]}
                onPress={handleReadAgain}
              >
                <Text style={styles.modalBtnText}>Read again</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalBtn, styles.modalSecondary]}
                onPress={handleBackToStories}
              >
                <Text style={styles.modalBtnText}>All stories</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  contentCenter: { flex: 1, alignItems: 'center', justifyContent: 'center' },

  sheet: {
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.86)',
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },

  h1: {
    fontFamily: 'Baloo2_800ExtraBold',
    fontSize: 26,
    color: '#ef4444',
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 10,
  },
  h2: {
    fontFamily: 'Baloo2_800ExtraBold',
    fontSize: 20,
    color: '#0ea5e9',
    marginBottom: 6,
  },

  image: {
    width: '100%',
    height: 200,
    borderRadius: 14,
    marginBottom: 12,
  },

  storyText: {
    fontFamily: 'Baloo2_400Regular',
    fontSize: 24,
    lineHeight: 26,
    color: '#1f2937',
    marginBottom: 8,
  },

  qBlock: {
    marginTop: 10,
    paddingVertical: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0,0,0,0.08)',
    gap: 8,
  },
  questionText: {
    fontFamily: 'Baloo2_600SemiBold',
    fontSize: 18,
    color: '#334155',
    marginBottom: 6,
  },

  optBtn: {
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  optText: {
    fontFamily: 'Baloo2_800ExtraBold',
    color: '#fff',
    fontSize: 16,
  },

  feedback: {
    marginTop: 6,
    fontFamily: 'Baloo2_600SemiBold',
    fontSize: 16,
  },

  submitBtn: {
    marginTop: 14,
    backgroundColor: '#22c55e',
    borderRadius: 999,
    paddingVertical: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  submitText: {
    color: '#fff',
    fontFamily: 'Baloo2_800ExtraBold',
    fontSize: 18,
  },

  p: {
    fontFamily: 'Baloo2_600SemiBold',
    fontSize: 18,
    color: '#f87171',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.35)', // slate-900/35
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  modalCard: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    ...Platform.select({
      android: { elevation: 8 },
    }),
    alignItems: 'center',
  },
  modalEmoji: {
    fontSize: 48,
    marginBottom: 6,
  },
  modalHeadline: {
    fontFamily: 'Baloo2_800ExtraBold',
    fontSize: 22,
    color: '#065f46',
    marginBottom: 4,
  },
  modalScore: {
    fontFamily: 'Baloo2_600SemiBold',
    fontSize: 18,
    color: '#0f172a',
    marginBottom: 12,
  },
  modalRow: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    justifyContent: 'center',
    marginTop: 6,
  },
  modalBtn: {
    flexGrow: 1,
    minWidth: 130,
    borderRadius: 999,
    paddingVertical: 12,
    alignItems: 'center',
  },
  modalPrimary: {
    backgroundColor: '#06b6d4', // cyan-600
  },
  modalSecondary: {
    backgroundColor: '#10b981', // emerald-500
  },
  modalBtnText: {
    fontFamily: 'Baloo2_800ExtraBold',
    color: '#fff',
    fontSize: 16,
  },
});

export default StoryContentScreen;
