import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { TOKEN_KEY } from 'constants/common';

import SessionProvider from './SessionProvider';

const SessionProviderContainer = props => {
  const navigation = useNavigation();

  useEffect(() => {
    const _checkToken = async () => {
      const authToken = await AsyncStorage.getItem(TOKEN_KEY);

      console.log(authToken);

      if (authToken) {
        navigation.navigate('Home');
      } else {
        navigation.navigate('Auth', {
          screen: 'Login',
        });
      }
    };

    _checkToken();
  }, []);

  return <SessionProvider {...props} />;
};

export default React.memo(SessionProviderContainer);
