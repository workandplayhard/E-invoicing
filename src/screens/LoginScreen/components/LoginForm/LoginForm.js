import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import { Button } from 'components/shared/Button';
import { Typography } from 'components/shared/Typography';
import { FormikField } from 'components/shared/FormikField';
import { Link } from 'components/shared/Link';

import { InputField, PasswordField } from 'components/FormikFields';

import { initialValues, validationSchema } from './LoginForm.formConfig';

import styles from './LoginForm.styles';

console.log(PasswordField);

const LoginForm = ({ onSubmit }) => {
  const { t } = useTranslation();

  return (
    <Formik
      validateOnMount
      enableReinitialize
      validationSchema={validationSchema(t)}
      initialValues={initialValues}
      onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <View style={styles.form}>
          <Typography style={styles.title} weight="bold">
            تسجيل الدخول
          </Typography>
          <FormikField
            name="taxNumber"
            label="الرقم الضريبى"
            component={InputField}
            componentProps={{
              fieldStyle: styles.input,
              autoCompleted: 'off',
              autoCapitalize: 'none',
              autoCorrect: false,
            }}
          />
          <FormikField
            name="username"
            label="اسم المستخدم"
            component={InputField}
            componentProps={{
              fieldStyle: styles.input,
              autoCompleted: 'off',
              autoCapitalize: 'none',
              autoCorrect: false,
            }}
          />
          <FormikField
            name="password"
            label="كلمة المرور"
            component={PasswordField}
            componentProps={{
              fieldStyle: styles.input,
              autoCompleted: 'off',
              autoCapitalize: 'none',
              autoCorrect: false,
            }}
          />
          <Link style={styles.link}>هل نسيت كلمة المرور ؟</Link>
          <Button style={styles.button} onPress={handleSubmit}>
            دخول
          </Button>
        </View>
      )}
    </Formik>
  );
};

export default React.memo(LoginForm);
