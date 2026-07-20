import { LuMoonStar, LuSun } from "react-icons/lu";
import { useLanguage } from "../i18n";
import { useTheme } from "../theme";

const ThemeToggle = () => {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const label = theme === "night" ? t.header.enableDay : t.header.enableNight;

  return (
    <button
      className="theme-toggle"
      type="button"
      data-theme={theme}
      aria-label={label}
      title={label}
      onClick={toggleTheme}
    >
      <LuMoonStar className="theme-moon" aria-hidden="true" />
      <LuSun className="theme-sun" aria-hidden="true" />
    </button>
  );
};

export default ThemeToggle;
