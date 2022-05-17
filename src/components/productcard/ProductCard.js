import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <h2>{item.title}</h2>
      <p>
        Quantity : <span className={styles.quantity}>0</span>
      </p>
      <div>
        <button>- 1</button>
        <button>+ 1</button>
      </div>
      <div>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
