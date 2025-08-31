import React, { useMemo, useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { SUBJECTS_BY_LEVEL } from '../constants/subjects';
import { CLASS_STYLES, SUBJECT_STYLES, buttonShape } from '../constants/styles';
import { questionsData } from '../data/questions';
import { storiesData } from '../data/storiesData';
import { loadSubjectProgress, type SubjectProgress } from '../storage/progress';

const clickSnd = require('../assets/sounds/click.mp3');

type LevelKey = keyof typeof SUBJECTS_BY_LEVEL;

const ProgressBar: React.FC<{ ratio: number }> = ({ ratio }) => (
  <View style={styles.track}>
    <View style={[styles.fill, { width: `${Math.round((ratio || 0) * 100)}%` }]} />
  </View>
);

const SubjectSelectionScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const level: string = route.params?.level;
  const klass: string = route.params?.class;

  const clickRef = useRef<Audio.Sound | null>(null);
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
          staysActiveInBackground: false,
        });
        const s = new Audio.Sound();
        await s.loadAsync(clickSnd);
        if (mounted) clickRef.current = s;
      } catch {}
    })();
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
      if (clickRef.current) await clickRef.current.replayAsync();
    } catch {}
  };

  const subjects = SUBJECTS_BY_LEVEL[level as LevelKey] ?? [];

  const subjectRows = useMemo(() => {
    return subjects.map((subject) => {
      if (subject === 'stories') {
        const bucket = (storiesData[level as keyof typeof storiesData] ?? []) as any[];
        const arr = bucket.filter((s) => !klass || s.class === klass);
        const topics = Array.from(new Set(arr.map((s) => s.topic)));
        return { subject, lessons: topics.length, items: arr.length, topics };
      } else {
        const bucket = (questionsData[level as keyof typeof questionsData] ?? []) as any[];
        const arr = bucket.filter((q) => q.subject === subject && (!klass || q.class === klass));
        const topics = Array.from(new Set(arr.map((q) => q.topic)));
        return { subject, lessons: topics.length, items: arr.length, topics };
      }
    });
  }, [level, klass, subjects]);

  const [progressMap, setProgressMap] = useState<Record<string, { completed: number; total: number }>>({});

  useEffect(() => {
    let mounted = true;
    (async () => {
      const next: Record<string, { completed: number; total: number }> = {};
      for (const row of subjectRows) {
        const sp: SubjectProgress = await loadSubjectProgress(level, klass, row.subject);
        const completed = row.topics.reduce((sum: number, topic: string) => {
          const t = sp.topics?.[topic];
          return sum + (t?.completed ? 1 : 0);
        }, 0);
        next[row.subject] = { completed, total: row.topics.length };
      }
      if (mounted) setProgressMap(next);
    })();
    return () => {
      mounted = false;
    };
  }, [level, klass, subjectRows]);

  const clsStyle = CLASS_STYLES[klass] ?? { borderVariant: 'rounded', tint: '#fff' };

  return (
    <View style={styles.root}>
      <FlatList
        data={subjectRows}
        keyExtractor={(it) => it.subject}
        contentContainerStyle={{ padding: 16, gap: 12 }}
        renderItem={({ item }) => {
          const styleInfo = SUBJECT_STYLES[item.subject] ?? { bg: '#ddd', fg: '#000', icon: 'circle' };
          const disabled = item.lessons === 0;
          const prog = progressMap[item.subject] ?? { completed: 0, total: item.lessons };
          const ratio = prog.total ? prog.completed / prog.total : 0;

          return (
            <TouchableOpacity
              activeOpacity={0.9}
              disabled={disabled}
              onPress={() => {
                void playClick().then(() => {
                  setTimeout(() => {
                    navigation.navigate('Lessons', { level, class: klass, subject: item.subject });
                  }, 120);
                });
              }}
              style={[
                styles.subjectBtn,
                buttonShape(clsStyle.borderVariant as any),
                { backgroundColor: styleInfo.bg, opacity: disabled ? 0.55 : 1 },
              ]}
            >
              <View style={styles.row}>
                <FontAwesome name={styleInfo.icon as any} size={22} color={styleInfo.fg} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={[styles.subjectTitle, { color: styleInfo.fg }]}>{pretty(item.subject)}</Text>

                  {/* progress line + counts */}
                  <View style={{ marginTop: 4 }}>
                    <ProgressBar ratio={ratio} />
                    <Text style={[styles.small, { color: styleInfo.fg, marginTop: 4 }]}>
                      {prog.completed}/{prog.total} lessons • {item.items}{' '}
                      {item.subject === 'stories' ? 'stories' : 'questions'}
                    </Text>
                  </View>
                </View>
                <FontAwesome name="chevron-right" size={18} color={styleInfo.fg} />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const pretty = (s: string) =>
  s === 'generalKnowledge' ? 'General Knowledge'
    : s === 'socialStudies' ? 'Social Studies'
    : s[0].toUpperCase() + s.slice(1);

const styles = StyleSheet.create({
  root: { flex: 1 },
  subjectBtn: {
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 14,
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  subjectTitle: {
    fontFamily: 'Baloo2_800ExtraBold',
    fontSize: 18,
  },
  small: { fontFamily: 'Baloo2_600SemiBold', fontSize: 12, opacity: 0.9 },
  // progress
  track: {
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.45)',
    borderRadius: 999,
    overflow: 'hidden',
  },
  fill: {
    height: 8,
    backgroundColor: 'rgba(6,95,70,0.9)',
    borderRadius: 999,
  },
});

export default SubjectSelectionScreen;
