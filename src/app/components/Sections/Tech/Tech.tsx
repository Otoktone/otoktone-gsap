import Image from "next/image";
import styles from "./Tech.module.scss";

type Technology = {
  name: string;
  image: string;
  url: string;
};

const Tech = () => {
  const technologies: Technology[] = [
    {
      name: "Alpine Linux",
      image: "/tech/logo_alpine_linux.svg",
      url: "https://alpinelinux.org",
    },
    {
      name: "CSS3",
      image: "/tech/logo_css3.svg",
      url: "https://www.w3.org/TR/css/",
    },
    {
      name: "Debian Linux",
      image: "/tech/logo_debian_linux.svg",
      url: "https://www.debian.org",
    },
    {
      name: "Docker",
      image: "/tech/logo_docker_blue.svg",
      url: "https://www.docker.com",
    },
    {
      name: "HTML5",
      image: "/tech/logo_html5.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "JavaScript",
      image: "/tech/logo_javascript.png",
      url: "https://www.javascript.com",
    },
    {
      name: "Kubernetes",
      image: "/tech/logo_kubernetes.png",
      url: "https://kubernetes.io",
    },
    {
      name: "MySQL",
      image: "/tech/logo_mysql.png",
      url: "https://www.mysql.com",
    },
    { name: "PHP", image: "/tech/logo_php.svg", url: "https://www.php.net" },
    {
      name: "Plesk",
      image: "/tech/logo_plesk.png",
      url: "https://www.plesk.com",
    },
    {
      name: "Proxmox",
      image: "/tech/logo_proxmox.svg",
      url: "https://www.proxmox.com",
    },
    {
      name: "React",
      image: "/tech/logo_react.svg",
      url: "https://reactjs.org",
    },
    {
      name: "TypeScript",
      image: "/tech/logo_typescript.svg",
      url: "https://www.typescriptlang.org",
    },
    {
      name: "WordPress",
      image: "/tech/logo_wordpress.png",
      url: "https://wordpress.org",
    },
    {
      name: "Gsap",
      image: "/tech/logo_gsap.svg",
      url: "https://gsap.com/",
    },
    {
      name: "phpMyAdmin",
      image: "/tech/logo_phpmyadmin.svg",
      url: "https://www.phpmyadmin.net",
    },
    {
      name: "Symfony",
      image: "/tech/logo_symfony.svg",
      url: "https://symfony.com",
    },
    {
      name: "Sass",
      image: "/tech/logo_sass.svg",
      url: "https://sass-lang.com",
    },
    {
      name: "Scaleway",
      image: "/tech/logo_scaleway.png",
      url: "https://www.scaleway.com/",
    },
  ];

  const shuffleArray = (array: Technology[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return (
    <section id={styles.tech}>
      <div className={styles.techContainer}>
        <div className={styles.techLayout}></div>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={i % 2 === 0 ? styles.leftColumn : styles.rightColumn}
          >
            {technologies
              .concat(shuffleArray(technologies))
              .map((tech, index) => (
                <div key={index} className={styles.techCard}>
                  <a href={tech.url} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      // width={200}
                      // height={100}
                      fill
                      loading="lazy"
                    />
                    <h5>{tech.name}</h5>
                  </a>
                </div>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
