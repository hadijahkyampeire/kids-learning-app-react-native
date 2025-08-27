export interface Question {
  _id: string;
  level: 'preSchool' | 'juniorSchool' | 'lowerPrimary' | 'upperPrimary';
  category: 'math' | 'english' | 'science' | 'generalKnowledge' | 'religion';
  text: string;
  options: string[];
  correct: string;
  feedback: {
    correct: string;
    incorrect: string;
  };
}

export type StoryLevel = 'preSchool' | 'juniorSchool' | 'lowerPrimary' | 'upperPrimary';

export type StoryQuestion = {
  q: string;
  options: string[];
  correct: string;
  feedback: { correct: string; incorrect: string };
};

export type Story = {
  _id: string;               
  level: StoryLevel;
  title: string;
  text: string;
  image?: string;
  questions: StoryQuestion[]; 
};