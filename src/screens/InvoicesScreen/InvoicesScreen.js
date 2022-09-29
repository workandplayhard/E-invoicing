import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import parse from 'date-fns/parse';
import format from 'date-fns/format';

import DownloadIcon from 'assets/icons/download.svg';

import { Table } from 'components/shared/Table';
import { Link } from 'components/shared/Link';

import { MainLayout } from 'components/MainLayout';

import { Filters } from './components/Filters';

import { INVOICES_COLUMNS } from './InvoicesScreen.config';

import {
  getInvoiceStatusTextByCode,
  getInvoiceNoteTypeTextByCode,
  getInvoiceTypeTextByCode,
} from './InvoicesScreen.helpers';

import styles from './InvoicesScreen.styles';

const cellRenderer = (
  { style, item, itemIndex, key, minWidth, maxWidth },
  DefaultCell,
  { onDownloadItemClick },
) => {
  switch (key) {
    case 'order': {
      return (
        <DefaultCell key={key} minWidth={minWidth} maxWidth={maxWidth}>
          {itemIndex + 1}
        </DefaultCell>
      );
    }
    case 'action': {
      return (
        <View
          style={[styles.actionCell, style, { minWidth, maxWidth }]}
          key={key}>
          <DownloadIcon
            style={styles.downloadIcon}
            onClick={() => onDownloadItemClick(item)}
          />
        </View>
      );
    }
    case 'issueDate': {
      const issueDate = format(
        parse(item[key], 'dd-MM-yyyy', new Date()),
        'dd MMM yyyy',
      );

      return (
        <DefaultCell key={key} minWidth={minWidth} maxWidth={maxWidth}>
          {issueDate}
        </DefaultCell>
      );
    }
    case 'invoiceTotal': {
      return (
        <DefaultCell key={key} minWidth={minWidth} maxWidth={maxWidth}>
          {item[key]} JOD
        </DefaultCell>
      );
    }
    case 'invoiceStatus': {
      const invoiceStatus = getInvoiceStatusTextByCode(item[key]);

      return (
        <DefaultCell key={key} minWidth={minWidth} maxWidth={maxWidth}>
          {invoiceStatus || '-'}
        </DefaultCell>
      );
    }
    case 'noteType': {
      const noteType = getInvoiceNoteTypeTextByCode(item[key]);

      return (
        <DefaultCell key={key} minWidth={minWidth} maxWidth={maxWidth}>
          {noteType || '-'}
        </DefaultCell>
      );
    }
    case 'invoiceType': {
      const invoiceType = getInvoiceTypeTextByCode(item[key]);

      return (
        <View
          style={[styles.linkCell, style, { minWidth, maxWidth }]}
          key={key}>
          <Link style={styles.link}>{invoiceType}</Link>
        </View>
      );
    }
    default: {
      return (
        <DefaultCell key={key} minWidth={minWidth} maxWidth={maxWidth}>
          {item[key] || '-'}
        </DefaultCell>
      );
    }
  }
};

const InvoicesScreen = ({
  onClickFloatingButton,
  loading,
  invoices,
  onSearchQueryChange,
  onSubmitFilters,
  onDownloadItemClick,
}) => {
  const { t } = useTranslation();

  return (
    <MainLayout title="عرض الفواتير">
      <View style={styles.inner}>
        <View style={styles.header}>
          <Filters
            onSubmitFilters={onSubmitFilters}
            onSearchQueryChange={onSearchQueryChange}
          />
        </View>
        <Table
          style={styles.table}
          columns={INVOICES_COLUMNS(t)}
          data={invoices}
          cellRenderer={(props, DefaultCell) =>
            cellRenderer(props, DefaultCell, {
              onDownloadItemClick,
            })
          }
        />
      </View>
    </MainLayout>
  );
};

export default React.memo(InvoicesScreen);
