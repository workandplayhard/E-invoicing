import { INVOICE_TYPES_ENUM } from 'constants/common';

import i18n from 'config/i18n';

export const INVOICE_COLUMNS = ({ t, invoiceType }) => {
  let columns = [
    {
      key: 'action',
      label: t('invoice_columns_action'),
      minWidth: 120,
      maxWidth: 120,
    },
    {
      key: 'totalAmountAfterTaxes',
      label: t('invoice_columns_totalAmountAfterTaxes'),
      minWidth: 174,
      maxWidth: 174,
    },
    {
      key: 'generalTaxAmount',
      label: t('invoice_columns_generalTaxAmount'),
      minWidth: 174,
      maxWidth: 174,
    },
    {
      key: 'generalTaxPercentage',
      label: t('invoice_columns_generalTaxPercentage'),
      minWidth: 174,
      maxWidth: 174,
    },
    {
      key: 'specialTaxAmount',
      label: 'قيمة الضريبة الخاصة',
      minWidth: 174,
      maxWidth: 174,
    },
    {
      key: 'totalAmountAfterDiscount',
      label: t('invoice_columns_totalAmountAfterDiscount'),
      minWidth: 136,
      maxWidth: 136,
    },
    {
      key: 'discountAmount',
      label: t('invoice_columns_discountAmount'),
      minWidth: 136,
      maxWidth: 136,
    },
    {
      key: 'subtotalAmount',
      label: t('invoice_columns_subtotalAmount'),
      minWidth: 136,
      maxWidth: 136,
    },
    {
      key: 'unitPrice',
      label: t('invoice_columns_unitPrice'),
      minWidth: 136,
      maxWidth: 136,
    },
    {
      key: 'quantity',
      label: t('invoice_columns_quantity'),
      minWidth: 136,
      maxWidth: 136,
    },
    {
      key: 'description',
      label: t('invoice_columns_description'),
      minWidth: 200,
    },
    { key: 'order', label: '#', minWidth: 64, maxWidth: 64 },
  ];

  if (
    invoiceType === INVOICE_TYPES_ENUM.CASH_INCOME ||
    invoiceType === INVOICE_TYPES_ENUM.RECEIVABLE_INCOME
  ) {
    columns = columns.filter(
      (column) =>
        column.key !== 'subtotalAmount' &&
        column.key !== 'totalAmountAfterDiscount' &&
        column.key !== 'generalTaxPercentage' &&
        column.key !== 'generalTaxAmount',
    );
  }

  if (
    invoiceType !== INVOICE_TYPES_ENUM.CASH_SPECIAL_TAX &&
    invoiceType !== INVOICE_TYPES_ENUM.RECEIVABLE_SPECIAL_TAX
  ) {
    columns = columns.filter((column) => column.key !== 'specialTaxAmount');
  }

  return columns;
};

export const TAX_RATE_OPTIONS = (t) => [
  { label: t('tax_rate_exempt'), value: 0 },
  { label: '1%', value: 1 },
  { label: '2%', value: 2 },
  { label: '3%', value: 3 },
  { label: '4%', value: 4 },
  { label: '5%', value: 5 },
  { label: '6%', value: 6 },
  { label: '7%', value: 7 },
  { label: '8%', value: 8 },
  { label: '10%', value: 10 },
  { label: '16%', value: 16 },
];

export const PROVINCE_OPTIONS = () => {
  const language = i18n.language;

  return [
    {
      label: language === 'en' ? 'Al Balqa' : 'البلقاء',
      value: 'JO-BA',
    },
    { label: language === 'en' ? 'Maan' : 'معان', value: 'JO-MN' },
    {
      label: language === 'en' ? 'Madaba' : 'مادبا',
      value: 'JO-MD',
    },
    {
      label: language === 'en' ? 'Al Mafraq' : 'المفرق',
      value: 'JO-MA',
    },
    { label: language === 'en' ? 'Al Karak' : 'الكرك', value: 'JO-KA' },
    { label: language === 'en' ? 'Jarash' : 'جرش', value: 'JO-JA' },
    {
      label: language === 'en' ? 'Irbid' : 'إربد',
      value: 'JO-IR',
    },
    { label: language === 'en' ? 'Al Zarqa' : 'الزرقاء', value: 'JO-AZ' },
    {
      label: language === 'en' ? 'Al Tafila' : 'الطفيلة',
      value: 'JO-AT',
    },
    {
      label: language === 'en' ? 'Al Aqaba' : 'العقبة',
      value: 'JO-AQ',
    },
    {
      label: language === 'en' ? 'Amman' : 'عمان',
      value: 'JO-AM',
    },
    { label: language === 'en' ? 'Ajloun' : 'عجلون', value: 'JO-AJ' },
  ];
};

export const TYPE_OPTIONS = (t) => [
  { label: t('type_options_item'), value: 'PRODUCT' },
  { label: t('type_options_service allowance'), value: 'SERVICE_CHARGE' },
];

export const DOCUMENT_TYPE_OPTIONS = (t) => [
  // TODO: ask Haya about validations
  {
    label: t('document_type_options_IDNumber'),
    value: 'NATIONAL_ID_NUMBER',
  },
  {
    label: t('document_type_options_private_number'),
    value: 'PERSONAL_NUMBER',
  },
  {
    label: t('document_type_options_tax_number'),
    value: 'TAXPAYER_NUMBERS',
  },
  {
    label: t('document_type_options_sales_hierarchy'),
    value: 'SERIAL_INCOME_NUMBER',
  },
];
