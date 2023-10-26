
import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTIONS_TYPES } from './cart.types';

export const selectCartOpen = (state) => state.cart.isCartOpen;

export const selectCartItems = (state) => state.cart.cartItems;

export const selectCartTotal = (state) => state.cart.cartTotal;

export const selectCartCount = (state) => state.cart.cartCount;


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

  export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    const count = newCartItems.reduce((acc, item) => acc + item.quantity, 0);
    const total = newCartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
    return {
      cartItems: newCartItems,
      cartCount: count,
      cartTotal: total
    }
    // dispatch({ type: CART_ACTIONS_TYPES.SET_CART_ITEMS, payload: payload });
  };

  export const changeQuantityOfItem = (cartItems, id, value) => {
    const newCartItems = editQuantityOfCartItem(cartItems, id, value);
    const count = newCartItems.reduce((acc, item) => acc + item.quantity, 0);
    const total = newCartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
    return {
      cartItems: newCartItems,
      cartCount: count,
      cartTotal: total
    }
    // dispatch({ type: CART_ACTIONS_TYPES.SET_CART_ITEMS, payload: payload });
  };

  export const removeItemFromCart = (cartItems, id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    const count = newCartItems.reduce((acc, item) => acc + item.quantity, 0);
    const total = newCartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
    return {
      cartItems: newCartItems,
      cartCount: count,
      cartTotal: total
    }
    
  };
  