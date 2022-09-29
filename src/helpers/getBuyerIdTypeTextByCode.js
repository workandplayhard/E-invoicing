export const getBuyerIdTypeTextByCode = code => {
  switch (code) {
    case 'NATIONAL_ID_NUMBER': {
      return 'الرقم الوطني';
    }
    case 'PERSONAL_NUMBER': {
      return 'الرقم الشخصي';
    }
    case 'TAXPAYER_NUMBERS': {
      return 'الرقم الضريبي';
    }
    case 'SERIAL_INCOME_NUMBER': {
      return 'تسلسل المبيعات';
    }
    default: {
      return '-';
    }
  }
};
