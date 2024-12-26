import React from "react";
import { useCart } from "./CartContext";
import Header from "../Const/Header";
import Footer from "../Const/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa"; // Import shopping bag icon

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
    updateQuantitiesOnCheckout,
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
      navigate("/Cart");
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div
        className="container flex-grow-1"
        style={{
          paddingBottom: "15px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // Ensure the content is spaced evenly
        }}
      >
        <div className="row" style={{ paddingTop: "30px" }}>
          <h1>
            Your Cart <span>({cartCount} items)</span>
          </h1>
        </div>
        <div className="row" style={{ paddingTop: "30px" }}>
          {cartItems.length === 0 ? (
            <div className="text-center mt-5">
              <FaShoppingBag
                size={60}
                className="mb-3"
                style={{ color: "#131120" }}
              />
              <p
                style={{
                  paddingTop: "30px",
                  fontSize: "40px",
                  paddingBottom: "30px",
                }}
              >
                Your cart is empty
              </p>
              <Link
                to="/Brands"
                className="btn btn-primary"
                style={{
                  width: "400px",
                  height: "50px",
                  fontSize: "20px",
                  backgroundColor: "#131120",
                  fontWeight: "bold",
                  borderColor: "#131120",
                }}
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div>
              <ul
                className="list-group mb-3"
                style={{
                  maxHeight: "400px",
                  overflowY: "auto",
                }}
              >
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
              <div style={{ marginTop: "20px", paddingBottom: "40px" }}>
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
                  onClick={handleCheckout}
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
