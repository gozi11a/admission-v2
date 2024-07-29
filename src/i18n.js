import i18n from "i18next";
import { initReactI18next, Translation } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: uz,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    uz: {
      translation: {
        link1: "UY",
      },
    },
    en: {
      translation: {
        link1: "Home",
      },
    },
    ru: {
      translation: {
        link1: "doma",
      },
    },
  },
});


export default i18n;
