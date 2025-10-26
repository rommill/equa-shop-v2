import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { HiSun, HiMoon } from "react-icons/hi";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        p-2 rounded-full transition duration-300 flex-shrink-0
        ${
          theme === "dark"
            ? "bg-slate-700 text-yellow-300 hover:bg-slate-600 hover:shadow-md hover:shadow-yellow-300/50" // Неоновое свечение для темной темы (желтое солнце)
            : "bg-gray-200 text-orange-500 hover:bg-gray-300 hover:shadow-md hover:shadow-orange-400/50" // Неоновое свечение для светлой темы (оранжевая луна)
        }
      `}
      aria-label="Toggle theme"
    >
      {/* Условный рендеринг иконки */}
      {theme === "dark" ? (
        <HiSun className="w-6 h-6" />
      ) : (
        <HiMoon className="w-6 h-6" />
      )}
    </button>
  );
};
