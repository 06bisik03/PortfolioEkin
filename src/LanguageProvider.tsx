import { ReactNode, useEffect, useMemo, useState } from "react";
import {
  initialLanguage,
  LanguageContext,
  languageFromUrl,
  persistLanguage,
  translations,
  updateLanguageUrl,
  type Language,
} from "./i18n";

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    updateLanguageUrl(nextLanguage);
    persistLanguage(nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
    document.title = translations[language].meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", translations[language].meta.description);
  }, [language]);

  useEffect(() => {
    const syncLanguageFromHistory = () => {
      const nextLanguage = languageFromUrl() ?? "en";
      setLanguageState(nextLanguage);
    };

    window.addEventListener("popstate", syncLanguageFromHistory);
    return () => window.removeEventListener("popstate", syncLanguageFromHistory);
  }, []);

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language] }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
