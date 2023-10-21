import { useContext } from "react";
import ShoppingBag from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext);

  const handleToggle = () => setIsCartOpen((isCartOpen) => !isCartOpen);

  return (
    <CartIconContainer onClick={handleToggle}>
      <ShoppingIcon src={ShoppingBag} alt="shopping cart" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
