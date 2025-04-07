import React, { useContext } from "react";
import styled from "@emotion/styled";
import { CartContext } from "../context/Cartcontext";

function CartPage() {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <Title>Your Cart</Title>
      {cartItems.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        cartItems.map((item) => (
          <cartItems key={item.id}>
            <Image src={item.image} alt={item.title} />
            <Details>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </Details>
          </cartItems>
        ))
      )}
      <Final>Total: ${total.toFixed(2)}</Final>
    </Container>
  );
}

export default CartPage;

const Final = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 20px;
`;

const cartItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Text = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;
