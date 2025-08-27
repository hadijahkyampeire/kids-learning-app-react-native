import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  AccessibilityInfo,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import KidsBgLimeRN from '../components/KidsBgLime';
import { RootStackParamList } from '../navigation/types';
import { useKid } from '../context/KidsNameContext';

type Nav = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

const clickSound = require('../assets/sounds/click.mp3');
const welcomeSound = require('../assets/sounds/welcome.mp3');

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<Nav>();
  const [name, setName] = useState('');
  const [muted, setMuted] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const { setKidName, clearKidName } = useKid();

  useEffect(() => {
    let mounted = true;
    (async () => {
      await AsyncStorage.removeItem('kidName');
      await clearKidName(); 
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const welcomeRef = useRef<Audio.Sound | null>(null);
  const clickRef = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    AccessibilityInfo.isReduceMotionEnabled().then(setReduceMotion);
    const sub = AccessibilityInfo.addEventListener(
      'reduceMotionChanged',
      setReduceMotion
    );
    return () => sub.remove();
  }, []);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { sound: w } = await Audio.Sound.createAsync(welcomeSound, {
        volume: muted ? 0 : 0.5,
      });
      const { sound: c } = await Audio.Sound.createAsync(clickSound, {
        volume: muted ? 0 : 0.5,
      });
      if (!mounted) {
        w.unloadAsync();
        c.unloadAsync();
        return;
      }
      welcomeRef.current = w;
      clickRef.current = c;

      await AsyncStorage.removeItem('kidName');
      setTimeout(async () => {
        if (!muted) {
          try {
            await welcomeRef.current?.replayAsync();
          } catch {}
        }
      }, 150);
    })();
    return () => {
      mounted = false;
      welcomeRef.current?.unloadAsync();
      clickRef.current?.unloadAsync();
    };
  }, []);

  useEffect(() => {
    const vol = muted ? 0 : 0.5;
    welcomeRef.current?.setVolumeAsync(vol);
    clickRef.current?.setVolumeAsync(vol);
  }, [muted]);

  const handleSubmit = async () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    try {
      if (!muted) await clickRef.current?.replayAsync();
    } catch {}
    setKidName(trimmed); // ← update context instantly for headers/top bars
    await AsyncStorage.setItem('kidName', trimmed); // persist
    navigation.navigate('LevelSelection');
  };

  return (
    <SafeAreaView style={styles.root}>
      <KidsBgLimeRN
        style={StyleSheet.absoluteFill}
        intensity="low"
        letters={['A', 'B', 'C', 'D', 'E', 'F', 'G']}
        letterCount={6}
      />

      <View style={styles.card}>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={muted ? 'Unmute sounds' : 'Mute sounds'}
          style={styles.speakerFab}
          onPress={() => setMuted((m) => !m)}
        >
          <Ionicons
            name={muted ? 'volume-mute' : 'volume-high'}
            size={20}
            color="#3f6212"
          />
        </TouchableOpacity>

        <Text
          style={styles.title}
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.9}
        >
          ⭐ Hello, Little Star!
        </Text>

        <Text style={styles.prompt}>What is your name?</Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Type your name…"
          placeholderTextColor="rgba(63,98,18,0.5)"
          style={styles.input}
          accessibilityLabel="Your name"
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
        />

        <TouchableOpacity
          onPress={handleSubmit}
          disabled={!name.trim()}
          style={[
            styles.cta,
            !name.trim() ? styles.ctaDisabled : styles.ctaEnabled,
          ]}
        >
          <Text style={styles.ctaText}>Start</Text>
        </TouchableOpacity>

        <Text style={styles.tip}>
          Tap the speaker to {muted ? 'turn on' : 'mute'} sounds.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    fontFamily: 'Baloo2_800ExtraBold',
    flex: 1,
    backgroundColor: '#ecfccb',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  card: {
    width: '100%',
    maxWidth: 380,
    paddingVertical: 20,
    paddingHorizontal: 18,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.92)',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },

  speakerFab: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#ecfccb',
    padding: 10,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: 'transparent',
    zIndex: 2,
  },

  title: {
    fontFamily: 'Baloo2_800ExtraBold',
    fontSize: 26,
    color: '#65a30d',
    fontWeight: '800',
    paddingRight: 44,
  },
  prompt: {
    marginTop: 12,
    marginBottom: 12,
    fontSize: 18,
    color: 'rgba(63,98,18,0.9)',
    fontWeight: '700',
  },
  input: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#bef264',
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 16,
    fontSize: 17,
    color: '#365314',
  },
  cta: {
    marginTop: 14,
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: 'center',
  },
  ctaEnabled: { backgroundColor: '#059669' },
  ctaDisabled: { backgroundColor: '#a3e635', opacity: 0.65 },
  ctaText: { color: '#fff', fontSize: 18, fontWeight: '800' },
  tip: {
    marginTop: 12,
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(63,98,18,0.7)',
  },
});

export default WelcomeScreen;
