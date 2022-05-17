import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CartButton.module.css";

import { toggleVisible } from "../../features/cart/cartSlice";

const CartButton = () => {
  const cartVisible = useSelector((state) => state.cart.cartVisible);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(toggleVisible());
  };
  return (
    <>
      {!cartVisible && (
        <div className={styles.cartbtnctn}>
          <p>
            Your cart: <span></span>
          </p>
          <button onClick={clickHandler}>View cart</button>
        </div>
      )}
    </>
  );
};

export default CartButton;
