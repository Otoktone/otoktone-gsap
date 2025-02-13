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
    if (containerRef.current) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        onUpdate: (self) => {
          let progress = self.progress;
          let centerIndex = Math.round(
            progress * (linesRef.current.length - 1)
          );
          let opacityLevels = [0.8, 0.4, 0.2];

          linesRef.current.forEach((el, i) => {
            if (el) {
              let distance = Math.abs(centerIndex - i);
              let opacity = opacityLevels[distance] || 0.2;
              gsap.to(el, { opacity, duration: 0.3, ease: "power2.out" });
            }
          });
        },
        onEnter: () => {
          // Reset quand on entre dans la section
          linesRef.current.forEach((el) => {
            if (el) gsap.to(el, { opacity: 0.2, duration: 0.3 });
          });
        },
        onLeaveBack: () => {
          // Reset quand on quitte la section vers le haut
          linesRef.current.forEach((el) => {
            if (el) gsap.to(el, { opacity: 0.2, duration: 0.3 });
          });
        },
      });
    }
  }, []);

  return (
    <section id={styles.presentation}>
      <div ref={containerRef} className={styles.presentationContainer}>
        <div className={styles.textContainer}>
          {[
            "Bienvenue sur Otoktone",
            "Je suis Alexandre Desmot, développeur web en Bretagne.",
            "Je conçois et développe des applications web modernes et performantes.",
            "Otoktone.fr est mon espace personnel où je partage mon travail et mes projets.",
            "De la création graphique à la gestion de serveurs, je touche à tout ce qui façonne le web.",
            "Ce site est le reflet de ma passion pour la technologie et l'innovation.",
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
