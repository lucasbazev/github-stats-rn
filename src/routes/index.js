import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SplashScreen, SearchScreen, UserScreen } from '../screens';

export const Navigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="UserScreen" component={UserScreen} />
    </Stack.Navigator>
  );
};
