import * as Yup from 'yup';
import { v4 as uuid } from 'uuid';

import { INVOICE_TYPES_ENUM } from 'constants/common';

import { defaultItemData } from './constants';

import { calculateTotalAmountAfterTaxes } from './helpers';

export const validationSchema = ({ t, invoiceType, edit }) => {
  const defaultShape = {
    issueDate: Yup.string().required(
      t('create_invoice_validation_issue_date_required'),
    ),
    invoiceNumber: Yup.string().required(
      t('create_invoice_validation_invoice_number_required'),
    ),
    tempItem: Yup.object().when(['items'], (items, schema) => {
      return items.length >= 1
        ? schema.shape({
            generalTaxPercentage: Yup.object(),
            discountAmount: Yup.string().ensure(),
            // .matches(/^[1-9]\d*(\.\d+)?$/, 'only digits with decimal valid'),
            unitPrice: Yup.string().ensure(),
            // .matches(/^[1-9]\d*(\.\d+)?$/, 'only digits with decimal valid'),
            quantity: Yup.string().ensure(),
            // .matches(/^\d*[1-9]\d*$/, 'only positive digits valid'),
            description: Yup.string().ensure(),
            type: Yup.object(),
          })
        : schema.shape({
            generalTaxPercentage: Yup.object().required(
              'Item tax percentage is required.',
            ),
            discountAmount: Yup.string()
              .ensure()
              .matches(
                /^[1-9]\d*(\.\d+)?$/,
                t('create_invoice_validation_discount_allownece'),
              ),
            unitPrice: Yup.string()
              .required(t('create_invoice_validation_unit_price_required'))
              .matches(
                /^[1-9]\d*(\.\d+)?$/,
                t('create_invoice_validation_unit_price_allownece'),
              ),
            quantity: Yup.string()
              .ensure()
              .when(['type'], (type, quantitySchema) => {
                return type?.value === 'PRODUCT'
                  ? quantitySchema
                      .required(
                        t('create_invoice_validation_quantity_required'),
                      )
                      .matches(
                        /^\d*[1-9]\d*$/,
                        t('create_invoice_validation_quantity_allownece'),
                      )
                  : quantitySchema;
              }),
            description: Yup.string().required(
              t('create_invoice_validation_description_required'),
            ),
            type: Yup.object().required('Item type is required.'),
          });
    }),
  };

  if (edit) {
    defaultShape.reasonOfNote = Yup.string().required(
      t('create_invoice_validation_reason_of_note_required'),
    );
  }

  const buyerShapeRequired = {
    buyer: Yup.object().shape({
      name: Yup.string()
        .required(t('create_invoice_validation_buyer_name_required'))
        .matches(
          /^[aA-zZ\s]+$/,
          t('create_invoice_validation_buyer_name_allownece'),
        ),
      postalCode: Yup.string()
        .required('Buyer postal code is required')
        .matches(
          /^\d{1,5}$/,
          t('create_invoice_validation_postal_code_allownece'),
        ),
      phoneNumber: Yup.string()
        .required(t('create_invoice_validation_mobile_number_required'))
        .matches(
          /^[+]?\d{0,14}$/,
          t('create_invoice_validation_mobile_number_allownece'),
        ),
      province: Yup.object().required(
        t('create_invoice_validation_province_required'),
      ),
      additionalBuyerIdType: Yup.object().required(
        t('create_invoice_validation_additional_buyer_id_type_required'),
      ),
      additionalBuyerId: Yup.string()
        .required(t('create_invoice_validation_additional_buyer_id_required'))
        .when(
          ['additionalBuyerIdType'],
          (additionalBuyerIdType, additionalBuyerIdTypeSchema) => {
            if (additionalBuyerIdType?.value === 'NATIONAL_ID_NUMBER') {
              return additionalBuyerIdTypeSchema.matches(
                /^\d{10}$/,
                t('create_invoice_validation_national_id_allownece'),
              );
            }
            if (additionalBuyerIdType?.value === 'PERSONAL_NUMBER') {
              return additionalBuyerIdTypeSchema.matches(
                /^\d{10}$/,
                t('create_invoice_validation_personal_number_allownece'),
              );
            }
            if (additionalBuyerIdType?.value === 'TAXPAYER_NUMBERS') {
              return additionalBuyerIdTypeSchema.matches(
                /^\d{8}$/,
                t('create_invoice_validation_taxpayer_number_allownece'),
              );
            }
            if (additionalBuyerIdType?.value === 'SERIAL_INCOME_NUMBER') {
              return additionalBuyerIdTypeSchema.matches(
                /^\d{7}$/,
                t('create_invoice_validation_income_serial_number_allownece'),
              );
            }
            return additionalBuyerIdTypeSchema;
          },
        ),
      // .matches(/^[0-9]{10}$/, 'only 10 digits valid'),
    }),
  };

  if (
    invoiceType === INVOICE_TYPES_ENUM.RECEIVABLE_INCOME ||
    invoiceType === INVOICE_TYPES_ENUM.RECEIVABLE_GENERAL_TAX ||
    invoiceType === INVOICE_TYPES_ENUM.RECEIVABLE_SPECIAL_TAX
  ) {
    return Yup.object().shape({
      ...defaultShape,
      ...buyerShapeRequired,
    });
  } else {
    return Yup.object().when('items', (items, schema) => {
      const invoiceTotal = items ? calculateTotalAmountAfterTaxes(items) : 0;

      if (invoiceTotal >= 10000) {
        return schema.shape({
          ...defaultShape,
          ...buyerShapeRequired,
        });
      } else {
        return Yup.object().shape({
          ...defaultShape,
          buyer: Yup.object().shape({
            name: Yup.string()
              .ensure()
              .test(
                'usernameValidation',
                t('create_invoice_validation_buyer_name_allownece'),
                value => {
                  if (!value) {
                    return true;
                  }

                  const regex = new window.RegExp(/^[aA-zZ\s]+$/);

                  return regex.test(value);
                },
              ),
            postalCode: Yup.string()
              .ensure()
              .matches(
                /^\d{0,5}$/,
                t('create_invoice_validation_postal_code_allownece'),
              ),
            phoneNumber: Yup.string()
              .ensure()
              .matches(
                /^[+]?\d{0,14}$/,
                t('create_invoice_validation_mobile_number_allownece'),
              ),
            // .max(9, 'Buyer phone number need to be equal to 9'),
            province: Yup.object(),
            additionalBuyerIdType: Yup.object(),

            additionalBuyerId: Yup.string()
              .ensure()
              .when(
                ['additionalBuyerIdType'],
                (additionalBuyerIdType, additionalBuyerIdTypeSchema) => {
                  if (additionalBuyerIdType?.value === 'NATIONAL_ID_NUMBER') {
                    return additionalBuyerIdTypeSchema.matches(
                      /^\d{10}$/,
                      t('create_invoice_validation_national_id_allownece'),
                    );
                  }
                  if (additionalBuyerIdType?.value === 'PERSONAL_NUMBER') {
                    return additionalBuyerIdTypeSchema.matches(
                      /^\d{10}$/,
                      t('create_invoice_validation_personal_number_allownece'),
                    );
                  }
                  if (additionalBuyerIdType?.value === 'TAXPAYER_NUMBERS') {
                    return additionalBuyerIdTypeSchema.matches(
                      /^\d{8}$/,
                      t('create_invoice_validation_taxpayer_number_allownece'),
                    );
                  }
                  if (additionalBuyerIdType?.value === 'SERIAL_INCOME_NUMBER') {
                    return additionalBuyerIdTypeSchema.matches(
                      /^\d{7}$/,
                      t(
                        'create_invoice_validation_income_serial_number_allownece',
                      ),
                    );
                  }
                  return additionalBuyerIdTypeSchema;
                },
              ),
          }),
        });
      }
    });
  }
};

