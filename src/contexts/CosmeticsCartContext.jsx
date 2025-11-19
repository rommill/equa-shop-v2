// src/contexts/CosmeticsCartContext.jsx
import React, { createContext, useContext, useReducer, useEffect } from "react";

const ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
  LOAD_CART: "LOAD_CART",
};

const loadCosmeticsCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem("equa-cosmetics-cart");
    return savedCart ? JSON.parse(savedCart) : { items: [] };
  } catch (error) {
    return { items: [] };
  }
};

const saveCosmeticsCartToStorage = (cart) => {
  try {
    localStorage.setItem("equa-cosmetics-cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cosmetics cart:", error);
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
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        newState = {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
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
        items: state.items.filter((item) => item.id !== action.payload),
      };
      break;

    case ACTION_TYPES.UPDATE_QUANTITY:
      newState = {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
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

  if (newState) {
    saveCosmeticsCartToStorage(newState);
  }

  return newState || state;
};

const CosmeticsCartContext = createContext();

export const CosmeticsCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
  });

  useEffect(() => {
    const savedCart = loadCosmeticsCartFromStorage();
    dispatch({ type: ACTION_TYPES.LOAD_CART, payload: savedCart });
  }, []);

  const addToCart = (product) => {
    dispatch({ type: ACTION_TYPES.ADD_TO_CART, payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: ACTION_TYPES.REMOVE_FROM_CART, payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({
      type: ACTION_TYPES.UPDATE_QUANTITY,
      payload: { id: productId, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: ACTION_TYPES.CLEAR_CART });
    localStorage.removeItem("equa-cosmetics-cart");
  };

  const getCartTotal = () => {
    return state.items.reduce((total, item) => {
      const priceString = item.price.replace(/[^\d,.]/g, "").replace(",", ".");

      const price = parseFloat(priceString);

      if (isNaN(price)) {
        return total;
      }

      const itemTotal = price * item.quantity;

      return total + itemTotal;
    }, 0);
  };

  const getCartItemsCount = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    items: state.items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
  };

  return (
    <CosmeticsCartContext.Provider value={value}>
      {children}
    </CosmeticsCartContext.Provider>
  );
};

export const useCosmeticsCart = () => {
  const context = useContext(CosmeticsCartContext);
  if (!context) {
    throw new Error(
      "useCosmeticsCart must be used within a CosmeticsCartProvider"
    );
  }
  return context;
};
