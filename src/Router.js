import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default Router;
