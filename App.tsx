import React, { useState, useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';

import WelcomeScreen from './src/screens/WelcomeScreen';
import LevelSelectionScreen from './src/screens/LevelSelectionScreen';
import DashboardScreen from './src/screens/DashboardScreen';
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
            screenOptions={({ navigation }) => ({
              headerShown: true,
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontFamily: 'Baloo2_800ExtraBold',
                fontSize: 18,
                color: '#065f46',
              },
              headerBackTitleStyle: { fontFamily: 'Baloo2_600SemiBold' },
              headerTitle: () => <HeaderTitle />,
              headerTintColor: '#065f46',
              headerBackTitleVisible: true,
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
            })}
          >
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="LevelSelection"
              component={LevelSelectionScreen}
              options={{ title: 'Choose Level' }}
            />
            <Stack.Screen
              name="Dashboard"
              component={DashboardScreen}
              options={{ title: 'Dashboard' }}
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
