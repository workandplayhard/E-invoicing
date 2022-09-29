import format from 'date-fns/format';
import parse from 'date-fns/parse';

import { INVOICE_NOTE_TYPES, INVOICE_TYPES_ENUM } from 'constants/common';

const INVOICE_TYPES_BY_NUMBER = {
  10: 'CASH_INCOME',
  11: 'CASH_GENERAL_TAX',
  12: 'CASH_SPECIAL_TAX',
  20: 'RECEIVABLE_INCOME',
  21: 'RECEIVABLE_GENERAL_TAX',
  22: 'RECEIVABLE_SPECIAL_TAX',
};

// 0 - INCOME_TAX 1 - GENERAL_TAX 2 - SPECIAL_TAX

export const calculateItemSubtotalAmount = ({ quantity, unitPrice }) =>
  quantity * unitPrice;

export const calculateItemTotalAmountAfterDiscount = ({
  subtotalAmount,
  discountAmount,
}) => {
  // if (discountAmount.indexOf('%') > -1) {
  //   return ((subtotalAmount * parseFloat(discountAmount)) / 100).toFixed(2);
  // } else {

  // }
  return subtotalAmount - discountAmount;
};

export const calculateItemTaxAmount = ({
  totalAmountAfterDiscount,
  invoiceType,
  taxPercent,
}) => {
  if (
    totalAmountAfterDiscount === undefined ||
    taxPercent === undefined ||
    invoiceType === INVOICE_TYPES_ENUM.CASH_INCOME ||
    invoiceType === INVOICE_TYPES_ENUM.RECEIVABLE_INCOME
  ) {
    return 0;
  }

  return ((totalAmountAfterDiscount * parseFloat(taxPercent)) / 100).toFixed(2);
};

export const calculateItemTotalAmountAfterTaxes = ({
  totalAmountAfterDiscount,
  taxAmount,
  specialTaxAmount,
}) => (+totalAmountAfterDiscount + +taxAmount + +specialTaxAmount).toFixed(2);

export const calculateSubtotalAmount = items =>
  items.reduce((amount, item) => +item.subtotalAmount + amount, 0).toFixed(2);

export const calculateTotalDiscountAmount = items =>
  items.reduce((amount, item) => +item.discountAmount + amount, 0).toFixed(2);

export const calculateTotalTaxesAmount = items =>
  items.reduce((amount, item) => +item.generalTaxAmount + amount, 0).toFixed(2);

export const calculateTotalAmountAfterTaxes = items =>
  items
    .reduce((amount, item) => +item.totalAmountAfterTaxes + amount, 0)
    .toFixed(2);

export const getInvoiceType = ({ generalType, user }) => {
  const invoiceTypeNumber = user? .invoiceTypeNumber;

  switch (generalType) {
    case 'cash': {
      return INVOICE_TYPES_BY_NUMBER[`1${invoiceTypeNumber}`];
    }
    case 'receivable': {
      return INVOICE_TYPES_BY_NUMBER[`2${invoiceTypeNumber}`];
    }
  }
};

export const getInvoiceNoteTypesOptions = () =>
  INVOICE_NOTE_TYPES.map(noteType => {
    switch (noteType) {
      case 'DEBIT_INVOICE': {
        return {
          label: 'مدين',
          value: noteType,
        };
      }
      case 'CREDIT_INVOICE': {
        return {
          label: 'دائن',
          value: noteType,
        };
      }
    }
  });

