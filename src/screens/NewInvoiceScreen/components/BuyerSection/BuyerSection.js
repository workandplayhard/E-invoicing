import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { DOCUMENT_TYPE_OPTIONS, PROVINCE_OPTIONS } from 'config/invoice/config';

import { Typography } from 'components/shared/Typography';
import { FormikField } from 'components/shared/FormikField';
import { FormGroup } from 'components/shared/FormGroup';

import { InputField, SelectField } from 'components/FormikFields';

import styles from 'assets/styles/invoice';

const SellerSection = ({ isBuyerFieldsRequired }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.section}>
      <Typography style={styles.title} weight="bold">
        {t('newInvoice_buyerData')}
      </Typography>
      <View style={styles.inner}>
        <FormikField
          name="buyer.name"
          component={InputField}
          componentProps={{
            style: styles.singleField,
          }}
          controlProps={{
            style: styles.control,
            labelStyle: styles.controlLabel,
          }}
          required={isBuyerFieldsRequired}
          label={t('newInvoice_name')}
        />
        <FormGroup
          leftComponent={
            <FormikField
              name="buyer.additionalBuyerId"
              component={InputField}
              controlProps={{
                style: styles.control,
                labelStyle: styles.controlLabel,
              }}
              required={isBuyerFieldsRequired}
              label={t('newInvoice_buyerIDNumber')}
            />
          }
          rightComponent={
            <FormikField
              name="buyer.additionalBuyerIdType"
              component={SelectField}
              componentProps={{
                options: DOCUMENT_TYPE_OPTIONS(t),
              }}
              controlProps={{
                style: styles.control,
                labelStyle: styles.controlLabel,
              }}
              required={isBuyerFieldsRequired}
              label={t('newInvoice_buyerIDType')}
            />
          }
        />
        <FormGroup
          leftComponent={
            <FormikField
              name="buyer.postalCode"
              component={InputField}
              controlProps={{
                style: styles.control,
                labelStyle: styles.controlLabel,
              }}
              required={isBuyerFieldsRequired}
              label={t('newInvoice_postalCode')}
            />
          }
          rightComponent={
            <FormikField
              name="buyer.province"
              component={SelectField}
              componentProps={{
                options: PROVINCE_OPTIONS(),
              }}
              controlProps={{
                style: styles.control,
                labelStyle: styles.controlLabel,
              }}
              required={isBuyerFieldsRequired}
              label={t('newInvoice_city')}
            />
          }
        />
        <FormikField
          name="buyer.phoneNumber"
          component={InputField}
          componentProps={{
            style: styles.singleField,
          }}
          controlProps={{
            style: styles.control,
            labelStyle: styles.controlLabel,
          }}
          required={isBuyerFieldsRequired}
          label={t('newInvoice_phone_number')}
        />
      </View>
    </View>
  );
};

export default React.memo(SellerSection);
