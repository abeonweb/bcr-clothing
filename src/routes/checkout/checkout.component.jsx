import { useSelector, useDispatch } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  removeItemFromCart,
  changeQuantityOfItem,
} from "../../store/cart/cart.action";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCartItems } from "../../store/cart/cart.selector";
import "./checkout.styles.scss";
import PaymentForm from "../../components/payment-form/Payment-form.component";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(cartItems, id));
  };

  const handleQuantityOfItem = (id, value) => {
    dispatch(changeQuantityOfItem(cartItems, id, value));
  };
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
          removeItemFromCart={() => handleRemoveItem(item.id)}
        />
      ))}
      <span className="total">Total: ${cartTotal}</span>
      <PaymentForm />
    </div>
  );
};

export default Checkout;
