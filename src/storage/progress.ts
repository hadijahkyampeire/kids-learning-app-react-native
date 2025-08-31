import AsyncStorage from '@react-native-async-storage/async-storage';

export type TopicProgress = {
  attempts: number;
  bestScore: number;   // 0..1
  lastScore: number;   // 0..1
  completed: boolean;  // mark a lesson as completed once user finishes it at least once
  lastPlayedAt: number;
};

export type SubjectProgress = {
  topics: Record<string, TopicProgress>;
};

const keyFor = (level: string, klass: string, subject: string) =>
  `progress:${level}:${klass}:${subject}`;

export async function loadSubjectProgress(
  level: string,
  klass: string,
  subject: string
): Promise<SubjectProgress> {
  const raw = await AsyncStorage.getItem(keyFor(level, klass, subject));
  if (!raw) return { topics: {} };
  try {
    return JSON.parse(raw);
  } catch {
    return { topics: {} };
  }
}

export async function saveSubjectProgress(
  level: string,
  klass: string,
  subject: string,
  data: SubjectProgress
) {
  await AsyncStorage.setItem(keyFor(level, klass, subject), JSON.stringify(data));
}

/**
 * Update / upsert one topic’s progress.
 * We mark completed = true when a quiz session ends (you can later add thresholds e.g. >=80%).
 */
export async function updateTopicProgress(
  level: string,
  klass: string,
  subject: string,
  topic: string,
  scoreRatio: number
) {
  const current = await loadSubjectProgress(level, klass, subject);
  const prev = current.topics[topic];
  const next: TopicProgress = {
    attempts: (prev?.attempts ?? 0) + 1,
    bestScore: Math.max(prev?.bestScore ?? 0, scoreRatio),
    lastScore: scoreRatio,
    completed: true, // consider lesson completed once attempted; tweak rule if needed
    lastPlayedAt: Date.now(),
  };
  current.topics[topic] = next;
  await saveSubjectProgress(level, klass, subject, current);
}
