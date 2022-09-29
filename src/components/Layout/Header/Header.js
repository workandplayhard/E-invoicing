import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Typography } from 'components/shared/Typography';

import styles from './Header.styles';

const Header = ({ title }) => {
  return (
    <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
      <Typography style={styles.title}>{title}</Typography>
    </SafeAreaView>
  );
};

export default Header;
