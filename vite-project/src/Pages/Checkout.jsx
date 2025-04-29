import React, { useContext, useState } from "react";
import styled from "@emotion/styled";
import { CartContext } from "../context/Cartcontext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

function Checkout() {
  const { cart, currency } = useContext(CartContext);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const conversionRate = 1100;

  const convertPrice = (price, currency) => {
    const numericPrice = parseFloat(price);
    return isNaN(numericPrice)
      ? 0
      : currency === "RWF"
      ? numericPrice / conversionRate
      : numericPrice;
  };

  const getTotal = () => {
    return cart.reduce((total, item) => {
      const itemPrice = convertPrice(item.Price, currency);
      const itemQuantity = parseInt(item.quantity) || 1;
      return total + itemPrice * itemQuantity;
    }, 0);
  };

  // ✅ FIX: Only convert to RWF if currency is USD
  const totalAmountRWF = getTotal() * (currency === "USD" ? conversionRate : 1);

  const config = {
    public_key: "FLWPUBK_TEST-e4e1e29132cdc08b64172382f38ae6d6-X",
    tx_ref: Date.now().toString(),
    amount: totalAmountRWF.toFixed(2),
    currency: "RWF",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "estherafi0406@gmail.com",
      phone_number: phoneNumber,
      name: name,
    },
    customizations: {
      title: "My store",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
    callback: (response) => {
      console.log(response);
      alert("Payment complete! Reference: " + response.tx_ref);
      closePaymentModal();
    },
    onClose: () => {
      console.log("Payment modal closed");
    },
  };

  return (
    <CheckoutContainer>
      <Header />
      <h2>Checkout Page</h2>
      {cart.length === 0 ? (
        <p>
          Your cart is empty. Please add items to your cart before checking out.
        </p>
      ) : (
        <CheckoutContent>
          <CartItems>
            {cart.map((item) => {
              const itemPrice = convertPrice(item.Price, currency);
              return (
                <CartItem key={item.id}>
                  <ItemTitle>{item.Title}</ItemTitle>
                  <ItemDetails>
                    <span>Quantity: {item.quantity || 1}</span>
                    <span>
                      Price: {currency === "RWF" ? "RWF" : "$"}{" "}
                      {(itemPrice * (item.quantity || 1)).toFixed(2)}
                    </span>
                  </ItemDetails>
                </CartItem>
              );
            })}
          </CartItems>
          <PaymentForm onSubmit={(e) => e.preventDefault()}>
            <h3>Complete Payment</h3>
            <Total>
              Total: {currency === "RWF" ? "RWF" : "$"} {getTotal().toFixed(2)}
            </Total>

            <Details>Enter Your Details</Details>
            <Label>
              Name:
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Label>
            <Label>
              Phone Number:
              <Input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </Label>

            <ButtonWrapper>
              <FlutterWaveButton text="Pay Now with Flutterwave" {...config} />
            </ButtonWrapper>
          </PaymentForm>
        </CheckoutContent>
      )}
      <Footer />
    </CheckoutContainer>
  );
}

export default Checkout;

// Styled Components
const CheckoutContainer = styled.div`
  padding: 2rem;
  font-family: Poppins, sans-serif;
  margin-top: 80px;

  h2 {
    color: green;
    margin-bottom: 1rem;
  }
`;

const CheckoutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CartItems = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
`;

const CartItem = styled.div`
  margin-bottom: 1rem;
`;

const ItemTitle = styled.h4`
  margin: 0 0 0.5rem 0;
`;

const ItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    color: green;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  color: #555;
  font-family: fira sans, sans-serif;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-top: 0.25rem;
`;

const Details = styled.p`
  font-size: 0.9rem;
  color: #333;
  font-family: fira sans, sans-serif;
`;

const Total = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    padding: 0.75rem 2rem;
    font-size: 1.1rem;
    border: none;
    background-color: red;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    max-width: 300px;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: darkred;
    }

    &:focus {
      outline: none;
    }
  }
`;
