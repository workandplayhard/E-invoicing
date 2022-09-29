import React from 'react';
import { ScrollView } from 'react-native';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import {
  validationSchema,
  getNewInvoiceInitialValues,
} from 'config/invoice/formConfig';

import { MainLayout } from 'components/MainLayout';

import { MainSection } from './components/MainSection';
import { SellerSection } from './components/SellerSection';
import { BuyerSection } from './components/BuyerSection';
import { ProductsSection } from './components/ProductsSection';
import { TotalsSection } from './components/TotalsSection';

import styles from './NewInvoiceScreen.styles';

const NewInvoiceScreen = ({
  loading,
  submitLoading,
  isBuyerFieldsRequired,
  user,
  invoiceNumber,
  invoiceType,
  loadActivityOptions,
  onAddItemPress,
  onRemoveItemPress,
  onCancelPress,
  onSubmitFormPress,
}) => {
  const { t } = useTranslation();

  return (
    <MainLayout title="انشاء فاتورة جديدة (ذمم)">
      <ScrollView>
        <Formik
          validateOnMount
          enableReinitialize
          validationSchema={validationSchema({ t, invoiceType })}
          initialValues={getNewInvoiceInitialValues({
            user,
            invoiceNumber,
          })}
          onSubmit={onSubmitFormPress}>
          {() => (
            <>
              <MainSection />
              <SellerSection />
              <BuyerSection isBuyerFieldsRequired={isBuyerFieldsRequired} />
              <ProductsSection />
              <TotalsSection />
            </>
          )}
        </Formik>
      </ScrollView>
    </MainLayout>
  );
};

export default React.memo(NewInvoiceScreen);
