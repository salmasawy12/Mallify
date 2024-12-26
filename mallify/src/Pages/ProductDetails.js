import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getApp } from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../Const/Header";
import Footer from "../Const/Footer";
import { useCart } from "./CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const db = getFirestore(getApp());
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "Products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("Product not found!");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, db]);

  const handleAddToCart = async () => {
    setButtonLoading(true);
    try {
      await addToCart({
        ...product,
        price: product.Price,
        quantity: 1,
      });
      alert("Item added to cart successfully!");
    } catch (error) {
      alert("Failed to add item to cart.");
    } finally {
      setButtonLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <p>Loading...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center mt-5">
        <p>Product not found!</p>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div
        className="container mt-5 flex-grow-1"
        style={{ marginBottom: "40px" }}
      >
        <div
          className="card shadow-lg"
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={product.imageUrl}
                className="img-fluid rounded-start"
                alt={product.productName}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body" style={{}}>
                <h5 className="card-title text-primary">
                  {product.productName}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {product.brandName}
                </h6>
                <p className="card-text text-dark">${product.Price}</p>
                <p className="card-text">{product.description}</p>
                <button
                  className="btn btn-primary w-100 mt-3"
                  onClick={handleAddToCart}
                  disabled={buttonLoading}
                >
                  {buttonLoading ? "Adding to Cart..." : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
