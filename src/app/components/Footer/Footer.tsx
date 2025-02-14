"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { fadeIn, fadeInStaggered, animateLinks } from "@/app/utils/animation";
import { splitText } from "@/app/utils/textUtils";
import styles from "./Footer.module.scss";

const Footer = () => {
  const phone = "+33635443347";
  const mail = "alexandre.desmot@otoktone.fr";
  const year: number = new Date().getFullYear();

  const h3Ref = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  // Reload letters animation when entering viewport
  const handleAnimationInViewport = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const letters = h3Ref.current?.querySelectorAll("span");

        if (letters) {
          fadeIn(h3Ref.current, 0, 0.6, 3);
          fadeInStaggered(letters, 0, 0.5, 0.5, 0.05);
        }
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleAnimationInViewport, {
      threshold: 0.2,
    });

    const h3Element = h3Ref.current;

    if (h3Element) {
      observer.observe(h3Element);
    }

    return () => {
      if (h3Element) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!h3Ref.current) return;

    const letters = h3Ref.current.querySelectorAll("span");
    fadeIn(h3Ref.current, 0, 0.6, 1.5);
    fadeInStaggered(letters, 0, 0.5, 0.5, 0.05);
  }, []);

  useEffect(() => {
    if (linksRef.current.length === 0) return;
    requestAnimationFrame(() => animateLinks(linksRef));
  }, []);

  return (
    <footer id={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerHeader}>
          <h2>Otoktone</h2>
          <h3 ref={h3Ref}>{splitText("Alexandre Desmot | Développeur web")}</h3>
        </div>
        <div className={styles.infos}>
          <a className="blank" href={`tel:${phone}`}>
            <Image
              src="/phone.svg"
              width={20}
              height={20}
              alt="Phone number otoktone alexandre desmot"
            />
            {phone}
          </a>
          <a className="blank" href={`mailto:${mail}`}>
            <Image
              src="/mail.svg"
              width={20}
              height={20}
              alt="Mail contact otoktone alexandre desmot"
            />
            {mail}
          </a>
        </div>
        <div className={styles.legals}>
          {["Profil", "Contact", "Mentions légales"].map((text, i) => (
            <Link
              key={text}
              href={`/${
                text === "Mentions légales" ? "mentions" : text.toLowerCase()
              }`}
              ref={(el) => {
                if (el) linksRef.current[i] = el;
              }}
            >
              <span className="text1">{text}</span>
              <span className="text2">{text}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.copyright}>
        <span>
          <Link href={"/"}>Otoktone</Link> | Alexandre Desmot | © {year}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
