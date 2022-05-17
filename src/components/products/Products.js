import React from "react";
import { useSelector } from "react-redux";

import styles from "./Products.module.css";
import ProductCard from "../productcard";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  const cartVisible = useSelector((state) => state.cart.cartVisible);

  return (
    <>
      {!cartVisible && (
        <div className={styles.ctn}>
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
      {cartVisible && <p>cart</p>}
    </>
  );
};

export default Products;
