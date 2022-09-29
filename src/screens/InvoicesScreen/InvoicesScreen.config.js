export const INVOICES_COLUMNS = t => [
  {
    key: 'action',
    label: t('invoices_columns_action'),
    minWidth: 120,
    maxWidth: 120,
  },
  {
    key: 'invoiceStatus',
    label: t('invoices_column_status'),
    minWidth: 170,
    maxWidth: 170,
  },
  {
    key: 'invoiceTotal',
    label: t('invoices_column_value'),
    minWidth: 170,
    maxWidth: 170,
  },
  {
    key: 'issueDate',
    label: t('invoices_column_issueDate'),
    minWidth: 170,
    maxWidth: 170,
  },
  {
    key: 'invoiceNumber',
    label: t('invoices_column_invoiceNumber'),
    minWidth: 210,
    maxWidth: 210,
  },
  {
    key: 'noteType',
    label: t('invoices_column_noteType'),
    minWidth: 170,
    maxWidth: 170,
  },
  {
    key: 'activityNumber',
    label: t('invoices_column_sequencetype'),
    minWidth: 210,
    maxWidth: 210,
  },
  {
    key: 'username', // TODO: getUserInfo
    label: t('invoices_column_username'),
    minWidth: 210,
    maxWidth: 210,
  },
  {
    key: 'invoiceType',
    label: t('invoices_column_invoiceType'),
    minWidth: 170,
    maxWidth: 170,
  },
  { key: 'order', label: '#', minWidth: 64, maxWidth: 64 },
];
