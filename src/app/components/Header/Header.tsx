"use client";

import { useEffect, useRef } from "react";
import { fadeIn } from "@/app/utils/animation";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";

const Header = () => {
  const headerRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    fadeIn(headerRef.current, 0, 1, 1.5);
  });

  return (
    <header ref={headerRef} id={styles.header} className={styles.header}>
      <Navbar />
    </header>
  );
};

export default Header;
