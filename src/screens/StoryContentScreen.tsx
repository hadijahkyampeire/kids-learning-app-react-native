// src/screens/StoryContentScreen.tsx
import React, { useMemo, useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  useWindowDimensions,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av';

import { storiesData } from '../data/storiesData';

const BG_URL =
  'https://kids-app-images.s3.us-east-1.amazonaws.com/stories-bg.jpg';
const DEFAULT_IMG =
  'https://kids-app-images.s3.us-east-1.amazonaws.com/general-image.webp';
const CLICK_SND = require('../assets/sounds/click.mp3');
const CORRECT_SND = require('../assets/sounds/correct-sound.wav');

type LevelKey = keyof typeof storiesData;

type Page = { image?: string; text: string };
type StoryLike = {
  _id: string;
  title: string;
  class?: string;
  topic?: string;
  pages?: Page[];
  questions?: {
    q: string;
    options: string[];
    correct: string;
    feedback: { correct: string; incorrect: string };
  }[];
};

const StoryContentScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const level = route.params?.level as LevelKey | undefined;
  const storyId = route.params?.storyId as string | undefined;

  const scrollRef = useRef<ScrollView>(null);

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const BASE = isLandscape ? 22 : 24; // readable page text
  const LINE = Math.round(BASE * 1.4);

  const styles = makeStyles({
    BASE,
    LINE,
    isLandscape,
    maxW: Math.min(900, width - 24),
  });

  const bucket = level ? (storiesData[level] as unknown as StoryLike[]) : [];
  const story: StoryLike | undefined = useMemo(
    () => bucket.find((s) => s._id === String(storyId)),
    [bucket, storyId]
  );

  const pages = story?.pages ?? [];

  // page turning state (start at first page)
  const [page, setPage] = useState(0);
  const slide = useRef(new Animated.Value(0)).current;

  // quiz state
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({ correct: 0, total: 0 });

  const canPrev = page > 0;
  const canNext = page < Math.max(pages.length - 1, 0);

  // scroll to very top whenever page changes (so each page begins at the top)
  useEffect(() => {
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ y: 0, animated: true });
    });
  }, [page]);

  const playClick = async () => {
    try {
      const s = new Audio.Sound();
      await s.loadAsync(CLICK_SND);
      await s.playAsync();
      s.unloadAsync();
    } catch {}
  };

  const turn = async (dir: 1 | -1) => {
    if ((dir === -1 && !canPrev) || (dir === 1 && !canNext)) return;
    await playClick();
    Animated.timing(slide, {
      toValue: dir * -1,
      duration: 220,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start(() => {
      setPage((p) => p + dir);
      slide.setValue(dir);
      Animated.timing(slide, {
        toValue: 0,
        duration: 220,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }).start();
    });
  };

  const onSelect = async (qIdx: number, opt: string) => {
    await playClick();
    setAnswers((prev) => ({ ...prev, [qIdx]: opt }));
  };

  const submitAnswers = async () => {
    if (!story?.questions || story.questions.length === 0) return;
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
      await s.loadAsync(CORRECT_SND);
      await s.playAsync();
      s.unloadAsync();
    } catch {}
    setResult({ correct: correctCount, total });
    setShowResult(true);
  };

  if (!story) {
    return (
      <ImageBackground
        source={{ uri: BG_URL }}
        style={styles.container}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <View style={styles.contentCenter}>
          <Text style={styles.p}>No story with this ID!</Text>
        </View>
      </ImageBackground>
    );
  }

  const pageObj = pages[page];
  const translateX = slide.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [-width, 0, width],
  });

  // result strings
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
  const hasQuestions =
    Array.isArray(story.questions) && story.questions.length > 0;

  return (
    <ImageBackground
      source={{ uri: BG_URL }}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.sheet}>
          <Text style={styles.h1}>
            <FontAwesome name="star" size={22} color="#FFD700" /> {story.title}
          </Text>

          {/* One visible page at a time (no cover/summary) */}
          {!!pageObj && (
            <>
              <View style={styles.pageTopRow}>
                <TouchableOpacity
                  style={[styles.handBtn, !canPrev && styles.handDisabled]}
                  disabled={!canPrev}
                  onPress={() => turn(-1)}
                >
                  <FontAwesome
                    name="hand-o-left"
                    size={20}
                    color={canPrev ? '#0ea5e9' : '#94a3b8'}
                  />
                </TouchableOpacity>

                <Text style={styles.pageCounter}>
                  Page {pages.length ? page + 1 : 0} / {pages.length}
                </Text>

                <TouchableOpacity
                  style={[styles.handBtn, !canNext && styles.handDisabled]}
                  disabled={!canNext}
                  onPress={() => turn(1)}
                >
                  <FontAwesome
                    name="hand-o-right"
                    size={20}
                    color={canNext ? '#0ea5e9' : '#94a3b8'}
                  />
                </TouchableOpacity>
              </View>

              <Animated.View
                style={[styles.pageCard, { transform: [{ translateX }] }]}
              >
                {pageObj.image ? (
                  <Image
                    source={{ uri: pageObj.image || DEFAULT_IMG }}
                    style={styles.pageImage}
                    resizeMode="cover"
                  />
                ) : null}

                <Text style={styles.pageText} allowFontScaling>
                  {pageObj.text}
                </Text>
              </Animated.View>

              <View style={styles.pageBottomRow}>
                <TouchableOpacity
                  style={[styles.pageBtn, !canPrev && styles.pageBtnDisabled]}
                  onPress={() => turn(-1)}
                  disabled={!canPrev}
                >
                  <Text style={styles.pageBtnText}>◀ Prev</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.pageBtn, !canNext && styles.pageBtnDisabled]}
                  onPress={() => turn(1)}
                  disabled={!canNext}
                >
                  <Text style={styles.pageBtnText}>Next ▶</Text>
                </TouchableOpacity>
              </View>
            </>
          )}

          {/* Questions */}
          {hasQuestions ? (
            <View style={{ marginTop: 16 }}>
              <Text style={styles.h2}>Story Questions</Text>

              {story.questions!.map((q, idx) => {
                const selected = answers[idx];
                const isCorrect = selected ? selected === q.correct : null;
                const color =
                  isCorrect == null
                    ? '#3b82f6'
                    : isCorrect
                    ? '#16a34a'
                    : '#dc2626';

                return (
                  <View key={idx} style={styles.qBlock}>
                    <Text style={styles.questionText}>{q.q}</Text>

                    <View style={{ gap: 8 }}>
                      {q.options.map((opt, i) => {
                        const picked = selected === opt;
                        const bg = picked ? color : '#6366f1';
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
                          { color: isCorrect ? '#166534' : '#b91c1c' },
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

              {showResult && (
                <View style={{ marginTop: 10, alignItems: 'center' }}>
                  <Text style={{ fontSize: 28 }}>{emoji}</Text>
                  <Text style={styles.h2}>{headline}</Text>
                  <Text
                    style={{ fontFamily: 'Baloo2_600SemiBold', fontSize: 16 }}
                  >
                    {scoreText}
                  </Text>
                </View>
              )}
            </View>
          ) : (
            <View style={{ marginTop: 12 }}>
              <Text style={styles.h2}>Story Questions</Text>
              <Text
                style={{ fontFamily: 'Baloo2_600SemiBold', color: '#64748b' }}
              >
                No questions added for this story yet.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default StoryContentScreen;

// ---------- dynamic styles ----------
function makeStyles({
  BASE,
  LINE,
  isLandscape,
  maxW,
}: {
  BASE: number;
  LINE: number;
  isLandscape: boolean;
  maxW: number;
}) {
  return StyleSheet.create({
    container: { flex: 1 },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(255,255,255,0.08)',
    },
    scrollContent: { padding: 16, paddingBottom: 28 },
    contentCenter: { flex: 1, alignItems: 'center', justifyContent: 'center' },

    sheet: {
      borderRadius: 16,
      backgroundColor: 'rgba(255,255,255,0.9)',
      padding: 16,
      shadowColor: '#000',
      shadowOpacity: 0.12,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 6 },
      maxWidth: maxW,
      alignSelf: 'center',
    },

    h1: {
      fontFamily: 'Baloo2_800ExtraBold',
      fontSize: isLandscape ? 24 : 26,
      color: '#ef4444',
      fontWeight: '900',
      textAlign: 'center',
      marginBottom: 12,
    },
    h2: {
      fontFamily: 'Baloo2_800ExtraBold',
      fontSize: isLandscape ? 19 : 20,
      color: '#0ea5e9',
      marginBottom: 6,
    },

    // Page UI
    pageTopRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8,
      paddingHorizontal: 4,
    },
    handBtn: {
      backgroundColor: '#e0f2fe',
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderRadius: 12,
    },
    handDisabled: { opacity: 0.5 },

    pageCard: {
      borderRadius: 16,
      backgroundColor: '#fffdfa',
      padding: 14,
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 4 },
      minHeight: isLandscape ? 200 : 260,
      marginBottom: 8,
    },
    pageImage: {
      width: '100%',
      height: isLandscape ? 140 : 200,
      borderRadius: 12,
      marginBottom: 10,
    },
    pageText: {
      fontFamily: 'Baloo2_400Regular',
      fontSize: BASE, // bigger for readability
      lineHeight: LINE,
      letterSpacing: 0.15,
      color: '#111827',
    },

    pageBottomRow: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 10,
    },
    pageCounter: {
      fontFamily: 'Baloo2_700Bold',
      color: '#0f172a',
      fontSize: isLandscape ? 14 : 15,
    },
    pageBtn: {
      flex: 1,
      backgroundColor: '#22c55e',
      borderRadius: 999,
      paddingVertical: 12,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 3 },
    },
    pageBtnDisabled: { backgroundColor: '#bbf7d0' },
    pageBtnText: {
      color: '#fff',
      fontFamily: 'Baloo2_800ExtraBold',
      fontSize: 16,
    },

    // Quiz
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
    optText: { fontFamily: 'Baloo2_800ExtraBold', color: '#fff', fontSize: 16 },
    feedback: { marginTop: 6, fontFamily: 'Baloo2_600SemiBold', fontSize: 16 },

    submitBtn: {
      marginTop: 14,
      backgroundColor: '#06b6d4',
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

    p: { fontFamily: 'Baloo2_600SemiBold', fontSize: 18, color: '#f87171' },
  });
}
