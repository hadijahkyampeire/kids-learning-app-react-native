import React, { useEffect, useMemo, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons';

type LevelItem = {
  name: string;
  level: string;
  colors: [string, string];
  icon: React.ComponentProps<typeof FontAwesome>['name'];
};

const LEVELS: LevelItem[] = [
  { name: 'Preschool',      level: 'preSchool',    colors: ['#84cc16', '#a3e635'], icon: 'child' },
  { name: 'Junior School',  level: 'juniorSchool', colors: ['#0ea5e9', '#818cf8'], icon: 'puzzle-piece' },
  { name: 'Lower Primary',  level: 'lowerPrimary', colors: ['#f59e0b', '#fb923c'], icon: 'book' },
  { name: 'Upper Primary',  level: 'upperPrimary', colors: ['#8b5cf6', '#a78bfa'], icon: 'graduation-cap' },
];

const LevelSelectionScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [kidName, setKidName] = React.useState('Little Star');
  const clickRef = useRef<Audio.Sound | null>(null);
  const scales = useMemo(() => LEVELS.map(() => new Animated.Value(1)), []);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const saved = (await AsyncStorage.getItem('kidName')) || 'Little Star';
      if (mounted) setKidName(saved);
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
      await clickRef.current?.setPositionAsync(0);
      await clickRef.current?.playAsync();
    } catch {}
    navigation.navigate('ClassSelection', { level });
  };

  const renderItem = ({ item, index }: { item: LevelItem; index: number }) => {
    const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
    const scale = scales[index];
    return (
      <AnimatedPressable
        style={[styles.card, { transform: [{ scale }] }]}
        onPress={() => handlePress(item.level)}
        onPressIn={() =>
          Animated.spring(scale, { toValue: 0.97, useNativeDriver: true }).start()
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
          <View style={styles.leftRow}>
            <FontAwesome
              name={item.icon}
              size={22}
              color="#fff"
              style={styles.icon}
            />
            <Text
              style={styles.cardText}
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.92}
            >
              {item.name}
            </Text>
          </View>
          <FontAwesome name="chevron-right" size={18} color="rgba(255,255,255,0.9)" />
        </LinearGradient>
      </AnimatedPressable>
    );
  };

  return (
    <View style={styles.root}>
      <Text style={styles.h1}>
        <FontAwesome name="star" size={22} color="#facc15" /> Welcome, {kidName}!
      </Text>
      <Text style={styles.h2}>Choose a level to start learning!</Text>

      <FlatList
        style={styles.list} // makes list take full width
        contentContainerStyle={styles.listPad} // uniform horizontal padding
        data={LEVELS}
        keyExtractor={(it) => it.level}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ecfccb',
    paddingTop: 16,
  },
  h1: {
    fontFamily: 'Baloo2_800ExtraBold',
    fontSize: 24,
    color: '#065f46',
    textAlign: 'center',
  },
  h2: {
    fontFamily: 'Baloo2_700Bold',
    fontSize: 16,
    color: '#166534',
    textAlign: 'center',
    marginBottom: 10,
  },

  // FlatList takes full width; children stretch because we removed alignItems:'center'
  list: { flex: 1 },
  listPad: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    rowGap: 12,
  },

  // FULL-WIDTH CARDS WITH CONSISTENT WIDTH
  card: {
    width: '100%',
    borderRadius: 18,
    overflow: 'hidden',
  },
  gradient: {
    minHeight: 88,
    paddingVertical: 18,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '88%',
  },
  icon: {
    marginRight: 10,
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  cardText: {
    fontFamily: 'Baloo2_800ExtraBold',
    color: '#fff',
    fontSize: 22,
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
});

export default LevelSelectionScreen;
