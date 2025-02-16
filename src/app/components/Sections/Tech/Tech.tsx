import Image from "next/image";
import styles from "./Tech.module.scss";

const Tech = () => {
  const technologies: { name: string; image: string }[] = [
    { name: "Alpine Linux", image: "/tech/logo_alpine_linux.svg" },
    { name: "CSS3", image: "/tech/logo_css3.svg" },
    { name: "Debian Linux", image: "/tech/logo_debian_linux.svg" },
    { name: "Docker", image: "/tech/logo_docker_blue.svg" },
    { name: "HTML5", image: "/tech/logo_html5.svg" },
    { name: "JavaScript", image: "/tech/logo_javascript.png" },
    { name: "Kubernetes", image: "/tech/logo_kubernetes.png" },
    { name: "MySQL", image: "/tech/logo_mysql.png" },
    { name: "PHP", image: "/tech/logo_php.svg" },
    { name: "Plesk", image: "/tech/logo_plesk.png" },
    { name: "Proxmox", image: "/tech/logo_proxmox.svg" },
    { name: "React", image: "/tech/logo_react.svg" },
    { name: "TypeScript", image: "/tech/logo_typescript.svg" },
    { name: "WordPress", image: "/tech/logo_wordpress.png" },
  ];

  return (
    <section id={styles.tech}>
      <div className={styles.techLayout}></div>
      <div className={styles.techContainer}>
        <div className={styles.leftColumn}>
          {technologies.concat(technologies).map((tech, index) => (
            <div key={index} className={styles.techCard}>
              <Image
                src={tech.image}
                alt={tech.name}
                width={200}
                height={100}
                loading="lazy"
              />
              <h5>{tech.name}</h5>
            </div>
          ))}
        </div>

        <div className={styles.rightColumn}>
          {technologies.concat(technologies).map((tech, index) => (
            <div key={index} className={styles.techCard}>
              <Image
                src={tech.image}
                alt={tech.name}
                width={200}
                height={100}
                loading="lazy"
              />
              <h5>{tech.name}</h5>
            </div>
          ))}
        </div>

        <div className={styles.leftColumn}>
          {technologies.concat(technologies).map((tech, index) => (
            <div key={index} className={styles.techCard}>
              <Image
                src={tech.image}
                alt={tech.name}
                width={200}
                height={100}
                loading="lazy"
              />
              <h5>{tech.name}</h5>
            </div>
          ))}
        </div>

        <div className={styles.rightColumn}>
          {technologies.concat(technologies).map((tech, index) => (
            <div key={index} className={styles.techCard}>
              <Image
                src={tech.image}
                alt={tech.name}
                width={200}
                height={100}
                loading="lazy"
              />
              <h5>{tech.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
