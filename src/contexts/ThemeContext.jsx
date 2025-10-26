import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Загружаем тему из localStorage, если она есть
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    // Обновляем атрибут data-theme на html
    document.documentElement.setAttribute("data-theme", theme);
    // Сохраняем выбор
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
