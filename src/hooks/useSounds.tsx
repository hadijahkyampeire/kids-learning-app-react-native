// hooks/useSounds.ts
import { useEffect, useRef } from 'react';
import { Audio, InterruptionModeIOS, InterruptionModeAndroid } from 'expo-av';

const clickSnd = require('../assets/sounds/click.mp3');
const correctSnd = require('../assets/sounds/correct-sound.wav');
const wrongSnd = require('../assets/sounds/fail.mp3');

export function useSounds() {
  const clickRef = useRef<Audio.Sound | null>(null);
  const okRef = useRef<Audio.Sound | null>(null);
  const badRef = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        playsInSilentModeIOS: true,          // <— sound even if mute switch is on
        staysActiveInBackground: false,
        interruptionModeIOS: InterruptionModeIOS.MixWithOthers,
        interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
      });

      const [{ sound: click }, { sound: ok }, { sound: bad }] = await Promise.all([
        Audio.Sound.createAsync(clickSnd),
        Audio.Sound.createAsync(correctSnd),
        Audio.Sound.createAsync(wrongSnd),
      ]);

      if (!mounted) {
        click.unloadAsync(); ok.unloadAsync(); bad.unloadAsync();
        return;
      }
      clickRef.current = click;
      okRef.current = ok;
      badRef.current = bad;
    })();

    return () => {
      mounted = false;
      // unload once when this hook unmounts
      clickRef.current?.unloadAsync();
      okRef.current?.unloadAsync();
      badRef.current?.unloadAsync();
    };
  }, []);

  const playClick = async () => { try { await clickRef.current?.replayAsync(); } catch {} };
  const playCorrect = async () => { try { await okRef.current?.replayAsync(); } catch {} };
  const playWrong = async () => { try { await badRef.current?.replayAsync(); } catch {} };

  return { playClick, playCorrect, playWrong };
}
