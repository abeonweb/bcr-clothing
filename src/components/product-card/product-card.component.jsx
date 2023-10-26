import { useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

// import { CartContext } from "../../context/cart.context";
import { useDispatch, useSelector } from "react-redux";
import { ProductCardContainer, Footer } from "./product-card.styles.jsx";
import { addItemToCart, selectCartItems } from "../../store/cart/cart.selector";
import React from "react";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTIONS_TYPES } from "../../store/cart/cart.types";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  // const { addItemToCart } = useContext(CartContext);
const dispatch = useDispatch();
const cartItems = useSelector(selectCartItems);
  const handleAddToCart = () => {
    const newCart = addItemToCart(cartItems, product);
    dispatch(createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCart))
  }
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleAddToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
