import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enJson from "./src/locales/en.json";
import arJson from "./src/locales/ar.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: { ...enJson },
      },
      ar: {
        translation: { ...arJson },
      },
    },
  });

export default i18n;
