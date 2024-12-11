import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navber.jsx";
import Home from "./components/Home.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import Products from "./components/Products.jsx";
import Product from "./components/Product.jsx";

export default function App() {
  const productList = [
    { id: 1, name: "Product1", title: "Lorem ipsum dolor sit amet." },
    { id: 2, name: "Product2", title: "Lorem ipsum dolor sit amet." },
    { id: 3, name: "Product3", title: "Lorem ipsum dolor sit amet." },
  ];

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/products"
          element={<Products productList={productList} />}
        />
        <Route
          path="/product/:id"
          element={<Product productList={productList} />}
        />
      </Routes>
    </div>
  );
}
