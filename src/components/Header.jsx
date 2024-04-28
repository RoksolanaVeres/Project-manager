// hooks
import { useState } from "react";

// components
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleOpenMenu() {
    setMenuIsOpen(true);
  }

  function handleCloseMenu() {
    setMenuIsOpen(false);
  }
  return (
    <header className="flex justify-between p-8 md:justify-end">
      {menuIsOpen && (
        <div className="md:hidden" onClick={handleCloseMenu}>
          Close
        </div>
      )}
      {!menuIsOpen && (
        <div className="md:hidden" onClick={handleOpenMenu}>
          Projects
        </div>
      )}
      <ThemeSwitcher />
    </header>
  );
}
