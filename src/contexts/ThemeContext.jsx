// src/contexts/ThemeContext.jsx - ОБНОВИМ существующий
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Загружаем тему из localStorage при загрузке
  useEffect(() => {
    const savedTheme = localStorage.getItem("equa-shop-theme") || "light";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  // Применяем тему к документу
  const applyTheme = (theme) => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  // Функция переключения темы
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("equa-shop-theme", newTheme);
    applyTheme(newTheme);
  };

  const value = {
    theme,
    setTheme: (newTheme) => {
      setTheme(newTheme);
      localStorage.setItem("equa-shop-theme", newTheme);
      applyTheme(newTheme);
    },
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
