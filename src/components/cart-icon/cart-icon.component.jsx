import { useContext } from "react";
import ShoppingBag from '../../assets/shopping-bag.svg'
import { CartContext } from "../../context/cart.context";
import './cart-icon.styles.scss';

const CartIcon = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext);

  const handleToggle = () => setIsCartOpen((isCartOpen)=> !isCartOpen )

  return (
    <div className="cart-icon-container"
      onClick={handleToggle}
    >
        <img className="shopping-icon" src={ShoppingBag} alt="shopping cart"/>
        <span className="item-count">{cartCount}</span>
    </div>
  )
}

export default CartIcon