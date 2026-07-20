import { CSSProperties } from "react";
import { languages, useLanguage } from "../i18n";

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();
  const activeIndex = languages.findIndex(({ code }) => code === language);
  const style = { "--language-index": activeIndex } as CSSProperties;

  return (
    <div
      className="language-switcher"
      style={style}
      role="radiogroup"
      aria-label={t.header.languageLabel}
    >
      <span className="language-indicator" aria-hidden="true" />
      {languages.map(({ code, flag, name }) => (
        <button
          key={code}
          type="button"
          role="radio"
          aria-checked={language === code}
          aria-label={name}
          title={name}
          onClick={() => setLanguage(code)}
        >
          <span aria-hidden="true">{flag}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
