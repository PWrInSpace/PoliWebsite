import Cookies from "js-cookie";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en/defaults.json";
import pl from "./pl/defaults.json";
import localConfig from "../../../vite.local.config";

export const initializeI18n = () => {
  const langCookieKey = "i18next";
  const storedLang = Cookies.get(langCookieKey) ?? "pl";

  i18n.use(LanguageDetector).init({
    fallbackLng: "pl",
    resources: {
      en: { translation: en },
      pl: { translation: pl },
    },
    lng: storedLang,
    detection: {
      lookupCookie: langCookieKey,
      caches: ["cookie"],
      cookieMinutes: 60 * 24 * 30,
    },
  });

  window.__ = (str: string) => i18n.t(str);
  window.classes = (...args: string[]) => args.join(" ");
};
