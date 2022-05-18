import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink
        to={"/shopping-cart"}
        className={({ isActive }) =>
          isActive ? `${styles.active}` : `${styles.notactive}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/shopping-cart/shop"}
        className={({ isActive }) =>
          isActive ? ` ${styles.active}` : `${styles.notactive}`
        }
      >
        Shop
      </NavLink>
      <NavLink
        to={"/shopping-cart/contact"}
        className={({ isActive }) =>
          isActive ? `${styles.active}` : `${styles.notactive}`
        }
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default NavBar;
