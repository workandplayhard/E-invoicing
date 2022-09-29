import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Form, useFormikContext } from 'formik';

import { INVOICE_TYPES_ENUM } from 'constants/common';

import {
  INVOICE_COLUMNS,
  TAX_RATE_OPTIONS,
  TYPE_OPTIONS,
} from 'config/invoice/config';

import { Typography } from 'components/shared/Typography';
import { FormikField } from 'components/shared/FormikField';
import { FormGroup } from 'components/shared/FormGroup';

import { InputField, SelectField } from 'components/FormikFields';

import styles from 'assets/styles/invoice';

const ProductsSection = ({ invoiceType }) => {
  const { t } = useTranslation();

  const { values } = useFormikContext();

  return (
    <View style={styles.section}>
      <Typography style={styles.title} weight="bold">
        معلومات او بيانات الخدمة او السلعة
      </Typography>
      <View style={styles.inner}>
        <FormGroup
          leftComponent={
            invoiceType !== INVOICE_TYPES_ENUM.CASH_INCOME &&
            invoiceType !== INVOICE_TYPES_ENUM.RECEIVABLE_INCOME && (
              <FormikField
                name="tempItem.generalTaxPercentage"
                component={SelectField}
                componentProps={{
                  options: TAX_RATE_OPTIONS(t),
                }}
                controlProps={{
                  style: styles.control,
                  labelStyle: styles.controlLabel,
                }}
                required={!values.items.length}
                label={t('newInvoice_general_tax_rate')}
              />
            )
          }
          rightComponent={
            (invoiceType === INVOICE_TYPES_ENUM.CASH_SPECIAL_TAX ||
              invoiceType === INVOICE_TYPES_ENUM.RECEIVABLE_SPECIAL_TAX) && (
              <FormikField
                name="tempItem.specialTaxAmount"
                component={InputField}
                controlProps={{
                  style: styles.control,
                  labelStyle: styles.controlLabel,
                }}
                required={!values.items.length}
                label={t('newInvoice_special_tax_amount')}
              />
            )
          }
        />
        <FormGroup
          leftComponent={
            values.tempItem.type?.value === 'PRODUCT' && (
              <FormikField
                name="tempItem.discountAmount"
                component={InputField}
                controlProps={{
                  style: styles.control,
                  labelStyle: styles.controlLabel,
                }}
                label={t('newInvoice_discount_value')}
              />
            )
          }
          rightComponent={
            <FormikField
              name="tempItem.unitPrice"
              component={InputField}
              controlProps={{
                style: styles.control,
                labelStyle: styles.controlLabel,
              }}
              required={!values.items.length}
              label={t('newInvoice_unitPrice')}
            />
          }
        />
        <FormGroup
          leftComponent={
            values.tempItem.type?.value === 'PRODUCT' && (
              <FormikField
                name="tempItem.quantity"
                component={InputField}
                controlProps={{
                  style: styles.control,
                  labelStyle: styles.controlLabel,
                }}
                required={!values.items.length}
                label={t('newInvoice_quantity')}
              />
            )
          }
          rightComponent={
            values.tempItem.type?.value === 'PRODUCT' && (
              <FormikField
                name="tempItem.description"
                component={InputField}
                controlProps={{
                  style: styles.control,
                  labelStyle: styles.controlLabel,
                }}
                required={!values.items.length}
                label={t('newInvoice_description_goodOrService')}
              />
            )
          }
        />
        {invoiceType !== INVOICE_TYPES_ENUM.CASH_INCOME &&
          invoiceType !== INVOICE_TYPES_ENUM.RECEIVABLE_INCOME && (
            <FormikField
              name="tempItem.type"
              component={SelectField}
              componentProps={{
                options: TYPE_OPTIONS(t),
              }}
              controlProps={{
                style: styles.control,
                labelStyle: styles.controlLabel,
              }}
              required={!values.items.length}
              label={t('newInvoice_type')}
            />
          )}
      </View>
    </View>
  );
};

export default React.memo(ProductsSection);
