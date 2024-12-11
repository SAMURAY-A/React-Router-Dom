import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navber";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Product from "./components/Product";

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
