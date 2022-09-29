export const getInvoiceStatusTextByCode = code => {
  switch (code) {
    case 'ACTIVE': {
      return 'موافق عليه';
    }
    case 'CANCELED': {
      return 'ملغي';
    }
  }
};

export const getInvoiceNoteTypeTextByCode = code => {
  switch (code) {
    case 'DEBIT_INVOICE': {
      return 'مدين';
    }
    case 'CREDIT_INVOICE': {
      return 'دائن';
    }
  }
};

export const getInvoiceTypeTextByCode = code => {
  switch (code) {
    case 'CASH_INCOME':
    case 'CASH_GENERAL_TAX':
    case 'CASH_SPECIAL_TAX': {
      return 'فاتورة نقدية';
    }
    case 'RECEIVABLE_INCOME':
    case 'RECEIVABLE_GENERAL_TAX':
    case 'RECEIVABLE_SPECIAL_TAX': {
      return 'فاتورة ذمم';
    }
  }
};
