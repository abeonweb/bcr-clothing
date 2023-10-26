import { createContext, useReducer } from "react";

const addCartItem = (cartItems = [], productToAdd) => {
  //find product in cart items
  const itemIndex = cartItems.findIndex((item) => item.id === productToAdd.id);
  if (itemIndex > -1) {
    //if present, increase quantity
    return cartItems.map((item, index) =>
      itemIndex === index ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    //else add to cart items
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

const editQuantityOfCartItem = (cartItems, id, value) => {
  if (value < 0 && cartItems.find((item) => item.id === id).quantity === 1) {
    return cartItems.filter((item) => item.id !== id);
  }
  return cartItems.map((item) => {
    if (item.id === id) {
      if (item.quantity === 1 && value < 0) return item;
      return { ...item, quantity: item.quantity + value };
    }
    return item;
  });
};

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  dispatch: () => {},
  addItemToCart: () => {},
  changeQuantityOfItem: () => {},
  removeItemFromCart: () => {},
});

const CART_ACTIONS = {
  SET_TOGGLE_CART: "SET_TOGGLE_CART",
  SET_CART_ITEMS: "SET_CART_ITEMS"
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

/**
 *
 * @param {*} state the current stored data object
 * @param {*} action an object containint the type and an optional payload
 * @returns a new updated state object
 */

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS.SET_TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };

    case CART_ACTIONS.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload.cartItems,
        cartTotal: payload.cartTotal,
        cartCount: payload.cartCount,
      };
    default:
      throw new Error(`Unhandled type: ${type}, in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartCount, cartTotal, cartItems } = state;

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    const count = newCartItems.reduce((acc, item) => acc + item.quantity, 0);
    const total = newCartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
    const payload = {
      cartItems: newCartItems,
      cartCount: count,
      cartTotal: total
    }
    dispatch({ type: CART_ACTIONS.SET_CART_ITEMS, payload: payload });
  };

  const changeQuantityOfItem = (id, value) => {
    const newCartItems = editQuantityOfCartItem(cartItems, id, value);
    const count = newCartItems.reduce((acc, item) => acc + item.quantity, 0);
    const total = newCartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
    const payload = {
      cartItems: newCartItems,
      cartCount: count,
      cartTotal: total
    }
    dispatch({ type: CART_ACTIONS.SET_CART_ITEMS, payload: payload });
  };

  const removeItemFromCart = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    const count = newCartItems.reduce((acc, item) => acc + item.quantity, 0);
    const total = newCartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
    const payload = {
      cartItems: newCartItems,
      cartCount: count,
      cartTotal: total
    }
    dispatch({ type: CART_ACTIONS.SET_CART_ITEMS, payload: payload });
  };

  const value = {
    CART_ACTIONS,
    isCartOpen,
    cartItems,
    cartCount,
    cartTotal,
    dispatch,
    addItemToCart,
    changeQuantityOfItem,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
