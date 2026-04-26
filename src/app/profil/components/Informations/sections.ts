export const infoSections = [
    {
        id: 'design',
        title: 'Design',
        subtitle:
            "Conception d'interfaces web claires, accessibles et cohérentes, pensées pour l'utilisateur final et adaptées aux contraintes du web moderne.",
        items: [
            {
                title: 'UI / UX Design',
                description:
                    "Conception d'interfaces intuitives, centrées utilisateur, avec une attention particulière portée à la lisibilité, à la hiérarchie de l'information et à l'expérience globale.",
            },
            {
                title: 'Accessibilité',
                description:
                    'Prise en compte des bonnes pratiques d’accessibilité (contrastes, navigation clavier, structure sémantique), et sensibilisation aux normes RGAA.',
            },
            {
                title: 'Outils de design',
                description:
                    'Utilisation de Figma pour les maquettes et prototypes, et de Photoshop pour la création et l’adaptation de visuels destinés au web.',
            },
        ],
    },
    {
        id: 'development-front',
        title: 'Développement',
        subtitle:
            "Front-end, frameworks et CMS — création d'interfaces et d'applications web modernes.",
        items: [
            {
                title: 'Front-end',
                description: 'HTML, CSS (Sass / Less), JavaScript, jQuery',
            },
            { title: 'Framework', description: 'React, Next.js, Symfony' },
            {
                title: 'CMS',
                description: 'WordPress (thèmes personnalisés, ACF, WP CLI)',
            },
            {
                title: 'Back-end',
                description: 'PHP, MySQL, YAML, API REST, JSON',
            },
        ],
    },
    {
        id: 'development-infra',
        title: 'Infrastructure',
        subtitle:
            "Serveurs, réseau et outillage — administration et déploiement d'environnements techniques.",
        items: [
            {
                title: 'Server',
                description: 'Linux, Bash, Proxmox, Nginx / Apache',
            },
            {
                title: 'Network',
                description: 'Configuration IP, VLAN, firewall, NAT, VPN',
            },
            {
                title: 'Tooling / DevOps',
                description:
                    'Docker, Webpack, Git, CI/CD (GitHub Actions, GitLab CI)',
            },
        ],
    },
    {
        id: 'hosting',
        title: 'Hébergement',
        subtitle:
            'Gestion et administration d’environnements serveurs dédiés, avec une approche orientée sécurité, performance et fiabilité.',
        items: [
            {
                title: 'Infrastructure',
                description:
                    'Hébergement sur serveur dédié (Dedibox), avec virtualisation via Proxmox et gestion de conteneurs pour isoler les services.',
            },
            {
                title: 'Déploiement',
                description:
                    'Mise en place d’environnements de développement et de production, déploiement des applications et gestion des mises à jour.',
            },
            {
                title: 'Supervision',
                description:
                    'Surveillance du serveur et des services afin d’assurer la disponibilité et la stabilité des sites hébergés.',
            },
        ],
    },
    {
        id: 'seo',
        title: 'Référencement',
        subtitle:
            'Mise en place de bases techniques propres pour permettre aux sites d’être correctement indexés, compréhensibles et performants.',
        items: [
            {
                title: 'SEO technique',
                description:
                    'Structure HTML sémantique, performances, accessibilité et respect des Core Web Vitals pour fournir une base saine aux moteurs de recherche.',
            },
            {
                title: 'Contenu & structure',
                description:
                    'Organisation des pages, hiérarchie des contenus et utilisation correcte des balises pour améliorer la lisibilité du site.',
            },
            {
                title: 'RGPD',
                description:
                    'Mise en place des éléments nécessaires au respect du RGPD : gestion des cookies, formulaires conformes et mentions légales.',
            },
        ],
    },
    {
        id: 'security',
        title: 'Sécurité',
        subtitle:
            'Sécurisation de l’environnement serveur et des sites web à l’aide des outils et pratiques recommandés.',
        items: [
            {
                title: 'Contrôle des accès',
                description:
                    'Restriction des accès aux zones sensibles, protection par mot de passe et filtrage par adresse IP.',
            },
            {
                title: 'Protection serveur',
                description:
                    "Mise en place de certificats SSL, configuration pare-feu, utilisation de Fail2Ban et isolation des services afin de limiter les surfaces d'attaque.",
            },
            {
                title: 'Backups',
                description:
                    "Configuration de systèmes de backup réguliers pour garantir la récupération des données en cas d'incident.",
            },
        ],
    },
];
