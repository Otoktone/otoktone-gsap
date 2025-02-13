"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Loader from "./components/Loader/Loader";
import styles from "./page.module.scss";

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const backgroundRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      loading ||
      !titleRef.current ||
      !backgroundRef.current ||
      !h1Ref.current
    )
      return;

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
  }, [loading]);

  const splitText = (text: string) =>
    text.split("").map((char, index) => (
      <span key={index} className={styles.letter}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <section id={styles.home}>
          <div className={styles.homeHeaderContainer}>
            <div
              ref={backgroundRef}
              className={styles.homeHeaderBackground}
            ></div>
            <div className={styles.homeHeaderTitle}>
              <h1 ref={h1Ref}>Alexandre Desmot</h1>
              <h2 ref={titleRef}>
                {splitText("Conception et développement d'application web")}
              </h2>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
