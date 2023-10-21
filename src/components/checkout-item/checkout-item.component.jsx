import {
  CheckoutItemContainer,
  ImageContainer,
  ItemWidth,
  ItemImage,
  Quantity,
  Arrow,
  Value
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ item, changeQuantityOfItem, removeItemFromCart }) => {
  const { id, name, imageUrl, quantity, price } = item;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <ItemImage src={imageUrl} alt={name} />
      </ImageContainer>
      <ItemWidth>{name}</ItemWidth>
      <Quantity>
        <Arrow onClick={() => changeQuantityOfItem(id, -1)}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => changeQuantityOfItem(id, 1)}>
          &#10095;
        </Arrow>
      </Quantity>
      <ItemWidth>{price}</ItemWidth>
      <div className="remove-button" onClick={() => removeItemFromCart(id)}>
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
