import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Typography } from 'components/shared/Typography';
import { FormikField } from 'components/shared/FormikField';
import { FormGroup } from 'components/shared/FormGroup';

import { InputField, DatePickerInputField } from 'components/FormikFields';

import styles from 'assets/styles/invoice';

const SellerSection = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.section}>
      <Typography style={styles.title} weight="bold">
        {t('newInvoice_sellerData')}
      </Typography>
      <View style={styles.inner}>
        <FormikField
          name="seller.name"
          component={InputField}
          componentProps={{
            disabled: true,
            style: styles.singleField,
          }}
          controlProps={{
            style: styles.control,
            labelStyle: styles.controlLabel,
          }}
          label={t('newInvoice_name')}
        />
        <FormGroup
          leftComponent={
            <FormikField
              name="seller.taxNumber"
              component={InputField}
              componentProps={{
                disabled: true,
              }}
              controlProps={{
                style: styles.control,
                labelStyle: styles.controlLabel,
              }}
              label={t('newInvoice_taxNumber')}
            />
          }
          rightComponent={
            <FormikField
              name="seller.postalCode"
              component={InputField}
              componentProps={{
                disabled: true,
              }}
              controlProps={{
                style: styles.control,
                labelStyle: styles.controlLabel,
              }}
              label={t('newInvoice_postalCode')}
            />
          }
        />
        <FormGroup
          leftComponent={
            <FormikField
              name="seller.phoneNumber"
              component={InputField}
              componentProps={{
                disabled: true,
              }}
              controlProps={{
                style: styles.control,
                labelStyle: styles.controlLabel,
              }}
              label={t('newInvoice_phone_number')}
            />
          }
          rightComponent={
            <FormikField
              name="seller.country"
              component={InputField}
              componentProps={{
                disabled: true,
              }}
              controlProps={{
                style: styles.control,
                labelStyle: styles.controlLabel,
              }}
              label={t('newInvoice_Country')}
            />
          }
        />
      </View>
    </View>
  );
};

export default React.memo(SellerSection);
