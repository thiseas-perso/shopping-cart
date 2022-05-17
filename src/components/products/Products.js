import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Products.module.css";
import ProductCard from "../productcard";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  console.log(products);
  return (
    <div className={styles.ctn}>
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Products;
