"use client";

import { useEffect, useRef } from "react";
import { fadeIn, fadeInStaggered } from "@/app/utils/animation";
import { splitText } from "@/app/utils/textUtils";
import styles from "./Hero.module.scss";

const Hero = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const h2Ref = useRef<HTMLDivElement>(null);

  // Reload letters animation when entering viewport
  const handleAnimationInViewport = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const letters = h2Ref.current?.querySelectorAll("span");

        if (letters) {
          fadeIn(h1Ref.current, 0, 0.6, 3);
          fadeInStaggered(letters, 0, 0.5, 0.5, 0.05);
        }
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleAnimationInViewport, {
      threshold: 0.2,
    });

    if (h2Ref.current) {
      observer.observe(h2Ref.current);
    }

    return () => {
      if (h2Ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!h2Ref.current) return;

    const letters = h2Ref.current.querySelectorAll("span");

    fadeIn(backgroundRef.current, 0, 0.2, 3);
    fadeIn(h1Ref.current, 0, 0.6, 3);
    fadeIn(h2Ref.current, 0, 0.6, 1.5);
    fadeInStaggered(letters, 0, 0.5, 0.5, 0.05);
  }, []);

  return (
    <section id={styles.hero}>
      <div className={styles.heroHeaderContainer}>
        <div ref={backgroundRef} className={styles.heroHeaderBackground}></div>
        <div className={styles.heroHeaderTitle}>
          <h1 ref={h1Ref}>Alexandre Desmot</h1>
          <h2 className={styles.visuallyHidden}>
            Conception et développement d'application web
          </h2>
          <h2 ref={h2Ref} aria-hidden="true">
            {splitText("Conception et développement d'application web")}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
