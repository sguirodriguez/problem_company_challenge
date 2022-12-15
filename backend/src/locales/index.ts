import pt_BR from "./languages/pt_BR.json";
import en_US from "./languages/en_US.json";

const TranslatorLanguage = (locale?: string) => {
  const locales: any = {
    pt_BR,
    en_US,
  };

  const hasLocale = locale === "null" ? undefined : locale;

  return locales[hasLocale || process.env.DEFAULT_LANGUAGE || "pt_BR"];
};

export default TranslatorLanguage;
