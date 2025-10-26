import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // Инициализируем корзину из LocalStorage, если есть
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedItems = localStorage.getItem("cartItems");
      return storedItems ? JSON.parse(storedItems) : [];
    } catch (error) {
      console.error("Failed to load cart from localStorage", error);
      return [];
    }
  });

  // Эффект для сохранения корзины в LocalStorage при каждом изменении
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Функция добавления товара
  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        // Если товар уже есть, увеличиваем количество
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Если товара нет, добавляем его с количеством 1
        return [...currentItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Функция удаления товара (или уменьшения количества)
  const removeFromCart = (productId) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === productId);

      if (existingItem.quantity === 1) {
        // Если количество 1, полностью удаляем товар
        return currentItems.filter((item) => item.id !== productId);
      } else {
        // Уменьшаем количество
        return currentItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  // Расчет общего количества товаров в корзине
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Расчет общей стоимости
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
