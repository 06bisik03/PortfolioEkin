import { ReactNode, useLayoutEffect, useMemo, useState } from "react";
import { initialTheme, persistTheme, ThemeContext, type Theme } from "./theme";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "day" ? "night" : "day";
      persistTheme(nextTheme);
      return nextTheme;
    });
  };

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
