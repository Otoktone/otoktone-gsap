'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { infoSections } from './sections';
import styles from './Informations.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Informations = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const total = sectionsRef.current.length;

            sectionsRef.current.forEach((section, i) => {
                gsap.set(section, {
                    opacity: i === 0 ? 1 : 0,
                    y: i === 0 ? 0 : 40,
                });
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    pinSpacing: true,
                    start: 'top top',
                    end: `+=${total * 700}`,
                    scrub: 0.8,
                },
            });

            sectionsRef.current.forEach((section, i) => {
                if (i === 0) return;

                const prev = sectionsRef.current[i - 1];
                const offset = i - 1;

                tl.to(
                    prev,
                    {
                        opacity: 0,
                        y: -40,
                        duration: 0.4,
                    },
                    offset
                );

                tl.fromTo(
                    section,
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 0.4 },
                    offset + 0.3
                );
            });
        }, containerRef);

        return () => {
            ScrollTrigger.getAll()
                .filter((st) => st.vars.trigger === containerRef.current)
                .forEach((st) => st.kill());
            ctx.revert();
        };
    }, []);

    return (
        <div ref={containerRef} className={styles.informationsContainer}>
            <div className={styles.sectionsWrapper}>
                {infoSections.map((section, i) => (
                    <div
                        key={section.id}
                        className={styles.infoSection}
                        ref={(el) => {
                            if (el) sectionsRef.current[i] = el;
                        }}
                    >
                        <div className={styles.infoSectionHeader}>
                            <h2>{section.title}</h2>
                            <h3>{section.subtitle}</h3>
                        </div>
                        <div className={styles.infoSectionItems}>
                            {section.items.map((item, j) => (
                                <div key={j} className={styles.item}>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Informations;
