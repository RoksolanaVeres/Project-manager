// hooks
import { useContext } from "react";

// contexts
import { ThemeContext } from "@/store/ThemeContext";

// components
import { Within } from "@theme-toggles/react";
import "@theme-toggles/react/css/Within.css";

export default function ThemeSwitcher() {
  const { toggleTheme, isDark } = useContext(ThemeContext);
  return (
    <div id="theme-switcher">
      <Within
        duration={300}
        onToggle={toggleTheme}
        toggled={isDark}
        className="text-3xl"
      />
    </div>
  );
}
