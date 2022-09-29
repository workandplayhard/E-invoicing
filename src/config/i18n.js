import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from 'locales/en.json';
import arTranslation from 'locales/ar.json';

export const initTranslations = () => {
  i18n.use(initReactI18next).init({
    lng: 'ar',
    fallbackLng: 'ar',
    resources: {
      en: {
        translation: enTranslation,
      },
      ar: {
        translation: arTranslation,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });
};

export default i18n;
