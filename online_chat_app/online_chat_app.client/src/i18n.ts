import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { cn, en } from "./language_pack";

const resources = {
  en: {
    translation: en,
  },
  cn: {
    translation: cn,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "cn",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
