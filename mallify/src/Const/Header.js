import React, { useState } from "react";
import title from "../Images/Title.png";
import bag from "../Images/Bag.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "../Const/Sidebar.js";
import Modal from "../Pages/Modal.js";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Pages/CartContext";

const Header = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartCount } = useCart(); // Access cart count from context

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={bag}
              alt="bag"
              style={{
                height: "60px",
                width: "auto",
                color: "#2E2A50",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            />
            <img
              src={title}
              alt="title"
              style={{
                height: "20px",
                width: "auto",
                marginLeft: -9,
                marginBottom: -8,
              }}
            />
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <form
              className="d-flex mx-auto"
              role="search"
              style={{ width: "500px" }}
            >
              <div className="input-group" style={{ border: "none" }}>
                <input
                  className="form-control me-2 searchbar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{
                    background: "none",
                    border: "none",
                    outline: "none",
                    paddingLeft: "15px",
                    boxShadow: "none",
                    borderBottom: "1px solid #2E2A50",
                    borderRadius: 0,
                  }}
                />
                <span
                  className="input-group-text"
                  id="basic-addon2"
                  style={{
                    background: "transparent",
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  <i
                    className="bi bi-search"
                    style={{ fontSize: "18px", color: "#2E2A50" }}
                  ></i>
                </span>
              </div>
            </form>

            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ position: "relative", cursor: "pointer" }}>
                <i
                  className="bi bi-bag"
                  style={{
                    fontSize: "30px",
                    color: "#2E2A50",
                  }}
                  onClick={() => navigate("/Beforecheckout")}
                ></i>
                {cartCount > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-5px",
                      right: "-10px",
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: "50%",
                      fontSize: "12px",
                      width: "18px",
                      height: "18px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </div>

              <i
                className="bi bi-person"
                style={{
                  fontSize: "35px",
                  padding: "20px",
                  color: "#2E2A50",
                  cursor: "pointer",
                }}
                onClick={toggleModal}
              ></i>

              <i
                className="bi bi-list"
                style={{
                  fontSize: "40px",
                  color: "#2E2A50",
                  cursor: "pointer",
                }}
                onClick={toggleSidebar}
              ></i>
            </div>
          </div>
        </div>
      </nav>

      {isSidebarOpen && (
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}
      <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default Header;
