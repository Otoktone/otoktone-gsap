'use client';

import { splitText } from '@/app/utils/textUtils';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Project.module.scss';

const Project = () => {
    return (
        <section id={styles.project}>
            {}
            <div className={styles.projectContainer}>
                {/* OTOKTONE */}
                <article className="projectArticle">
                    <div className={styles.projectTitle}>
                        <h4>Otoktone</h4>
                        <h5>{splitText('Portfolio')}</h5>
                        <div className={styles.projectTitleStack}>
                            <span>Next.js</span>
                        </div>
                    </div>
                    <div className={styles.projectImage}>
                        <Image
                            src={'/project/otoktone.webp'}
                            alt={
                                'Otoktone - Alexandre Desmot - Site web portfolio'
                            }
                            width={650}
                            height={315}
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.projectContent}>
                        <p>
                            Alexandre Desmot,{' '}
                            <strong>développeur web à Vannes</strong>,
                            spécialisé en création de sites, intégration et
                            hébergement. Refonte complète de mon site personnel
                            en{' '}
                            <a href="https://nextjs.org/" target="_blank">
                                Next.js
                            </a>
                            , hébergé sur serveur{' '}
                            <a
                                href="https://www.scaleway.com/fr/dedibox/"
                                target="_blank"
                            >
                                Scaleway Dedibox
                            </a>
                            . Portfolio optimisé pour les{' '}
                            <strong>performances</strong> et le{' '}
                            <strong>SEO</strong>, design épuré, animations
                            utilisant{' '}
                            <a href="https://gsap.com/" target="_blank">
                                GSAP
                            </a>{' '}
                            .
                        </p>
                    </div>
                </article>
                {/* VORTEX */}
                <article className="projectArticle">
                    <div className={styles.projectTitle}>
                        <h4>Vortex</h4>
                        <h5>{splitText('Aggrégateur de flux')}</h5>
                        <div className={styles.projectTitleStack}>
                            <span>Symfony</span>
                        </div>
                    </div>
                    <div className={styles.projectImage}>
                        <Image
                            src={'/project/vortex.webp'}
                            alt={
                                'Vortex - Aggrégation de flux - Site web Symfony'
                            }
                            width={650}
                            height={315}
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.projectContent}>
                        <p>
                            Vortex est une application développée avec{' '}
                            <a href="https://symfony.com/" target="_blank">
                                Symfony
                            </a>
                            ,{' '}
                            <a
                                href="https://www.doctrine-project.org/"
                                target="_blank"
                            >
                                Doctrine
                            </a>
                            ,{' '}
                            <a href="https://webpack.js.org/" target="_blank">
                                Webpack
                            </a>{' '}
                            et{' '}
                            <a href="https://www.docker.com/" target="_blank">
                                Docker
                            </a>
                            . Permettant de récupérer des articles depuis des
                            flux RSS (XML) de sources technologiques, de les
                            catégoriser et de les traiter au sein d’un tableau
                            de bord interactif conçu pour la gestion de la
                            veille technologique.
                        </p>
                    </div>
                </article>
                {/* FRED GAFFORI */}
                <article className="projectArticle">
                    <div className={styles.projectTitle}>
                        <h4>FRED GAFFORI</h4>
                        <h5>{splitText('Photographe et réalisateur vidéo')}</h5>
                        <div className={styles.projectTitleStack}>
                            <span>WordPress</span>
                        </div>
                    </div>
                    <div className={styles.projectImage}>
                        <Image
                            src={'/project/fred.webp'}
                            alt={
                                'FRED GAFFORI - Photographe & Réalisateur Vidéo - Nice & Vannes'
                            }
                            width={650}
                            height={315}
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.projectContent}>
                        <p>
                            Site vitrine conçu avec{' '}
                            <a href="https://wordpress.com/" target="_blank">
                                WordPress
                            </a>{' '}
                            et un thème enfant entièrement personnalisé, mettant
                            en valeur l’univers visuel de{' '}
                            <Link
                                href="https://www.fredgaffori.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Frédéric Gaffori
                            </Link>{' '}
                            , photographe et réalisateur vidéo. Ce projet met
                            l’accent sur l’esthétique, la lisibilité et la
                            valorisation des contenus visuels, tout en offrant
                            une navigation fluide et une gestion autonome des
                            contenus. Frédéric exerce entre{' '}
                            <strong>Nice</strong> et <strong>Vannes</strong>, et
                            se spécialise dans la photographie de mariage, le
                            portrait, l’événementiel ainsi que la réalisation
                            vidéo.
                        </p>
                    </div>
                </article>
            </div>
            {/* <div className={styles.projectLink}>
                <Link href="/portfolio" className="internal-link">
                    Portfolio
                </Link>
            </div> */}
            {}
        </section>
    );
};

export default Project;
