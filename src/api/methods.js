import axios from 'axios';
import { v4 as uuid } from 'uuid';
import format from 'date-fns/format';
import parse from 'date-fns/parse';

import { TOKEN_KEY } from 'constants/common';

// import i18n from 'config/i18n';

import { getBuyerIdTypeTextByCode } from 'helpers/getBuyerIdTypeTextByCode';

export const getTaxNumber = token =>
  fetch('https://einvoicing-jordan.agiletz.com/on-boarding/get-tax-number', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());

export const getNextInvoiceNumber = () =>
  axios.get(
    'https://einvoicing-jordan.agiletz.com/sme/invoices/next-tax-number',
  );

export const getUserInfo = () =>
  axios.get('https://einvoicing-jordan.agiletz.com/users/').then(response => {
    // const language = i18n.language;
    const language = 'ar';

    return {
      activityNumber: response.activitiesList[0]?.activity || '-',
      country: response.countryDTO
        ? {
            code: response.countryDTO?.countryCode,
            name:
              language === 'en'
                ? response.countryDTO?.countryNameEn
                : response.countryDTO?.countryNameAr,
          }
        : '-',
      username: response.userName || '-',
      name: response.name || '-',
      invoiceTypeNumber: response.invoiceType, // 0 - INCOME_TAX 1 - GENERAL_TAX 2 - SPECIAL_TAX
      // invoiceType: '2',
      role: response.role,
      phoneNumber: response.phoneNumber || '-',
      postalCode: response.postalCode || '-',
      taxNumber: response.taxNumber || '-',
    };
  });

export const loginUser = data =>
  axios
    .post('https://einvoicing-jordan.agiletz.com/users/login/user', data)
    .then(response => ({
      token: response.access_token,
      role: response.role,
    }));

export const getAllActivities = () =>
  axios.get('https://einvoicing-jordan.agiletz.com/users/user/activities/');

export const getAllInvoices = () => {
  // const token = localStorage.getItem(TOKEN_KEY); // TODO
  const token = '';

  return fetch('https://einvoicing-jordan.agiletz.com/sme/invoices/', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => ({
      generatedThisYear: data.generatedThisYear,
      generatedInvoices: data.generatedInvoices,
      generatedNotes: data.generatedNotes,
      invoices: data.invoiceList.map(invoice => ({
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
    }));
};

export const submitInvoice = data =>
  axios
    .post('https://einvoicing-jordan.agiletz.com/sme/invoices/', data)
    .then(response => ({
      invoiceId: response.invoiceUniqueIdentifier,
      invoiceNumber: response.invoiceNumber,
    }));

export const getInvoiceById = ({ invoiceId, invoiceNumber }) => {
  // const token = localStorage.getItem(TOKEN_KEY); // TODO
  // const language = i18n.language;
  const token = '';
  const language = 'ar';

  return fetch(
    `https://einvoicing-jordan.agiletz.com/sme/invoices/${invoiceId}/${invoiceNumber}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  )
    .then(response => response.json())
    .then(invoice => ({
      id: invoice.invoiceUniqueIdentifier,
      invoiceType: invoice.invoiceTypeCode,
      invoiceStatus: invoice.invoiceStatus,
      invoiceNumber: invoice.invoiceNumber,
      buyerInvoiceNumber: invoice.buyerInvoiceNumber,
      originalInvoiceNumber: invoice.originalInvoiceNumber,
      noteType: invoice.noteType,
      reasonOfNote: invoice.reasonOfNote,
      issueDate: format(
        parse(invoice.issueDate, 'dd-MM-yyyy', new Date()),
        'dd/MM/yyyy',
      ),
      qrCodeImage: invoice.qrCodeImage,
      seller: {
        name: invoice?.sellerDTO?.name,
        phoneNumber: invoice?.sellerDTO?.mobileNumber,
        postalCode: invoice?.sellerDTO?.postalCode,
        taxNumber: invoice?.sellerDTO?.taxNumber,
        activityNumber: invoice?.activityDTO?.activity,
        country:
          language === 'en'
            ? invoice?.sellerDTO?.countryDTO?.countryNameEn
            : invoice?.sellerDTO?.countryDTO?.countryNameAr,
      },
      buyer: {
        name: invoice?.buyerDTO?.buyerName,
        phoneNumber: invoice?.buyerDTO?.phoneNumber,
        postalCode: invoice?.buyerDTO?.postalCode,
        buyerId: invoice?.buyerDTO?.additionalBuyerId,
        buyerIdType: getBuyerIdTypeTextByCode(
          invoice?.buyerDTO?.additionalBuyerIdType,
        ),
        province:
          language === 'en'
            ? invoice?.buyerDTO?.provinceDTO?.provinceNameEn
            : invoice?.buyerDTO?.provinceDTO?.provinceNameAr,
      },
      items: invoice.invoiceItemDTOList
        ? invoice.invoiceItemDTOList.map(item => ({
            id: uuid(),
            type: item.invoiceItemType,
            totalAmountAfterTaxes: item.totalAmountAfterTaxes,
            generalTaxAmount: item.generalTaxAmount,
            generalTaxPercentage: item.generalTaxPercentage,
            totalAmountAfterDiscount: item.totalAmountAfterDiscount,
            discountAmount: item.discountAmount,
            subtotalAmount: item.subtotalAmount,
            unitPrice: item.unitPrice,
            quantity: item.quantity,
            description: item.productDescription,
          }))
        : [],
      totalAmountExcludingTaxes: invoice.totalAmountExcludingTaxes,
      totalDiscountsAmount: invoice.totalDiscountsAmount,
      totalGeneralTaxesAmount: invoice.totalGeneralTaxesAmount,
      totalPayableAmount: invoice.totalPayableAmount,
      notes: invoice.notes,
    }));
};

export const getInvoicePDF = ({ invoiceId, invoiceNumber }) => {
  // const token = localStorage.getItem(TOKEN_KEY); // TODO
  const token = '';

  return fetch(
    `https://einvoicing-jordan.agiletz.com/pdf/${invoiceId}/${invoiceNumber}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  ).then(response => response.json());
};

export const getUserInvoices = () =>
  axios
    .get(
      'https://einvoicing-jordan.agiletz.com/sme/invoices/original-invoices/',
    )
    .then(response => {
      console.log(response);

      return response;
    });
