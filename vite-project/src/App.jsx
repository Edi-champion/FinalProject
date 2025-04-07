import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import AboutUs from "./Pages/AboutUs";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/Cart";

// const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        {/* <Route path="/cart" element={<CartPage /
        >} /> */}
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
