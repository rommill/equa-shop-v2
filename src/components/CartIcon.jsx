// src/components/CartIcon.jsx
import React from "react";
import { useCart } from "../contexts/CartContext";
import { useTheme } from "../contexts/ThemeContext";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const { getCartItemsCount } = useCart(); // 👈 Используем эту функцию
  const { theme } = useTheme();

  const totalItems = getCartItemsCount(); // 👈 Получаем количество товаров

  const iconColor = theme === "light" ? "text-gray-800" : "text-white";
  const counterBg = theme === "light" ? "bg-sky-500" : "bg-pink-500";

  return (
    <Link
      to="/cart"
      className={`relative p-2 rounded-full ${iconColor} transition duration-300`}
    >
      <HiOutlineShoppingBag className="w-7 h-7" />

      {/* Счетчик товаров */}
      {totalItems > 0 && (
        <span
          className={`absolute -top-1 -right-1 flex items-center justify-center 
                      w-5 h-5 text-xs font-bold text-white rounded-full 
                      ${counterBg}`}
        >
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartIcon; // 👈 Экспортируем как default
