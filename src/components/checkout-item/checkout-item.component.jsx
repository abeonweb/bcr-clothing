import './checkout-item.styles.scss';

const CheckoutItem = ({ item, changeQuantityOfItem, removeItemFromCart }) => {
  const { id, name, imageUrl, quantity, price } = item;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={() => changeQuantityOfItem(id, -1)}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => changeQuantityOfItem(id, 1)}>
          &#10095;
        </span>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItemFromCart(id)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
