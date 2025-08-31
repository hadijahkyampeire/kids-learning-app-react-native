import React, { useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
  FlatList,
  Image,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { storiesData } from '../data/storiesData';

type LevelKey = keyof typeof storiesData;
const BG_URL =
  'https://kids-app-images.s3.us-east-1.amazonaws.com/stories-bg.jpg';
const FALLBACK =
  'https://kids-app-images.s3.us-east-1.amazonaws.com/general-image.webp';

const StoriesScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { width } = useWindowDimensions();

  const level: string | undefined = route.params?.level;
  const klass: string | undefined = route.params?.class;
  const topic: string | undefined = route.params?.topic;

  const bucket = (level ? (storiesData[level as LevelKey] as any[]) : []) ?? [];
  const filteredStories = useMemo(
    () =>
      bucket.filter(
        (s) => (!klass || s.class === klass) && (!topic || s.topic === topic)
      ),
    [bucket, klass, topic]
  );

  const numColumns = width >= 640 ? 2 : 1;

  const openStory = async (storyId: string) => {
    try {
      const s = new Audio.Sound();
      await s.loadAsync(require('../assets/sounds/click.mp3'));
      await s.playAsync();
      s.unloadAsync();
    } catch {}
    navigation.navigate('StoryContent', {
      level,
      class: klass,
      topic,
      storyId,
    });
  };

  return (
    <ImageBackground
      source={{ uri: BG_URL }}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.sheet}>
        <Text style={styles.h1}>Stories{topic ? ` • ${topic}` : ''}</Text>

        {filteredStories.length === 0 ? (
          <View
            style={[
              styles.content,
              { alignItems: 'center', justifyContent: 'center' },
            ]}
          >
            <Text style={styles.emptyText}>No stories in this lesson yet.</Text>
          </View>
        ) : (
          <FlatList
            data={filteredStories}
            key={numColumns}
            numColumns={numColumns}
            keyExtractor={(item, index) => (item._id ?? index).toString()}
            contentContainerStyle={{ paddingHorizontal: 8, paddingBottom: 24 }}
            columnWrapperStyle={numColumns > 1 ? { gap: 12 } : undefined}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
            ListFooterComponent={<View style={{ height: 8 }} />}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => openStory(item._id)}
                style={[styles.card, numColumns > 1 && { flex: 1 }]}
              >
                <Image
                  source={{ uri: item.coverImage || FALLBACK }}
                  style={styles.thumb}
                  resizeMode="cover"
                />
                <Text style={styles.cardTitle} numberOfLines={2}>
                  {item.title}
                </Text>
                {!!item.summary && (
                  <Text style={styles.cardSummary} numberOfLines={3}>
                    {item.summary}
                  </Text>
                )}
                <View style={styles.metaRow}>
                  <Text style={styles.metaPill}>{item.topic}</Text>
                  <Text style={styles.metaPill}>
                    {String(item.class).toUpperCase()}
                  </Text>
                </View>

                <View style={styles.readBtn}>
                  <Text style={styles.readBtnText}>
                    <FontAwesome name="star" size={18} color="#FFD700" /> Read
                    Story
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
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
    flex: 1, // <-- lets FlatList take full height so the page scrolls fully
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
  thumb: { width: '100%', height: 120, borderRadius: 12, marginBottom: 8 },
  cardTitle: {
    fontFamily: 'Baloo2_800ExtraBold',
    fontSize: 18,
    color: '#3b82f6',
    marginBottom: 6,
  },
  cardSummary: {
    fontFamily: 'Baloo2_400Regular',
    fontSize: 14,
    color: '#334155',
  },
  metaRow: { flexDirection: 'row', gap: 8, marginTop: 8 },
  metaPill: {
    backgroundColor: '#e2e8f0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    fontFamily: 'Baloo2_600SemiBold',
    fontSize: 12,
    color: '#0f172a',
  },
  readBtn: {
    backgroundColor: '#a855f7',
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 10,
  },
  readBtnText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16,
    fontFamily: 'Baloo2_800ExtraBold',
  },

  emptyText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#f87171',
    marginBottom: 8,
  },
  content: { flex: 1, padding: 16 },
});

export default StoriesScreen;
