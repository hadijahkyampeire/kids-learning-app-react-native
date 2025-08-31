// LessonSelectionScreen.tsx
import React, { useMemo, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Audio } from 'expo-av';
import { questionsData } from '../data/questions';
import { storiesData } from '../data/storiesData';
import { CLASS_STYLES, buttonShape } from '../constants/styles';

const clickSnd = require('../assets/sounds/click.mp3');

type LessonItem = 
  | { topic: string; countLabel: string; kind: "stories" }
  | { topic: string; countLabel: string; kind: "quiz" };

const LessonSelectionScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const level: string = route.params?.level;
  const klass: string = route.params?.class;
  const subject: string = route.params?.subject;

  const clickRef = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    let mounted = true;

    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: false,
    }).catch(() => {});

    const load = async () => {
      try {
        const s = new Audio.Sound();
        await s.loadAsync(clickSnd);
        if (mounted) clickRef.current = s;
      } catch {}
    };
    load();

    return () => {
      mounted = false;
      if (clickRef.current) {
        clickRef.current.unloadAsync().catch(() => {});
        clickRef.current = null;
      }
    };
  }, []);

  const playClick = async () => {
    try {
      if (!clickRef.current) return;
      // replay from start even if tapped quickly
      await clickRef.current.replayAsync();
    } catch {}
  };

  const lessons = useMemo(() => {
    if (subject === 'stories') {
      const arr = (storiesData[level as keyof typeof storiesData] ?? []).filter(
        (s: any) => (!klass || s.class === klass)
      );
      // group stories by topic (lesson = topic)
      const byTopic = new Map<string, any[]>();
      arr.forEach((s: any) => {
        if (!byTopic.has(s.topic)) byTopic.set(s.topic, []);
        byTopic.get(s.topic)!.push(s);
      });
      return Array.from(byTopic.entries()).map(([topic, items]) => ({
        topic,
        countLabel: `${items.length} stor${items.length === 1 ? 'y' : 'ies'}`,
        kind: 'stories' as const,
      }));
    } else {
      const arr = (questionsData[level as keyof typeof questionsData] ?? []).filter(
        (q: any) => q.subject === subject && (!klass || q.class === klass)
      );
      const byTopic = new Map<string, any[]>();
      arr.forEach((q: any) => {
        if (!byTopic.has(q.topic)) byTopic.set(q.topic, []);
        byTopic.get(q.topic)!.push(q);
      });
      return Array.from(byTopic.entries()).map(([topic, qs]) => ({
        topic,
        countLabel: `${qs.length} question${qs.length === 1 ? '' : 's'}`,
        kind: 'quiz' as const,
      }));
    }
  }, [level, klass, subject]);

  // Get the style for the current class, or use a default
  const clsStyle = useMemo(() => {
    if (klass && CLASS_STYLES[klass]) {
      return CLASS_STYLES[klass];
    }
    // fallback to a default style if klass is not set or not found
    return Object.values(CLASS_STYLES)[0];
  }, [klass]);

  return (
    <View style={styles.root}>
      <FlatList<LessonItem>
        data={lessons}
        keyExtractor={(it, i) => it.topic + i}
        contentContainerStyle={{ padding: 16, gap: 12 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.lessonBtn,
              buttonShape(clsStyle.borderVariant as any),
              { backgroundColor: clsStyle.bg },
            ]}
            activeOpacity={0.9}
            onPress={() => {
              // play sound then navigate (small delay so it isn't cut off)
              void playClick().then(() => {
                setTimeout(() => {
                  if (subject === 'stories') {
                    navigation.navigate('Stories', { level, class: klass, topic: item.topic });
                  } else {
                    navigation.navigate('Quiz', { level, class: klass, subject, topic: item.topic });
                  }
                }, 120);
              });
            }}
          >
            <Text style={styles.lessonTitle}>
              Lesson {index + 1} — {item.topic}
            </Text>
            <Text style={styles.lessonSmall}>{item.countLabel}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No lessons yet — coming soon.</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#f8fafc' },
  lessonBtn: {
    width: '100%',
    minHeight: 80,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1.5,
    borderColor: 'rgba(0,0,0,0.06)',
  },
  lessonTitle: { fontSize: 18, fontWeight: '800', color: '#0f172a' },
  lessonSmall: { marginTop: 4, fontSize: 13, fontWeight: '700', color: '#64748b' },
  empty: { textAlign: 'center', marginTop: 24, color: '#64748b', fontWeight: '700' },
});

export default LessonSelectionScreen;
