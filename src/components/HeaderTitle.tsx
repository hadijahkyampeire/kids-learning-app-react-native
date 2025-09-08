import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useKid } from '../context/KidsNameContext'; 

const HeaderTitle: React.FC = () => {
  const { kidName } = useKid();
  const first = (kidName || 'Little Star').trim().split(/\s+/)[0];
  return <Text style={styles.title}>Keep Going! {first}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Baloo2_800ExtraBold',
    fontSize: 18,
    fontWeight: '800',
    color: '#065f46',     
  },
});

export default HeaderTitle;
