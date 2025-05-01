import React from "react";
import { Routes, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import LandingPage from "./Pages/LandingPage";
import AboutUs from "./Pages/AboutUs";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Blog from "./Pages/Blog";
import Contacts from "./Pages/Contacts";
import Header from "./components/Header";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="/checkout"
          element={
            <Elements stripe={stripePromise}>
              <Checkout />
            </Elements>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
