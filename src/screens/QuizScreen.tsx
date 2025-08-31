import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';
import { questionsData } from '../data/questions'; 
import type { Question } from '../types';

const clickSnd = require('../assets/sounds/click.mp3');
const correctSnd = require('../assets/sounds/correct-sound.wav');
const wrongSnd = require('../assets/sounds/fail.mp3');

interface Answer {
  questionId: string | number;
  selected: string;
  isCorrect: boolean;
}

const QuizScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const level: string = route.params?.level;
  const klass: string = route.params?.class;
  const subject: string = route.params?.subject;
  const topic: string | undefined = route.params?.topic;

  const allForLevel: Question[] = level ? (questionsData as any)[level] ?? [] : [];

  const questions: Question[] = allForLevel
    .filter(q => q.class === klass && q.subject === subject && (!topic || q.topic === topic))
    .slice(0, 50);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const play = async (snd: any) => {
    try {
      const s = new Audio.Sound();
      await s.loadAsync(snd);
      await s.playAsync();
      s.unloadAsync();
    } catch {}
  };

  const goLevels = async () => {
    await play(clickSnd);
    navigation.navigate('LevelSelection');
  };

  const handleAnswer = async (answer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correct;
    await play(isCorrect ? correctSnd : wrongSnd);
    setSelectedAnswer(answer);
    setFeedback(isCorrect ? currentQuestion.feedback.correct : currentQuestion.feedback.incorrect);
    setAnswers(prev => [...prev, { questionId: currentQuestion._id, selected: answer, isCorrect }]);
  };

  const handleNext = async () => {
    await play(clickSnd);
    setFeedback(null);
    setSelectedAnswer(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(i => i + 1);
    } else {
      navigation.navigate('Results', { level, class: klass, subject, topic, answers });
    }
  };

  if (questions.length === 0) {
    return (
      <ImageBackground
        source={{ uri: 'https://kids-app-images.s3.us-east-1.amazonaws.com/quiz-bg.jpg' }}
        style={styles.container}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.p}>No questions available</Text>
          <TouchableOpacity style={styles.homeButton} onPress={goLevels}>
            <Text style={styles.buttonText}>Back to Levels</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <ImageBackground
      source={{ uri: 'https://kids-app-images.s3.us-east-1.amazonaws.com/quiz-bg.jpg' }}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.h1}>
          {capitalize(subject)} {topic ? `• ${topic}` : ''}
        </Text>
        <Text style={styles.h3}>{capitalize(level)} / {klass.toUpperCase()}</Text>

        <View style={styles.card}>
          <Text style={styles.h2}>{currentQuestion.text}</Text>

          <View style={styles.options}>
            {currentQuestion.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  selectedAnswer === option
                    ? option === currentQuestion.correct
                      ? styles.correctButton
                      : styles.incorrectButton
                    : styles.defaultButton,
                ]}
                onPress={() => handleAnswer(option)}
                disabled={!!selectedAnswer}
              >
                <Text style={styles.buttonText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {feedback && (
            <View style={styles.feedback}>
              <Text style={styles.feedbackText}>{feedback}</Text>
              <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

// (reuse your existing styles)
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 16 },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.2)' },
  content: { flex: 1, alignItems: 'center', width: '100%', maxWidth: 600 },
  homeButton: { backgroundColor: '#FBBF24', padding: 12, borderRadius: 12, alignSelf: 'flex-end', marginBottom: 16 },
  h1: {
    fontSize: 28, color: '#efd544ff', marginBottom: 16, marginTop: 16,
    textShadowColor: 'rgba(0,0,0,0.25)', textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 4,
    fontFamily: 'Comic Sans MS', textAlign: 'center',
  },
  card: {
    backgroundColor: 'white', padding: 24, borderRadius: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5,
    width: '90%',
  },
  h2: { fontSize: 22, color: '#3B82F6', marginBottom: 16, fontFamily: 'Comic Sans MS' },
  h3: { fontSize: 22, color: '#bf17d8ff', marginBottom: 16, fontFamily: 'Comic Sans MS' },
  options: { gap: 12 },
  optionButton: {
    padding: 12, borderRadius: 12,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5,
  },
  defaultButton: { backgroundColor: '#9333EA' },
  correctButton: { backgroundColor: '#84CC16' },
  incorrectButton: { backgroundColor: '#F87171' },
  feedback: { marginTop: 16, alignItems: 'center' },
  feedbackText: { fontSize: 18, color: '#84CC16', marginBottom: 12, fontFamily: 'Comic Sans MS' },
  nextButton: { backgroundColor: '#16A34A', padding: 12, borderRadius: 12 },
  buttonText: { color: 'white', fontSize: 18, fontFamily: 'Comic Sans MS', textAlign: 'center' },
  p: { fontSize: 18, color: '#3B82F6', marginBottom: 16, fontFamily: 'Comic Sans MS' },
});

export default QuizScreen;
