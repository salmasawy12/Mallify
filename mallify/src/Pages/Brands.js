import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../Const/Header";
import { Link } from "react-router-dom";
import Footer from "../Const/Footer";

const Brands = () => {
  const [showSearch, setShowSearch] = useState(false);

  // State for search input
  const [searchTerm, setSearchTerm] = useState("");

  // Example list items
  const items = ["Activeist", "PALMFIT", "Reebok", "Rip Curl", "Wilson"];

  // Filtered list based on the search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
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
              <div className="col" style={{ marginBottom: "10px" }}>
                <div
                  style={{
                    width: "250px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                  }}
                  onClick={() => alert("Card clicked!")}
                >
                  {/* Image Section */}
                  <div style={{ position: "relative" }}>
                    <img
                      src="https://dw4gwhhv7uqc1.cloudfront.net/catalog%2FSeller_36472%2F66c3d83d9365a.jpg"
                      alt="Product"
                      style={{ width: "100%", display: "block" }}
                    />
                    {/* Sale Badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        backgroundColor: "red",
                        color: "white",
                        fontSize: "12px",
                        fontWeight: "bold",
                        padding: "5px 10px",
                        borderRadius: "4px",
                      }}
                    >
                      SALE
                    </div>
                    {/* Favorite Icon */}
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        padding: "8px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                      </svg>
                    </div>
                  </div>
                  {/* Text Section */}
                  <div style={{ padding: "16px" }}>
                    <h4
                      style={{ fontSize: "14px", margin: "0", color: "#666" }}
                    >
                      REEBOK
                    </h4>
                    <h3
                      style={{
                        fontSize: "18px",
                        margin: "10px 0 0 0",
                        color: "#000",
                        fontWeight: "bold",
                      }}
                    >
                      Identity Big Logo Leggings
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col" style={{ marginBottom: "10px" }}>
                <div
                  style={{
                    width: "250px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                  }}
                  onClick={() => alert("Card clicked!")}
                >
                  {/* Image Section */}
                  <div style={{ position: "relative" }}>
                    <img
                      src="https://dw4gwhhv7uqc1.cloudfront.net/catalog%2FSeller_36472%2F66c3d83d9365a.jpg"
                      alt="Product"
                      style={{ width: "100%", display: "block" }}
                    />
                    {/* Sale Badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        backgroundColor: "red",
                        color: "white",
                        fontSize: "12px",
                        fontWeight: "bold",
                        padding: "5px 10px",
                        borderRadius: "4px",
                      }}
                    >
                      SALE
                    </div>
                    {/* Favorite Icon */}
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        padding: "8px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                      </svg>
                    </div>
                  </div>
                  {/* Text Section */}
                  <div style={{ padding: "16px" }}>
                    <h4
                      style={{ fontSize: "14px", margin: "0", color: "#666" }}
                    >
                      REEBOK
                    </h4>
                    <h3
                      style={{
                        fontSize: "18px",
                        margin: "10px 0 0 0",
                        color: "#000",
                        fontWeight: "bold",
                      }}
                    >
                      Identity Big Logo Leggings
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col" style={{ marginBottom: "10px" }}>
                <div
                  style={{
                    width: "250px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                  }}
                  onClick={() => alert("Card clicked!")}
                >
                  {/* Image Section */}
                  <div style={{ position: "relative" }}>
                    <img
                      src="https://dw4gwhhv7uqc1.cloudfront.net/catalog%2FSeller_36472%2F66c3d83d9365a.jpg"
                      alt="Product"
                      style={{ width: "100%", display: "block" }}
                    />
                    {/* Sale Badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        backgroundColor: "red",
                        color: "white",
                        fontSize: "12px",
                        fontWeight: "bold",
                        padding: "5px 10px",
                        borderRadius: "4px",
                      }}
                    >
                      SALE
                    </div>
                    {/* Favorite Icon */}
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        padding: "8px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                      </svg>
                    </div>
                  </div>
                  {/* Text Section */}
                  <div style={{ padding: "16px" }}>
                    <h4
                      style={{ fontSize: "14px", margin: "0", color: "#666" }}
                    >
                      REEBOK
                    </h4>
                    <h3
                      style={{
                        fontSize: "18px",
                        margin: "10px 0 0 0",
                        color: "#000",
                        fontWeight: "bold",
                      }}
                    >
                      Identity Big Logo Leggings
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col" style={{ marginBottom: "10px" }}>
                <div
                  style={{
                    width: "250px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                  }}
                  onClick={() => alert("Card clicked!")}
                >
                  {/* Image Section */}
                  <div style={{ position: "relative" }}>
                    <img
                      src="https://dw4gwhhv7uqc1.cloudfront.net/catalog%2FSeller_36472%2F66c3d83d9365a.jpg"
                      alt="Product"
                      style={{ width: "100%", display: "block" }}
                    />
                    {/* Sale Badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        backgroundColor: "red",
                        color: "white",
                        fontSize: "12px",
                        fontWeight: "bold",
                        padding: "5px 10px",
                        borderRadius: "4px",
                      }}
                    >
                      SALE
                    </div>
                    {/* Favorite Icon */}
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        padding: "8px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                      </svg>
                    </div>
                  </div>
                  {/* Text Section */}
                  <div style={{ padding: "16px" }}>
                    <h4
                      style={{ fontSize: "14px", margin: "0", color: "#666" }}
                    >
                      REEBOK
                    </h4>
                    <h3
                      style={{
                        fontSize: "18px",
                        margin: "10px 0 0 0",
                        color: "#000",
                        fontWeight: "bold",
                      }}
                    >
                      Identity Big Logo Leggings
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Brands;
