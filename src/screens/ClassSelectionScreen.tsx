// screens/ClassSelectionScreen.tsx
import React, { useMemo, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { CLASS_STYLES, buttonShape } from '../constants/styles';

type LevelKey = 'preSchool' | 'juniorSchool' | 'lowerPrimary' | 'upperPrimary';

const CLASSES_BY_LEVEL: Record<LevelKey, string[]> = {
  preSchool: ['baby', 'middle', 'top'],
  juniorSchool: ['p1', 'p2', 'p3'],
  lowerPrimary: ['p4', 'p5'],
  upperPrimary: ['p6', 'p7'],
};

const CLASS_ICONS: Record<string, React.ComponentProps<typeof FontAwesome>['name']> = {
  baby: 'smile-o',
  middle: 'puzzle-piece',
  top: 'rocket',

  p1: 'pencil',
  p2: 'book',
  p3: 'trophy',

  p4: 'lightbulb-o',
  p5: 'cogs',
  p6: 'flask',
  p7: 'certificate',
};

const pretty = (klass: string) =>
  klass === 'baby'
    ? 'Baby Class'
    : klass === 'middle'
    ? 'Middle Class'
    : klass === 'top'
    ? 'Top Class'
    : klass.toUpperCase();

const ClassSelectionScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const level: LevelKey = route.params?.level;

  const classes = CLASSES_BY_LEVEL[level] ?? [];
  const scales = useMemo(() => classes.map(() => new Animated.Value(1)), [classes]);
  const clickRef = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/sounds/click.mp3'),
        { volume: 0.5 }
      );
      if (!mounted) return;
      clickRef.current = sound;
    })();
    return () => {
      clickRef.current?.unloadAsync();
    };
  }, []);

  const goSubjects = async (klass: string) => {
    try {
      await clickRef.current?.setPositionAsync(0);
      await clickRef.current?.playAsync();
    } catch {}
    navigation.navigate('SubjectSelection', { level, class: klass });
  };

  return (
    <View style={styles.root}>
      <Text style={styles.h1}>Choose a class</Text>
      <Text style={styles.h2}>Pick your class to see subjects</Text>

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listPad}
        data={classes}
        keyExtractor={(k) => k}
        renderItem={({ item, index }) => {
          const styleInfo = CLASS_STYLES[item] ?? { borderVariant: 'rounded', tint: '#e5e7eb' };
          const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
          const scale = scales[index];

          return (
            <AnimatedTouchable
              activeOpacity={0.92}
              onPressIn={() =>
                Animated.spring(scale, { toValue: 0.97, useNativeDriver: true }).start()
              }
              onPressOut={() =>
                Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start()
              }
              onPress={() => goSubjects(item)}
              style={[
                styles.card,
                buttonShape(styleInfo.borderVariant as any),
                { backgroundColor: styleInfo.tint, transform: [{ scale }] },
              ]}
            >
              <View style={styles.row}>
                <FontAwesome
                  name={CLASS_ICONS[item] || 'circle'}
                  size={22}
                  color="#0f172a"
                  style={{ marginRight: 12 }}
                />
                <View style={{ flex: 1 }}>
                  <Text style={styles.title} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.9}>
                    {pretty(item)}
                  </Text>
                  <Text style={styles.sub}>Tap to choose this class</Text>
                </View>
                <FontAwesome name="chevron-right" size={18} color="#0f172a" />
              </View>
            </AnimatedTouchable>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingTop: 12,
  },
  h1: {
    fontFamily: 'Baloo2_800ExtraBold',
    fontSize: 22,
    color: '#0f766e',
    textAlign: 'center',
  },
  h2: {
    fontFamily: 'Baloo2_600SemiBold',
    fontSize: 14,
    color: '#115e59',
    textAlign: 'center',
    marginBottom: 10,
  },

  // Make the list span full width; children stretch to 100%
  list: { flex: 1 },
  listPad: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    rowGap: 12,
  },

  // UNIFORM FULL-WIDTH BUTTONS
  card: {
    width: '100%',         // ← uniform width
    minHeight: 78,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Baloo2_800ExtraBold',
    fontSize: 18,
    color: '#0f172a',
  },
  sub: {
    marginTop: 2,
    fontFamily: 'Baloo2_600SemiBold',
    fontSize: 12,
    color: 'rgba(15,23,42,0.7)',
  },
});

export default ClassSelectionScreen;
