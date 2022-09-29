import React, {
  createContext,
  useEffect,
  useContext,
  useReducer,
  useState,
} from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TOKEN_KEY } from 'constants/common';

import * as api from 'api/methods';

const UserContext = createContext();

function userReducer(state, action) {
  switch (action.type) {
    case 'SET_USER': {
      return {
        isAuthenticated: action.payload ? true : false,
        user: action.payload,
      };
    }
  }
}

const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    isAuthenticated: false,
  });

  const value = { state, dispatch };

  useEffect(() => {
    const _getUserInfo = async () => {
      const authToken = await AsyncStorage.getItem(TOKEN_KEY);

      if (authToken) {
        api
          .getUserInfo()
          .then(data => {
            dispatch({ type: 'SET_USER', payload: data });

            setLoading(false);
          })
          .catch(() => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    };

    _getUserInfo();
  }, []);

  return loading ? (
    <ActivityIndicator />
  ) : (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return { ...context.state, dispatchUser: context.dispatch };
};

export { UserProvider, useUser };
