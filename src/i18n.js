import i18n from "i18next";
import { initReactI18next, Translation } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    uz: {
      translation: {},
    },
    en: {},
    ru: {},
  },
});

export default i18n;
