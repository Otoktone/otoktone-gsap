"use client";

import { useEffect, useRef, useCallback } from "react";
import { fadeInStaggered } from "@/app/utils/animation";
import { splitText } from "@/app/utils/textUtils";
import Image from "next/image";
import styles from "./Project.module.scss";

const Project = () => {
  const h5refs = useRef<(HTMLHeadingElement | null)[]>([]);
  const animated = useRef<Set<HTMLHeadingElement>>(new Set());

  const setH5Ref = useCallback((el: HTMLHeadingElement | null) => {
    if (el && !h5refs.current.includes(el)) {
      h5refs.current.push(el);
    }
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    h5refs.current.forEach((h5) => {
      if (!h5) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !animated.current.has(h5)) {
            const letters = h5.querySelectorAll("span");
            fadeInStaggered(letters, 0, 0.75, 0.5, 0.05);
            animated.current.add(h5);
            observer.unobserve(h5);
          }
        },
        {
          threshold: 0.2,
        }
      );

      observer.observe(h5);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id={styles.project}>
      {/* eslint-disable react/no-unescaped-entities */}
      <div className={styles.projectContainer}>
        {/* OTOKTONE */}
        <article className="projectArticle">
          <div className={styles.projectTitle}>
            <h4>Otoktone</h4>
            <h5 ref={setH5Ref}>{splitText("Portfolio")}</h5>
          </div>
          <div className={styles.projectImage}>
            <Image
              src={"/project/otoktone.webp"}
              alt={"Otoktone - Alexandre Desmot - Site web portfolio"}
              width={650}
              height={315}
              loading="lazy"
            />
          </div>
          <div className={styles.projectContent}>
            <p>
              Refonte complète de mon site personnel en{" "}
              <a href="https://nextjs.org/" target="_blank">
                Next.js
              </a>
              , hébergé sur serveur{" "}
              <a href="https://www.scaleway.com/fr/dedibox/" target="_blank">
                Scaleway Dedibox
              </a>
              . Portfolio optimisé pour les <strong>performances</strong> et le{" "}
              <strong>SEO</strong>, avec un focus sur{" "}
              <strong>l'accessibilité</strong>, un design épuré, des animations
              modernes utilisant{" "}
              <a href="https://gsap.com/" target="_blank">
                GSAP
              </a>{" "}
              et un chargement rapide. Déploiement et gestion serveur en
              autonomie complète.
            </p>
          </div>
        </article>
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
              </a>
              ,{" "}
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
              Basé à <strong>Nice</strong> et <strong>Vannes</strong>,
              spécialisé en événementiel, mariage, portrait, naissance,
              immobilier et musique. Site développé sous{" "}
              <a href="https://wordpress.com/" target="_blank">
                WordPress
              </a>{" "}
              avec un thème enfant pour une conception personnalisée.
            </p>
          </div>
        </article>
      </div>
      {/* eslint-enable react/no-unescaped-entities */}
    </section>
  );
};

export default Project;
