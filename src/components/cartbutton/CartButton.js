import React from "react";
import styles from "./CartButton.module.css";

const CartButton = () => {
  return (
    <div className={styles.cartbtnctn}>
      <p>
        Your cart: <span></span>
      </p>
      <button>View cart</button>
    </div>
  );
};

export default CartButton;
