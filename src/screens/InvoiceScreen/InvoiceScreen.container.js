import React from 'react';

import * as api from 'api/methods';

import { useFetch } from 'hooks/useFetch';

import InvoiceScreen from './InvoiceScreen';

const InvoiceScreenContainer = ({ route, navigation }) => {
  // const { invoiceId, invoiceNumber, invoiceCreationType } = route.params;

  const { loading, data: invoice } = useFetch(
    {
      defaultData: [],
      fetcher: api.getInvoiceById,
      immediately: true,
    },
    { invoiceId: '', invoiceNumber: '' },
    [],
  );

  const handleExitPress = () => {
    navigation.navigate('Home', { screen: 'Invoices' });
  };

  const handlePrintPress = () => {
    api
      .getInvoicePDF({
        invoiceId: invoice.id,
        invoiceNumber: invoice.invoiceNumber,
      })
      .then(fileBlob => {
        // TODO: pdf donwload logic goes here
      })
      .catch(() => {});
  };

  return (
    <InvoiceScreen
      loading={loading}
      invoice={invoice}
      // invoiceCreationType={invoiceCreationType}
      onExitPress={handleExitPress}
      onPrintPress={handlePrintPress}
    />
  );
};

export default React.memo(InvoiceScreenContainer);
