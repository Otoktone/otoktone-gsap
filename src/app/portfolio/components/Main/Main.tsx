'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useEffect } from 'react';

import styles from './Main.module.scss';
import { projects } from './projectsData';
import Image from 'next/image';

const Main = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const cards = document.querySelectorAll(`.${styles.projectCard}`);

        cards.forEach((card) => {
            const title = card.querySelector(`.${styles.projectTitle}`);
            const tags = card.querySelectorAll(`.${styles.projectTech} span`);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: 'top 75%',
                    toggleActions: 'play reverse play reverse',
                },
            });

            // Cards
            tl.from(card, {
                opacity: 0,
                y: 40,
                duration: 0.6,
                ease: 'power3.out',
            });

            // Titles
            tl.from(
                title?.children || [],
                {
                    opacity: 0,
                    y: 20,
                    duration: 0.4,
                    ease: 'power2.out',
                    stagger: 0.05,
                },
                '-=0.2'
            );

            // Tags
            tl.from(
                tags,
                {
                    opacity: 0,
                    y: 10,
                    duration: 0.3,
                    ease: 'power2.out',
                    stagger: 0.05,
                },
                '-=0.1'
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <section id={styles.mainPortfolio}>
            <div className={styles.mainPortfolioContainer}>
                {projects.map((project, index) => (
                    <article key={index} className={styles.projectCard}>
                        <div className={styles.projectCardHero}>
                            <div className={styles.projectTitle}>
                                <h3>{project.title}</h3>
                                <h4>{project.subtitle}</h4>
                            </div>
                            <div className={styles.projectImage}>
                                <Image
                                    src={project.image}
                                    alt={project.alt}
                                    width={650}
                                    height={315}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className={styles.projectCardContent}>
                            <div className={styles.projectTech}>
                                {project.tech.map((tech) => (
                                    <span key={tech}>{tech}</span>
                                ))}
                            </div>
                            <div className={styles.projectDescription}>
                                {project.description}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Main;
