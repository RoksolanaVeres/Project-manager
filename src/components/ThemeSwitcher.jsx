import { Within } from "@theme-toggles/react";
import "@theme-toggles/react/css/Within.css";
import { ThemeContext } from "@/store/ThemeContext";
import { useContext } from "react";

export default function ThemeSwitcher() {
  const { toggleTheme, isDark } = useContext(ThemeContext);
  return (
    <div id="theme-switcher" className="flex justify-end">
      <Within duration={300} onToggle={toggleTheme} toggled={isDark} className="text-3xl" />
    </div>
  );
}
