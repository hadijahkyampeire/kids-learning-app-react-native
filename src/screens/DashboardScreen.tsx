import React, { useEffect, useMemo, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  Pressable,
  Animated,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Audio } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';


const BG_URL = 'https://kids-app-images.s3.us-east-1.amazonaws.com/bg2.jpg';
const CLICK = require('../assets/sounds/click.mp3'); 

// ✅ bring your data in (adjust the import path if your files live elsewhere)
import { questionsData } from '../data/questions';
import { storiesData } from '../data/storiesData';

// small helper: Capitalize words like "preSchool" -> "PreSchool"
const capitalizeWords = (s?: string) =>
  (s || '').replace(/(^|[\s_-])\w/g, (m) => m.toUpperCase());

// category colors (approx. Tailwind shades from the web UI)
const CAT_COLORS: Record<string, [string, string]> = {
  math: ['#e879f9', '#d946ef'],              // fuchsia-400 -> fuchsia-600-ish
  english: ['#3b82f6', '#60a5fa'],           // blue-500   -> blue-400
  science: ['#9333ea', '#a855f7'],           // purple-600 -> purple-500
  generalKnowledge: ['#06b6d4', '#22d3ee'],  // cyan-500   -> cyan-400
  religion: ['#16a34a', '#22c55e'],          // green-600  -> green-500
  stories: ['#10b981', '#34d399'],           // emerald-500-> emerald-400
};

type Category = {
  key: 'math' | 'english' | 'science' | 'generalKnowledge' | 'religion' | 'stories';
  name: string;
  disabled: boolean;
  colors: [string, string];
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const DashboardScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const level: string | undefined = route.params?.level;

  // ---- Filter data by level (mirror web logic) ----
  const filteredQuestions = useMemo(() => {
    if (!level) return [];
    const bucket = (questionsData as any)[level];
    return Array.isArray(bucket) ? bucket : [];
  }, [level]);

  const filteredStories = useMemo(
    () => storiesData.filter((s: any) => s.level === level),
    [level]
  );

  const has = (cat: Category['key']) =>
    filteredQuestions.some((q: any) => q.category === cat);

  const categories: Category[] = [
    { key: 'math', name: 'Math', disabled: !has('math'), colors: CAT_COLORS.math },
    { key: 'english', name: 'English', disabled: !has('english'), colors: CAT_COLORS.english },
    { key: 'science', name: 'Science', disabled: !has('science'), colors: CAT_COLORS.science },
    {
      key: 'generalKnowledge',
      name: 'General Knowledge',
      disabled: !has('generalKnowledge'),
      colors: CAT_COLORS.generalKnowledge,
    },
    { key: 'religion', name: 'Religious Education', disabled: !has('religion'), colors: CAT_COLORS.religion },
    {
      key: 'stories',
      name: 'Stories',
      disabled: filteredStories.length === 0,
      colors: CAT_COLORS.stories,
    },
  ];

  // ---- Click sound (preload once) ----
  const clickRef = useRef<Audio.Sound | null>(null);
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        await Audio.setAudioModeAsync({ playsInSilentModeIOS: true, shouldDuckAndroid: true });
        const { sound } = await Audio.Sound.createAsync(CLICK, { volume: 0.5 });
        if (!mounted) {
          await sound.unloadAsync();
          return;
        }
        clickRef.current = sound;
      } catch (e) {
        console.log('audio init error:', e);
      }
    })();
    return () => {
      mounted = false;
      clickRef.current?.unloadAsync();
    };
  }, []);

  const playClick = async () => {
    try {
      if (clickRef.current) {
        await clickRef.current.setPositionAsync(0);
        await clickRef.current.playAsync();
      }
    } catch {}
  };


  const goBack = async () => {
    await playClick();
    navigation.navigate('LevelSection');
  };

  const goToCategory = async (c: Category) => {
    if (c.disabled) return;
    await playClick();

    if (c.key === 'stories') {
      navigation.navigate('Stories', { level });
    } else {
      // quiz route with params
      navigation.navigate('Quiz', { level, category: c.key });
    }
  };


  const renderItem = ({ item, index }: { item: Category; index: number }) => {
    const scale = new Animated.Value(1);
    const onPressIn = () =>
      Animated.spring(scale, { toValue: 0.97, useNativeDriver: true }).start();
    const onPressOut = () =>
      Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();

    return (
      <AnimatedPressable
        style={[styles.card, { transform: [{ scale }], opacity: item.disabled ? 0.55 : 1 }]}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={() => goToCategory(item)}
        disabled={item.disabled}
        accessibilityRole="button"
        accessibilityLabel={`Go to ${item.name}`}
        accessibilityState={{ disabled: item.disabled }}
      >
        <LinearGradient
          colors={item.colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          {/* Match your web icons roughly */}
          {item.key === 'math' && (
            <FontAwesome5 name="calculator" size={18} color="#fde047" style={styles.icon} />
          )}
          {item.key === 'english' && (
            <FontAwesome5 name="book" size={18} color="#fde047" style={styles.icon} />
          )}
          {item.key === 'science' && (
            <FontAwesome5 name="flask" size={18} color="#fde047" style={styles.icon} />
          )}
          {item.key === 'generalKnowledge' && (
            <FontAwesome5 name="globe" size={18} color="#fde047" style={styles.icon} />
          )}
          {item.key === 'religion' && (
            <FontAwesome5 name="mosque" size={18} color="#fde047" style={styles.icon} />
          )}
          {item.key === 'stories' && (
            <FontAwesome5 name="star" size={18} color="#fde047" style={styles.icon} />
          )}

          <Text
            style={styles.cardText}
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.9}
          >
            {item.name}
          </Text>
        </LinearGradient>
      </AnimatedPressable>
    );
  };

  return (
    <ImageBackground
      source={{ uri: BG_URL }}
      style={styles.root}
      resizeMode="cover"
      onError={(e) => console.log('BG load error', e.nativeEvent.error)}
    >
      <View style={styles.scrim} />

      <View style={styles.header}>
        <AnimatedPressable
          onPress={goBack}
          style={styles.backBtn}
          accessibilityRole="button"
          accessibilityLabel="Go Back"
        >
          <FontAwesome5 name="arrow-left" size={18} color="#fff" />
          <Text style={styles.backText}>Go Back</Text>
        </AnimatedPressable>

        <Text style={styles.title}>
          Let’s Learn in {capitalizeWords(level)}!
        </Text>
      </View>

      {/* Single column list to avoid wrapping/bulky buttons */}
      <FlatList
        contentContainerStyle={styles.list}
        data={categories}
        keyExtractor={(c) => c.key}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1 },
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.15)',
  },

  header: {
    paddingTop: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  backBtn: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#84cc16',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  backText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
    marginLeft: 8,
  },
  title: {
    marginTop: 14,
    marginBottom: 12,
    fontSize: 28,
    textAlign: 'center',
    color: '#1f62eaff', 
    fontWeight: '900',
    textShadowColor: 'rgba(0,0,0,0.12)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },

  list: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  card: {
    width: '100%',
    borderRadius: 16,
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
    paddingVertical: 16,
    paddingHorizontal: 16,
    minHeight: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: { marginRight: 8 },
  cardText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
    flexShrink: 1,
    includeFontPadding: false,
  },
});

export default DashboardScreen;
