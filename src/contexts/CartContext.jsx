// src/contexts/CartContext.jsx
import React, { createContext, useContext, useReducer, useEffect } from "react";

const ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
  LOAD_CART: "LOAD_CART",
};

// Функция для загрузки корзины из localStorage
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem("equa-shop-cart");
    return savedCart ? JSON.parse(savedCart) : { items: [] };
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return { items: [] };
  }
};

// Функция для сохранения корзины в localStorage
const saveCartToStorage = (cart) => {
  try {
    localStorage.setItem("equa-shop-cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
};

const cartReducer = (state, action) => {
  let newState;

  switch (action.type) {
    case ACTION_TYPES.LOAD_CART:
      return {
        ...state,
        items: action.payload.items || [],
      };

    case ACTION_TYPES.ADD_TO_CART:
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id && item.type === action.payload.type
      );

      if (existingItem) {
        newState = {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id && item.type === action.payload.type
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        newState = {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
      break;

    case ACTION_TYPES.REMOVE_FROM_CART:
      newState = {
        ...state,
        items: state.items.filter(
          (item) =>
            !(
              item.id === action.payload.id && item.type === action.payload.type
            )
        ),
      };
      break;

    case ACTION_TYPES.UPDATE_QUANTITY:
      newState = {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && item.type === action.payload.type
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
      break;

    case ACTION_TYPES.CLEAR_CART:
      newState = {
        ...state,
        items: [],
      };
      break;

    default:
      return state;
  }

  // Сохраняем в localStorage после каждого изменения
  if (newState) {
    saveCartToStorage(newState);
  }

  return newState || state;
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
  });

  useEffect(() => {
    const savedCart = loadCartFromStorage();
    dispatch({ type: ACTION_TYPES.LOAD_CART, payload: savedCart });
  }, []);

  const addToCart = (product, type = "medical") => {
    dispatch({
      type: ACTION_TYPES.ADD_TO_CART,
      payload: { ...product, type },
    });
  };

  const removeFromCart = (productId, type) => {
    dispatch({
      type: ACTION_TYPES.REMOVE_FROM_CART,
      payload: { id: productId, type },
    });
  };

  const updateQuantity = (productId, type, quantity) => {
    dispatch({
      type: ACTION_TYPES.UPDATE_QUANTITY,
      payload: { id: productId, type, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: ACTION_TYPES.CLEAR_CART });

    localStorage.removeItem("equa-shop-cart");
  };

  const getCartTotal = () => {
    return state.items.reduce((total, item) => {
      const priceString = item.price.replace(/[^\d,.]/g, "").replace(",", ".");

      const price = parseFloat(priceString);

      if (isNaN(price)) {
        console.error(
          "❌ Invalid price format:",
          item.price,
          "for item:",
          item.name
        );
        return total;
      }

      const itemTotal = price * item.quantity;
      console.log("📊 Item total:", itemTotal, "Quantity:", item.quantity);

      return total + itemTotal;
    }, 0);
  };

  const getCartItemsCount = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getItemsByType = (type) => {
    return state.items.filter((item) => item.type === type);
  };

  const value = {
    items: state.items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    getItemsByType,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
