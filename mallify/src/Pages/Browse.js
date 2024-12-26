/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Const/Header";
import Footer from "../Const/Footer";
import { Card } from "antd";
import { Carousel } from "antd";
import "../CSS/Browse.css";
import women from "../Images/webimagewomenNew.jpg";
import men from "../Images/webimagemenNew.jpg";
import { Route, Router, useNavigate } from "react-router-dom";

const { Meta } = Card;
const Browse = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header> </Header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#131120",
          height: "500px",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            width: "350px",
            height: "400px",
            backgroundImage: `url('https://i.pinimg.com/736x/ed/e1/19/ede11985c18a136188193bf8876c70eb.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
            border: "0px solid rgba(255, 255, 255, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)"; // Use e.currentTarget to ensure only the Card is affected
            e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div
            style={{
              textAlign: "center",
              zIndex: 1, // Ensure text stays above background
            }}
          >
            <p style={{ color: "white", fontSize: "50px" }}>Fashion Dome</p>
            <p style={{ color: "white", fontSize: "25px" }}>
              Access True Luxury
            </p>
            <a
              href="/Brands"
              style={{ color: "white", textDecoration: "underline" }}
            >
              LEARN MORE
            </a>
          </div>
        </Card>
        <Card
          style={{
            width: "350px",
            height: "400px",
            backgroundImage: `url('https://cdn.pixabay.com/photo/2024/05/21/07/08/bag-8777183_1280.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
            border: "0px solid rgba(255, 255, 255, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)"; // Use e.currentTarget to ensure only the Card is affected
            e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div
            style={{
              textAlign: "center",
              zIndex: 1, // Ensure text stays above background
            }}
          >
            <p style={{ color: "white", fontSize: "50px" }}>Up To 70% OFF</p>
            <p style={{ color: "white", fontSize: "25px" }}>
              Snap up items at the best prices
            </p>
            <a style={{ color: "white", textDecoration: "underline" }}>
              SHOP ONLINE
            </a>
          </div>
        </Card>
        <Card
          style={{
            width: "350px",
            height: "400px",
            backgroundImage: `url('https://pics.craiyon.com/2023-11-17/1eYBZ4BdRQeNmplepc9NLg.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
            border: "0px solid rgba(255, 255, 255, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)"; // Use e.currentTarget to ensure only the Card is affected
            e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div
            style={{
              textAlign: "center",
              zIndex: 1, // Ensure text stays above background
            }}
          >
            <p style={{ color: "white", fontSize: "50px" }}>Find a Store</p>
            <p style={{ color: "white", fontSize: "25px" }}>
              We cater to every shopping need
            </p>
          </div>
        </Card>
      </div>

      <div style={{ height: "50px" }}></div>
      <div
        id="customCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* First Item */}
          <div className="carousel-item active">
            <div
              className="row justify-content-center"
              style={{ paddingLeft: "5px", paddingRight: "5px" }}
            >
              <div className="col-3 text-center">
                <img
                  src="https://www.malloftheemirates.com/images/default-source/default-album/sports.jpg?sfvrsn=c75576f_3"
                  className="d-block w-100"
                  alt="Sports"
                />
                <h5>Sports</h5>
                <a href="/Sports" className="btn btn-link">
                  Shop Now
                </a>
              </div>
              <div className="col-3 text-center">
                <img
                  src="https://www.malloftheemirates.com/images/default-source/default-album/sale0b344653-bed1-451f-8f90-f2a9d8541e50.webp?sfvrsn=b4105f3a_3"
                  className="d-block w-100"
                  style={{ objectFit: "cover" }}
                  alt="Sale"
                />
                <h5>Sale</h5>
                <a href="#" className="btn btn-link">
                  Shop Now
                </a>
              </div>
              <div className="col-3 text-center">
                <img
                  src={women}
                  className="d-block w-100"
                  style={{ objectFit: "cover", height: "300px" }}
                  alt="Women"
                />
                <h5>Women</h5>
                <a href="/Womenshops" className="btn btn-link">
                  Shop Now
                </a>
              </div>
              <div className="col-3 text-center">
                <img src={men} className="d-block w-100" alt="Men" />
                <h5>Men</h5>
                <a href="/Menshops" className="btn btn-link">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          {/* Add additional carousel items if needed */}
        </div>
      </div>
      <div style={{ height: "50px" }}></div>

      <div className="container text-center">
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="col">
            <div className="p-5 text-center  rounded-3">
              {/* SVG icon */}
              <img
                src="https://www.malloftheemirates.com/images/default-source/default-album/moe_hp_dc.webp?sfvrsn=cb6fdb22_3"
                className="d-block w-100"
                style={{ objectFit: "cover", height: "400px" }}
                alt="Sale"
              />

              {/* Heading */}
              <h1 className="text-body-emphasis" style={{ paddingTop: "25px" }}>
                Digital Concierge
              </h1>

              {/* Description */}
              <p className="col-lg-8 mx-auto fs-6">
                This service enables you to shop your favourite mall stores from
                anywhere and enjoy free 4-hour delivery.
              </p>

              <a href="#" className="btn btn-link">
                Connect To An Agent
              </a>
            </div>
          </div>
          <div className="col">
            <div className="p-5 text-center  rounded-3">
              {/* SVG icon */}
              <img
                src="https://www.malloftheemirates.com/images/default-source/default-album/moe_hp_tabby1f911164-2636-470a-b847-25bdcaf0dc1a.webp?sfvrsn=b9aae3b4_3"
                className="d-block w-100"
                style={{ objectFit: "cover", width: "500px", height: "400px" }}
                alt="Sale"
              />

              {/* Heading */}
              <h1 className="text-body-emphasis" style={{ paddingTop: "25px" }}>
                Buy Now, Pay Later
              </h1>

              {/* Description */}
              <p className="col-lg-8 mx-auto fs-6">
                Choose how and when you pay with Tabby. Split your online
                purchases into 4 interest-free payments now.
              </p>

              <a href="#" className="btn btn-link">
                Shop Online
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Browse;
