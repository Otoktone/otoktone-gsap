"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Presentation.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Presentation = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const linesRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const updateOpacity = () => {
      const viewportHeight = window.innerHeight;

      linesRef.current.forEach((el) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          const lineTop = rect.top;
          const lineBottom = rect.bottom;

          const distanceFromCenter = Math.abs(
            (lineTop + lineBottom) / 2 - viewportHeight / 2
          );

          const opacity = Math.max(
            0.01,
            0.8 - distanceFromCenter / (viewportHeight / 2)
          );

          gsap.to(el, { opacity, duration: 0.3, ease: "power2.out" });
        }
      });
    };

    window.addEventListener("scroll", updateOpacity);
    updateOpacity();

    return () => {
      window.removeEventListener("scroll", updateOpacity);
    };
  }, []);

  return (
    <section id={styles.presentation}>
      <div ref={containerRef} className={styles.presentationContainer}>
        <div className={styles.textContainer}>
          {[
            "Web",
            "Design",
            "Conception",
            "Graphisme",
            "Création",
            "Développement",
            "Programmation",
            "Intégration",
            "Serveur",
            "Référencement",
          ].map((line, index) => (
            <p
              key={index}
              ref={(el) => {
                if (el) linesRef.current[index] = el;
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Presentation;
