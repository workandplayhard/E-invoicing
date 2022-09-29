import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Image } from 'react-native';

import { Typography } from 'components/shared/Typography';

import styles from './MainInfo.styles';

const MainInfo = ({ style, invoice }) => {
  const { t } = useTranslation();

  return (
    <View style={[styles.info, style]}>
      <Image style={styles.qrCode} source={invoice.qrCodeImage} />
      <View style={styles.inner}>
        <View style={[styles.item, styles.firstItem]}>
          <Typography style={styles.itemType}>رقم فاتورة البائع</Typography>
          <Typography style={styles.itemValue} weight="bold">
            EIN-3885
          </Typography>
        </View>
        <View style={styles.item}>
          <Typography style={styles.itemType}>الرقم التسلسلي</Typography>
          <Typography style={styles.itemValue} weight="bold">
            EIN-00001
          </Typography>
        </View>
        <View style={styles.item}>
          <Typography style={styles.itemType}>تاريخ إصدار الفاتورة</Typography>
          <Typography style={styles.itemValue} weight="bold">
            10/01/2022
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default React.memo(MainInfo);
