"use client";

import { useEffect, useRef, useCallback } from "react";
import { fadeInStaggered } from "@/app/utils/animation";
import { splitText } from "@/app/utils/textUtils";
import Image from "next/image";
import styles from "./Project.module.scss";

const Project = () => {
  const h5refs = useRef<(HTMLHeadingElement | null)[]>([]);
  const isAnimating = useRef<boolean>(false);
  const setH5Ref = useCallback((el: HTMLHeadingElement | null) => {
    if (el && !h5refs.current.includes(el)) {
      h5refs.current.push(el);
    }
  }, []);

  const playAnimation = () => {
    if (isAnimating.current) return; // Prevent multiple loading
    isAnimating.current = true;
    h5refs.current.forEach((h5) => {
      if (!h5) return;
      const letters = h5.querySelectorAll("span");
      fadeInStaggered(letters, 0, 0.75, 0.5, 0.05);
    });
    setTimeout(() => {
      isAnimating.current = false;
    }, 3000);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playAnimation();
          }
        });
      },
      { threshold: 0.2 }
    );
    h5refs.current.forEach((h5) => {
      if (h5) observer.observe(h5);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id={styles.project}>
      <div className={styles.projectContainer}>
        {/* VORTEX */}
        <article className="projectArticle">
          <div className={styles.projectTitle}>
            <h4>Vortex</h4>
            <h5 ref={setH5Ref}>{splitText("Aggrégateur de flux")}</h5>
          </div>
          <div className={styles.projectImage}>
            <Image
              src={"/project/vortex.webp"}
              alt={"Vortex - Aggrégation de flux - Site web Symfony"}
              width={650}
              height={315}
              loading="lazy"
            />
          </div>
          <div className={styles.projectContent}>
            <p>
              Application développée avec{" "}
              <a href="https://symfony.com/" target="_blank">
                Symfony
              </a>
              ,{" "}
              <a href="https://www.doctrine-project.org/" target="_blank">
                Doctrine
              </a>{" "}
              <a href="https://webpack.js.org/" target="_blank">
                Webpack
              </a>{" "}
              et{" "}
              <a href="https://www.docker.com/" target="_blank">
                Docker
              </a>
              . Génère, catégorise et traite des articles issus de sources
              technologiques, accessibles via un tableau de bord interactif.
            </p>
          </div>
        </article>
        {/* FRED GAFFORI */}
        <article className="projectArticle">
          <div className={styles.projectTitle}>
            <h4>FRED GAFFORI</h4>
            <h5 ref={setH5Ref}>
              {splitText("Photographe et réalisateur vidéo")}
            </h5>
          </div>
          <div className={styles.projectImage}>
            <Image
              src={"/project/fred.webp"}
              alt={
                "FRED GAFFORI - Photographe & Réalisateur Vidéo - Nice & Vannes"
              }
              width={650}
              height={315}
              loading="lazy"
            />
          </div>
          <div className={styles.projectContent}>
            <p>
              Basé à Nice et Vannes, spécialisé en événementiel, mariage,
              portrait, naissance, immobilier et musique. Site développé sous{" "}
              <a href="https://wordpress.com/" target="_blank">
                WordPress
              </a>{" "}
              avec un thème enfant pour une conception personnalisée.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Project;
