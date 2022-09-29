import * as Yup from 'yup';

export const validationSchema = t =>
  Yup.object().shape({
    taxNumber: Yup.string().required(t('login_form_validation_taxnumber')),
    username: Yup.string().required(t('login_form_validation_username')),
    password: Yup.string().required(t('login_form_validation_password')),
  });

export const initialValues = {
  taxNumber: '',
  username: '',
  password: '',
};

export default {
  initialValues,
  validationSchema,
};
