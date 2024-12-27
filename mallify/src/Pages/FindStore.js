import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getApp } from "firebase/app";
import Header from "../Const/Header";
import Footer from "../Const/Footer";

const FindStore = () => {
  const [stores, setStores] = useState([]);
  const [brands, setBrands] = useState([]);
  const db = getFirestore(getApp());

  // Fetch stores from Firestore
  useEffect(() => {
    const fetchStoresAndBrands = async () => {
      try {
        // Fetch stores
        const storeSnapshot = await getDocs(collection(db, "Stores"));
        const storeData = storeSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStores(storeData);

        // Fetch brands
        const brandSnapshot = await getDocs(collection(db, "Brands"));
        const brandData = brandSnapshot.docs.map((doc) => doc.data().brandName);
        setBrands(brandData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchStoresAndBrands();
  }, [db]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <div style={{ flex: 1 }}>
        <div className="container">
          <div className="row" style={{ marginTop: "10px" }}>
            <div className="col" style={{ color: "#131120" }}>
              <Link
                to="/"
                style={{
                  color: "#131120",
                  textDecoration: "none",
                }}
              >
                Home /
              </Link>{" "}
              <span style={{ textDecoration: "underline" }}>Find a Store</span>
            </div>
          </div>
          <div
            className="row"
            style={{
              marginTop: "25px",
              fontSize: "45px",
              color: "#131120",
              padding: "0px",
              textAlign: "center",
            }}
          >
            Store Directory
          </div>

          {/* Display stores in a horizontal row with overflow */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              overflowX: "auto", // Allow horizontal scrolling
              gap: "15px", // Space between images
              paddingBottom: "20px", // Space at the bottom
              width: "100%", // Make the container span full width
            }}
          >
            {stores.map((store) => (
              <div
                key={store.id}
                style={{
                  width: "33.33%", // Display 3 stores at a time (each store takes up 1/3 of the width)
                  textAlign: "center", // Center the text under the image
                  flexShrink: 0, // Prevent shrinking of the image container
                }}
              >
                {/* Store Image */}
                {store.Image ? (
                  <img
                    src={store.Image}
                    alt={store.StoreName}
                    style={{
                      width: "100%", // Make the image take full width of its container
                      height: "250px", // Fixed height for all images
                      objectFit: "cover", // Ensure the image fits within the height without distortion
                      borderRadius: "8px",
                    }}
                  />
                ) : (
                  <img
                    src="https://via.placeholder.com/800x400"
                    alt={store.StoreName}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                )}
                <h5 style={{ color: "#131120", marginTop: "10px" }}>
                  {store.StoreName}
                </h5>
              </div>
            ))}
          </div>

          {/* Display all stores below the image row */}
          <div style={{ marginTop: "20px" }}>
            {stores.map((store) => {
              const brandMatch = brands.includes(store.StoreName);
              return (
                <div key={store.id} style={{ marginBottom: "15px" }}>
                  <Link
                    to={
                      brandMatch
                        ? `/store/${store.StoreName}`
                        : `/store/${store.id}`
                    }
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "block",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        padding: "15px",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "#fff",
                      }}
                    >
                      <h5 style={{ color: "#131120" }}>{store.StoreName}</h5>

                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginRight: "20px",
                          }}
                        >
                          <i
                            className="bi bi-layers"
                            style={{ fontSize: "20px", marginRight: "8px" }}
                          ></i>
                          <span style={{ color: "#555" }}>
                            <strong>Level:</strong> {store.Level}
                          </span>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <i
                            className="bi bi-car-front"
                            style={{ fontSize: "20px", marginRight: "8px" }}
                          ></i>
                          <span style={{ color: "#555" }}>
                            <strong>Nearest Parking:</strong> {store.Parking}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FindStore;
