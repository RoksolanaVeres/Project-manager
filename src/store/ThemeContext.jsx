import { createContext, useEffect, useState } from "react";
const themeStorageKey = "theme";

export const ThemeContext = createContext(null);

export default function ThemeContextProvider({ children }) {
  const storedTheme = localStorage.getItem(themeStorageKey);
  const [theme, setTheme] = useState(storedTheme || "light");

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  useEffect(() => {
    localStorage.setItem(themeStorageKey, theme);
    const root = document.documentElement;
    root.setAttribute("class", theme);
  }, [theme]);

  const value = { theme, toggleTheme, isDark: theme === "dark" };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
