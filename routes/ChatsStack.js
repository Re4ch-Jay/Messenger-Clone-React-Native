import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Chat, Chats, Profile } from '../screens';

const Stack = createStackNavigator()
export default function ChatsStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen name="chats" 
          component={Chats} 
          options={{headerShown: false}}
          />
          <Stack.Screen name="chat"
            component={Chat} 
            options={{headerShown: false}}
          />
          <Stack.Screen name="profile"
            component={Profile} 
            options={{headerShown: false}}
          />
      </Stack.Navigator>
  );
}