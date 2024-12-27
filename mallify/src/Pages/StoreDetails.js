import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { getApp } from "firebase/app";
import { Link } from "react-router-dom";
import Header from "../Const/Header";
import Footer from "../Const/Footer";
import { useCart } from "./CartContext";

const StoreDetails = () => {
  const { brandName } = useParams();

  const db = getFirestore(getApp());
  const [products, setProducts] = useState([]);
  const [storeDetails, setStoreDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  const [buttonLoading, setButtonLoading] = useState({}); // Always called at the top

  useEffect(() => {
    const fetchStoreDetailsAndProducts = async () => {
      try {
        setLoading(true);

        // Fetch store details by brandName
        const storeRef = query(
          collection(db, "Stores"),
          where("StoreName", "==", brandName)
        );
        const storeSnapshot = await getDocs(storeRef);

        if (!storeSnapshot.empty) {
          const storeData = storeSnapshot.docs[0].data();
          setStoreDetails({
            id: storeSnapshot.docs[0].id,
            ...storeData,
          });
        } else {
          console.log("No store found for this brand.");
          setStoreDetails(null);
        }

        // Fetch products for the brand
        const productRef = query(
          collection(db, "Products"),
          where("brandName", "==", brandName)
        );
        const productSnapshot = await getDocs(productRef);

        if (productSnapshot.empty) {
          console.log("No products found for this brand.");
          setProducts([]);
        } else {
          setProducts(
            productSnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchStoreDetailsAndProducts();
  }, [brandName]);

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

  if (loading) {
    return (
      <div>
        <Header />
        <div className="container">
          <h1>Loading...</h1>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header />
        <div className="container">
          <h1>{error}</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div
        className="container-fluid"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        {/* Store Image with Store Name, Level, and Parking Info */}
        {storeDetails && (
          <div
            style={{
              position: "relative",
              width: "100%", // Ensure the container spans full width
              height: "400px",
              overflow: "hidden",
              marginBottom: "20px",
            }}
          >
            <img
              src={storeDetails.Image2 || "/placeholder.png"}
              alt={storeDetails.StoreName}
              style={{
                width: "100%", // Ensure the image fills the container width
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
                color: "white",
                padding: "100px",
                borderRadius: "8px",
                width: "calc(100% - 10px)", // Full width minus padding
              }}
            >
              {/* Store Name */}
              <h3 style={{ margin: "0", fontSize: "90px" }}>
                {storeDetails.StoreName}
              </h3>

              {/* Level and Parking Info in the Same Row */}
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  marginTop: "5px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i
                    className="bi bi-layers"
                    style={{ marginRight: "8px" }}
                  ></i>
                  <p style={{ margin: "0", fontSize: "16px" }}>
                    <strong>Level:</strong> {storeDetails.Level}
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i
                    className="bi bi-car-front"
                    style={{ marginRight: "8px" }}
                  ></i>
                  <p style={{ margin: "0", fontSize: "16px" }}>
                    <strong>Nearest Parking:</strong> {storeDetails.Parking}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Store Description */}
          {storeDetails && storeDetails.Description && (
            <div style={{ marginTop: "20px", width: "600px", padding: 40 }}>
              <h2>About {storeDetails.StoreName}</h2>
              <p>{storeDetails.Description}</p>
            </div>
          )}
          {/* Store Hours and Contact Info */}
          {storeDetails && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
                padding: 40,
              }}
            >
              {/* Phone Number */}
              <div
                style={{ display: "flex", alignItems: "center", padding: 40 }}
              >
                <i
                  className="bi bi-telephone"
                  style={{ fontSize: "20px", marginRight: "10px" }}
                ></i>
                <strong>Phone:</strong>
                <p style={{ margin: 0, textDecoration: "underline" }}>
                  {storeDetails.PhoneNumber}
                </p>
              </div>
              {/* Workdays Hours */}
              <div
                style={{ display: "flex", alignItems: "center", padding: 40 }}
              >
                <i
                  className="bi bi-clock"
                  style={{ fontSize: "20px", marginRight: "10px" }}
                ></i>
                <p style={{ margin: 0 }}>
                  <strong>Workdays:</strong> {storeDetails.WorkdaysHours}
                </p>
              </div>

              {/* Weekend Hours */}
              <div
                style={{ display: "flex", alignItems: "center", padding: 40 }}
              >
                <i
                  className="bi bi-clock"
                  style={{ fontSize: "20px", marginRight: "10px" }}
                ></i>
                <p style={{ margin: 0 }}>
                  <strong>Weekend:</strong> {storeDetails.WeekendHours}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Products */}
        <h1 style={{ padding: 40 }}>Products for {brandName}</h1>
        <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="col-md-3 mb-4" // Increased column width to make the card larger
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  paddingLeft: 40,
                  paddingRight: 20,
                }}
              >
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    className="product-card"
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      overflow: "hidden",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      cursor: "pointer",
                      height: "auto", // Let the height be dynamic based on content
                      position: "relative",
                    }}
                  >
                    <img
                      src={product.imageUrl || "/placeholder.png"}
                      alt={product.productName}
                      style={{
                        width: "100%",
                        height: "250px", // Adjusted height of the image to fit larger cards
                        objectFit: "cover",
                      }}
                    />
                    {product.Sale && (
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
                    )}
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
                      <p style={{ color: "#333" }}>
                        {product.Sale ? (
                          <>
                            <span style={{ textDecoration: "line-through" }}>
                              ${product.Price}
                            </span>
                            <br />
                            <span>${product.DiscountedPrice}</span>
                          </>
                        ) : (
                          `$${product.Price}`
                        )}
                      </p>
                      <button
                        className="btn btn-primary"
                        style={{
                          backgroundColor: "#131120",
                          borderColor: "#131120",
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
                </Link>
              </div>
            ))
          ) : (
            <p>No products available for this brand.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StoreDetails;
