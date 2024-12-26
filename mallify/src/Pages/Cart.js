import React, { useState } from "react";
import { useCart } from "./CartContext"; // Import useCart hook
import Header from "../Const/Header";
import Footer from "../Const/Footer";

const Cart = () => {
  const { cartItems, cartCount } = useCart(); // Get cart items and count from context

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    address: "",
    address2: "",
    country: "",
    state: "",
    zip: "",
    paymentMethod: "credit",
    ccName: "",
    ccNumber: "",
    ccExpiration: "",
    ccCVV: "",
  });

  const [promoCode, setPromoCode] = useState("");
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handlePromoChange = (e) => setPromoCode(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted: ", formData);
  };

  return (
    <div>
      <Header />
      <div className="container" style={{ marginBottom: "20px" }}>
        <main>
          <div className="row g-5" style={{ marginTop: "10px" }}>
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text" style={{ color: "#131120" }}>
                  Your cart
                </span>
                {/* Dynamically update the cart count */}
                <span
                  className="badge rounded-pill"
                  style={{ color: "white", backgroundColor: "#131120" }}
                >
                  {cartCount}
                </span>
              </h4>
              <ul className="list-group mb-3">
                {/* Dynamically render cart items */}
                {cartItems.length === 0 ? (
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <span>Your cart is empty.</span>
                  </li>
                ) : (
                  cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between lh-sm"
                    >
                      <div>
                        <h6 className="my-0">{item.name}</h6>
                        <small className="text-body-secondary">
                          Brief description
                        </small>
                      </div>
                      <span className="text-body-secondary">${item.price}</span>
                    </li>
                  ))
                )}

                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>
                    $
                    {cartItems
                      .reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </strong>
                </li>
              </ul>
            </div>
            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3">Billing address</h4>
              <form className="needs-validation" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="form-label">
                      Email{" "}
                      <span className="text-body-secondary">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-5">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <select
                      className="form-select"
                      id="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="zip" className="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <hr className="my-4" />
                <button
                  className="w-100 btn btn-lg"
                  type="submit"
                  style={{ backgroundColor: "#131120", color: "white" }}
                >
                  Continue to checkout
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
