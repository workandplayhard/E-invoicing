import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Typography } from 'components/shared/Typography';
import { FormikField } from 'components/shared/FormikField';

import { InputField } from 'components/FormikFields';
import { InvoiceTotals } from 'components/InvoiceTotals';

import styles from 'assets/styles/invoice';

const TotalsSection = () => {
  const { t } = useTranslation();

  const items = [];

  return (
    <View style={styles.section}>
      <Typography style={styles.title} weight="bold">
        معلومات اجمالى الفاتورة
      </Typography>
      <View style={styles.inner}>
        <InvoiceTotals items={items} />
        <FormikField
          name="notes"
          component={InputField}
          controlProps={{
            style: styles.control,
            labelStyle: styles.controlLabel,
          }}
          label={t('newInvoice_notes')}
        />
      </View>
    </View>
  );
};

export default React.memo(TotalsSection);
