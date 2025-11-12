// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { useTheme } from "../../contexts/ThemeContext";
import CartIcon from "../CartIcon";
import lightLogo from "../../assets/website/logo-light.png";
import darkLogo from "../../assets/website/logo-dark.png";
import "./Navbar.css";

const linkStyles =
  "py-1 px-3 text-lg font-light transition duration-300 rounded-2xl";

export const Navbar = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Определяем цвета и классы в зависимости от темы
  const currentLogo = theme === "light" ? lightLogo : darkLogo;
  const navBgClass = theme === "light" ? "bg-gray-200" : "bg-slate-800";
  const navShadowClass = theme === "light" ? "shadow-md" : "shadow-lg";
  const navLinkColor =
    theme === "light"
      ? "text-gray-800 hover:bg-gray-300 hover:shadow-md"
      : "text-white hover:bg-slate-700 hover:shadow-md";

  const navMobileBg = theme === "light" ? "bg-gray-300" : "bg-slate-700";
  const burgerIconColor = theme === "light" ? "text-gray-800" : "text-white";

  const mobileLinkStyles =
    theme === "light"
      ? "w-full text-center py-3 text-lg font-light text-gray-800 hover:bg-gray-400 border-b border-gray-400 last:border-b-0 transition duration-300"
      : "w-full text-center py-3 text-lg font-light text-white hover:bg-slate-600 border-b border-slate-700 last:border-b-0 transition duration-300";

  return (
    <nav
      className={`${navBgClass} ${navShadowClass} fixed top-0 left-0 w-full z-50`}
      data-theme={theme}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        {/* Логотип */}
        <Link to="/">
          <img
            src={currentLogo}
            alt="Equa Shop Logo"
            style={{ height: "64px" }}
            className="object-contain rounded-xl shadow-md border-2 border-white/20 hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* ===== Desktop Menu ===== */}
        <div className="hidden md:flex items-center gap-5 neon-hover">
          <Link to="/" className={`${linkStyles} ${navLinkColor}`}>
            Home
          </Link>
          <Link to="/about" className={`${linkStyles} ${navLinkColor}`}>
            About
          </Link>
          <Link to="/contact" className={`${linkStyles} ${navLinkColor}`}>
            Contact
          </Link>
          <Link to="/products" className={`${linkStyles} ${navLinkColor}`}>
            Products
          </Link>

          {/* Ссылка на косметику с иконкой 💄 */}
          <Link
            to="/cosmetics"
            className={`${linkStyles} ${navLinkColor} flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600`}
          >
            <span>💄</span>
            <span>Beauty</span>
          </Link>

          <CartIcon />
          <ThemeSwitcher />
        </div>

        {/* ===== Mobile Burger ===== */}
        <div className="flex md:hidden items-center gap-3">
          <CartIcon />
          <ThemeSwitcher />
          <button
            className={`${burgerIconColor} text-3xl`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <HiMenu />
          </button>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } ${navMobileBg} shadow-xl neon-mobile`}
      >
        <div className="flex flex-col w-full">
          <Link to="/" className={mobileLinkStyles} onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" className={mobileLinkStyles} onClick={toggleMenu}>
            About
          </Link>
          <Link to="/contact" className={mobileLinkStyles} onClick={toggleMenu}>
            Contact
          </Link>
          <Link
            to="/products"
            className={mobileLinkStyles}
            onClick={toggleMenu}
          >
            Products
          </Link>

          {/* Ссылка на косметику в мобильном меню */}
          <Link
            to="/cosmetics"
            className={`${mobileLinkStyles} bg-gradient-to-r from-pink-500 to-purple-500 text-white`}
            onClick={toggleMenu}
          >
            💄 Beauty Line
          </Link>

          <Link to="/cart" className={mobileLinkStyles} onClick={toggleMenu}>
            🛒 Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};
