import { createContext, useContext } from "react";

export type Theme = "day" | "night";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

const storageKey = "bei-theme";

export const initialTheme = (): Theme => {
  try {
    return window.localStorage.getItem(storageKey) === "night" ? "night" : "day";
  } catch {
    return "day";
  }
};

export const persistTheme = (theme: Theme) => {
  try {
    window.localStorage.setItem(storageKey, theme);
  } catch {
    // Theme switching still works for the current session.
  }
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
};
