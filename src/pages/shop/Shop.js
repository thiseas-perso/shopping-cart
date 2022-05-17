import React from "react";

import Products from "../../components/products";
import CartButton from "../../components/cartbutton";
import UiWrapper from "../../components/uiwrapper";
import styles from "./Shop.module.css";

const Shop = () => {
  return (
    <UiWrapper>
      <div className={styles.main}>
        <CartButton />
        <Products />
      </div>
    </UiWrapper>
  );
};

export default Shop;
