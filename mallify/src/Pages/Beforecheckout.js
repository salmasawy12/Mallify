import React from "react";
import { useCart } from "./CartContext";
import Header from "../Const/Header";
import Footer from "../Const/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Router, useNavigate } from "react-router-dom";

const BeforeCheckout = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartCount,
    totalPrice,
    clearCart,
    updateQuantitiesOnCheckout, // Import the new function
  } = useCart();

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const confirmCheckout = window.confirm(
      "Are you sure you want to proceed to checkout?"
    );

    if (confirmCheckout) {
      await updateQuantitiesOnCheckout();
      navigate("/Cart"); // Redirect to a thank-you page or order summary
    }
  };

  return (
    <div>
      <Header />
      <div className="container" style={{ paddingBottom: "15px" }}>
        <div className="row">
          <h1>Your Cart</h1>
        </div>
        <div className="row">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              <ul className="list-group mb-3">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div className="d-flex">
                      <div className="cart-item-info">
                        <img
                          src={item.imageUrl || "/placeholder.png"}
                          alt={item.name}
                          style={{
                            width: "50px",
                            height: "50px",
                            marginRight: "10px",
                          }}
                        />
                        <h5>{item.name}</h5>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <button
                            className="btn btn-light"
                            onClick={() => increaseQuantity(item.id)}
                          >
                            +
                          </button>
                          <button
                            className="btn btn-light"
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            -
                          </button>
                          <button
                            className="btn btn-light"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "20px", paddingBottom: "10px" }}>
                <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
              </div>
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-light"
                  onClick={clearCart}
                  style={{ backgroundColor: "#131120", color: "white" }}
                >
                  Clear Cart
                </button>
                <button
                  className="btn"
                  style={{ backgroundColor: "#131120", color: "white" }}
                  onClick={handleCheckout} // Use the new handler
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BeforeCheckout;
