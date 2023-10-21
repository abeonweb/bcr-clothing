import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../context/cart.context";

import { CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems, cartCount } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartCount <= 0? <EmptyMessage>Your cart is empty</EmptyMessage> 
          : cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)
        }
      </CartItems>
      <Button 
        onClick={()=> navigate('/checkout')}
      >Go to checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
