import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context for the cart
export const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// Cart provider component
export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage or as an empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Currency state
  const [currency, setCurrency] = useState("USD"); // Default currency

  // Update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to convert price based on selected currency
  const convertPrice = (price) => {
    if (currency === "RWF") {
      return price * 1100; // Example conversion rate from USD to RWF
    }
    return price; // Return price in USD
  };

  // Add product to the cart (with quantity management)
  const addToCart = (product) => {
    // Convert Price to a number and apply currency conversion
    const productWithNumberPrice = {
      ...product,
      Price: convertPrice(parseFloat(product.Price)), // Convert Price to a number and apply conversion
    };

    const existingProduct = cart.find(
      (item) => item.id === productWithNumberPrice.id
    );
    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productWithNumberPrice.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prevCart) => [
        ...prevCart,
        { ...productWithNumberPrice, quantity: 1 },
      ]);
    }
  };

  // Remove product from the cart by its ID
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Clear all items from the cart
  const clearCart = () => {
    setCart([]);
  };

  // Function to change currency
  const changeCurrency = (newCurrency) => {
    setCurrency(newCurrency);
    // Optionally, you can convert existing cart prices to the new currency here
    setCart((prevCart) =>
      prevCart.map((item) => ({
        ...item,
        Price: convertPrice(item.Price / (currency === "RWF" ? 1100 : 1)), // Adjust price based on the new currency
      }))
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        currency,
        changeCurrency,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
