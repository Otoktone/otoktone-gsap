"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const linksRef = useRef<HTMLLIElement[]>([]);
  const timelinesRef = useRef<Map<HTMLLIElement, gsap.core.Timeline>>(
    new Map()
  );

  useEffect(() => {
    linksRef.current.forEach((link) => {
      if (!link) return;

      // Clean old animations
      if (timelinesRef.current.has(link)) {
        timelinesRef.current.get(link)?.kill();
      }

      const text1 = new SplitType(link.querySelector(".text1") as HTMLElement);
      const text2 = new SplitType(link.querySelector(".text2") as HTMLElement);

      const tl = gsap
        .timeline({ paused: true })
        .to(text1.chars, {
          yPercent: -120,
          stagger: 0.015,
          duration: 0.35,
          ease: "power3.out",
        })
        .to(text2.chars, { yPercent: -100 }, 0);

      timelinesRef.current.set(link, tl);

      const playAnimation = () => tl.play();
      const reverseAnimation = () => tl.reverse();

      link.addEventListener("mouseenter", playAnimation);
      link.addEventListener("mouseleave", reverseAnimation);

      // Cleanup
      return () => {
        link.removeEventListener("mouseenter", playAnimation);
        link.removeEventListener("mouseleave", reverseAnimation);
        text1.revert();
        text2.revert();
      };
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <a href="/">
            <Image src="/oda_white.svg" fill alt="Otoktone.fr logo site web" />
            Otoktone
          </a>
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
              {["Accueil", "Profil", "Contact"].map((text, index) => {
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
                    >
                      <span className="text1">{text}</span>
                      <span className="text2">{text}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className={styles.socials}>
              <a href="https://github.com/Otoktone/" target="_blank">
                <Image
                  src="/github.svg"
                  width={20}
                  height={20}
                  alt="Github logo"
                />
              </a>
              <a href="https://github.com/Otoktone/" target="_blank">
                <Image
                  src="/linkedin.svg"
                  width={20}
                  height={20}
                  alt="LinkedIn logo"
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
