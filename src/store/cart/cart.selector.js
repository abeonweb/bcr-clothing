import { createSelector } from "reselect"; //used to memoize

const selectCartReducer = (state) => state.cart
export const selectCartOpen = createSelector([selectCartReducer], (cart) => cart.isCartOpen)

export const selectCartItems = createSelector([selectCartReducer], (cart) => cart.cartItems)

export const selectCartTotal = createSelector([selectCartItems], (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0))

export const selectCartCount = createSelector([selectCartItems], (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0))