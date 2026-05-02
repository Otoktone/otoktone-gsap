'use client';

import { useEffect, useRef } from 'react';
import { fadeIn } from '@/app/utils/animation';
import styles from './HeroMentions.module.scss';

const HeroMentions = () => {
    const title = 'Otoktone';
    const subTitle = 'Mentions légales';

    const backgroundRef = useRef<HTMLDivElement>(null);
    const h1Ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        fadeIn(backgroundRef.current, 0, 0.35, 3);
        fadeIn(h1Ref.current, 0, 0.65, 3);
    }, []);

    return (
        <section id={styles.heroMentions}>
            <div className={styles.heroMentionsContainer}>
                <div
                    ref={backgroundRef}
                    className={styles.heroMentionsBackground}
                ></div>
                <h1 ref={h1Ref}>
                    <span className={styles.mainTitle}>{title}</span>
                    <span className={styles.subTitle}>{subTitle}</span>
                </h1>
            </div>
        </section>
    );
};

export default HeroMentions;
