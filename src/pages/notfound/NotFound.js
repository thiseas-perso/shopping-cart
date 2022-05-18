import React from "react";
import Uiwrapper from "../../components/uiwrapper";

import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <Uiwrapper>
      <div className={styles.banner}>Woops, there is nothing here..!</div>
    </Uiwrapper>
  );
};

export default NotFound;
