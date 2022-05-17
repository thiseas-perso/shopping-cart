import React from "react";
import styles from "./CartItem.module.css";

import { useDispatch } from "react-redux";

import { addToCart, removeFromCart } from "../../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const incrementHandler = () => {
    const product = { id: item.id, quantity: 1 };
    dispatch(addToCart(product));
  };

  const decrementHandler = () => {
    const product = { id: item.id };
    dispatch(removeFromCart(product));
  };

  return (
    <div className={styles.carditem}>
      <div>
        <span>{item.title}</span> : <span>{item.quantity}</span>{" "}
      </div>
      <div className={styles.buttonctn}>
        <button onClick={decrementHandler}>-</button>{" "}
        <button onClick={incrementHandler}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
