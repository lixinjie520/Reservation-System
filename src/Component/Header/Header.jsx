import React from "react";
import styles from "./Header.module.css";
import logo from "/src/assets/massagelogo.jpg";

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} />

      <nav className={styles.navber}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="#">HOME</a>
          </li>
          <li className={styles.item}>
            <a href="#">SERVICES</a>
          </li>
          <li className={styles.item}>
            <a href="#">STAFF</a>
          </li>
          <li className={styles.item}>
            <a href="#">BOOKING</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
