// src/components/CosmeticsHeader/CosmeticsHeader.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCosmeticsCart } from "../../contexts/CosmeticsCartContext";
import { useTheme } from "../../contexts/ThemeContext";

const CosmeticsHeader = () => {
  const { getCartItemsCount } = useCosmeticsCart();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-white/20">
      <div className="container mx-auto px-3 md:px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Логотип - компактный на мобильных */}
          <Link to="/cosmetics" className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm md:text-lg">E</span>
            </div>
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent hidden sm:block">
              EQUA Beauty
            </span>
            <span className="text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent sm:hidden">
              Beauty
            </span>
          </Link>

          {/* Навигация - скрываем на мобильных */}
          <nav className="flex items-center gap-6 lg:gap-8">
            <a
              href="#products" // 👈 меняем на якорную ссылку
              className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors text-sm lg:text-base px-3 py-1 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("products")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Products
            </a>
          </nav>

          {/* Правая часть - компактная на мобильных */}
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
            {/* Переключение темы */}
            <button
              onClick={toggleTheme}
              className="p-1.5 md:p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors flex-shrink-0"
              aria-label="Toggle theme"
            >
              <span className="text-sm md:text-base">
                {theme === "light" ? "🌙" : "☀️"}
              </span>
            </button>

            {/* Корзина */}
            <Link
              to="/cosmetics-cart"
              className="relative p-1.5 md:p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors flex-shrink-0"
            >
              <span className="text-sm md:text-lg">🛒</span>
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-[10px] md:text-xs">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>

            {/* Кнопка назад - компактная на мобильных */}
            <Link
              to="/"
              className="px-2 py-1.5 md:px-3 md:py-2 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg transition-colors text-xs md:text-sm flex-shrink-0 whitespace-nowrap"
            >
              ← Back
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CosmeticsHeader;
