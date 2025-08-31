export type RootStackParamList = {
  Welcome: undefined;
  LevelSelection: undefined;

  ClassSelection: { level: string };
  SubjectSelection: { level: string; class: string };
  Lessons: { level: string; class: string; subject: string };

  Quiz: { level: string; class: string; subject: string; topic?: string };
  Stories: { level: string; class?: string; topic?: string };
  StoryContent: { level: string; class?: string; topic?: string; storyId: string };
  Results: { level: string; class: string; subject: string; topic?: string };
};
