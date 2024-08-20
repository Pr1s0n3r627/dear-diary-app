import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const JournalScreen = ({ route }) => {
  const { journal } = route.params;

  return (
    <View style={styles.container}>
      {journal.length > 0 ? (
        <FlatList
          data={journal}
          renderItem={({ item, index }) => (
            <View style={styles.journalEntry}>
              <Text style={styles.entryNumber}>Entry {index + 1}</Text>
              <Text style={styles.entryText}>{item.text}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={styles.noEntriesContainer}>
          <Text style={styles.noEntriesText}>No journal entries yet.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  journalEntry: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  entryNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  entryText: {
    fontSize: 16,
  },
  noEntriesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noEntriesText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#888888',
  },
});

export default JournalScreen;
