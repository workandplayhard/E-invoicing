import React from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';

import { ActionSheet } from 'components/shared/ActionSheet';
import { FormGroup } from 'components/shared/FormGroup';
import { Button } from 'components/shared/Button';
import { FormikField } from 'components/shared/FormikField';
import { Typography } from 'components/shared/Typography';

import {
  DatePickerInputField,
  InputField,
  SelectField,
} from 'components/FormikFields';

import {
  validationSchema,
  initialValues,
} from './FiltersAcitonSheet.formConfig';

import styles from './FiltersActionSheet.styles';

const FiltersActionSheet = ({ actionSheetRef }) => (
  <ActionSheet actionSheetRef={actionSheetRef}>
    <Formik validationSchema={validationSchema} initialValues={initialValues}>
      {() => (
        <>
          <View style={styles.inner}>
            <FormGroup>
              <FormikField
                name="noteType"
                controlProps={{ style: styles.groupItem }}
                component={SelectField}
                componentProps={{
                  placeholder: 'نوع الإشعار',
                }}
              />
              <FormikField
                name="invoiceType"
                controlProps={{ style: styles.groupItem }}
                component={SelectField}
                componentProps={{
                  placeholder: 'نوع الفاتورة',
                }}
              />
            </FormGroup>
            <FormGroup>
              <FormikField
                name="issueDateFrom"
                controlProps={{ style: styles.groupItem }}
                component={DatePickerInputField}
                componentProps={{
                  placeholder: 'الى',
                }}
              />
              <FormikField
                name="issueDateTo"
                controlProps={{ style: styles.groupItem }}
                component={DatePickerInputField}
                componentProps={{
                  placeholder: 'تاريخ إصدار الفاتورة من',
                }}
              />
            </FormGroup>

            <FormGroup>
              <FormikField
                name="totalAmountFrom"
                controlProps={{ style: styles.groupItem }}
                component={InputField}
                componentProps={{
                  startAdornment: (
                    <Typography style={styles.amountLabel}>د.أ</Typography>
                  ),
                  startAdornmentStyle: styles.amountLabelWrapper,
                  placeholder: 'الى',
                  autoCompleted: 'off',
                  autoCapitalize: 'none',
                  autoCorrect: false,
                }}
              />
              <FormikField
                name="totalAmountTo"
                controlProps={{ style: styles.groupItem }}
                component={InputField}
                componentProps={{
                  startAdornment: (
                    <Typography style={styles.amountLabel}>د.أ</Typography>
                  ),
                  startAdornmentStyle: styles.amountLabelWrapper,
                  placeholder: 'مبلغ الفاتورة من',
                  autoCompleted: 'off',
                  autoCapitalize: 'none',
                  autoCorrect: false,
                }}
              />
            </FormGroup>
            <FormGroup>
              <FormikField
                name="invoiceStatus"
                controlProps={{ style: styles.groupItem }}
                component={SelectField}
                componentProps={{
                  placeholder: 'محرر الفاتورة',
                }}
              />
              <FormikField
                name="activityNumber"
                controlProps={{ style: styles.groupItem }}
                component={SelectField}
                componentProps={{
                  placeholder: 'تسلسل مصدر الدخل',
                }}
              />
            </FormGroup>

            <FormikField
              name="username"
              controlProps={{ style: styles.groupItem }}
              component={SelectField}
              componentProps={{
                placeholder: 'حالة الفاتورة',
              }}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button style={styles.button}>تصفية</Button>
          </View>
        </>
      )}
    </Formik>
  </ActionSheet>
);

export default React.memo(FiltersActionSheet);
