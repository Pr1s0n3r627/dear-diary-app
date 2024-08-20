import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [journal, setJournal] = useState([]);
  const navigation = useNavigation(); // Hook for navigation

  const sendMessage = () => {
    if (inputText.trim()) {
      const userMessage = { text: inputText, sender: 'user' };
      setMessages([...messages, userMessage]);
      setInputText('');

      // Simulate AI response after a brief delay
      setTimeout(() => {
        const aiMessage = { text: generateAIResponse(inputText), sender: 'ai' };
        setMessages(prevMessages => [...prevMessages, aiMessage]);

        // Check if the message should be journaled
        if (shouldJournal(inputText)) {
          setJournal(prevJournal => [...prevJournal, userMessage]);
        }
      }, 1000);  // 1 second delay to mimic AI "thinking"
    }
  };

  // Simple AI response logic
  const generateAIResponse = (userInput) => {
    if (userInput.toLowerCase().includes('hello')) {
      return "Hi! How can I help you today?";
    } else if (userInput.toLowerCase().includes('how are you')) {
      return "I'm just a bunch of code, but thanks for asking!";
    } else {
      return "Hmm, interesting! Tell me more.";
    }
  };

  // Function to determine if a message should be journaled
  const shouldJournal = (message) => {
    const keywords = ['important', 'journal']; // Example keywords
    return keywords.some(keyword => message.toLowerCase().includes(keyword));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={item.sender === 'user' ? styles.userMessage : styles.aiMessage}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message"
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
      <Button
        title="View Journal"
        onPress={() => navigation.navigate('Journal', { journal })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  aiMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECECEC',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  messageText: {
    fontSize: 16,
  },
});

export default ChatScreen;
