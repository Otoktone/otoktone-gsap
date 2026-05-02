'use client';

import { useEffect, useRef } from 'react';
import { fadeIn } from '@/app/utils/animation';
import styles from './HeroContact.module.scss';

const HeroContact = () => {
    const title = 'Otoktone';
    const subTitle = 'Contact';

    const backgroundRef = useRef<HTMLDivElement>(null);
    const h1Ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        fadeIn(backgroundRef.current, 0, 0.8, 3);
        fadeIn(h1Ref.current, 0, 0.65, 3);
    }, []);

    return (
        <section id={styles.heroContact}>
            <div className={styles.heroContactContainer}>
                <div
                    ref={backgroundRef}
                    className={styles.heroContactBackground}
                ></div>
                <h1 ref={h1Ref}>
                    <span className={styles.mainTitle}>{title}</span>
                    <span className={styles.subTitle}>{subTitle}</span>
                </h1>
            </div>
        </section>
    );
};

export default HeroContact;
