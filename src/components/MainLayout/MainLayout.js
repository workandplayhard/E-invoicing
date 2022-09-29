import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import { Typography } from 'components/shared/Typography';

import styles from './MainLayout.styles';

const MainLayout = ({ children, title }) => (
  <SafeAreaView style={styles.layout} edges={['left', 'right']}>
    <LinearGradient
      colors={['#339DFF', '#1362B1']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.header}>
      <Typography style={styles.title}>{title}</Typography>
    </LinearGradient>
    <View style={styles.inner}>{children}</View>
  </SafeAreaView>
);

export default React.memo(MainLayout);
