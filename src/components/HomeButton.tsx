import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export const HeaderHomeButton = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{ paddingHorizontal: 10, paddingVertical: 6 }}
    accessibilityRole="button"
    accessibilityLabel="Home"
  >
    <FontAwesome name="home" size={20} color="#065f46" />
  </TouchableOpacity>
);
