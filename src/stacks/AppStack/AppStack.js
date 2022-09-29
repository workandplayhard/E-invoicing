import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeStack } from 'stacks/HomeStack';
import { AuthStack } from 'stacks/AuthStack';

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={HomeStack} />
    <Stack.Screen name="Auth" component={AuthStack} />
  </Stack.Navigator>
);

export default React.memo(AppStack);
