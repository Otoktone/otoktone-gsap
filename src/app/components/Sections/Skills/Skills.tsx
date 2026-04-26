'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ElectricBorder from './ElectricBorder';
gsap.registerPlugin(ScrollTrigger);

import styles from './Skills.module.scss';

const Skills = () => {
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const [activeCards, setActiveCards] = useState<Set<number>>(new Set());
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const skills = [
        {
            name: 'Design',
            description:
                "Conception de maquettes et création d'identités visuelles uniques.",
        },
        {
            name: 'Développement',
            description:
                "Création de sites web et d'applications web sur mesure.",
        },
        {
            name: 'Hébergement',
            description:
                "Solutions d'hébergement, incluant la configuration de serveurs, l'optimisation des performances et de la sécurité.",
        },
        {
            name: 'Référencement',
            description:
                'Optimisation complète pour les moteurs de recherche, amélioration des performances et optimisation du contenu pour augmenter la visibilité.',
        },
        {
            name: 'Sécurité',
            description:
                'Assistance et mises à jour régulières, sauvegardes sécurisées et support technique pour garantir la sécurité, les performances et la pérennité.',
        },
    ];

    useEffect(() => {
        if (window.innerWidth >= 992) return;

        cardsRef.current.forEach((card, index) => {
            ScrollTrigger.create({
                trigger: card,
                start: 'top 45%',
                end: 'bottom 40%',
                onEnter: () => {
                    setActiveCards((prev) => new Set(prev).add(index));
                },
                onLeave: () =>
                    setActiveCards((prev) => {
                        const next = new Set(prev);
                        next.delete(index);
                        return next;
                    }),
                onEnterBack: () =>
                    setActiveCards((prev) => new Set(prev).add(index)),
                onLeaveBack: () =>
                    setActiveCards((prev) => {
                        const next = new Set(prev);
                        next.delete(index);
                        return next;
                    }),
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section id={styles.skills}>
            <div className={styles.skillsContainer}>
                {skills.map((skill, index) => {
                    const isScrollActive = activeCards.has(index);
                    const isHoverActive = hoveredCard === index;
                    const isActive = isScrollActive || isHoverActive;

                    return (
                        // // ElectricBorder component — source: https://reactbits.dev/animations/electric-border
                        <ElectricBorder
                            key={index}
                            color={isActive ? '#00f0ff' : 'transparent'}
                            speed={0.3}
                            chaos={0.05}
                            borderRadius={0}
                            className={styles[`skillWrapper${index + 1}`]}
                        >
                            <div
                                className={`${styles.skillCard} ${isActive ? styles.active : ''}`}
                                ref={(el) => {
                                    if (el) cardsRef.current[index] = el;
                                }}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <h3>{skill.name}</h3>
                                <p>{skill.description}</p>
                            </div>
                        </ElectricBorder>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
