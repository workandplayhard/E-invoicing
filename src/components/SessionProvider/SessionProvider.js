import React from 'react';
import { ActivityIndicator } from 'react-native';

const SessionProvider = ({ loading, children }) => (
  <>{loading ? <ActivityIndicator /> : children}</>
);

export default React.memo(SessionProvider);
