// screens/LessonSelectionScreen.tsx
import React, { useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { questionsData } from '../data/questions';
import { storiesData } from '../data/storiesData';
import { CLASS_STYLES, buttonShape } from '../constants/styles';

const LessonSelectionScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const level: string = route.params?.level;
  const klass: string = route.params?.class;
  const subject: string = route.params?.subject;

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
        kind: 'stories',
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
        kind: 'quiz',
      }));
    }
  }, [level, klass, subject]);

  const clsStyle = CLASS_STYLES[klass] ?? { bg: '#fff', borderVariant: 'rounded' };

  return (
    <View style={styles.root}>
      <FlatList
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
              if (subject === 'stories') {
                // take user to Stories screen filtered by topic
                navigation.navigate('Stories', { level, class: klass, topic: item.topic });
              } else {
                navigation.navigate('Quiz', { level, class: klass, subject, topic: item.topic });
              }
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
