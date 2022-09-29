import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TOKEN_KEY } from 'constants/common';

import * as api from 'api/methods';

import { useUser } from 'context/user';

import LoginForm from './LoginForm';

const LoginFormContainer = props => {
  const navigation = useNavigation();

  const { dispatchUser } = useUser();

  const [loading, setLoading] = useState(false);

  const handleSubmit = (values, { setFieldError }) => {
    setLoading(true);

    api
      .loginUser(values)
      .then(async data => {
        await AsyncStorage.setItem(TOKEN_KEY, data.token);

        api
          .getUserInfo()
          .then(user => {
            dispatchUser({
              type: 'SET_USER',
              payload: user,
            });

            setLoading(false);

            navigation.navigate('Home', {
              screen: 'Dashboard',
            });
          })
          .catch(error => {
            console.log(error);

            setLoading(false);
          });
      })
      .catch(({ error }) => {
        if (error) {
          setFieldError('username', error);
        }

        setLoading(false);
      });
  };

  return <LoginForm {...props} loading={loading} onSubmit={handleSubmit} />;
};

export default React.memo(LoginFormContainer);
