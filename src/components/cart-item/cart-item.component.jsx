import { Name,Image, CartItemContainer, ItemDetails } from './cart-item.styles';


const CartItem = ({cartItem}) => {
    const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={name}/>
      <ItemDetails>
        <Name>{name}</Name>
        <span>{quantity} x {`$ ${price}`}</span>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem