import { useSelector, useDispatch } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CART_ACTIONS_TYPES } from "../../store/cart/cart.types";
import { removeItemFromCart, changeQuantityOfItem, selectCartTotal } from "../../store/cart/cart.selector";
import "./checkout.styles.scss";
import { selectCartItems } from "../../store/cart/cart.selector";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const cartTotal = useSelector(selectCartTotal);

  const handleRemoveItem = (id) => {
    const newCart = removeItemFromCart(cartItems, id)
    dispatch({ type: CART_ACTIONS_TYPES.SET_CART_ITEMS, payload: newCart });
  }

  const handleQuantityOfItem = (id, value) => {
    const newCart = changeQuantityOfItem(cartItems, id, value)
    dispatch({ type: CART_ACTIONS_TYPES.SET_CART_ITEMS, payload: newCart });
  }
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
          <CheckoutItem
          key={item.id}
          item={item}
          handleQuantityOfItem={handleQuantityOfItem}
          removeItemFromCart={()=>handleRemoveItem(item.id)}
          />
          ))}
<span  className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
