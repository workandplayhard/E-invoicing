import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Typography } from 'components/shared/Typography';
import { FormikField } from 'components/shared/FormikField';
import { FormGroup } from 'components/shared/FormGroup';

import { InputField, DatePickerInputField } from 'components/FormikFields';

import styles from 'assets/styles/invoice';

const MainSection = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.section}>
      <Typography style={styles.title} weight="bold">
        بيانات الفاتورة
      </Typography>
      <View style={styles.inner}>
        <FormGroup
          leftComponent={
            <FormikField
              name="issueDate"
              component={DatePickerInputField}
              componentProps={{
                disabledDays: [{ after: new Date() }],
              }}
              controlProps={{
                style: styles.control,
                labelStyle: styles.controlLabel,
              }}
              required
              label={t('newInvoice_invoice_issueDate')}
            />
          }
          rightComponent={
            <FormikField
              name="buyerInvoiceNumber"
              component={InputField}
              controlProps={{
                style: styles.control,
                labelStyle: styles.controlLabel,
              }}
              label={t('newInvoice_vendor_invoiceNumber')}
            />
          }
        />
        <FormGroup
          rightComponent={
            <FormikField
              name="seller.activityNumber"
              component={InputField}
              componentProps={{
                disabled: true,
              }}
              controlProps={{
                style: styles.control,
                labelStyle: styles.controlLabel,
              }}
              label={t('newInvoice_sales_Input_source_sequence')}
            />
          }
        />
      </View>
    </View>
  );
};

export default React.memo(MainSection);
