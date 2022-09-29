import React, { useEffect, useState } from 'react';
import parse from 'date-fns/parse';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';

import * as api from 'api/methods';

import { useFetch } from 'hooks/useFetch';

import InvoicesScreen from './InvoicesScreen';

const InvoicesScreenContainer = () => {
  const [prevInvoices, setPrevInvoices] = useState([]);

  const {
    loading,
    data,
    setState: setInvoices,
  } = useFetch(
    {
      defaultData: {
        invoices: [
          {
            invoiceUniqueIdentifier: '369750fe-7326-49ae-82bd-24993de99705',
            invoiceNumber: 'EIN00007',
            invoiceTypeCode: 'CASH_SPECIAL_TAX',
            userName: 'test',
            activity: null,
            noteType: 'DEBIT_INVOICE',
            issueDate: '19-09-2022',
            totalPayableAmount: 257270.16,
            invoiceStatusEnum: 'ACTIVE',
          },
          {
            invoiceUniqueIdentifier: '0d811ef2-0982-4a98-b994-ddd25c2cf7df',
            invoiceNumber: 'EIN00008',
            invoiceTypeCode: 'RECEIVABLE_SPECIAL_TAX',
            userName: 'test',
            activity: null,
            noteType: 'DEBIT_INVOICE',
            issueDate: '13-09-2022',
            totalPayableAmount: 354.24,
            invoiceStatusEnum: 'ACTIVE',
          },
          {
            invoiceUniqueIdentifier: '17a1574a-8311-49b3-b101-2e9f77b06d51',
            invoiceNumber: 'EIN00008',
            invoiceTypeCode: 'RECEIVABLE_SPECIAL_TAX',
            userName: 'test',
            activity: null,
            noteType: 'CREDIT_INVOICE',
            issueDate: '13-09-2022',
            totalPayableAmount: 354.24,
            invoiceStatusEnum: 'ACTIVE',
          },
        ].map(invoice => ({
          id: invoice.invoiceUniqueIdentifier,
          invoiceType: invoice.invoiceTypeCode,
          invoiceStatus: invoice.invoiceStatusEnum,
          invoiceNumber: invoice.invoiceNumber,
          invoiceTotal: invoice.totalPayableAmount,
          issueDate: invoice.issueDate,
          noteType: invoice.noteType,
          activityNumber: invoice.activityDTO?.activity,
          username: invoice.userName,
        })),
      },
      fetcher: api.getAllInvoices,
      immediately: false,
    },
    {},
    [],
  );

  useEffect(() => {
    if (!prevInvoices.length) {
      setPrevInvoices(data.invoices);
    }
  }, [data.invoices]);

  const handleSearchQueryChange = query => {
    if (!query) {
      setInvoices(state => ({
        ...state,
        data: { ...state.data, invoices: prevInvoices },
      }));

      return;
    }

    setInvoices(state => ({
      ...state,
      data: {
        ...state.data,
        invoices: prevInvoices.filter(invoice =>
          [
            invoice.noteType || '',
            invoice.activityNumber || '',
            invoice.invoiceNumber,
            invoice.invoiceType,
            invoice.invoiceStatus,
            invoice.issueDate,
            invoice.username,
            `${invoice.invoiceTotal}`,
          ].some(fieldValue => fieldValue.indexOf(query) > -1),
        ),
      },
    }));
  };

  const handleSubmitFilters = filtersData => {
    if (!filtersData) {
      setInvoices(state => ({
        ...state,
        data: prevInvoices,
      }));

      return;
    }

    let nextInvoices = prevInvoices.length
      ? [...prevInvoices]
      : [...data.invoices];

    if (filtersData.noteType?.value) {
      nextInvoices = nextInvoices.filter(
        invoice => invoice.noteType === filtersData.invoiceType?.value,
      );
    }

    if (filtersData.activityNumber?.value) {
      nextInvoices = nextInvoices.filter(
        invoice => invoice.activityNumber === filtersData.activityNumber?.value,
      );
    }

    if (filtersData.invoiceType?.value) {
      nextInvoices = nextInvoices.filter(
        invoice => invoice.invoiceType === filtersData.invoiceType?.value,
      );
    }

    if (filtersData.invoiceStatus?.value) {
      nextInvoices = nextInvoices.filter(
        invoice => invoice.invoiceStatus === filtersData.invoiceStatus?.value,
      );
    }

    if (filtersData.issueDateFrom) {
      nextInvoices = nextInvoices.filter(invoice =>
        isAfter(
          parse(invoice.issueDate, 'dd-MM-yyyy', new Date()),
          parse(filtersData.issueDateFrom, 'dd/MM/yyyy', new Date()),
        ),
      );
    }

    if (filtersData.issueDateTo) {
      nextInvoices = nextInvoices.filter(invoice =>
        isBefore(
          parse(invoice.issueDate, 'dd-MM-yyyy', new Date()),
          parse(filtersData.issueDateTo, 'dd/MM/yyyy', new Date()),
        ),
      );
    }

    if (filtersData.totalAmountFrom) {
      nextInvoices = nextInvoices.filter(
        invoice => invoice.invoiceTotal >= filtersData.totalAmountFrom,
      );
    }

    if (filtersData.totalAmountTo) {
      nextInvoices = nextInvoices.filter(
        invoice => invoice.invoiceTotal <= filtersData.totalAmountTo,
      );
    }

    if (filtersData.username?.value) {
      nextInvoices = nextInvoices.filter(
        invoice => invoice.username === filtersData.username?.value,
      );
    }

    setInvoices(state => ({
      ...state,
      data: nextInvoices,
    }));
  };

  const handleDownloadItemClick = item => {
    api
      .getInvoicePDF({ invoiceId: item.id, invoiceNumber: item.invoiceNumber })
      .then(fileBlob => {
        // TODO: download functionality goew here
      })
      .catch(() => {});
  };

  return (
    <InvoicesScreen
      loading={loading}
      invoices={data.invoices}
      onSearchQueryChange={handleSearchQueryChange}
      onSubmitFilters={handleSubmitFilters}
      onDownloadItemClick={handleDownloadItemClick}
    />
  );
};

export default React.memo(InvoicesScreenContainer);
