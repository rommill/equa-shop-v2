// src/routes/Cart.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useTheme } from "../contexts/ThemeContext";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Cart = () => {
  const {
    items: cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
  } = useCart();
  const { theme } = useTheme();

  console.log("🛒 All cart items:", cartItems);

  const totalItems = getCartItemsCount();
  const totalPrice = getCartTotal();

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20">
              <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🛒</span>
                <ScrollToTop />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Discover our amazing products and add them to your cart
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <span>Start Shopping</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 pt-20 pb-8">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Левая часть - товары */}
          <div className="lg:w-2/3">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-4 md:p-6 shadow-2xl border border-white/20">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Shopping Cart ({totalItems}{" "}
                  {totalItems === 1 ? "item" : "items"})
                </h1>
                <button
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-600 font-medium transition-colors"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-4 bg-white dark:bg-slate-700 rounded-2xl border border-gray-100 dark:border-slate-600"
                  >
                    {/* Изображение товара */}
                    <div className="w-16 h-16 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

                    {/* Информация о товаре */}
                    <div className="flex-grow min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-gray-800 dark:text-white mb-1 truncate">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 truncate">
                            {item.category}
                          </p>
                          <div className="text-blue-500 font-bold text-lg">
                            {item.price}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Управление количеством и удаление */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.type,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="w-7 h-7 rounded-full bg-gray-100 dark:bg-slate-600 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-500 transition-colors text-sm"
                        >
                          <span>−</span>
                        </button>

                        <span className="w-6 text-center font-semibold text-gray-800 dark:text-white text-sm">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.type,
                              item.quantity + 1
                            )
                          }
                          className="w-7 h-7 rounded-full bg-gray-100 dark:bg-slate-600 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-500 transition-colors text-sm"
                        >
                          <span>+</span>
                        </button>
                      </div>

                      {/* Удалить товар */}
                      <button
                        onClick={() => removeFromCart(item.id, item.type)}
                        className="p-1 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                        aria-label="Remove item"
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
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Правая часть - итоги */}
          <div className="lg:w-1/3">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/20 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Subtotal</span>
                  <span>${totalPrice?.toFixed(2) || "0.00"}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Shipping</span>
                  <span className="text-green-500">FREE</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Tax</span>
                  <span>${((totalPrice || 0) * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 dark:border-slate-600 pt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-800 dark:text-white">
                    <span>Total</span>
                    <span>${((totalPrice || 0) * 1.1).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-500 text-white py-4 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 mb-4">
                Proceed to Checkout
              </button>

              <Link
                to="/"
                className="w-full text-center block border-2 border-blue-500 text-blue-500 py-3 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
