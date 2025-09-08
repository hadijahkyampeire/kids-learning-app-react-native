export type Level = 'preSchool' | 'juniorSchool' | 'lowerPrimary' | 'upperPrimary';

export type Class =
  | 'baby' | 'middle' | 'top'   // preschool sub-levels
  | 'p1' | 'p2' | 'p3'          // junior
  | 'p4' | 'p5'                 // lower
  | 'p6' | 'p7';                // upper

export type QuestionType = 'multiChoice' | 'fill-in' | 'text' | 'multiText' | 'choice';
export type Subject =
  | 'math'
  | 'english'
  | 'science'
  | 'generalKnowledge'
  | 'socialStudies'
  | 'religion'
  | 'art'
  | 'stories';

// Minimal shape for quizzes — no persistent lessonNumber needed
export interface Question {
  _id: string;
  level: Level;
  class: Class;
  subject: Subject;
  topic?: string;         // used to group as "lesson" in the UI
  description?: string;   // optional fallback for topic/summary
  text: string;
  options?: string[];      // Optional for text/multiText questions
  correct?: string | string[];       // Optional when using accepted/acceptedSet
  feedback: {
    correct: string;
    incorrect: string;
  };
  image?: string;
  minAnswer?: number;
  type?: QuestionType;    // question type
  patterns?: string[];    // optional regex patterns for matching answers
  acceptedSet?: string[]; // optional set of additional accepted answers for multiText
  accepted?: string[];    // optional list of accepted answers for text questions
  minAnswers?: number;    // minimum number of answers required for multiText questions
}

/** Stories domain */
export type StoryTopic =
  | 'Adventure'
  | 'Home & Family'
  | 'Friendship'
  | 'School Life'
  | 'Kindness'
  | 'Animals & Nature'
  | 'Bravery'
  | 'Faith'
  | 'Imagination'
  | 'Helping'
  | 'Tales (Fables)'
  | 'Moral'
  | 'Discovery'
  | 'Teamwork'
  | 'School'
  | 'Fable';

export interface StoryPage {
  text: string;
  image?: string;
}

export type StoryQuestion = {
  q: string;
  options: string[];
  correct: string;
  feedback: {
    correct: string;
    incorrect: string;
  };
};

export interface Story {
  _id: string;
  level: Level;
  class: Class;
  topic: StoryTopic;
  title: string;
  summary: string;
  coverImage: string;
  pages: StoryPage[];
  questions: StoryQuestion[];
}

// Optional: high-level structures (use only if you actually render from them)
export interface SubjectData {
  id: string;
  name: Subject;
  icon: string;
  color: string;
}

export interface ClassGroup {
  id: string;
  name: Class;
  subjects: SubjectData[];
}

export interface LevelGroup {
  id: string;
  name: Level;
  color: string;
  classes: ClassGroup[];
}
