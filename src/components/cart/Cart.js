import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleVisible } from "../../features/cart/cartSlice";
import CartItem from "../cartitem";

import styles from "./Cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const closeHandler = () => {
    dispatch(toggleVisible());
  };

  return (
    <div className={styles.cart}>
      <h1>Your cart</h1>
      {products.length > 0 &&
        products.map((item) => <CartItem item={item} key={item.id} />)}
      {products.length === 0 && <p>Your cart is empty :/</p>}
      <div className={styles.buttonctn}>
        <button onClick={closeHandler}>Close</button>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
