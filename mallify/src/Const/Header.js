import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { firestore } from "../Firebase/firebase.js";
import { collection, query, getDocs } from "firebase/firestore";
import title from "../Images/Title.png";
import bag from "../Images/Bag.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "../Const/Sidebar.js";
import Modal from "../Pages/Modal.js";
import { useCart } from "../Pages/CartContext";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState(""); // For the search input
  const [searchResults, setSearchResults] = useState({
    products: [],
    brands: [],
  }); // Initialize search results as empty arrays
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartCount } = useCart(); // Access cart count from context
  const navigate = useNavigate();
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  // Debounce search input to prevent too many requests
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300); // Delay in ms before triggering the search

    return () => clearTimeout(timer); // Cleanup the timeout if the input changes
  }, [searchTerm]);

  // Fetch and filter products based on search term
  const handleSearch = async () => {
    if (!debouncedTerm.trim()) {
      setSearchResults({ products: [], brands: [] }); // Clear results if search term is empty
      return;
    }

    try {
      // Fetch all products
      const q = query(collection(firestore, "Products"));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setSearchResults({ products: [], brands: [] });
        return;
      }

      // Filter products by checking if the product name or brand name includes the search term
      const filteredProducts = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter(
          (product) =>
            product.productName
              .toLowerCase()
              .includes(debouncedTerm.toLowerCase()) // Check product name
        );

      // Filter brands by checking if the brand name includes the search term
      const filteredBrands = [
        ...new Set(
          querySnapshot.docs
            .map((doc) => doc.data().brandName)
            .filter((brand) =>
              brand.toLowerCase().includes(debouncedTerm.toLowerCase())
            )
        ),
      ];

      // Combine both product and brand results
      setSearchResults({
        products: filteredProducts,
        brands: filteredBrands,
      });
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  // Trigger search when debounced term changes
  useEffect(() => {
    handleSearch();
  }, [debouncedTerm]);

  // Function to handle item click (redirect to product page)
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Redirect to the product page (you should set up a route for this)
  };
  const handleBrandClick = (brandName) => {
    // Redirect to the brand's product page with the correct route
    navigate(`/store/${brandName}`); // Navigate to the 'store' route, not 'brand'
  };

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
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Handle search input
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
              {/* Display search results */}
              {searchTerm &&
                (searchResults.products.length > 0 ||
                  searchResults.brands.length > 0) && (
                  <div
                    style={{
                      position: "absolute",
                      top: "105px",
                      left: "770px",
                      width: "500px",
                      backgroundColor: "#fff",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      zIndex: "1000",
                    }}
                  >
                    {/* Display Products */}
                    {searchResults.products.length > 0 && (
                      <div>
                        <h6>Products</h6>
                        {searchResults.products.map((product) => (
                          <div
                            key={product.id}
                            onClick={() => handleProductClick(product.id)}
                            style={{
                              padding: "10px",
                              cursor: "pointer",
                              borderBottom: "1px solid #eee",
                            }}
                          >
                            <strong>{product.productName}</strong>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Display Brands */}
                    {searchResults.brands.length > 0 && (
                      <div>
                        <h6>Brands</h6>
                        {searchResults.brands.map((brand, index) => (
                          <div
                            key={index}
                            onClick={() => handleBrandClick(brand)}
                            style={{
                              padding: "10px",
                              cursor: "pointer",
                              borderBottom: "1px solid #eee",
                            }}
                          >
                            <strong>{brand}</strong>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
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
      )}{" "}
      <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default Header;
