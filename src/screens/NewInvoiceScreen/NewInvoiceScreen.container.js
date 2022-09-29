import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { INVOICE_TYPES_ENUM } from 'constants/common';

import * as api from 'api/methods';

import { defaultItemData } from 'config/invoice/constants';

import {
  calculateItemSubtotalAmount,
  calculateItemTaxAmount,
  calculateItemTotalAmountAfterDiscount,
  calculateItemTotalAmountAfterTaxes,
  convertFormDataToApi,
  getInvoiceType,
  validateItemFields,
} from 'config/invoice/helpers';

import { useUser } from 'context/user';

import NewInvoiceScreen from './NewInvoiceScreen';

const NewInvoiceScreenContainer = ({ navigation, route }) => {
  const params = route.params;

  const { user } = useUser();

  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [invoiceNumber, setInvoiceNumber] = useState('-');

  console.log('user', user);

  const invoiceType = getInvoiceType({
    generalType: params?.invoiceGeneralType,
    user,
  });

  useEffect(() => {
    api
      .getNextInvoiceNumber()
      .then(data => {
        setInvoiceNumber(data.invoiceNumber);

        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const loadActivityOptions = () =>
    api.getAllActivities().then(data =>
      data.map(item => ({
        label: `${item.activity} (${item.description})`,
        value: item.activity,
      })),
    );

  const handleAddItemPress = async ({
    values,
    validateForm,
    setFieldError,
    setFieldTouched,
    resetForm,
  }) => {
    const currentItem = values.tempItem;

    const haveError = await validateItemFields({
      itemType: currentItem.type?.value,
      invoiceType,
      setFieldError,
      setFieldTouched,
      validateForm,
    });

    if (haveError) {
      return;
    }

    if (currentItem.type.value === 'PRODUCT') {
      const subtotalAmount = calculateItemSubtotalAmount({
        quantity: currentItem.quantity,
        unitPrice: currentItem.unitPrice,
      });
      const totalAmountAfterDiscount = calculateItemTotalAmountAfterDiscount({
        subtotalAmount,
        discountAmount: currentItem.discountAmount,
      });
      const generalTaxAmount = calculateItemTaxAmount({
        totalAmountAfterDiscount:
          totalAmountAfterDiscount + +currentItem.specialTaxAmount,
        invoiceType,
        taxPercent: currentItem.generalTaxPercentage?.value,
      });
      const totalAmountAfterTaxes = calculateItemTotalAmountAfterTaxes({
        totalAmountAfterDiscount,
        taxAmount: generalTaxAmount,
        specialTaxAmount: currentItem.specialTaxAmount,
      });

      currentItem.totalAmountAfterTaxes = totalAmountAfterTaxes;
      currentItem.generalTaxAmount = generalTaxAmount;
      currentItem.totalAmountAfterDiscount = totalAmountAfterDiscount;
      currentItem.subtotalAmount = subtotalAmount;
    } else {
      const totalAmountAfterDiscount = calculateItemTotalAmountAfterDiscount({
        subtotalAmount: currentItem.unitPrice,
        discountAmount: currentItem.discountAmount,
      });
      const generalTaxAmount = calculateItemTaxAmount({
        totalAmountAfterDiscount,
        taxPercent: currentItem.generalTaxPercentage?.value,
      });
      const totalAmountAfterTaxes = calculateItemTotalAmountAfterTaxes({
        totalAmountAfterDiscount: currentItem.unitPrice,
        taxAmount: generalTaxAmount,
        specialTaxAmount: currentItem.specialTaxAmount,
      });

      currentItem.unitPrice = '';
      currentItem.totalAmountAfterTaxes = totalAmountAfterTaxes;
      currentItem.generalTaxAmount = generalTaxAmount;
      currentItem.totalAmountAfterDiscount = totalAmountAfterDiscount;
      currentItem.description = 'بدل خدمة';
    }

    currentItem.creating = false;

    resetForm({
      values: {
        ...values,
        items: [...values.items, currentItem],
        tempItem: { id: uuid(), ...defaultItemData },
      },
    });
  };

  const handleRemoveItemPress = (itemId, { values, setFieldValue }) => {
    const nextItems = values.items.filter(item => item.id !== itemId);

    setFieldValue('items', nextItems);
  };

  const handleCancelPress = () => {
    navigation.navigate('Home', { screen: 'Dashboard' });
  };

  const handleSubmitFormPress = values => {
    const data = convertFormDataToApi({
      invoiceTypeCode: invoiceType,
      data: values,
      user,
    });

    setSubmitLoading(true);

    api
      .submitInvoice(data)
      .then(response => {
        setSubmitLoading(false);

        navigation.navigate('Home', {
          screen: 'Invoice',
          params: {
            invoiceId: response.invoiceId,
            invoiceNumber: response.invoiceNumber,
          },
        });
      })
      .catch(() => {
        setSubmitLoading(false);
      });
  };

  const isBuyerFieldsRequired =
    invoiceType === INVOICE_TYPES_ENUM.RECEIVABLE_INCOME ||
    invoiceType === INVOICE_TYPES_ENUM.RECEIVABLE_GENERAL_TAX ||
    invoiceType === INVOICE_TYPES_ENUM.RECEIVABLE_SPECIAL_TAX;

  return (
    <NewInvoiceScreen
      loading={loading}
      submitLoading={submitLoading}
      isBuyerFieldsRequired={isBuyerFieldsRequired}
      user={user}
      invoiceNumber={invoiceNumber}
      invoiceType={invoiceType}
      loadActivityOptions={loadActivityOptions}
      onAddItemPress={handleAddItemPress}
      onRemoveItemPress={handleRemoveItemPress}
      onCancelPress={handleCancelPress}
      onSubmitFormPress={handleSubmitFormPress}
    />
  );
};

export default React.memo(NewInvoiceScreenContainer);
