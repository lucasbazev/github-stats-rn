/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {SplashScreen, TestComponents} from './screens';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <TestComponents />
    </NavigationContainer>
  );
};

export default App;
