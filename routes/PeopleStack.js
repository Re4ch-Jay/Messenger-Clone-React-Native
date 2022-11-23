import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Chat, People, Profile } from '../screens';

const Stack = createStackNavigator()
export default function PeopleStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen name="people" 
          component={People} 
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