import React, { useState, useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import WelcomeScreen from './src/screens/WelcomeScreen';
import LevelSelectionScreen from './src/screens/LevelSelectionScreen';
import QuizScreen from './src/screens/QuizScreen';
import StoriesScreen from './src/screens/StoriesScreen';
import StoryContentScreen from './src/screens/StoryContentScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import ClassSelectionScreen from './src/screens/ClassSelectionScreen';
import SubjectSelectionScreen from './src/screens/SubjectSelection';
import LessonsScreen from './src/screens/LessonsScreen';
import { RootStackParamList } from './src/navigation/types';

import { KidProvider } from './src/context/KidsNameContext';
import { HeaderHomeButton } from './src/components/HomeButton';
import HeaderTitle from './src/components/HeaderTitle';

import {
  useFonts,
  Baloo2_400Regular,
  Baloo2_600SemiBold,
  Baloo2_800ExtraBold,
} from '@expo-google-fonts/baloo-2';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createNativeStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync();

// Default mapping for breadcrumb labels by screen
const BACK_LABELS: Record<keyof RootStackParamList, string> = {
  Welcome: 'Back',
  LevelSelection: 'Back',
  ClassSelection: 'Levels',
  SubjectSelection: 'Classes',
  Lessons: 'Subjects',
  Quiz: 'Lessons',
  Stories: 'Lessons',
  StoryContent: 'Stories',
  Results: 'Quiz',
};

// Reusable back control (shows text on Android too)
const BackBreadcrumb: React.FC<{ onPress: () => void; label: string }> = ({ onPress, label }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.headerLeft}
    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
  >
    <Text style={styles.headerLeftText}>{label}</Text>
  </TouchableOpacity>
);

export default function App() {
  const [ready, setReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Baloo2_400Regular,
    Baloo2_600SemiBold,
    Baloo2_800ExtraBold,
  });

  const onLayout = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  useEffect(() => {
    (async () => {
      try {
      } finally {
        setReady(true);
      }
    })();
  }, []);

  if (!fontsLoaded) return <View style={{ flex: 1 }} onLayout={onLayout} />;

  return (
    <KidProvider>
      <View style={{ flex: 1 }} onLayout={onLayout}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={({ navigation, route }) => {
              // Prefer explicit label passed via params, else map by screen name.
              const explicit = (route.params as any)?.backLabel as string | undefined;
              const mapped = BACK_LABELS[route.name as keyof RootStackParamList] ?? 'Back';
              const label = explicit ?? mapped;

              return {
                headerShown: true,
                headerTitleAlign: 'center',
                headerTitle: () => <HeaderTitle />,
                headerTintColor: '#065f46',
                headerStyle: { backgroundColor: '#ecfccb' },

                // Use our own back control so Android shows text too
                headerLeft: () =>
                  navigation.canGoBack() ? (
                    <BackBreadcrumb onPress={() => navigation.goBack()} label={`\u2039 ${label}`} />
                  ) : null,

                // Keep the home button on the right
                headerRight: () => (
                  <HeaderHomeButton
                    onPress={() =>
                      navigation.reset({
                        index: 0,
                        routes: [{ name: 'LevelSelection' }],
                      })
                    }
                  />
                ),
              };
            }}
          >
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />

            <Stack.Screen name="LevelSelection" component={LevelSelectionScreen} options={{ title: 'Choose Level' }} />
            <Stack.Screen name="ClassSelection" component={ClassSelectionScreen} options={{ title: 'Choose Class' }} />
            <Stack.Screen name="SubjectSelection" component={SubjectSelectionScreen} options={{ title: 'Choose Subject' }} />
            <Stack.Screen name="Lessons" component={LessonsScreen} options={{ title: 'Choose Lesson' }} />

            <Stack.Screen name="Quiz" component={QuizScreen} options={{ title: 'Quiz' }} />
            <Stack.Screen name="Stories" component={StoriesScreen} options={{ title: 'Stories' }} />
            <Stack.Screen name="StoryContent" component={StoryContentScreen} options={{ title: 'Story' }} />
            <Stack.Screen name="Results" component={ResultsScreen} options={{ title: 'Results' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </KidProvider>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  headerLeftText: {
    marginLeft: 6,
    fontFamily: 'Baloo2_700Bold',
    fontSize: 18,
    color: '#065f46',
  },
});
