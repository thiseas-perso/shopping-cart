import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? `${styles.active}` : `${styles.notactive}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/shop"}
        className={({ isActive }) =>
          isActive ? ` ${styles.active}` : `${styles.notactive}`
        }
      >
        Shop
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          isActive ? `${styles.active}` : `${styles.notactive}`
        }
      >
        About
      </NavLink>
    </nav>
  );
};

export default NavBar;
