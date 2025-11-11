// В CosmeticsHeader.jsx - ИСПРАВИМ ОТОБРАЖЕНИЕ КОРЗИНЫ
import React from "react";
import { Link } from "react-router-dom";
import { useCosmeticsCart } from "../../contexts/CosmeticsCartContext";
import { useTheme } from "../../contexts/ThemeContext";

const CosmeticsHeader = () => {
  const { theme, toggleTheme } = useTheme();
  const { getCartItemsCount } = useCosmeticsCart();

  // Безопасное получение количества товаров
  const cartItemsCount = getCartItemsCount ? getCartItemsCount() : 0;

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Логотип EQUA Beauty */}
          <Link to="/cosmetics" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:from-pink-600 group-hover:to-purple-600 shadow-lg group-hover:shadow-xl">
                <span className="text-white font-bold text-sm transition-transform duration-500 group-hover:scale-125">
                  EB
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10 group-hover:scale-125"></div>
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-white transition-all duration-300 group-hover:tracking-wider">
              EQUA{" "}
              <span className="text-pink-500 group-hover:text-pink-600 transition-colors duration-300">
                Beauty
              </span>
            </span>
          </Link>

          {/* Навигация */}
          <nav className="hidden md:flex gap-6">
            <Link
              to="/"
              className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors font-medium hover:scale-105 transform duration-300 flex items-center gap-1"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </Link>
          </nav>

          {/* Действия */}
          <div className="flex items-center gap-4">
            {/* Переключатель темы */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-110"
              aria-label="Toggle theme"
            >
              <span className="text-lg">{theme === "light" ? "🌙" : "☀️"}</span>
            </button>

            {/* Корзина - ФИКСИРУЕМ ОТОБРАЖЕНИЕ */}
            <Link
              to="/cosmetics-cart"
              className="relative p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-10 h-10"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>

              {/* Бейдж с количеством товаров - ФИКСИРУЕМ УСЛОВИЕ */}
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">
                  {cartItemsCount > 99 ? "99+" : cartItemsCount}
                </span>
              )}
            </Link>

            {/* Кнопка в главный магазин */}
            <Link
              to="/"
              className="group relative flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Main Store
              </span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CosmeticsHeader;
