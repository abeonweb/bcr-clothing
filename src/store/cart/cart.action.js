import { CART_ACTIONS_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCartOpen = (boolean) => createAction(CART_ACTIONS_TYPES.SET_TOGGLE_CART, boolean);

export const setCartItems = (items) => createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, items);

export const setCartCount = (count) => createAction(CART_ACTIONS_TYPES.SET_CART_COUNT, count);

export const setCartTotal = (total) => createAction(CART_ACTIONS_TYPES.SET_CART_TOTAL, total);

const addCartItem = (cartItems = [], productToAdd) => {
    //find product in cart items
    const itemIndex = cartItems.findIndex((item) => item.id === productToAdd.id);
    if (itemIndex > -1) {
        //if present, increase quantity
        const newCart = cartItems.map((item, index) =>
            itemIndex === index ? { ...item, quantity: item.quantity + 1 } : item
        );
        return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCart)
    } else {
        //else add to cart items
        const newCart = [...cartItems, { ...productToAdd, quantity: 1 }];
        return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCart)
    }

};

export const addItemToCart = (cartItems, productToAdd) => {
    return addCartItem(cartItems, productToAdd);

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

export const changeQuantityOfItem = (cartItems, id, value) => {
    return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, editQuantityOfCartItem(cartItems, id, value));
};

export const removeItemFromCart = (cartItems, id) => {
    return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS , cartItems.filter((item) => item.id !== id));
};
