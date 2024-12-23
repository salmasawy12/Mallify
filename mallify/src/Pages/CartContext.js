import React, { createContext, useState, useContext, useEffect } from "react";
import { firestore } from "../Firebase/firebase"; // Import Firestore instance
import { doc, updateDoc, getDoc } from "firebase/firestore";

// Create Cart Context
const CartContext = createContext();

// Cart Context Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage if they exist
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems"));
    if (savedCart) {
      setCartItems(savedCart);
    }
  }, []);

  // Function to update localStorage whenever cartItems change
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItems");
    }
  }, [cartItems]);

  // Function to update the Quantity field in Firestore
  const updateFirestoreQuantity = async (itemId, orderedQuantity) => {
    try {
      // Reference to the Firestore document
      const itemDocRef = doc(firestore, "items", itemId); // Replace "items" with your collection name

      // Get the current document
      const itemDoc = await getDoc(itemDocRef);

      if (itemDoc.exists()) {
        const currentQuantity = itemDoc.data().Quantity; // Correct field name

        // Ensure there's enough stock before updating
        if (currentQuantity >= orderedQuantity) {
          // Update the Quantity field in Firestore
          await updateDoc(itemDocRef, {
            Quantity: currentQuantity - orderedQuantity, // Correct field name
          });
          console.log(
            `Updated Firestore: Reduced Quantity of item ${itemId} by ${orderedQuantity}`
          );
        } else {
          console.error("Not enough stock available.");
        }
      } else {
        console.error("Item does not exist in Firestore.");
      }
    } catch (error) {
      console.error("Error updating Firestore Quantity:", error);
    }
  };

  const updateQuantitiesOnCheckout = async () => {
    try {
      // Loop through all cart items
      for (const item of cartItems) {
        const itemDocRef = doc(firestore, "Products", item.id); // Replace "items" with your collection name
        const itemDoc = await getDoc(itemDocRef);

        if (itemDoc.exists()) {
          const currentQuantity = itemDoc.data().Quantity;

          // Check if stock is sufficient
          if (currentQuantity >= item.quantity) {
            await updateDoc(itemDocRef, {
              Quantity: currentQuantity - item.quantity, // Decrease stock
            });
          } else {
            console.error(
              `Insufficient stock for item ${item.id}. Available: ${currentQuantity}, Required: ${item.quantity}`
            );
          }
        } else {
          console.error(`Item ${item.id} does not exist in Firestore.`);
        }
      }

      console.log("Firestore quantities updated, and cart cleared.");
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  // Function to add items to the cart
  const addToCart = async (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItems(updatedCart);

      // Update Firestore Quantity
      await updateFirestoreQuantity(product.id, 1); // Decrease by 1
    } else {
      const newItem = {
        id: product.id,
        name: product.productName,
        price: product.price,
        quantity: 1,
        imageUrl: product.imageUrl,
      };
      setCartItems([...cartItems, newItem]);

      // Update Firestore Quantity
      await updateFirestoreQuantity(product.id, 1); // Decrease by 1
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Function to decrease quantity
  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Function to increase quantity
  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems"); // Remove from localStorage as well
  };

  // Calculate the total number of items in the cart
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount, // Expose cart count
        totalPrice, // Expose total price
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        updateFirestoreQuantity, // Expose Firestore update function
        updateQuantitiesOnCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the Cart context
export const useCart = () => useContext(CartContext);
