import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../Const/Header";
import { Link } from "react-router-dom";
import Footer from "../Const/Footer";
import { firestore } from "../Firebase/firebase";
import { useCart } from "./CartContext";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import { getApp } from "firebase/app"; // Ensure Firebase app is initialized

const Brands = () => {
  const { addToCart } = useCart();
  const db = getFirestore(getApp());
  const [showSearch, setShowSearch] = useState(false);

  // State for search input
  const [searchTerm, setSearchTerm] = useState("");

  // Example list items
  const items = ["Activeist", "PALMFIT", "Reebok", "Rip Curl", "Wilson"];

  // Filtered list based on the search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fetch products from Firestore

  console.log("Firestore instance:", firestore);

  const [products, setProducts] = useState([]);
  const [brandName, setBrandName] = useState("");
  const [loading, setLoading] = useState(true);
  const [Category, setCategory] = useState("Sports");

  // Fetch products by brand name
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const productsCollection = await getDocs(
          query(collection(db, "Products"), where("Category", "==", Category))
        );

        if (productsCollection.empty) {
          console.log(`No products found for brand: ${Category}`);
        } else {
          console.log("Fetched products:", productsCollection.docs);
        }

        const productsData = productsCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("Mapped products data:", productsData);
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [Category]);
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col" style={{ color: "#131120" }}>
            <Link to="/" style={{ color: "#131120", textDecoration: "none" }}>
              Home /
            </Link>{" "}
            <span style={{ textDecoration: "underline" }}>Sports</span>
          </div>
        </div>
        <div
          className="row"
          style={{
            marginTop: "25px",
            fontSize: "75px",
            color: "#131120",
            padding: "0px",
          }}
        >
          Sports
        </div>
        <hr></hr>
        <div className="row">
          <div className="col-auto">
            {" "}
            <div className="flex-shrink-0 p-3" style={{ width: "280px" }}>
              <ul className="list-unstyled ps-0">
                {/* Categories Section */}
                <li className="mb-1">
                  <button
                    className="btn btn-toggle d-inline-flex align-items-left rounded border-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#home-collapse"
                    aria-expanded="false"
                    style={{ fontSize: "35px" }}
                  >
                    Categories
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-chevron-compact-down"
                      viewBox="0 0 16 16"
                      style={{
                        marginLeft: "10px",
                        fontSize: "25px",
                        marginTop: "20px",
                      }}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"
                      />
                    </svg>
                  </button>
                  <div className="collapse" id="home-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li
                        style={{
                          fontSize: "20px",
                          marginLeft: "25px",
                          marginBottom: "10px",
                        }}
                      >
                        <input
                          type="checkbox"
                          id="women"
                          name="women"
                          style={{
                            marginRight: "10px",
                            transform: "scale(1.3)",
                          }}
                        ></input>
                        <label htmlFor="women">Women</label>
                      </li>
                      <li
                        style={{
                          fontSize: "20px",
                          marginLeft: "25px",
                          marginBottom: "10px",
                        }}
                      >
                        <input
                          type="checkbox"
                          id="men"
                          name="men"
                          style={{
                            marginRight: "10px",
                            transform: "scale(1.3)",
                          }}
                        ></input>
                        <label htmlFor="men">Men</label>
                      </li>
                      <li
                        style={{
                          fontSize: "20px",
                          marginLeft: "25px",
                          marginBottom: "10px",
                        }}
                      >
                        <input
                          type="checkbox"
                          id="bags"
                          name="bags"
                          style={{
                            marginRight: "10px",
                            transform: "scale(1.3)",
                          }}
                        ></input>
                        <label htmlFor="bags">Bags</label>
                      </li>
                      <li
                        style={{
                          fontSize: "20px",
                          marginLeft: "25px",
                          marginBottom: "10px",
                        }}
                      >
                        <input
                          type="checkbox"
                          id="accessories"
                          name="accessories"
                          style={{
                            marginRight: "10px",
                            transform: "scale(1.3)",
                          }}
                        ></input>
                        <label htmlFor="accessories">Accessories</label>
                      </li>
                      <li
                        style={{
                          fontSize: "20px",
                          marginLeft: "25px",
                          marginBottom: "10px",
                        }}
                      >
                        <input
                          type="checkbox"
                          id="equipment"
                          name="equipment"
                          style={{
                            marginRight: "10px",
                            transform: "scale(1.3)",
                          }}
                        ></input>
                        <label htmlFor="equipment">Equipment</label>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Stores Section */}
                <li className="mb-1">
                  <button
                    onClick={() => setShowSearch(!showSearch)}
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#dashboard-collapse"
                    aria-expanded="false"
                    style={{ fontSize: "35px", whiteSpace: "nowrap" }}
                  >
                    Stores
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-chevron-compact-down"
                      viewBox="0 0 16 16"
                      style={{
                        marginLeft: "10px",
                        fontSize: "25px",
                        marginTop: "15px",
                      }}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"
                      />
                    </svg>
                  </button>
                  {showSearch && (
                    <div style={{ marginTop: "20px" }}>
                      {/* Search Bar */}
                      <input
                        type="text"
                        placeholder="Search stores..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "10px",
                          fontSize: "16px",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                        }}
                      />

                      {/* Unordered List */}
                      <ul
                        style={{
                          marginTop: "20px",
                          listStyleType: "none",
                          padding: 0,
                        }}
                      >
                        {filteredItems.length > 0 ? (
                          filteredItems.map((item, index) => (
                            <li
                              key={index}
                              style={{
                                fontSize: "20px",
                                marginLeft: "25px",
                                marginBottom: "10px",
                              }}
                            >
                              <input
                                type="checkbox"
                                id={item}
                                name={item}
                                style={{
                                  marginRight: "10px",
                                  transform: "scale(1.3)",
                                }}
                              />
                              {item}
                            </li>
                          ))
                        ) : (
                          <li style={{ fontSize: "18px", color: "#999" }}>
                            No stores found
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </li>

                {/* Gender Section */}
                <li className="mb-1">
                  <button
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#orders-collapse"
                    aria-expanded="false"
                    style={{ fontSize: "35px" }}
                  >
                    Gender
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-chevron-compact-down"
                      viewBox="0 0 16 16"
                      style={{
                        marginLeft: "10px",
                        fontSize: "25px",
                        marginTop: "15px",
                      }}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"
                      />
                    </svg>
                  </button>
                  <div className="collapse" id="orders-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li
                        style={{
                          fontSize: "20px",
                          marginLeft: "25px",
                          marginBottom: "10px",
                        }}
                      >
                        <input
                          type="checkbox"
                          id="women"
                          name="women"
                          style={{
                            marginRight: "10px",
                            transform: "scale(1.3)",
                          }}
                        ></input>
                        <label htmlFor="women">Women</label>
                      </li>
                      <li
                        style={{
                          fontSize: "20px",
                          marginLeft: "25px",
                          marginBottom: "10px",
                        }}
                      >
                        <input
                          type="checkbox"
                          id="men"
                          name="men"
                          style={{
                            marginRight: "10px",
                            transform: "scale(1.3)",
                          }}
                        ></input>
                        <label htmlFor="men">Men</label>
                      </li>
                      <li
                        style={{
                          fontSize: "20px",
                          marginLeft: "25px",
                          marginBottom: "10px",
                        }}
                      >
                        <input
                          type="checkbox"
                          id="unisex"
                          name="unisex"
                          style={{
                            marginRight: "10px",
                            transform: "scale(1.3)",
                          }}
                        ></input>
                        <label htmlFor="unisex">Unisex</label>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="border-top my-3"></li>

                {/* Account Section */}
                <li className="mb-1">
                  <button
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#account-collapse"
                    aria-expanded="false"
                    style={{ fontSize: "35px" }}
                  >
                    Account
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-chevron-compact-down"
                      viewBox="0 0 16 16"
                      style={{
                        marginLeft: "10px",
                        fontSize: "25px",
                        marginTop: "15px",
                      }}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"
                      />
                    </svg>
                  </button>
                  <div className="collapse" id="account-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li
                        style={{
                          fontSize: "20px",
                          marginLeft: "25px",
                          marginBottom: "10px",
                        }}
                      >
                        <a
                          href="#"
                          className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          New...
                        </a>
                      </li>
                      <li
                        style={{
                          fontSize: "20px",
                          marginLeft: "25px",
                          marginBottom: "10px",
                        }}
                      >
                        <a
                          href="#"
                          className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          Profile
                        </a>
                      </li>
                      <li
                        style={{
                          fontSize: "20px",
                          marginLeft: "25px",
                          marginBottom: "10px",
                        }}
                      >
                        <a
                          href="#"
                          className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          Settings
                        </a>
                      </li>
                      <li
                        style={{
                          fontSize: "20px",
                          marginLeft: "25px",
                          marginBottom: "10px",
                        }}
                      >
                        <a
                          href="#"
                          className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {loading ? (
                <p>Loading products...</p> // Show loading message
              ) : (
                <div
                  className="product-list"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="product-card"
                      style={{
                        marginBottom: "10px",
                        marginRight: "10px",
                        flexBasis: "250px",
                      }}
                    >
                      <div
                        style={{
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          overflow: "hidden",
                          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                          cursor: "pointer",
                        }}
                      >
                        <img
                          src={product.imageUrl || "/placeholder.png"}
                          alt={product.productName}
                          style={{ width: "100%", display: "block" }}
                        />
                        <div style={{ padding: "16px" }}>
                          <h4 style={{ fontSize: "14px", color: "#666" }}>
                            {product.brandName}
                          </h4>
                          <h3
                            style={{
                              fontSize: "18px",
                              color: "#000",
                              fontWeight: "bold",
                            }}
                          >
                            {product.productName}
                          </h3>
                          <p style={{ color: "#333" }}>${product.Price}</p>
                          <button
                            className="btn btn-primary"
                            onClick={() =>
                              addToCart({
                                ...product,
                                price: product.Price,
                                quantity: 1, // Default quantity is 1 when added to the cart
                              })
                            }
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Brands;
