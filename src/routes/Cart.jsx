// src/routes/Cart.jsx
import React from "react";
import { useCart } from "../contexts/CartContext";
import { useTheme } from "../contexts/ThemeContext";

const Cart = () => {
  const { cartItems, totalItems, totalPrice } = useCart();
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen pt-20 px-4 ${
        theme === "light" ? "bg-gray-50" : "bg-slate-900"
      }`}
    >
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Корзина покупок</h1>

        {totalItems === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl mb-4">🛒 Ваша корзина пуста</p>
            <p className="text-gray-600 dark:text-gray-400">
              Добавьте товары из раздела "Products"
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6 p-4 bg-white dark:bg-slate-800 rounded-lg shadow">
              <p className="text-lg">
                Товаров: <strong>{totalItems}</strong>
              </p>
              <p className="text-lg">
                Сумма: <strong>${totalPrice?.toFixed(2) || "0.00"}</strong>
              </p>
            </div>

            {/* Список товаров */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow"
                >
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>Количество: {item.quantity}</p>
                  <p>Цена: ${item.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
