import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, ScrollView } from 'react-native';

import { Typography } from 'components/shared/Typography';

import { MainLayout } from 'components/MainLayout';

import { MainInfo } from './components/MainInfo';
import { UserInfo } from './components/UserInfo';
import { TotalsInfo } from './components/TotalsInfo';
import { ProductsInfo } from './components/ProductsInfo';
import { Button } from 'components/shared/Button';

import { getScreenTitleByInvoiceType } from './InvoiceScreen.helpers';

import styles from './InvoiceScreen.styles';

const InvoiceScreen = ({ invoice }) => {
  const { t } = useTranslation();

  return (
    <MainLayout title="عرض الفاتورة">
      <ScrollView>
        <View style={styles.inner}>
          <Typography style={styles.title} weight="bold">
            {getScreenTitleByInvoiceType('')}
          </Typography>
          <View style={styles.main}>
            <MainInfo style={styles.infoItem} invoice={invoice} />
            <UserInfo
              style={styles.infoItem}
              user={invoice?.seller}
              title="بيانات البائع"
            />
            <UserInfo
              style={styles.infoItem}
              user={invoice?.buyer}
              title="بيانات البائع"
            />
            <ProductsInfo style={styles.infoItem} items={invoice.items} />
            <TotalsInfo style={styles.infoItem} invoice={invoice} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.actions}>
        <Button style={styles.action}>انهاء</Button>
        <Button style={styles.action}>تحميل</Button>
      </View>
    </MainLayout>
  );
};

export default React.memo(InvoiceScreen);
