import {
  CheckoutItemContainer,
  ImageContainer,
  ItemWidth,
  ItemImage,
  Quantity,
  Arrow,
  Value,
  RemoveButton
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ item, handleQuantityOfItem, removeItemFromCart }) => {
  const { id, name, imageUrl, quantity, price } = item;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <ItemImage src={imageUrl} alt={name} />
      </ImageContainer>
      <ItemWidth>{name}</ItemWidth>
      <Quantity>
        <Arrow onClick={() => handleQuantityOfItem(id, -1)}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => handleQuantityOfItem(id, 1)}>
          &#10095;
        </Arrow>
      </Quantity>
      <ItemWidth>{price}</ItemWidth>
      <RemoveButton onClick={() => removeItemFromCart(id)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
