// App.tsx
import React, { useCallback, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';

import WelcomeScreen from './src/screens/WelcomeScreen';
import LevelSelectionScreen from './src/screens/LevelSelectionScreen';
import ClassSelectionScreen from './src/screens/ClassSelectionScreen';
import SubjectSelectionScreen from './src/screens/SubjectSelection';
import LessonsScreen from './src/screens/LessonsScreen';
import QuizScreen from './src/screens/QuizScreen';
import StoriesScreen from './src/screens/StoriesScreen';
import StoryContentScreen from './src/screens/StoryContentScreen';
import ResultsScreen from './src/screens/ResultsScreen';

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

const Stack = createNativeStackNavigator<RootStackParamList>();
SplashScreen.preventAutoHideAsync();

const clickSnd = require('./src/assets/sounds/click.mp3');

async function logoutAndReset(navigation: any) {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const toRemove = keys.filter(
      (k) => k === 'kidName' || k.startsWith('progress:')
    );
    if (toRemove.length) await AsyncStorage.multiRemove(toRemove);
  } finally {
    navigation.reset({ index: 0, routes: [{ name: 'Welcome' }] });
  }
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Baloo2_400Regular,
    Baloo2_600SemiBold,
    Baloo2_800ExtraBold,
  });

  const clickRef = useRef<Audio.Sound | null>(null);
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
          staysActiveInBackground: false,
        });
        const s = new Audio.Sound();
        await s.loadAsync(clickSnd);
        if (mounted) clickRef.current = s;
      } catch {}
    })();
    return () => {
      mounted = false;
      if (clickRef.current) {
        clickRef.current.unloadAsync().catch(() => {});
        clickRef.current = null;
      }
    };
  }, []);

  const playClick = async () => {
    try {
      if (clickRef.current) await clickRef.current.replayAsync();
    } catch {}
  };

  const onLayout = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  useEffect(() => {}, []);

  if (!fontsLoaded) return <View style={{ flex: 1 }} onLayout={onLayout} />;

  return (
    <KidProvider>
      <View style={{ flex: 1 }} onLayout={onLayout}>
        <NavigationContainer>
          <Stack.Navigator
             screenOptions={({ navigation }) => ({
              headerShown: true,
              headerTitleAlign: 'center',
              headerTitle: () => <HeaderTitle />,
              headerTintColor: '#065f46',
              headerStyle: { backgroundColor: '#ecfccb' },
              headerTitleStyle: {
                fontFamily: 'Baloo2_800ExtraBold',
                fontSize: 18,
                color: '#065f46',
              },
              headerBackTitleVisible: Platform.OS === 'ios',
              headerBackTitleStyle: {
                fontFamily: 'Baloo2_600SemiBold',
                fontSize: 14,
                color: '#065f46',
              },
              // custom back with click sound
              headerLeft: ({ canGoBack }) =>
                canGoBack ? (
                  <TouchableOpacity
                    onPress={() => {
                      void playClick().then(() => setTimeout(() => navigation.goBack(), 120));
                    }}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                    style={{ paddingHorizontal: 8, paddingVertical: 4 }}
                  >
                    <Text style={{ color: '#065f46', fontFamily: 'Baloo2_600SemiBold', fontSize: 16 }}>
                      Back
                    </Text>
                  </TouchableOpacity>
                ) : null,
              // home button with sound
              headerRight: () => (
                <HeaderHomeButton
                  onPress={() => {
                    void playClick().then(() =>
                      setTimeout(
                        () =>
                          navigation.reset({
                            index: 0,
                            routes: [{ name: 'LevelSelection' }],
                          }),
                        120
                      )
                    );
                  }}
                />
              ),
            })}
          >
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />

            {/* LEVEL SELECTION */}
            <Stack.Screen
              name="LevelSelection"
              component={LevelSelectionScreen}
              options={({ navigation }) => ({
                title: 'Choose Level',
                // Replace home with a Done button that logs out
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => logoutAndReset(navigation)}
                    style={styles.doneBtn}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    <Text style={styles.doneText}>Done</Text>
                  </TouchableOpacity>
                ),
              })}
              listeners={({ navigation }) => ({
                beforeRemove: (e) => {
                  // Allow programmatic RESET (from Done). Block only back-like actions.
                  const type = e?.data?.action?.type;
                  if (type === 'POP' || type === 'GO_BACK') {
                    e.preventDefault();
                    logoutAndReset(navigation);
                  }
                },
              })}
            />

            <Stack.Screen
              name="ClassSelection"
              component={ClassSelectionScreen}
              options={{ title: 'Choose Class' }}
            />
            <Stack.Screen
              name="SubjectSelection"
              component={SubjectSelectionScreen}
              options={{ title: 'Choose Subject' }}
            />
            <Stack.Screen
              name="Lessons"
              component={LessonsScreen}
              options={{ title: 'Choose Lesson' }}
            />
            <Stack.Screen
              name="Quiz"
              component={QuizScreen}
              options={{ title: 'Quiz' }}
            />
            <Stack.Screen
              name="Stories"
              component={StoriesScreen}
              options={{ title: 'Stories' }}
            />
            <Stack.Screen
              name="StoryContent"
              component={StoryContentScreen}
              options={{ title: 'Story' }}
            />
            <Stack.Screen
              name="Results"
              component={ResultsScreen}
              options={{ title: 'Results' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </KidProvider>
  );
}

const styles = StyleSheet.create({
  doneBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#065f46',
  },
  doneText: {
    color: '#fff',
    fontFamily: 'Baloo2_800ExtraBold',
    fontSize: 14,
  },
});
