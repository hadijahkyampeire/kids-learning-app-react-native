import React, { useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
  FlatList,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { storiesData as stories } from '../data/storiesData';
import { capitalize as cap } from 'lodash';
import type { Story } from '../types';

const BG_URL =
  'https://kids-app-images.s3.us-east-1.amazonaws.com/stories-bg.jpg';

const StoriesScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { width } = useWindowDimensions();

  const level: string | undefined = route.params?.level;
  const filteredStories: Story[] = useMemo(
    () => (level ? stories.filter((s) => s.level === level) : []),
    [level]
  );

  const numColumns = width >= 640 ? 2 : 1;

  const openStory = async (storyId: string) => {
    try {
      const s = new Audio.Sound();
      await s.loadAsync(require('../assets/sounds/click.mp3'));
      await s.playAsync();
      s.unloadAsync();
    } catch {}
    navigation.navigate('StoryContent', { level, storyId });
  };

  if (!filteredStories?.length) {
    return (
      <ImageBackground
        source={{ uri: BG_URL }}
        style={styles.container}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <View
          style={[
            styles.content,
            { alignItems: 'center', justifyContent: 'center' },
          ]}
        >
          <Text style={styles.emptyText}>No stories</Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      source={{ uri: BG_URL }}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.sheet}>
        <Text style={styles.h1}>Stories for {cap(level)}</Text>

        <FlatList
          data={filteredStories}
          key={numColumns}
          numColumns={numColumns}
          keyExtractor={(item, index) => (item._id ?? index).toString()}
          contentContainerStyle={{ paddingHorizontal: 8, paddingBottom: 16 }}
          columnWrapperStyle={numColumns > 1 ? { gap: 12 } : undefined}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          renderItem={({ item }) => (
            <View style={[styles.card, numColumns > 1 && { flex: 1 }]}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <TouchableOpacity
                style={styles.readBtn}
                onPress={() => openStory(item._id)}
              >
                <Text style={styles.readBtnText}>
                  <FontAwesome name="star" size={18} color="#FFD700" /> Read
                  Story
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  sheet: {
    margin: 16,
    padding: 16,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.72)',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },

  h1: {
    fontFamily: 'Baloo2_800ExtraBold',
    fontSize: 26,
    color: '#ef4444',
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 12,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  cardTitle: {
    fontFamily: 'Baloo2_800ExtraBold',
    fontSize: 18,
    fontWeight: '800',
    color: '#3b82f6',
    marginBottom: 10,
  },
  readBtn: {
    fontFamily: 'Baloo2_800ExtraBold',
    backgroundColor: '#a855f7',
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 12,
  },
  readBtnText: { color: '#fff', fontWeight: '800', fontSize: 16 },
  emptyText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#f87171',
    marginBottom: 8,
  },

  content: { flex: 1, padding: 16 },
});

export default StoriesScreen;
