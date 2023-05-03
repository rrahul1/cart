import React from "react";
import { addItem } from "../store/slice/cartSlice";
import { useDispatch } from "react-redux";

function ItemCard(props) {
  const dispatch = useDispatch();
  return (
    <div className="itemcard">
      <div>
        <img src={props.image} alt={props.productName} />
      </div>
      <h5>{props.productName}</h5>
      <p>Price: {props.price}</p>
      <button
        onClick={(e) =>
          dispatch(
            addItem({
              name: props.productName,
              price: props.price,
              id: props.id,
              img: props.image,
            })
          )
        }
      >
        Add to cart
      </button>
    </div>
  );
}

export default ItemCard;
