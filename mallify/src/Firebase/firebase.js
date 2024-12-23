// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import "firebase/firestore";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkimjHsGzu3ZTv2s1s-gG0-DVymHHB3NQ",
  authDomain: "mallify.firebaseapp.com",
  projectId: "mallify",
  storageBucket: "mallify.firebasestorage.app",
  messagingSenderId: "461413260930",
  appId: "1:461413260930:web:42689a5aa9d4bbbdd7de9b",
  measurementId: "G-G3LBZQXJBF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
