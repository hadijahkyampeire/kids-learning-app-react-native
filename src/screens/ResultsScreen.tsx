import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

function ResultsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Results</Text>
        <Text style={styles.paragraph}>
          This is the results screen. You can display quiz results here.
        </Text>
        {/* Add more results content as needed */}
      </ScrollView>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
});
export default ResultsScreen; 
