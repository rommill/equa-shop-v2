// src/routes/CosmeticsCart.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCosmeticsCart } from "../contexts/CosmeticsCartContext";
import Footer from "../components/Footer/Footer";

const CosmeticsCart = () => {
  const {
    items: cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
  } = useCosmeticsCart();

  const totalItems = getCartItemsCount();
  const totalPrice = getCartTotal();

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 dark:from-purple-900 dark:to-pink-900 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20">
              <div className="w-24 h-24 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💄</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Your Beauty Cart is Empty
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Discover our amazing beauty products and add them to your cart
              </p>
              <Link
                to="/cosmetics"
                className="inline-flex items-center gap-2 px-8 py-4 bg-pink-500 text-white font-semibold rounded-xl hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                <span>Shop Beauty Products</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 dark:from-purple-900 dark:to-pink-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Левая часть - товары */}
          <div className="lg:w-2/3">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-4 md:p-6 shadow-2xl border border-white/20">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Beauty Cart ({totalItems}{" "}
                  {totalItems === 1 ? "item" : "items"})
                </h1>
                <button
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-600 font-medium transition-colors"
                >
                  Clear All
                </button>
                <Link
                  to="/cosmetics" // или window.history.back()
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 font-medium transition-colors px-3 py-1 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                >
                  x Close
                </Link>
              </div>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-white dark:bg-slate-700 rounded-2xl border border-gray-100 dark:border-slate-600"
                  >
                    {/* Изображение товара */}
                    <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
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
                          <h3 className="font-semibold text-gray-800 dark:text-white mb-1 truncate text-sm md:text-base">
                            {item.name}
                          </h3>
                          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-1 md:mb-2 truncate">
                            {item.category}
                          </p>
                          <div className="text-pink-500 font-bold text-sm md:text-lg">
                            {item.price}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Управление количеством и удаление */}
                    <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-100 dark:bg-slate-600 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-500 transition-colors text-xs md:text-sm"
                        >
                          <span>−</span>
                        </button>

                        <span className="w-5 md:w-6 text-center font-semibold text-gray-800 dark:text-white text-xs md:text-sm">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-100 dark:bg-slate-600 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-500 transition-colors text-xs md:text-sm"
                        >
                          <span>+</span>
                        </button>
                      </div>

                      {/* Удалить товар */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <svg
                          className="w-3 h-3 md:w-4 md:h-4"
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
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-4 md:p-6 shadow-2xl border border-white/20">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>
                    Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"}
                    )
                  </span>
                  <span>{totalPrice?.toFixed(2) || "0.00"} €</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Shipping</span>
                  <span className="text-green-500">FREE</span>
                </div>
                <div className="border-t border-gray-200 dark:border-slate-600 pt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-800 dark:text-white">
                    <span>Total</span>
                    <span>{totalPrice?.toFixed(2) || "0.00"} €</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-pink-500 text-white py-4 rounded-xl font-semibold hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 mb-4">
                Checkout Beauty Products
              </button>

              <Link
                to="/cosmetics"
                className="w-full text-center block border-2 border-pink-500 text-pink-500 py-3 rounded-xl font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300"
              >
                Continue Beauty Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CosmeticsCart;
