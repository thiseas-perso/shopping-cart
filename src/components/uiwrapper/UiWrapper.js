import React from "react";
import Footer from "../footer";
import NavBar from "../navBar";
import styles from "./UiWrapper.module.css";

const UiWrapper = ({ children }) => {
  return (
    <div className={styles["ui-wrap"]}>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default UiWrapper;
