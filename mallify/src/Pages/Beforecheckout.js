import React from "react";
import { Route, Router, useNavigate } from "react-router-dom";

const Beforecheckout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <div className="row">Cart is Currently Empty</div>
        <div className="row">
          <button onClick={() => navigate("/Cart")}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Beforecheckout;
