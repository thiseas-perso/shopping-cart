import React from "react";
import logos from "../../assets/logos";

import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles["img-ctn"]}>
      <div>
        <h1>
          The Oding Project:
          <br /> Shopping cart project
        </h1>
      </div>
      <div className={styles.cart}>
        <img src={logos["cart.png"]} alt="logo" />
      </div>
      <div>
        <p>
          A simple project to practice
          <br /> React and React Router
        </p>
      </div>
      <div>
        <img src={logos["odin.jpg"]} alt="logo" />
      </div>
      <div>
        <img src={logos["react.jpg"]} alt="logo" />
      </div>
      <div>
        <img src={logos["router.png"]} alt="logo" />
      </div>
    </div>
  );
};

export default Welcome;
