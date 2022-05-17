import React from "react";
import Footer from "../footer";
import NavBar from "../navBar";

const UiWrapper = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default UiWrapper;
