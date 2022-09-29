import React from 'react';
import { View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import logoUrl from 'assets/img/logo-lg.png';

import { Typography } from 'components/shared/Typography';

import { LoginForm } from './components/LoginForm';

import styles from './LoginScreen.styles';

const LoginScreen = () => (
  <SafeAreaView style={styles.screen}>
    <LinearGradient
      style={styles.bg}
      colors={['#339DFF', '#A6D4FE']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    />
    <View style={styles.inner}>
      <Image style={styles.logo} source={logoUrl} />
      <Typography style={styles.title} weight="bold">
        مرحبا بكم فى تطبيق
      </Typography>
      <Typography style={styles.subTitle} weight="bold">
        JOفوترة
      </Typography>
      <View style={styles.form}>
        <View style={styles.blurView} />
        <LoginForm />
      </View>
    </View>
  </SafeAreaView>
);

export default React.memo(LoginScreen);
