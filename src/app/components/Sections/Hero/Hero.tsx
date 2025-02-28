"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { fadeIn } from "@/app/utils/animation";
import styles from "./Hero.module.scss";

const Hero = () => {
  const subTitle = "Otoktone";
  const title = "Conception et développement d'application web";

  const backgroundRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const h2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fadeIn(backgroundRef.current, 0, 0.2, 3);
    fadeIn(h1Ref.current, 0, 0.65, 3);
    fadeIn(h2Ref.current, 0, 0.7, 3);
  }, []);

  return (
    <section id={styles.hero}>
      <div className={styles.heroHeaderContainer}>
        <div ref={backgroundRef} className={styles.heroHeaderBackground}>
          <Image
            src={"/background_abstract_white.svg"}
            alt="Otoktone background hero"
            fill
            priority
          />
        </div>
        <div className={styles.heroHeaderTitle}>
          <h1 ref={h1Ref}>{title}</h1>
          <h2 ref={h2Ref}>{subTitle}</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
