import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Image } from 'react-native';

import { Typography } from 'components/shared/Typography';

import styles from './UserInfo.styles';

const UserInfo = ({ style, user, title }) => {
  const { t } = useTranslation();

  return (
    <View style={[styles.info, style]}>
      <Typography style={styles.title} weight="bold">
        {title}
      </Typography>
      <View style={styles.inner}>
        <View style={styles.item}>
          <Typography style={styles.itemType}>الاسم</Typography>
          <Typography style={styles.itemValue}>احمد حسن محمد محمود</Typography>
        </View>
        <View style={styles.group}>
          <View style={styles.item}>
            <Typography style={styles.itemType}>تسلسل مصدر الدخل</Typography>
            <Typography style={styles.itemValue}>53625345</Typography>
          </View>
          <View style={styles.item}>
            <Typography style={styles.itemType}>الرقم الضريبى</Typography>
            <Typography style={styles.itemValue}>2342341123</Typography>
          </View>
        </View>
        <View style={styles.group}>
          <View style={styles.item}>
            <Typography style={styles.itemType}>الرمز البريدى</Typography>
            <Typography style={styles.itemValue}>22231</Typography>
          </View>
          <View style={styles.item}>
            <Typography style={styles.itemType}>الدولة</Typography>
            <Typography style={styles.itemValue}>الاردن</Typography>
          </View>
        </View>
        <View style={styles.item}>
          <Typography style={styles.itemType}>رقم الهاتف</Typography>
          <Typography style={styles.itemValue}>00962781234567</Typography>
        </View>
      </View>
    </View>
  );
};

export default React.memo(UserInfo);
