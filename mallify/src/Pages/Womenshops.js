import React, { useContext, useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../Const/Header";
import { Link } from "react-router-dom";
import Footer from "../Const/Footer";
import { useCart } from "./CartContext";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import { getApp } from "firebase/app";

const Womenshops = () => {
  const { addToCart } = useCart();
  const db = getFirestore(getApp());
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    men: false,
    women: false,
    bags: false,
    accessories: false,
    equipment: false,
  });

  const [selectedBrands, setSelectedBrands] = useState([]);

  const [genderFilters, setGenderFilters] = useState({
    women: false,
    men: false,
    unisex: false,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        let queryConstraints = [where("Category", "==", "Women")];

        // Apply type filters
        const selectedTypes = Object.keys(filters).filter(
          (key) => filters[key]
        );
        if (selectedTypes.length > 0) {
          queryConstraints.push(where("Type", "in", selectedTypes));
        }

        const productsCollection = await getDocs(
          query(collection(db, "Products"), ...queryConstraints)
        );

        const productsData = productsCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const selectedGenders = Object.keys(genderFilters).filter(
          (key) => genderFilters[key]
        );
        if (selectedGenders.length > 0) {
          queryConstraints.push(where("Gender", "in", selectedGenders));
        }

        // Filter by search term and brand
        const filteredBySearch = productsData.filter((product) =>
          product.brandName?.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const filteredByBrand = filteredBySearch.filter(
          (product) =>
            selectedBrands.length === 0 ||
            selectedBrands.includes(product.brandName)
        );

        setProducts(filteredByBrand);

        // Extract unique brand names for the checkbox list
        const uniqueBrands = [
          ...new Set(productsData.map((product) => product.brandName)),
        ];
        setFilteredBrands(uniqueBrands);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters, searchTerm, selectedBrands, genderFilters]);

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const handleBrandChange = (event) => {
    const { name, checked } = event.target;
    setSelectedBrands((prevBrands) =>
      checked
        ? [...prevBrands, name]
        : prevBrands.filter((brand) => brand !== name)
    );
  };
  const [buttonLoading, setButtonLoading] = useState({}); // Track loading state for each product

  const handleAddToCart = async (product) => {
    setButtonLoading((prevState) => ({
      ...prevState,
      [product.id]: true, // Set loading for this specific product
    }));

    try {
      const cartItem = {
        ...product,
        price: product.Sale ? product.DiscountedPrice : product.Price, // Use discounted price if on sale
        quantity: 1, // Default quantity is 1 when added to the cart
      };
      await addToCart(cartItem);
      alert("Item added to cart successfully!");
    } catch (error) {
      alert("Failed to add item to cart.");
    } finally {
      setButtonLoading((prevState) => ({
        ...prevState,
        [product.id]: false, // Reset loading state for this product
      }));
    }
  };

  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col" style={{ color: "#131120" }}>
            <Link to="/" style={{ color: "#131120", textDecoration: "none" }}>
              Home /
            </Link>{" "}
            <span style={{ textDecoration: "underline" }}>Women</span>
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
          Women
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
                      {[
                        "clothing",
                        "footwear",
                        "bags",
                        "jewllery & watches",
                        "accessories",
                      ].map((filter) => (
                        <li
                          key={filter}
                          style={{
                            fontSize: "20px",
                            marginLeft: "25px",
                            marginBottom: "10px",
                          }}
                        >
                          <input
                            type="checkbox"
                            id={filter}
                            name={filter}
                            checked={filters[filter]}
                            onChange={handleFilterChange}
                            style={{
                              marginRight: "10px",
                              transform: "scale(1.3)",
                              accentColor: "#131120",
                            }}
                          />
                          <label htmlFor={filter}>
                            {filter.charAt(0) + filter.slice(1)}
                          </label>
                        </li>
                      ))}
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
                        {filteredBrands.length > 0 ? (
                          filteredBrands.map((brand, index) => (
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
                                id={brand}
                                name={brand}
                                onChange={handleBrandChange}
                                style={{
                                  marginRight: "10px",
                                  transform: "scale(1.3)",
                                }}
                              />
                              {brand}
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

                <li className="border-top my-3"></li>
              </ul>
            </div>
          </div>
          <div className="col">
            {" "}
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
                              className="btn"
                              style={{
                                backgroundColor: "#131120",
                                color: "white",
                              }}
                              onClick={(e) => {
                                e.preventDefault(); // Prevent Link navigation when clicking on the button
                                handleAddToCart(product); // Add the product to the cart
                              }}
                              disabled={buttonLoading[product.id]} // Disable button if loading
                            >
                              {buttonLoading[product.id]
                                ? "Adding..."
                                : "Add to Cart"}
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
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Womenshops;
