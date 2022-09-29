import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({});

export const initialValues = {
  noteType: '',
  activityNumber: '',
  invoiceType: '',
  invoiceStatus: '',
  issueDateFrom: '',
  issueDateTo: '',
  totalAmountFrom: '',
  totalAmountTo: '',
  username: '',
};

export default {
  initialValues,
  validationSchema,
};
