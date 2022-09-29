import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Image } from 'react-native';

import { Typography } from 'components/shared/Typography';

import { InvoiceTotals } from 'components/InvoiceTotals';

import styles from './TotalsInfo.styles';

const TotalsInfo = ({ style, invoice }) => {
  const { t } = useTranslation();

  return (
    <View style={[styles.info, style]}>
      <Typography style={styles.title} weight="bold">
        معلومات اجمالى الفاتورة
      </Typography>
      <View style={styles.inner}>
        <InvoiceTotals items={invoice?.items || []} />
      </View>
    </View>
  );
};

export default React.memo(TotalsInfo);
