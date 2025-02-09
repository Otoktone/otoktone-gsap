"use client";

import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header id={styles.header} className={styles.header}>
      <Navbar />
    </header>
  );
};

export default Header;
