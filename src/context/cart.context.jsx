import { createContext, useState, useEffect } from "react";

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(() => cartItems.reduce((acc, item) => (acc + item.quantity) , 0))
  }, [cartItems]);
  const addItemToCart = (productToAdd) => {
    setCartItems((prevCartItems) => addCartItem(prevCartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