export const getEditInvoiceInitialValues = ({
  userInvoices,
  user,
  invoiceNumber,
}) => ({
  issueDate: '',
  invoiceNumber,
  buyerInvoiceNumber: '',
  originalInvoiceNumber: '',
  originalInvoiceTotal: '',
  // originalInvoiceNumber: userInvoices
  //   ? {
  //       label: userInvoices[0]?.invoiceNumber,
  //       value: userInvoices[0]?.invoiceNumber,
  //     }
  //   : '',
  // originalInvoiceTotal: userInvoices ? userInvoices[0]?.totalAmount : '',
  reasonOfNote: '',
  noteType: '',
  seller: {
    taxNumber: user.taxNumber,
    activityNumber: user.activityNumber,
    postalCode: user.postalCode,
    phoneNumber: user.phoneNumber,
    name: user.name,
    country: user.country?.name,
  },
  buyer: {
    name: '',
    postalCode: '',
    phoneNumber: '',
    province: '',
    additionalBuyerIdType: '',
    additionalBuyerId: '',
  },
  tempItem: {
    id: uuid(),
    ...defaultItemData,
  },
  items: [],
  notes: '',
});

export const getNewInvoiceInitialValues = ({ user, invoiceNumber }) => ({
  issueDate: '',
  invoiceNumber,
  buyerInvoiceNumber: '',
  seller: {
    taxNumber: user.taxNumber,
    activityNumber: user.activityNumber,
    postalCode: user.postalCode,
    phoneNumber: user.phoneNumber,
    name: user.name,
    country: user.country?.name,
  },
  buyer: {
    name: '',
    postalCode: '',
    phoneNumber: '',
    province: '',
    additionalBuyerIdType: '',
    additionalBuyerId: '',
  },
  tempItem: {
    id: uuid(),
    ...defaultItemData,
  },
  items: [],
  notes: '',
});

export default {
  getNewInvoiceInitialValues,
  getEditInvoiceInitialValues,
  validationSchema,
};
