import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../Firebase/firebase.js";
import { doc, getDoc } from "firebase/firestore";

const ProductPage = () => {
  const { productId } = useParams(); // Capture the productId from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(firestore, "Products", productId); // Reference the product in Firestore using productId
        const productDoc = await getDoc(productRef);

        if (productDoc.exists()) {
          setProduct(productDoc.data()); // Set the product data
        } else {
          console.log("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]); // Re-run when productId changes

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (!product) {
    return <div>Product not found</div>; // If no product found
  }

  return (
    <div>
      <h1>{product.productName}</h1>
      <p>{product.productDescription}</p>
      <img src={product.productImageUrl} alt={product.productName} />
      <p>{product.productPrice}</p>
      {/* You can add more details here based on your product data */}
    </div>
  );
};

export default ProductPage;
