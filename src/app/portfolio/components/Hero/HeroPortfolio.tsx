'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useEffect, useRef } from 'react';
import { fadeIn } from '@/app/utils/animation';
import styles from './HeroPortfolio.module.scss';

gsap.registerPlugin(ScrollTrigger);

const HeroPortfolio = () => {
    const title = 'Otoktone';
    const subTitle = 'Portfolio';

    const sectionRef = useRef<HTMLElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const titleRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !h1Ref.current || !titleRef.current) return;

        fadeIn(backgroundRef.current, 0, 0.65, 3);
        fadeIn(h1Ref.current, 0, 0.65, 3);

        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.5,
                },
            }).to(titleRef.current, {
                scale: 75,
                y: '-40vh',
                ease: 'none',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id={styles.heroPortfolio} ref={sectionRef}>
            <div className={styles.heroPortfolioContainer}>
                <div
                    ref={backgroundRef}
                    className={styles.heroPortfolioBackground}
                ></div>
                <h1 ref={h1Ref}>
                    <span ref={titleRef} className={styles.mainTitle}>
                        {title}
                    </span>
                    <span className={styles.subTitle}>{subTitle}</span>
                </h1>
            </div>
        </section>
    );
};

export default HeroPortfolio;
