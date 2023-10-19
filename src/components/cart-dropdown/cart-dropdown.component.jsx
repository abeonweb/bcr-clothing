import { useContext } from "react";
import Button from "../button/button.component";

import { CartContext } from "../../context/cart.context";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { isCartOpen } = useContext(CartContext);
  return (
    <div className={`cart-dropdown-container ${isCartOpen? "show-cart":""}`}>
      <div className="cart-items" />
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
