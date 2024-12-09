import React, { useState } from "react";
import "../CSS/Homepage.css";
import { Route, Router, useNavigate } from "react-router-dom"; // Correct import for navigation
import { Link } from "react-router-dom"; // Correct import for Link in React

const Modal = ({ isModalOpen, toggleModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Move this hook to the top

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }
    alert(`Email: ${email}\nPassword: ${password}`);
    toggleModal(); // Close modal after submission
    navigate("/Browse"); // Navigate to the Browse page after form submission
  };

  if (!isModalOpen) {
    return null; // Do not render the modal if it's not open
  }

  return (
    <div
      className="modal fade show"
      tabIndex="-1"
      style={{
        display: "block",
        pointerEvents: "auto", // Allow interaction
      }}
      onClick={toggleModal} // Close modal on outside click
    >
      <div
        className="modal-dialog modal-dialog-centered"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        style={{ marginLeft: "700px", marginTop: "-5px" }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title"
              style={{ color: "#131120", textAlign: "center" }}
            >
              Log In
            </h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={toggleModal} // Close modal on button click
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control custom-underline"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control custom-underline"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn w-100"
                style={{ backgroundColor: "#131120", color: "white" }}
              >
                Log In
              </button>
              <a href="/Signup" style={{ color: "#007bff" }}>
                Don't have an account? Sign up
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
