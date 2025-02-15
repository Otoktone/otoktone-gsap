"use client";

import { useEffect, useRef } from "react";
import { fadeIn, fadeInStaggered } from "@/app/utils/animation";
import { splitText } from "@/app/utils/textUtils";
import styles from "./Hero.module.scss";

const Hero = () => {
  const title = "Alexandre Desmot";
  const subTitle = "Conception et développement d'application web";

  const backgroundRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const h2Ref = useRef<HTMLDivElement>(null);
  const isAnimating = useRef<boolean>(false);

  const playAnimation = () => {
    if (isAnimating.current) return; // Prevent animation if already playing
    isAnimating.current = true; // Animation's lock

    const letters = h2Ref.current?.querySelectorAll("span") || null;

    fadeIn(backgroundRef.current, 0, 0.2, 3);
    fadeIn(h1Ref.current, 0, 0.6, 5);
    fadeIn(h2Ref.current, 0, 0.6, 1.5);
    fadeInStaggered(letters, 0, 0.5, 0.5, 0.05);

    // Unlock animation
    setTimeout(() => {
      isAnimating.current = false;
    }, 3000);
  };

  // Viewport observer
  const handleAnimationInViewport = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        playAnimation();
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleAnimationInViewport, {
      threshold: 0.2,
    });

    const h2Element = h2Ref.current;

    if (h2Element) {
      observer.observe(h2Element);
    }

    return () => {
      if (h2Element) {
        observer.disconnect();
      }
    };
  }, []);

  // Launch animation at first page loading
  useEffect(() => {
    playAnimation();
  }, []);

  return (
    <section id={styles.hero}>
      <div className={styles.heroHeaderContainer}>
        <div ref={backgroundRef} className={styles.heroHeaderBackground}></div>
        <div className={styles.heroHeaderTitle}>
          <h1 ref={h1Ref}>{title}</h1>
          <h2 className={styles.visuallyHidden}>
            {subTitle} | Création de site web
          </h2>
          <h2 ref={h2Ref} className="hidden" aria-hidden="true">
            {splitText(subTitle)}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
