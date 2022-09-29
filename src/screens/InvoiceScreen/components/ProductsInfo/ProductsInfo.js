import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';

import PrevArrow from 'assets/icons/prev-arrow.svg';
import NextArrow from 'assets/icons/next-arrow.svg';

import { Typography } from 'components/shared/Typography';

import styles from './ProductsInfo.styles';

const ProductsInfo = ({ style, invoice }) => {
  const { t } = useTranslation();

  return (
    <View style={[styles.info, style]}>
      <Typography style={styles.title} weight="bold">
        معلومات او بيانات الخدمة او السلعة
      </Typography>
      <View style={styles.inner}>
        <View style={styles.header}>
          <Typography style={styles.headerText}>عنصر 1 من 3</Typography>
        </View>
        <Swiper
          height={320}
          showsPagination={false}
          showsButtons
          prevButton={<PrevArrow style={styles.prevArrow} />}
          nextButton={<NextArrow style={styles.nextArrow} />}>
          <View style={styles.item}>
            <Typography style={styles.itemDescription}>Car</Typography>
            <View style={styles.itemRow}>
              <Typography style={styles.itemValue}>1</Typography>
              <Typography style={styles.itemText}>
                {t('invoice_columns_quantity')}
              </Typography>
            </View>
            <View style={styles.itemRow}>
              <Typography style={styles.itemValue}>1</Typography>
              <Typography style={styles.itemText}>
                {t('invoice_columns_unitPrice')}
              </Typography>
            </View>
            <View style={styles.itemRow}>
              <Typography style={styles.itemValue}>1</Typography>
              <Typography style={styles.itemText}>
                {t('invoice_columns_subtotalAmount')}
              </Typography>
            </View>
            <View style={styles.itemRow}>
              <Typography style={styles.itemValue}>1</Typography>
              <Typography style={styles.itemText}>
                {t('invoice_columns_discountAmount')}
              </Typography>
            </View>
            <View style={styles.itemRow}>
              <Typography style={styles.itemValue}>1</Typography>
              <Typography style={styles.itemText}>
                {t('invoice_columns_totalAmountAfterDiscount')}
              </Typography>
            </View>
            <View style={styles.itemRow}>
              <Typography style={styles.itemValue}>1</Typography>
              <Typography style={styles.itemText}>
                قيمة الضريبة الخاصة
              </Typography>
            </View>
            <View style={styles.itemRow}>
              <Typography style={styles.itemValue}>10%</Typography>
              <Typography style={styles.itemText}>
                {t('invoice_columns_generalTaxPercentage')}
              </Typography>
            </View>
            <View style={styles.itemRow}>
              <Typography style={styles.itemValue}>1</Typography>
              <Typography style={styles.itemText}>
                {t('invoice_columns_generalTaxAmount')}
              </Typography>
            </View>
            <View style={styles.itemRow}>
              <Typography style={styles.itemValue}>1</Typography>
              <Typography style={styles.itemText}>
                {t('invoice_columns_totalAmountAfterTaxes')}
              </Typography>
            </View>
          </View>
          <View style={styles.item}>
            <Typography style={styles.itemDescription}>Car</Typography>
            <View style={styles.itemRow}>
              <Typography style={styles.itemValue}>1</Typography>
              <Typography style={styles.itemText}>
                {t('invoice_columns_quantity')}
              </Typography>
            </View>
            <View style={styles.itemRow}>
              <Typography style={styles.itemValue}>1</Typography>
              <Typography style={styles.itemText}>
                {t('invoice_columns_unitPrice')}
              </Typography>
            </View>
            <View style={styles.itemRow}>
              <Typography style={styles.itemValue}>1</Typography>
              <Typography style={styles.itemText}>
                {t('invoice_columns_subtotalAmount')}
              </Typography>
            </View>
            <View style={styles.itemRow}>
              <Typography style={styles.itemValue}>1</Typography>
              <Typography style={styles.itemText}>
                {t('invoice_columns_discountAmount')}
              </Typography>
            </View>
            <View style={styles.itemRow}>
              <Typography style={styles.itemValue}>1</Typography>
              <Typography style={styles.itemText}>
                {t('invoice_columns_totalAmountAfterDiscount')}
              </Typography>
            </View>
            <View style={styles.itemRow}>
              <Typography style={styles.itemValue}>1</Typography>
              <Typography style={styles.itemText}>
                قيمة الضريبة الخاصة
              </Typography>
            </View>
            <View style={styles.itemRow}>
              <Typography style={styles.itemValue}>10%</Typography>
              <Typography style={styles.itemText}>
                {t('invoice_columns_generalTaxPercentage')}
              </Typography>
            </View>
            <View style={styles.itemRow}>
              <Typography style={styles.itemValue}>1</Typography>
              <Typography style={styles.itemText}>
                {t('invoice_columns_generalTaxAmount')}
              </Typography>
            </View>
            <View style={styles.itemRow}>
              <Typography style={styles.itemValue}>1</Typography>
              <Typography style={styles.itemText}>
                {t('invoice_columns_totalAmountAfterTaxes')}
              </Typography>
            </View>
          </View>
        </Swiper>
      </View>
    </View>
  );
};

export default React.memo(ProductsInfo);
