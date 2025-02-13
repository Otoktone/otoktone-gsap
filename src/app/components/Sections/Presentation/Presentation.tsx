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

      linesRef.current.forEach((el, index) => {
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
            // "Bienvenue sur Otoktone",
            // "Je suis Alexandre Desmot, développeur web en Bretagne.",
            // "Je conçois et développe des applications web modernes, performantes et sécurisées.",
            // "Otoktone.fr est mon espace personnel où je partage mes projets, mes compétences et mes valeurs.",
            // "De la création graphique à la gestion de serveurs en passant par la création de site web, je touche à tout ce qui façonne le web.",
            // "Ce site est le reflet de ma passion pour la technologie, l'innovation et de mon engouement pour le développement informatique.",
            "Web",
            "Design",
            "Conception",
            "Graphisme",
            "Créativité",
            "Développent",
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
