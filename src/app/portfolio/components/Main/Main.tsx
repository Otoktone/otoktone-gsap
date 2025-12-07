'use client';

import styles from './Main.module.scss';
import { projects } from './projectsData';
import Image from 'next/image';

const Main = () => {
    return (
        <section id={styles.mainPortfolio}>
            <div className={styles.mainPortfolioContainer}>
                {projects.map((project, index) => (
                    <article key={index} className={styles.projectCard}>
                        <div className={styles.projectTitle}>
                            <h4>{project.title}</h4>
                            <h5>{project.subtitle}</h5>
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
                        <div className={styles.projectContent}>
                            <p>{project.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Main;
