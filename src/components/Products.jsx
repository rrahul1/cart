import React from "react";
import itemData from "../products.json";
import ItemCard from "./ItemCard";

function Products() {
  return (
    <div className="products">
      {itemData.map((item, i) => (
        <ItemCard key={i} {...item} />
        ))}
    </div>
  );
}

export default Products;
