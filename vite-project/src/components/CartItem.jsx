// src/components/CartItem.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import "../styles/CartItem.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} className="cart-item-img" />
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
        <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
