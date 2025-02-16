"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useCallback } from "react";
import { fadeIn, fadeInStaggered, animateLinks } from "@/app/utils/animation";
import { splitText } from "@/app/utils/textUtils";
import styles from "./Footer.module.scss";

const Footer = () => {
  const phone: string = "+33635443347";
  const mail: string = "alexandre.desmot@otoktone.fr";
  const facebook: string = "https://www.facebook.com/alexotoktone/";
  const instagram: string = "https://www.instagram.com/otoktone.fr/";
  const twitter: string = "https://x.com/otoktonefr";
  const year: number = new Date().getFullYear();

  const h3Ref = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  const isAnimating = useRef<boolean>(false);

  const playAnimation = () => {
    if (isAnimating.current) return; // Prevent animation if already playing
    isAnimating.current = true;

    const letters = h3Ref.current?.querySelectorAll("span") || null;
    fadeIn(h3Ref.current, 0, 0.6, 3);
    fadeInStaggered(letters, 0, 0.5, 0.5, 0.05);

    // Unlock animation
    setTimeout(() => {
      isAnimating.current = false;
    }, 3000);
  };

  // Viewport observer
  const handleAnimationInViewport = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          playAnimation();
        }
      });
    },
    []
  );

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
  }, [handleAnimationInViewport]);

  // Launch animation at first page loading
  useEffect(() => {
    playAnimation();
  }, []);

  useEffect(() => {
    if (linksRef.current.length === 0) return;
    requestAnimationFrame(() => animateLinks(linksRef));
  }, []);

  return (
    <footer id={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerHeader}>
          <Link href={"/"}>
            <h2>Otoktone</h2>
          </Link>
          <h3 ref={h3Ref}>{splitText("Alexandre Desmot | Développeur web")}</h3>
          <div className={styles.infos}>
            <a href={`mailto:${mail}`}>
              <Image
                src="/icons/mail.svg"
                width={20}
                height={20}
                priority={false}
                alt="Mail contact otoktone alexandre desmot création site web"
                loading="lazy"
              />
            </a>
            <a href={`tel:${phone}`}>
              <Image
                src="/icons/phone.svg"
                width={20}
                height={20}
                priority={false}
                alt="Phone number otoktone alexandre desmot création de site"
                loading="lazy"
              />
            </a>
          </div>
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

        <div className={styles.socials}>
          <a
            className="blank"
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/facebook.svg"
              width={20}
              height={20}
              alt="Page Facebook professionel otoktone alexandre desmot"
              loading="lazy"
            />
            Facebook
          </a>
          <a
            className="blank"
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/instagram.svg"
              width={20}
              height={20}
              alt="Instagram otoktone alexandre desmot personnel"
              loading="lazy"
            />
            Instagram
          </a>
          <a
            className="blank"
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/twitter-x.svg"
              width={20}
              height={20}
              alt="Twitter X otoktone alexandre desmot création de site web"
              loading="lazy"
            />
            X - Twitter
          </a>
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
