import React from "react";
import en_US from "../locales/en_US";
import pt_BR from "../locales/pt_BR";
import { createContext, useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
const TranslateContext = createContext();

// eslint-disable-next-line react/prop-types
export function TranslateWrapper({ children }) {
  const [cookies] = useCookies(["language"]);
  const language = cookies?.language;

  const locales = {
    en_US,
    pt_BR,
  };

  const translateLanguage = locales[language || "en_US"];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [cookies?.language]);

  return (
    <TranslateContext.Provider value={translateLanguage}>
      {children}
    </TranslateContext.Provider>
  );
}

export function useTranslateContext() {
  return useContext(TranslateContext);
}

export function GetLanguageForUser() {
  const locale = getCookie("language");

  return locale || "pt_BR";
}

async function getCookie(name) {
  let arrayCookies = {};

  arrayCookies = document.cookie.split(";");
  const cookie = await arrayCookies?.filter((item) => item?.includes(name));
  const cookieRepair = cookie?.[0]?.split("=");
  return cookieRepair?.[1] ? cookieRepair?.[1] : null;
}
