import React from 'react'
import logo from "../Images/Logo.png"


const Footer = () => {
    return (
      <div
        style={{
          backgroundColor: "#131120",
          minHeight: "550px", // Use minHeight instead of height
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px 0", // Optional: Add padding to avoid content being too close to the edge
          margin: "0", // Ensure there's no margin causing the gap
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
            marginTop: "30px", // Reduced marginTop to avoid pushing content down too much
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "white", marginBottom: "20px" }}>Contact Us and Support</h1>
  
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
                marginBottom: "10px",
              }}
            >
              <a href="sms:+201212853270" target="_blank" rel="noopener noreferrer">
                <i
                  className="bi bi-chat-dots-fill"
                  style={{ fontSize: "50px", color: "white" }}
                ></i>
              </a>
              <a
                href="mailto:MallifySupport@gmail.com?"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <i
                  className="bi bi-envelope-fill"
                  style={{
                    marginRight: "50px",
                    fontSize: "50px",
                    cursor: "pointer",
                  }}
                ></i>
              </a>
            </div>
           
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "350px",
                width: "350px",
                marginTop: "10px",
                cursor: "pointer",
              }}
            />
          
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  