
import React, { useEffect, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { updateTopicProgress } from '../storage/progress';
import { questionsData } from '../data/questions';
import type { Question } from '../types';

type Answer = {
  questionId: string | number;
  selected: string;
  isCorrect: boolean;
};

const ResultsScreen: React.FC = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const level: string = route.params?.level;
  const klass: string = route.params?.class;
  const subject: string = route.params?.subject;
  const topic: string | undefined = route.params?.topic;
  const answers: Answer[] = route.params?.answers ?? [];

  const allForLevel: Question[] = level ? (questionsData as any)[level] ?? [] : [];
  const bank: Question[] = allForLevel.filter(
    q => q.class === klass && q.subject === subject && (!topic || q.topic === topic)
  );

  const byId = useMemo(() => {
    const m = new Map<string | number, Question>();
    bank.forEach(q => m.set(q._id, q));
    return m;
  }, [bank]);

  const correctCount = answers.filter(a => a.isCorrect).length;
  const total = answers.length || 1; // avoid divide-by-zero
  const scorePct = Math.round((correctCount / total) * 100);

  useEffect(() => {
  // expect these in route.params
  const { level, class: klass, subject, topic, answers, total } = route.params as any;
  if (!level || !klass || !subject || !topic) return;

  const correct = Array.isArray(answers) ? answers.filter((a: any) => a.isCorrect).length : 0;
  const ratio = total ? correct / total : 0;

  updateTopicProgress(level, klass, subject, topic, ratio).catch(() => {});
}, []);

  const goLessons = () => navigation.navigate('Lessons', { level, class: klass, subject });
  const retryLesson = () => navigation.replace('Quiz', { level, class: klass, subject, topic });
  const goSubjects = () => navigation.navigate('SubjectSelection', { level, class: klass });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Header card */}
        <View style={styles.headerCard}>
          <Text style={styles.title}>Great job!</Text>
          <View style={styles.scoreRow}>
            <View style={styles.scoreCircle}>
              <Text style={styles.scoreText}>{scorePct}</Text>
              <Text style={styles.scoreSub}>%</Text>
            </View>
            <View>
              <Text style={styles.meta}>
                Level: <Text style={styles.metaStrong}>{level}</Text> • Class:{' '}
                <Text style={styles.metaStrong}>{(klass || '').toUpperCase()}</Text>
              </Text>
              <Text style={styles.meta}>
                Subject: <Text style={styles.metaStrong}>{cap(subject)}</Text>
                {topic ? <> • Lesson: <Text style={styles.metaStrong}>{topic}</Text></> : null}
              </Text>
              <Text style={styles.meta}>
                Correct: <Text style={styles.metaStrong}>{correctCount}/{total}</Text>
              </Text>
            </View>
          </View>

          {/* Actions */}
          <View style={styles.actions}>
            {topic ? (
              <TouchableOpacity style={[styles.btn, styles.btnPrimary]} onPress={retryLesson}>
                <FontAwesome name="repeat" size={16} color="#fff" />
                <Text style={styles.btnText}>Retry Lesson</Text>
              </TouchableOpacity>
            ) : null}

            <TouchableOpacity style={[styles.btn, styles.btnSecondary]} onPress={goLessons}>
              <FontAwesome name="list" size={16} color="#065f46" />
              <Text style={[styles.btnText, styles.btnTextDark]}>Choose Another Lesson</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn, styles.btnGhost]} onPress={goSubjects}>
              <FontAwesome name="book" size={16} color="#065f46" />
              <Text style={[styles.btnText, styles.btnTextDark]}>Back to Subjects</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Review list */}
        <View style={styles.reviewCard}>
          <Text style={styles.reviewTitle}>Review Answers</Text>
          {answers.map((a, idx) => {
            const q = byId.get(a.questionId) as Question | undefined;
            const correct = a.isCorrect;
            return (
              <View key={idx} style={styles.reviewRow}>
                <FontAwesome
                  name={correct ? 'check-circle' : 'times-circle'}
                  size={18}
                  color={correct ? '#16a34a' : '#ef4444'}
                  style={{ marginRight: 8 }}
                />
                <View style={{ flex: 1 }}>
                  <Text style={styles.qText}>{q?.text ?? `Question ${idx + 1}`}</Text>
                  <Text style={styles.aText}>
                    Your answer: <Text style={correct ? styles.good : styles.bad}>{a.selected}</Text>
                    {q?.correct && !correct ? (
                      <>
                        {'  '}• Correct: <Text style={styles.good}>{q.correct}</Text>
                      </>
                    ) : null}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const cap = (s: string) => (s ? s[0].toUpperCase() + s.slice(1) : s);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f0fdf4' },
  scrollViewContent: { paddingBottom: 24 },
  headerCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000', shadowOpacity: 0.12, shadowRadius: 10, shadowOffset: { width: 0, height: 6 }, elevation: 4,
    marginBottom: 16,
  },
  title: { fontSize: 26, fontWeight: '800', color: '#065f46', marginBottom: 12, textAlign: 'center' },
  scoreRow: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  scoreCircle: {
    width: 86, height: 86, borderRadius: 999, backgroundColor: '#10b981',
    alignItems: 'center', justifyContent: 'center',
  },
  scoreText: { color: '#fff', fontSize: 30, fontWeight: '800', lineHeight: 32 },
  scoreSub: { color: '#ecfdf5', fontSize: 14, fontWeight: '700' },
  meta: { color: '#065f46', fontSize: 14, marginTop: 2 },
  metaStrong: { fontWeight: '800' },
  actions: { marginTop: 14, gap: 10 },
  btn: {
    flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 12, paddingHorizontal: 14,
    borderRadius: 999, justifyContent: 'center',
  },
  btnPrimary: { backgroundColor: '#16a34a' },
  btnSecondary: { backgroundColor: '#a7f3d0' },
  btnGhost: { backgroundColor: '#ecfccb' },
  btnText: { color: '#fff', fontSize: 16, fontWeight: '800' },
  btnTextDark: { color: '#065f46' },

  reviewCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 8, shadowOffset: { width: 0, height: 4 }, elevation: 3,
  },
  reviewTitle: { fontSize: 20, fontWeight: '800', color: '#0f766e', marginBottom: 10 },
  reviewRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 },
  qText: { color: '#0ea5e9', fontSize: 16, fontWeight: '700' },
  aText: { color: '#334155', marginTop: 2 },
  good: { color: '#16a34a', fontWeight: '800' },
  bad: { color: '#ef4444', fontWeight: '800' },
});

export default ResultsScreen;
