import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "../../features/cart/cartSlice";
import styles from "./ProductCard.module.css";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const incrementHandler = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementHandler = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  const addToCartHandler = () => {
    const product = { id: item.id, title: item.title, quantity };
    dispatch(addToCart(product));
    setQuantity(0);
  };

  return (
    <div className={styles.card}>
      <h2>{item.title}</h2>
      <p>
        Quantity : <span className={styles.quantity}>{quantity}</span>
      </p>
      <div>
        <button
          disabled={quantity === 0 ? true : false}
          onClick={decrementHandler}
        >
          - 1
        </button>
        <button onClick={incrementHandler}>+ 1</button>
      </div>
      <div>
        <button
          disabled={quantity === 0 ? true : false}
          onClick={addToCartHandler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
