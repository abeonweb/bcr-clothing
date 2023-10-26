import { useDispatch, useSelector } from "react-redux";
import ShoppingBag from "../../assets/shopping-bag.svg";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";
import { setCartOpen } from "../../store/cart/cart.action";
import { selectCartCount, selectCartOpen } from '../../store/cart/cart.selector';
const CartIcon = () => {
  const dispatch  = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectCartOpen);
  const handleToggle = () => dispatch(setCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={handleToggle}>
      <ShoppingIcon src={ShoppingBag} alt="shopping cart" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
