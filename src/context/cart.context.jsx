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

const editQuantityOfCartItem = (cartItems, id, value) => {
  if(value < 0 && cartItems.find(item=> item.id === id).quantity === 1 ){
    return cartItems.filter(item => item.id !== id)
  }
  return cartItems.map((item) => {
    if (item.id === id) {
      if(item.quantity === 1 && value < 0) return item;
      return { ...item, quantity: item.quantity + value };
    }
    return item;
  });
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  changeQuantityOfItem: () => {},
  removeItemFromCart: () => {},
  cartTotal: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartCount(() => cartItems.reduce((acc, item) => acc + item.quantity, 0));
  }, [cartItems]);

  useEffect(() => {
    setCartTotal(() => cartItems.reduce((acc, item) => (acc + (item.quantity * item.price)), 0))
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems((prevCartItems) => addCartItem(prevCartItems, productToAdd));
  };

  const changeQuantityOfItem = (id, value) => {
    setCartItems((prevCart) => editQuantityOfCartItem(prevCart, id, value));
  };

  const removeItemFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    changeQuantityOfItem,
    removeItemFromCart,
    cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
