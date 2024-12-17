import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./en.json";
import frTranslations from "./fr.json";
import arTranslations from "./ar.json";
import esTranslations from "./es.json";

const resources = {
  en: {
    translation: enTranslations,
  },
  fr: {
    translation: frTranslations,
  },
  ar: {
    translation: arTranslations,
  },
  es: {
    translation: esTranslations,
  },
};

i18n.use(initReactI18next).init(
  {
    resources: resources,
    lng: "fr",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
      ],
      caches: ["localStorage", "cookie"],
    },
  },
  (err, t) => {
    if (i18n.language === "ar") {
      document.body.classList.add("rtl");
    } else {
      document.body.classList.remove("rtl");
    }
  }
);

export default i18n;
