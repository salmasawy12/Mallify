/* eslint-disable jsx-a11y/anchor-is-valid */
import { Space } from "antd";
import { spaceChildren } from "antd/es/button";
import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 97, // Below the header
        right: 0,
        height: "calc(100vh - 105px)", // Adjust height excluding header
        width: "300px",
        backgroundColor: "#131120",
        color: "#fff",
        zIndex: 1040,
        display: "flex",
        flexDirection: "column",
        padding: "15px",
        transform: isOpen ? "translateX(0)" : "translateX(100%)", // Slide in or out
        transition: "transform 0.4s ease-in-out", // Smooth animation
      }}
    >
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
              padding: "0px",
              borderRadius: "5px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              Home{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </div>
          </a>
        </li>
        <li style={{ marginBottom: "15px" }}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#fff",
              padding: "0px",
              borderRadius: "5px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              Profile{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </div>
          </a>
        </li>
        <li style={{ marginBottom: "15px" }}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#fff",
              padding: "0px",
              borderRadius: "5px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              Settings{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </div>
          </a>
        </li>
        <li style={{ marginBottom: "15px" }}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#fff",
              padding: "0px",
              borderRadius: "5px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              Notifications{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </div>
          </a>
        </li>
        <li style={{ marginBottom: "15px" }}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#fff",
              padding: "0px",
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                height: "20px",
              }}
            >
              Help/Support{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </div>
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
