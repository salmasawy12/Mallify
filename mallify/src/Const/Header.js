import React, { useState } from "react";
import title from "../Images/Title.png";
import bag from "../Images/Bag.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "../Const/Sidebar.js";
import Homepage from "../Pages/Homepage.js";
import Modal from "../Pages/Modal.js";
import { Route, Router, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  // State to control the sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div
          className="container-fluid"
          style={{
            height: "80px",
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <a className="navbar-brand" href="#">
            <img
              src={bag}
              alt="bag"
              style={{ height: "60px", width: "auto", color: "#2E2A50" }}
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

          <form className="d-flex" role="search" style={{ width: "500px" }}>
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
            <i
              className="bi bi-bag"
              style={{
                fontSize: "30px",
                marginTop: 0,
                color: "#2E2A50",
                cursor: "pointer",
              }}
              onClick={() => navigate("/Beforecheckout")}
            ></i>
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
            {/* Icon to trigger the sidebar */}
            <i
              className="bi bi-list"
              style={{ fontSize: "40px", color: "#2E2A50", cursor: "pointer" }}
              onClick={toggleSidebar} // Trigger the sidebar toggle
            ></i>
          </div>
        </div>
      </nav>
      {/* Conditionally render the Sidebar component */}
      {isSidebarOpen && (
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}{" "}
      <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default Header;
