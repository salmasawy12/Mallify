import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Homepage from './Pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This imports both Bootstrap JS and Popper.js
import Header from "../src/Const/Header"
import Sidebar from './Const/Sidebar';
import Footer from "../src/Const/Footer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Homepage />
   {/* <Footer></Footer> */}
   {/* <Header/> */}
   {/* <Sidebar></Sidebar> */}
   
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
