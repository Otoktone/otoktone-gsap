'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { fadeIn } from '@/app/utils/animation';
import styles from './HeroProfile.module.scss';

gsap.registerPlugin(ScrollTrigger);

const HeroProfile = () => {
    const title = 'Alexandre Desmot';
    const subTitle = 'Développeur web';

    const backgroundRef = useRef<HTMLDivElement>(null);
    const h1Ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        fadeIn(backgroundRef.current, 0, 0.5, 3);
        fadeIn(h1Ref.current, 0, 0.65, 3);

        if (!backgroundRef.current || !h1Ref.current) return;

        gsap.to(backgroundRef.current, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
                trigger: backgroundRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        });

        gsap.to(h1Ref.current, {
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
                trigger: backgroundRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        });
    }, []);

    return (
        <section id={styles.heroProfile}>
            <div className={styles.heroProfileContainer}>
                <div
                    ref={backgroundRef}
                    className={styles.heroBackground}
                ></div>
                <h1 ref={h1Ref}>
                    <span className={styles.mainTitle}>{title}</span>
                    <span className={styles.subTitle}>{subTitle}</span>
                </h1>
            </div>
        </section>
    );
};

export default HeroProfile;
