import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { INVOICE_TYPES_ENUM } from 'constants/common';

import { Typography } from 'components/shared/Typography';

import {
  calculateSubtotalAmount,
  calculateTotalDiscountAmount,
  calculateTotalTaxesAmount,
  calculateTotalAmountAfterTaxes,
} from 'config/invoice/helpers';

import styles from './InvoiceTotals.styles';

const InvoiceTotals = ({ style, items, invoiceType }) => {
  const { t } = useTranslation();

  return (
    <View style={[styles.totals, style]}>
      {invoiceType !== INVOICE_TYPES_ENUM.CASH_INCOME &&
        invoiceType !== INVOICE_TYPES_ENUM.RECEIVABLE_INCOME && (
          <>
            <View style={[styles.total, styles.firstTotal]}>
              <Typography style={styles.totalValue} weight="bold">
                {calculateSubtotalAmount(items)} JOD
              </Typography>
              <View style={styles.totalSeparator} />
              <Typography style={styles.totalText} weight="bold">
                {t('newInvoice_totalInvoiceAmount')}
              </Typography>
            </View>
            <View style={styles.total}>
              <Typography style={styles.totalValue} weight="bold">
                {calculateTotalDiscountAmount(items)} JOD
              </Typography>
              <View style={styles.totalSeparator} />
              <Typography style={styles.totalText} weight="bold">
                {t('newInvoice_discount_value')}
              </Typography>
            </View>
            <View style={styles.total}>
              <Typography style={styles.totalValue} weight="bold">
                {calculateTotalTaxesAmount(items)} JOD
              </Typography>
              <View style={styles.totalSeparator} />
              <Typography style={styles.totalText} weight="bold">
                {t('newInvoice_Total_general_tax_amount')}
              </Typography>
            </View>
          </>
        )}
      <View
        style={[
          styles.total,
          (invoiceType === INVOICE_TYPES_ENUM.CASH_INCOME ||
            invoiceType === INVOICE_TYPES_ENUM.RECEIVABLE_INCOME) &&
            styles.firstTotal,
        ]}>
        <Typography style={styles.totalValue} weight="bold">
          {calculateTotalAmountAfterTaxes(items)} JOD
        </Typography>
        <View style={styles.totalSeparator} />
        <Typography style={styles.totalText} weight="bold">
          {t('newInvoice_total_bill')}
        </Typography>
      </View>
    </View>
  );
};

export default React.memo(InvoiceTotals);
