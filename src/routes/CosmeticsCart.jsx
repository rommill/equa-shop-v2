// src/routes/CosmeticsCart.jsx - ПОЛНАЯ СТРАНИЦА КОРЗИНЫ КОСМЕТИКИ
import React from "react";
import { Link } from "react-router-dom";
import { useCosmeticsCart } from "../contexts/CosmeticsCartContext";

const CosmeticsCart = () => {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
  } = useCosmeticsCart();

  console.log("💄 Cosmetics Cart items:", items);

  if (!items || items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 dark:from-purple-900 dark:to-pink-900 pt-20">
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
                Discover our premium skincare and makeup collection
              </p>
              <Link
                to="/cosmetics"
                className="inline-flex items-center gap-2 px-8 py-4 bg-pink-500 text-white font-semibold rounded-xl hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                <span>Explore Beauty Products</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 dark:from-purple-900 dark:to-pink-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Левая часть - товары */}
          <div className="lg:w-2/3">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/20">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Beauty Cart ({getCartItemsCount()}{" "}
                  {getCartItemsCount() === 1 ? "item" : "items"})
                </h1>
                <button
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-600 font-medium transition-colors"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-slate-700 rounded-2xl border border-gray-100 dark:border-slate-600"
                  >
                    {/* Изображение товара */}
                    <div className="w-20 h-20 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

                    {/* Информация о товаре */}
                    <div className="flex-grow">
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        {item.category}
                      </p>
                      <div className="text-pink-500 font-bold text-lg">
                        {item.price}
                      </div>
                    </div>

                    {/* Управление количеством */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        className="w-8 h-8 rounded-full bg-gray-100 dark:bg-slate-600 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-500 transition-colors"
                      >
                        <span className="text-lg">−</span>
                      </button>

                      <span className="w-8 text-center font-semibold text-gray-800 dark:text-white">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 rounded-full bg-gray-100 dark:bg-slate-600 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-500 transition-colors"
                      >
                        <span className="text-lg">+</span>
                      </button>
                    </div>

                    {/* Удалить товар */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      aria-label="Remove item"
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
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
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Shipping</span>
                  <span className="text-green-500">FREE</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Tax</span>
                  <span>${(getCartTotal() * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 dark:border-slate-600 pt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-800 dark:text-white">
                    <span>Total</span>
                    <span>${(getCartTotal() * 1.1).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-pink-500 text-white py-4 rounded-xl font-semibold hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 mb-4">
                Proceed to Checkout
              </button>

              <Link
                to="/cosmetics"
                className="w-full text-center block border-2 border-pink-500 text-pink-500 py-3 rounded-xl font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300"
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

export default CosmeticsCart;
