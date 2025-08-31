export type Level = 'preSchool' | 'juniorSchool' | 'lowerPrimary' | 'upperPrimary';
export type StoryLevel = Level; // keep exactly these strings

export type Class =
  | 'baby' | 'middle' | 'top'   // preschool sub-levels
  | 'p1' | 'p2' | 'p3'          // junior
  | 'p4' | 'p5'                 // lower
  | 'p6' | 'p7';                // upper

export type Subject =
  | 'math'
  | 'english'
  | 'science'
  | 'socialStudies'
  | 'generalKnowledge'
  | 'religion';

export interface Question {
  _id: string;
  level: Level;        // e.g. 'preSchool'
  class: Class;        // e.g. 'baby', 'p1', ...
  subject: Subject;    // was "category"
  topic: string;       // NEW: lesson grouping
  text: string;
  options: string[];
  correct: string;
  feedback: {
    correct: string;
    incorrect: string;
  };
}

export type StoryQuestion = {
  q: string;
  options: string[];
  correct: string;
  feedback: { correct: string; incorrect: string };
};

export type Story = {
  _id: string;
  level: StoryLevel;   // same union as Level
  class: Class;        // NEW
  topic: string;       // NEW
  title: string;
  summary?: string;
  coverImage?: string;
  questions: StoryQuestion[];
};
