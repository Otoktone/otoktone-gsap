"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { fadeIn } from "@/app/utils/animation";
const Navbar = dynamic(() => import("@/app/components/Navbar/Navbar"), {
  ssr: false,
});
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
