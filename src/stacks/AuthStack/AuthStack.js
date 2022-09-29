import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from 'screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

export default React.memo(AuthStack);
