import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 97, // Below the header
        right: 0,
        height: "calc(100vh - 97px)", // Adjust height excluding header
        width: "300px",
        backgroundColor: "#131120",
        color: "#fff",
        zIndex: 1040,
        display: "flex",
        flexDirection: "column",
        padding: "15px",
        transform: isOpen ? "translateX(0)" : "translateX(120%)", // Move further out
        transition: "transform 0.9s ease-in-out", // Longer duration for a slower slide
      }}
    >
      {/* Sidebar Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <span style={{ fontSize: "1.5rem" }}>Sidebar</span>
        <i
          className="bi bi-x"
          style={{
            fontSize: "30px",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={toggleSidebar} // Close sidebar
        ></i>
      </div>

      {/* Sidebar Links */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginBottom: "auto",
        }}
      >
        <li style={{ marginBottom: "15px" }}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#fff",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#495057",
            }}
          >
            Home
          </a>
        </li>
        <li style={{ marginBottom: "15px" }}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#fff",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            Dashboard
          </a>
        </li>
        <li style={{ marginBottom: "15px" }}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#fff",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            Orders
          </a>
        </li>
      </ul>

      {/* Footer */}
      <div style={{ textAlign: "center", paddingTop: "20px" }}>
        <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
          Logout
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
