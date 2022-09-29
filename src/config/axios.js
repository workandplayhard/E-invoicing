import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TOKEN_KEY } from 'constants/common';

import i18n from 'config/i18n';

const _interceptResponseSuccess = response => response.data;

const _interceptResponseError = ({ error, navigationRef }) => {
  if (!error.response) {
    return Promise.reject({ message: 'Server Error' });
  }

  const { status } = error.response;

  if (status === 403 || status === 401) {
    navigationRef.navigate('Auth', { screen: 'Login' });

    return;
  }

  return Promise.reject(error.response.data);
};

const _interceptRequest = async request => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  const language = i18n.langugage;

  request.headers.common['Accept-Language'] = language;

  if (token) {
    request.headers.common.Authorization = `Bearer ${token}`;
  }

  return request;
};

export const setupAxiosInterceptors = navigationRef => {
  axios.interceptors.request.use(_interceptRequest);

  axios.interceptors.response.use(_interceptResponseSuccess, error =>
    _interceptResponseError({ error, navigationRef }),
  );
};
