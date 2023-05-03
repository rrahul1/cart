import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const { items } = useSelector((state) => state.cart);
  const total = items.reduce((a, b) => a + b.price, 0);

  return (
    <div className="cart">
      {items &&
        items.map((item, i) => (
          <h4 key={i}>
            Product Name - <span>{item.name}</span> ------ Price:{" "}
            <span>{item.price}</span>
          </h4>
        ))}
      <h4>sub-Total {total}</h4>
    </div>
  );
}

export default Cart;
