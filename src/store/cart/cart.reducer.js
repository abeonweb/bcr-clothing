import { CART_ACTIONS_TYPES } from './cart.types';

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
  };
  

export const cartReducer = (state = INITIAL_STATE, action={}) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTIONS_TYPES.SET_TOGGLE_CART:
          return {
            ...state,
            isCartOpen: payload,
          };
    
        case CART_ACTIONS_TYPES.SET_CART_ITEMS:
          return {
            ...state,
            ...payload
          };
        default:
          return state;
      }

}