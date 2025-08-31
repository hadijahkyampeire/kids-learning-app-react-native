// screens/shared/learningMaps.ts
import type { Question } from '../../types';

// Class options by level
export const CLASSES_BY_LEVEL: Record<
  string,
  Array<{ id: string; label: string; icon: string }>
> = {
  preSchool: [
    { id: 'baby',   label: 'Baby Class',   icon: 'child' },
    { id: 'middle', label: 'Middle Class', icon: 'puzzle-piece' },
    { id: 'top',    label: 'Top Class',    icon: 'rocket' },
  ],
  juniorSchool: [
    { id: 'p1', label: 'Primary 1 (P1)', icon: 'star' },
    { id: 'p2', label: 'Primary 2 (P2)', icon: 'star-half-empty' },
    { id: 'p3', label: 'Primary 3 (P3)', icon: 'star-o' },
  ],
  lowerPrimary: [
    { id: 'p4', label: 'Primary 4 (P4)', icon: 'leaf' },
    { id: 'p5', label: 'Primary 5 (P5)', icon: 'tree' },
  ],
  upperPrimary: [
    { id: 'p6', label: 'Primary 6 (P6)', icon: 'graduation-cap' },
    { id: 'p7', label: 'Primary 7 (P7)', icon: 'trophy' },
  ],
};

// Simple icon map for subjects (FontAwesome names)
export const SUBJECT_ICONS: Record<string, string> = {
  english: 'book',
  math: 'calculator',
  science: 'flask',
  socialStudies: 'map',
  generalKnowledge: 'globe',
  religion: 'moon-o',
};

// You already keep all questions per level. We'll assume this shape exists:
import { questionsData } from '../../data/questions'; 
//   e.g. questionsData = { preSchool: Question[], juniorSchool: Question[], lowerPrimary: Question[], upperPrimary: Question[] }

// Get questions for a level+class
export function getQuestionsByLevelClass(level: string, klass: string): Question[] {
  const arr = (questionsData as any)[level] as Question[] | undefined;
  if (!arr) return [];
  return arr.filter(q => q.class === klass);
}

export function getSubjects(level: string, klass: string): string[] {
  const qs = getQuestionsByLevelClass(level, klass);
  const set = new Set(qs.map(q => q.subject));
  return Array.from(set);
}

// topic counts per subject
export function getTopicsWithCounts(
  level: string,
  klass: string,
  subject: string
): Array<{ topic: string; count: number }> {
  const qs = getQuestionsByLevelClass(level, klass).filter(q => q.subject === subject);
  const map = new Map<string, number>();
  qs.forEach(q => map.set(q.topic, (map.get(q.topic) ?? 0) + 1));
  return Array.from(map.entries()).map(([topic, count]) => ({ topic, count }));
}
