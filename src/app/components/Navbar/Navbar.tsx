"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { animateLinks } from "@/app/utils/animation";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const linksRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    animateLinks(linksRef);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <Link href={"/"}>Otoktone</Link>
        </div>
        <div
          className={`${styles.menuContainer} ${isOpen ? styles.active : ""}`}
        >
          <div
            className={`${styles.burger} ${isOpen ? styles.active : ""}`}
            onClick={toggleMenu}
          >
            <svg
              className={`${styles.ham} ${isOpen ? styles.active : ""}`}
              viewBox="0 0 100 100"
              width="80"
            >
              <path
                className={`${styles.line} ${styles.top}`}
                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
              />
              <path
                className={`${styles.line} ${styles.middle}`}
                d="m 30,50 h 40"
              />
              <path
                className={`${styles.line} ${styles.bottom}`}
                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
              />
            </svg>
          </div>
          <div className={styles.menu}>
            <ul>
              {["Accueil", "Portfolio", "Profil", "Contact"].map(
                (text, index) => {
                  const href =
                    text === "Accueil" ? "/" : `/${text.toLowerCase()}`;
                  return (
                    <li
                      key={index}
                      className={styles.link}
                      ref={(el) => {
                        if (el) linksRef.current[index] = el;
                      }}
                    >
                      <Link
                        href={href}
                        className={pathname === href ? styles.active : ""}
                        onClick={closeMenu}
                      >
                        <span className="text1">{text}</span>
                        <span className="text2">{text}</span>
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
            <div className={styles.socials}>
              <a href="https://github.com/Otoktone/" target="_blank">
                <Image
                  src="/icons/github.svg"
                  width={20}
                  height={20}
                  alt="Github logo Otoktone Alexandre Desmot développeur web vannes"
                  loading="lazy"
                />
              </a>
              <a
                href="https://fr.linkedin.com/in/alexandre-desmot-145a34182"
                target="_blank"
              >
                <Image
                  src="/icons/linkedin.svg"
                  width={20}
                  height={20}
                  alt="LinkedIn logo Alexandre Desmot Otoktone développeur web vannes"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
