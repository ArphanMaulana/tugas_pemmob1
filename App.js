import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/home.js';
import Daftar from './components/daftar.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Menu Home" component={Home} />
        <Stack.Screen name="Daftar" component={Daftar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
