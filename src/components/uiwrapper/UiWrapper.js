import React from "react";
import NavBar from "../navBar";

const UiWrapper = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <p>footer here</p>
    </>
  );
};

export default UiWrapper;
