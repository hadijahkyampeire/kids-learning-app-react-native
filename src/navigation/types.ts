export type RootStackParamList = {
  Welcome: undefined;
  LevelSelection: undefined;
  Dashboard: { level: string };
  Quiz: { level: string; category: string };
  Stories: { level: string };
  StoryContent: { level: string; storyId: string };
  Results: { level: string; category: string };
};
