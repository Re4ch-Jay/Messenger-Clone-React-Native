import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Calls, Profile } from '../screens';

const Stack = createStackNavigator()
export default function CallsStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen name="calls" 
          component={Calls} 
          options={{headerShown: false}}
          />
          <Stack.Screen name="profile"
            component={Profile} 
            options={{headerShown: false}}
          />
      </Stack.Navigator>
  );
}