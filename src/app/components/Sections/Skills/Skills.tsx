'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import styles from './Skills.module.scss';

const Skills = () => {
    const cardsRef = useRef<HTMLDivElement[]>([]);

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
        cardsRef.current.forEach((card) => {
            ScrollTrigger.create({
                trigger: card,
                start: 'top center',
                end: 'bottom center',
                toggleClass: styles.active,
            });
        });
    }, []);

    return (
        <section id={styles.skills}>
            <div className={styles.skillsContainer}>
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className={styles.skillCard}
                        ref={(el) => {
                            if (el) cardsRef.current[index] = el;
                        }}
                    >
                        <h3>{skill.name}</h3>
                        <p>{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
