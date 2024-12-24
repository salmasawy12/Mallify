import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Homepage from "./Pages/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // This imports both Bootstrap JS and Popper.js
import Header from "../src/Const/Header";
import Sidebar from "./Const/Sidebar";
import Footer from "../src/Const/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router, Routes, and Route
import Browse from "./Pages/Browse";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Brands from "./Pages/Brands";
import Womenshops from "./Pages/Womenshops";
import Menshops from "./Pages/Menshops";
import Cart from "./Pages/Cart";
import Beforecheckout from "./Pages/Beforecheckout";
import { CartProvider } from "./Pages/CartContext";
import ProductPage from "./Pages/ProductPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        {/* Render Header and Sidebar globally, so it appears on every page */}

        {/* Define the routes */}
        <Routes>
          {/* Define the route for Homepage */}
          <Route path="/" element={<Homepage />} />

          {/* Define the route for Browse page */}
          <Route path="/Browse" element={<Browse />} />
          <Route path="/Login" element={<Login />} />

          <Route path="/Signup" element={<Signup />} />
          <Route path="/Brands" element={<Brands />} />
          <Route path="/Womenshops" element={<Womenshops />} />
          <Route path="/Menshops" element={<Menshops />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Beforecheckout" element={<Beforecheckout />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
      </Router>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