export const getProductWithTotals = ({ item, invoiceType }) => {
  if (item.type.value === 'PRODUCT') {
    const subtotalAmount = calculateItemSubtotalAmount({
      quantity: item.quantity,
      unitPrice: item.unitPrice,
    });
    const totalAmountAfterDiscount = calculateItemTotalAmountAfterDiscount({
      subtotalAmount,
      discountAmount: item.discountAmount,
    });
    const generalTaxAmount = calculateItemTaxAmount({
      totalAmountAfterDiscount:
        totalAmountAfterDiscount + +item.specialTaxAmount,
      invoiceType,
      taxPercent: item.generalTaxPercentage?.value,
    });
    const totalAmountAfterTaxes = calculateItemTotalAmountAfterTaxes({
      totalAmountAfterDiscount,
      taxAmount: generalTaxAmount,
      specialTaxAmount: 0,
    });

    item.totalAmountAfterTaxes = totalAmountAfterTaxes;
    item.generalTaxAmount = generalTaxAmount;
    item.totalAmountAfterDiscount = totalAmountAfterDiscount;
    item.subtotalAmount = subtotalAmount;
  } else {
    const totalAmountAfterDiscount = calculateItemTotalAmountAfterDiscount({
      subtotalAmount: item.unitPrice,
      discountAmount: item.discountAmount,
    });
    const generalTaxAmount = calculateItemTaxAmount({
      totalAmountAfterDiscount,
      taxPercent: item.generalTaxPercentage?.value,
    });
    const totalAmountAfterTaxes = calculateItemTotalAmountAfterTaxes({
      totalAmountAfterDiscount: item.unitPrice,
      taxAmount: generalTaxAmount,
      specialTaxAmount: 0,
    });

    item.unitPrice = '';
    item.totalAmountAfterTaxes = totalAmountAfterTaxes;
    item.generalTaxAmount = generalTaxAmount;
    item.totalAmountAfterDiscount = totalAmountAfterDiscount;
    item.description = 'بدل خدمة';
  }

  return item;
};

export const convertFormDataToApi = ({ invoiceTypeCode, data, user }) => {
  if (!data) {
    return null;
  }

  const totalAmountExcludingTaxes = calculateSubtotalAmount(data.items);
  const totalDiscountsAmount = calculateTotalDiscountAmount(data.items);
  const totalGeneralTaxesAmount = calculateTotalTaxesAmount(data.items);
  const totalPayableAmount = calculateTotalAmountAfterTaxes(data.items);

  const formData = {
    invoiceTypeCode,
    invoiceNumber: data.invoiceNumber,
    buyerInvoiceNumber: data.buyerInvoiceNumber,
    issueDate: format(
      parse(data.issueDate, 'dd/MM/yyyy', new Date()),
      'dd-MM-yyyy',
    ),
    notes: data.notes,
    buyerDTO:
      data.buyer.name ||
      data.buyer?.postalCode ||
      data.buyer?.phoneNumber ||
      data.buyer?.additionalBuyerIdType?.value ||
      data.buyer?.additionalBuyerId ||
      data.buyer?.province?.value
        ? {
            buyerName: data.buyer?.name,
            postalCode: data.buyer?.postalCode || null,
            phoneNumber: data.buyer?.phoneNumber || null,
            additionalBuyerIdType: data.buyer?.additionalBuyerIdType?.value,
            additionalBuyerId: data.buyer?.additionalBuyerId,
            provinceDTO: {
              provinceCode: data.buyer?.province?.value,
            },
          }
        : null,
    activityDTO: {
      activity: data.seller?.activityNumber,
    },
    totalAmountExcludingTaxes: +totalAmountExcludingTaxes,
    totalDiscountsAmount: +totalDiscountsAmount,
    totalGeneralTaxesAmount: +totalGeneralTaxesAmount,
    totalPayableAmount: +totalPayableAmount,
    invoiceItemDTOList: data.items.map(item => ({
      invoiceItemType: item.type?.value,
      productDescription: item.description,
      quantity: +item.quantity,
      unitPrice: +item.unitPrice,
      subtotalAmount: +item.subtotalAmount,
      discountAmount: +item.discountAmount,
      totalAmountAfterDiscount: +item.totalAmountAfterDiscount,
      generalTaxPercentage: item.generalTaxPercentage?.value,
      generalTaxAmount: +item.generalTaxAmount,
      totalAmountAfterTaxes: +item.totalAmountAfterTaxes,
      specialTaxAmount: +item.specialTaxAmount,
    })),
  };

  if (data.originalInvoiceNumber) {
    formData.originalInvoiceNumber = data.originalInvoiceNumber?.value;
  }

  if (data.originalInvoiceTotal) {
    formData.originalInvoiceTotal = data.originalInvoiceTotal;
  }

  if (data.reasonOfNote) {
    formData.reasonOfNote = data.reasonOfNote;
  }

  if (data.noteType) {
    formData.noteType = data.noteType?.value;
  }

  return formData;
};
