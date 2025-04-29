import React, { useContext } from "react";
import { CartContext } from "../context/Cartcontext";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Cart() {
  const { cart, removeFromCart, currency } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const conversionRate = 1100; // Example conversion rate from USD to RWF

  const convertPrice = (price, currency) => {
    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice)) {
      return { amount: 0, symbol: currency === "RWF" ? "RWF" : "$" };
    }
    if (currency === "RWF") {
      return {
        amount: (numericPrice / conversionRate).toFixed(2),
        symbol: "RWF",
      };
    }
    return { amount: numericPrice.toFixed(2), symbol: "$" };
  };

  const getTotal = () => {
    return cart.reduce((total, item) => {
      const itemPrice = convertPrice(item.Price, currency);
      const itemQuantity = parseInt(item.quantity) || 1;
      return total + itemPrice.amount * itemQuantity; // Use itemPrice.amount for total calculation
    }, 0);
  };

  return (
    <CartContainer>
      <Header />

      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ItemList>
            {cart.map((item, index) => {
              const itemPrice = convertPrice(item.Price, currency);
              return (
                <Item key={index}>
                  <img src={item.Image} alt={item.Title} />
                  <div>
                    <h4>{item.Title}</h4>
                    <p>
                      Price: {itemPrice.symbol} {itemPrice.amount}
                    </p>
                    <p>Quantity: {item.quantity || 1}</p>
                    <RemoveButton onClick={() => removeFromCart(item.id)}>
                      Remove
                    </RemoveButton>
                  </div>
                </Item>
              );
            })}
          </ItemList>
          <TotalPrice>
            Total: {currency === "RWF" ? "RWF" : "$"} {getTotal().toFixed(2)}
          </TotalPrice>
          <CheckoutButton onClick={handleCheckout}>
            Proceed to Checkout
          </CheckoutButton>
        </>
      )}

      <Footer />
    </CartContainer>
  );
}

export default Cart;

// Styles
const CartContainer = styled.div`
  padding: 30px;
  font-family: "Fira Sans", sans-serif;

  h2 {
    font-size: 2rem;
    margin-top: 80px;
  }
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  h4 {
    margin: 0;
  }

  p {
    margin: 5px 0 0;
  }
`;

const TotalPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 20px;
`;

const CheckoutButton = styled.button`
  background-color: green;
  color: white;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 2rem;
  margin-top: 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: darkgreen;
  }
`;

const RemoveButton = styled.button`
  background-color: red;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: darkred;
  }
`;
