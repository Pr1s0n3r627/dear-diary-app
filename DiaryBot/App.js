import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from './src/screens/ChatScreen';
import JournalScreen from './src/screens/JournalScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chat">
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ title: 'Chat with AI' }}
        />
        <Stack.Screen
          name="Journal"
          component={JournalScreen}
          options={{ title: 'Your Journal' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
