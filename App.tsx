/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import Login from './src/screens/Login';

import Intro from './src/screens/Intro';

const App = () => {
  const Stack = createNativeStackNavigator();
  useEffect(() => {}, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="LogIn" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
