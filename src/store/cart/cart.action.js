import { CART_ACTIONS_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCartOpen = (boolean) => createAction(CART_ACTIONS_TYPES.SET_TOGGLE_CART, boolean);

export const setCartItems = (items) => createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, items);

export const setCartCount = (count) => createAction(CART_ACTIONS_TYPES.SET_CART_COUNT, count);

export const setCartTotal = (total) => createAction(CART_ACTIONS_TYPES.SET_CART_TOTAL, total);