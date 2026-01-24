import { ReactNode } from 'react';
import Link from 'next/link';

export interface Project {
    title: string;
    subtitle: string;
    description: ReactNode;
    image: string;
    alt: string;
    link: string;
    tech: string[];
}

export const projects: Project[] = [
    {
        title: 'Otoktone',
        subtitle: 'Portfolio',
        description: (
            <>
                <p>
                    Alexandre Desmot, développeur web à Vannes, spécialisé en
                    création de sites, intégration et hébergement.
                </p>
                <p>
                    Refonte complète du site avec un focus sur les{' '}
                    <strong>performances</strong>, le <strong>SEO</strong> et
                    l’expérience utilisateur.
                </p>
                <p>
                    Le projet a été développé avec{' '}
                    <a
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Next.js
                    </a>
                    , animations réalisées avec{' '}
                    <a
                        href="https://gsap.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GSAP
                    </a>
                    , et hébergement sur{' '}
                    <a
                        href="https://www.scaleway.com/fr/dedibox/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Scaleway Dedibox
                    </a>
                    .
                </p>
            </>
        ),
        image: '/project/otoktone.webp',
        alt: 'Otoktone - Alexandre Desmot - Site web portfolio',
        link: '/projects/otoktone',
        tech: ['Next.js', 'GSAP', 'Scaleway Dedibox'],
    },

    {
        title: 'Vortex',
        subtitle: 'Agrégateur de flux',
        description: (
            <>
                <p>
                    Vortex est une application de veille technologique
                    développée avec{' '}
                    <a href="https://symfony.com/" target="_blank">
                        Symfony
                    </a>
                    ,{' '}
                    <a href="https://www.doctrine-project.org/" target="_blank">
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
                    .
                </p>
                <p>
                    Elle permet de récupérer des articles depuis des flux RSS
                    (XML), de les catégoriser automatiquement et de les
                    centraliser dans un tableau de bord interactif.
                </p>
                <p>
                    Le projet repose sur une architecture backend robuste avec
                    Symfony et Doctrine, et une gestion des assets via Webpack,
                    le tout conteneurisé avec <strong>Docker</strong>.
                </p>
            </>
        ),
        image: '/project/vortex.webp',
        alt: 'Vortex - Agrégation de flux - Site web Symfony',
        link: '/projects/vortex',
        tech: ['Symfony', 'Doctrine', 'Webpack', 'Docker'],
    },

    {
        title: 'FRED GAFFORI',
        subtitle: 'Photographe et réalisateur vidéo',
        description: (
            <>
                <p>
                    Site vitrine conçu avec{' '}
                    <a href="https://wordpress.org/" target="_blank">
                        Wordpress
                    </a>{' '}
                    et un thème enfant personnalisé, mettant en valeur l’univers
                    visuel de Frédéric Gaffori.
                </p>
                <p>
                    Le projet met l’accent sur l’esthétique, la lisibilité et la
                    valorisation des contenus visuels, tout en offrant une
                    gestion autonome des contenus.
                </p>
                <p>
                    Frédéric exerce entre Nice et Vannes, et se spécialise dans
                    la photographie de mariage, le portrait, l’événementiel
                    ainsi que la réalisation vidéo.
                </p>
                <p>
                    Découvrir le site :{' '}
                    <Link
                        href="https://www.fredgaffori.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        fredgaffori.com
                    </Link>
                </p>
            </>
        ),
        image: '/project/fred.webp',
        alt: 'FRED GAFFORI - Photographe & Réalisateur Vidéo - Nice & Vannes',
        link: '/projects/fred-gaffori',
        tech: ['WordPress', 'Child theme'],
    },
];
