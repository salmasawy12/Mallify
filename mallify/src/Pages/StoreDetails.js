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
import Header from "../Const/Header";
import Footer from "../Const/Footer";

const StoreDetails = () => {
  const { brandName } = useParams();
  const db = getFirestore(getApp());
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // Start loading
        const q = query(
          collection(db, "Products"),
          where("brandName", "==", brandName)
        );
        const querySnapshot = await getDocs(q);

        // Check if data is available
        if (querySnapshot.empty) {
          console.log("No products found for this brand.");
          setProducts([]); // No products found for this brand
        } else {
          // Log the products to verify structure
          console.log("Products fetched:", querySnapshot.docs);

          setProducts(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products.");
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchProducts();
  }, [brandName]);

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
      <div className="container">
        <h1>Store: {brandName}</h1>
        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="col-md-4 mb-4" // Bootstrap grid system for product cards
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  className="product-card"
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                  }}
                >
                  {/* Product Image */}
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
                      style={{
                        backgroundColor: "#131120",
                        borderColor: "#131120",
                      }}
                      onClick={() => alert("Added to Cart")} // Add cart logic here
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
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
