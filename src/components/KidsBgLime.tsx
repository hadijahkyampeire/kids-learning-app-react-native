import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  LayoutChangeEvent,
  Animated,
  AccessibilityInfo,
  Text,
} from 'react-native';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Rect,
  Path,
  Polygon,
  G,
} from 'react-native-svg';

type Intensity = 'low' | 'med' | 'high';

export interface KidsBgLimeRNProps {
  style?: any;
  showStars?: boolean;
  letters?: string[];
  letterCount?: number;
  intensity?: Intensity; 
  bubbleSizeMin?: number; 
  bubbleSizeMax?: number; 
}

const KidsBgLimeRN: React.FC<KidsBgLimeRNProps> = memo(
  ({
    style,
    showStars = true,
    letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    letterCount,
    intensity = 'med',
    bubbleSizeMin = 24,
    bubbleSizeMax = 36,
  }) => {
    const [w, setW] = useState(0);
    const [h, setH] = useState(0);
    const [reduceMotion, setReduceMotion] = useState(false);

    const VB_W = 1440,
      VB_H = 900;

    useEffect(() => {
      AccessibilityInfo.isReduceMotionEnabled().then(setReduceMotion);
      const sub = AccessibilityInfo.addEventListener(
        'reduceMotionChanged',
        setReduceMotion
      );
      return () => sub.remove();
    }, []);

    const onLayout = (e: LayoutChangeEvent) => {
      const { width, height } = e.nativeEvent.layout;
      setW(width);
      setH(height);
    };

    const starCount = intensity === 'high' ? 24 : intensity === 'low' ? 10 : 16;

    const finalLetters = useMemo(() => {
      const base = letters.length ? letters : ['A', 'B', 'C'];
      if (!letterCount || letterCount <= base.length)
        return base.slice(0, letterCount || base.length);
      const out: string[] = [];
      for (let i = 0; i < letterCount; i++) out.push(base[i % base.length]);
      return out;
    }, [letters, letterCount]);

    const sx = (x: number) => (x / VB_W) * w;
    const sy = (y: number) => (y / VB_H) * h;

    const starPos = (i: number) => {
      const x = (60 + i * 85) % VB_W;
      const y = 60 + ((i * 37) % 150);
      const outer = 9 + (i % 3) * 3;
      return { x, y, outer };
    };

    const starPoints = (
      cx: number,
      cy: number,
      outerR: number,
      innerR: number,
      spikes = 5,
      rotation = 0
    ) => {
      const step = Math.PI / spikes;
      let rot = -Math.PI / 2 + rotation;
      const pts: string[] = [];
      for (let i = 0; i < spikes; i++) {
        pts.push(
          `${cx + Math.cos(rot) * outerR},${cy + Math.sin(rot) * outerR}`
        );
        rot += step;
        pts.push(
          `${cx + Math.cos(rot) * innerR},${cy + Math.sin(rot) * innerR}`
        );
        rot += step;
      }
      return pts.join(' ');
    };

    const bubbleAnimVals = useMemo(
      () =>
        Array.from(
          { length: finalLetters.length },
          () => new Animated.Value(0)
        ),
      [finalLetters.length]
    );

    useEffect(() => {
      if (reduceMotion) return;
      bubbleAnimVals.forEach((v, i) => {
        const dur = 1200 + (i % 5) * 300;
        const loop = () =>
          Animated.sequence([
            Animated.timing(v, {
              toValue: 1,
              duration: dur,
              useNativeDriver: true,
            }),
            Animated.timing(v, {
              toValue: 0,
              duration: dur,
              useNativeDriver: true,
            }),
          ]).start(loop);
        loop();
      });
    }, [bubbleAnimVals, reduceMotion]);

    const bubblePos = (i: number, n: number) => {
      const x = 120 + (i + 1) * (1200 / (n + 1));
      const yOffsets = [260, 300, 340];
      const y = yOffsets[i % yOffsets.length];
      return { x: sx(x), y: sy(y) };
    };

    const bubbleSize = (i: number) => {
      const range = Math.max(0, bubbleSizeMax - bubbleSizeMin);
      return bubbleSizeMin + (i % 4) * (range / 3);
    };

    const starPalette = [
      '#fde68a',
      '#fca5a5',
      '#f9a8d4',
      '#a78bfa',
      '#93c5fd',
      '#6ee7b7',
      '#86efac',
      '#bbf7d0',
    ];

    return (
      <View
        pointerEvents="none"
        style={[StyleSheet.absoluteFill, style]}
        onLayout={onLayout}
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
      >
        {w > 0 && h > 0 && (
          <Svg
            width={w}
            height={h}
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            preserveAspectRatio="xMidYMax slice"
          >
            <Defs>
              <LinearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
                <Stop offset="0%" stopColor="#ecfccb" />
                <Stop offset="50%" stopColor="#d9f99d" />
                <Stop offset="100%" stopColor="#bbf7d0" />
              </LinearGradient>
              <LinearGradient id="hill1" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0%" stopColor="#a7f3d0" />
                <Stop offset="100%" stopColor="#86efac" />
              </LinearGradient>
              <LinearGradient id="hill2" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0%" stopColor="#86efac" />
                <Stop offset="100%" stopColor="#4ade80" />
              </LinearGradient>
            </Defs>

            <Rect x={0} y={0} width={VB_W} height={VB_H} fill="url(#bgGrad)" />

            {showStars && (
              <G>
                {Array.from({ length: starCount }).map((_, i) => {
                  const { x, y, outer } = starPos(i);
                  const inner = outer * 0.5;
                  const rot = (i * 15 * Math.PI) / 180;
                  return (
                    <Polygon
                      key={`star-${i}`}
                      points={starPoints(x, y, outer, inner, 5, rot)}
                      fill={starPalette[i % starPalette.length]}
                      stroke="white"
                      strokeOpacity={0.9}
                      strokeWidth={1}
                      opacity={0.85}
                    />
                  );
                })}
              </G>
            )}

            {/* hills */}
            <Path
              fill="url(#hill1)"
              d="M0,720 C180,660 360,760 540,740 C720,720 900,640 1080,700 C1260,760 1440,700 1440,700 L1440,900 L0,900 Z"
            />
            <Path
              fill="url(#hill2)"
              d="M0,760 C200,700 420,820 650,800 C880,780 1160,700 1440,760 L1440,900 L0,900 Z"
            />
          </Svg>
        )}

        {/* Floating alphabet bubbles overlay (Animated) */}
        {!reduceMotion &&
          w > 0 &&
          h > 0 &&
          finalLetters.map((ch, i) => {
            const { x, y } = bubblePos(i, finalLetters.length);
            const size = bubbleSize(i);
            const translateY = bubbleAnimVals[i].interpolate({
              inputRange: [0, 1],
              outputRange: [0, -8],
            });
            const opacity = bubbleAnimVals[i].interpolate({
              inputRange: [0, 1],
              outputRange: [0.4, 1],
            });
            const fillColor = i % 2 === 0 ? '#16a34a' : '#15803d'; // green-600/700

            return (
              <Animated.View
                key={`b-${i}`}
                style={[
                  styles.bubble,
                  {
                    left: x - size,
                    top: y - size,
                    width: size * 2,
                    height: size * 2,
                    transform: [{ translateY }],
                    opacity,
                  },
                ]}
              >
                <View style={styles.bubbleCircle} />
                <Text
                  style={[
                    styles.bubbleLetter,
                    { color: fillColor, fontSize: size * 0.6 },
                  ]}
                >
                  {ch}
                </Text>
              </Animated.View>
            );
          })}
      </View>
    );
  }
);

KidsBgLimeRN.displayName = 'KidsBgLimeRN';

const styles = StyleSheet.create({
  bubble: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bubbleCircle: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.78)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.9)',
    borderRadius: 999,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 1,
  },
  bubbleLetter: {
    fontWeight: '800',
  },
});

export default KidsBgLimeRN;
