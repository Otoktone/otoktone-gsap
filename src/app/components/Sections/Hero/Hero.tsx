"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Hero.module.scss";

const Hero = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !backgroundRef.current || !h1Ref.current) return;

    gsap.fromTo(
      backgroundRef.current,
      { opacity: 0 },
      {
        opacity: 0.2,
        duration: 3,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      h1Ref.current,
      { opacity: 0 },
      {
        opacity: 0.6,
        duration: 1.5,
        ease: "power3.out",
      }
    );

    const letters = titleRef.current.querySelectorAll("span");
    gsap.fromTo(
      letters,
      { opacity: 0 },
      {
        opacity: 0.5,
        duration: 0.5,
        stagger: 0.05,
        ease: "power3.out",
      }
    );
  }, []);

  const splitText = (text: string) =>
    text.split("").map((char, index) => (
      <span key={index} className={styles.letter}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <>
      <section id={styles.hero}>
        <div className={styles.heroHeaderContainer}>
          <div
            ref={backgroundRef}
            className={styles.heroHeaderBackground}
          ></div>
          <div className={styles.heroHeaderTitle}>
            <h1 ref={h1Ref}>Alexandre Desmot</h1>
            <h2 ref={titleRef}>
              {splitText("Conception et développement d'application web")}
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
