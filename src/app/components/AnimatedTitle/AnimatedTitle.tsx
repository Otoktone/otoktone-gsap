import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "@/styles/AnimatedTitle.module.scss";

interface AnimatedTitleProps {
  text: string;
  className?: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text, className }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const letters = titleRef.current.children;
    gsap.fromTo(
      letters,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <h1 ref={titleRef} className={`${styles.animatedTitle} ${className || ""}`}>
      {text.split("").map((char, index) => (
        <span key={index} className={styles.letter}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedTitle;
