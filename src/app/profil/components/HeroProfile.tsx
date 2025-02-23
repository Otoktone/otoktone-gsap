"use client";

import { useEffect, useRef } from "react";
import { fadeIn } from "@/app/utils/animation";
import styles from "./HeroProfile.module.scss";

const HeroProfile = () => {
  const title = "Alexandre Desmot";
  const subTitle = "Développeur web";

  const h1Ref = useRef<HTMLHeadingElement>(null);
  const h2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fadeIn(h1Ref.current, 0, 0.65, 3);
    fadeIn(h2Ref.current, 0, 0.7, 3);
  }, []);

  return (
    <section id={styles.heroProfile}>
      <div className={styles.heroProfileContainer}>
        <h1 ref={h1Ref}>{title}</h1>
        <h2 ref={h2Ref}>{subTitle}</h2>
      </div>
    </section>
  );
};

export default HeroProfile;
