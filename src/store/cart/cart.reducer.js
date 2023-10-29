import { CART_ACTIONS_TYPES } from './cart.types';

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
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
            cartItems: payload
          };
        default:
          return state;
      }

}