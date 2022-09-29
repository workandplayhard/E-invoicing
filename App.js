import React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { setupAxiosInterceptors } from 'config/axios';

import { UserProvider } from 'context/user';

import { SessionProvider } from 'components/SessionProvider';

import { AppStack } from 'stacks/AppStack';

const navigationRef = createNavigationContainerRef();

setupAxiosInterceptors(navigationRef);

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer ref={navigationRef}>
      <UserProvider>
        <SessionProvider>
          <AppStack />
        </SessionProvider>
      </UserProvider>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default React.memo(App);
