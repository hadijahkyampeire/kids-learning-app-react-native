import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // react-navigation
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

type LevelItem = { name: string; level: string; colors: [string, string] };

const LEVELS: LevelItem[] = [
  { name: 'Preschool', level: 'preSchool', colors: ['#84cc16', '#a3e635'] }, // lime-500 -> lime-400
  {
    name: 'JuniorSchool',
    level: 'juniorSchool',
    colors: ['#0ea5e9', '#818cf8'],
  }, // sky-500 -> indigo-400
  {
    name: 'Lower Primary',
    level: 'lowerPrimary',
    colors: ['#f59e0b', '#fb923c'],
  }, // amber-500 -> orange-400
  {
    name: 'Upper Primary',
    level: 'upperPrimary',
    colors: ['#8b5cf6', '#a78bfa'],
  }, // violet-500 -> violet-400
];

const LevelSectionsScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [kidName, setKidName] = useState('Little Star');
  const clickRef = useRef<Audio.Sound | null>(null);
  const scales = useMemo(() => LEVELS.map(() => new Animated.Value(1)), []);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const saved = (await AsyncStorage.getItem('kidName')) || 'Little Star';
      if (mounted) setKidName(saved);

      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
      });
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/sounds/click.mp3'),
        { volume: 0.5 }
      );
      clickRef.current = sound;
    })();
    return () => {
      mounted = false;
      clickRef.current?.unloadAsync();
    };
  }, []);

  const handlePress = async (level: string) => {
    try {
      if (clickRef.current) {
        await clickRef.current.setPositionAsync(0);
        await clickRef.current.playAsync();
      }
    } catch {}
    // normal navigation (no dynamic file names)
    navigation.navigate('Dashboard', { level });
  };

  const renderItem = ({ item, index }: { item: LevelItem; index: number }) => {
    const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
    const scale = scales[index];

    return (
      <AnimatedPressable
        style={[styles.card, { transform: [{ scale }] }]}
        onPress={() => handlePress(item.level)}
        onPressIn={() =>
          Animated.spring(scale, {
            toValue: 0.97,
            useNativeDriver: true,
          }).start()
        }
        onPressOut={() =>
          Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start()
        }
      >
        <LinearGradient
          colors={item.colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <FontAwesome
            name="star"
            size={18}
            color="#fde047"
            style={{ marginRight: 8 }}
          />
          <Text
            style={styles.cardText}
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.92}
          >
            {item.name}
          </Text>
        </LinearGradient>
      </AnimatedPressable>
    );
  };

  return (
    <View style={styles.root}>
      {/* If you have a background component, render it absolutely here */}
      {/* <SoftPlayBgRN /> OR <KidsBgLimeRN /> */}

      <Text style={styles.h1}>
        <FontAwesome name="star" size={22} color="#facc15" /> Welcome, {kidName}
        !
      </Text>
      <Text style={styles.h2}>Choose a level to start learning!</Text>

      <FlatList
        contentContainerStyle={styles.grid}
        data={LEVELS}
        keyExtractor={(it) => it.level}
        renderItem={renderItem}
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ecfeff', // soft cyan like the web bg layer
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 32,
    alignItems: 'center',
  },
  h1: {
    fontSize: 32,
    color: '#065f46', // emerald-900
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0,0,0,0.08)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  h2: {
    fontSize: 22,
    color: '#064e3b',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
  },
  grid: {
    paddingTop: 8,
    paddingBottom: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  list: {
    paddingTop: 8,
    paddingBottom: 24,
    paddingHorizontal: 12,
    alignItems: 'stretch',
  },
  card: {
    width: '100%',
    borderRadius: 24,
    overflow: 'hidden',
    marginVertical: 8,
    minHeight: 64,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  gradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    minHeight: 64,
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
    flexShrink: 1,
    includeFontPadding: false,
  },
});

export default LevelSectionsScreen;
