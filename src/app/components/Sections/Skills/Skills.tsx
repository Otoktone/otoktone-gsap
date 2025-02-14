import styles from "./Skills.module.scss";

const Skills = () => {
  const skills = [
    {
      name: "Design",
      description:
        "Conception de maquettes et création d'identités visuelles uniques.",
    },
    {
      name: "Développement",
      description:
        "Création de sites web et d'applications web sur mesure, en utilisant les technologies actuelles.",
    },
    {
      name: "Hébergement",
      description:
        "Gestion complète des solutions d'hébergement, incluant la configuration de serveurs, l'optimisation des performances et de la sécurité.",
    },
    {
      name: "SEO",
      description:
        "Optimisation complète pour les moteurs de recherche, amélioration des performances et optimisation du contenu pour augmenter la visibilité et le référencement.",
    },
    {
      name: "Maintenance",
      description:
        "Assistance et mises à jour régulières, sauvegardes sécurisées et support technique pour garantir la sécurité, les performances et la pérennité.",
    },
  ];

  return (
    <section id={styles.skills}>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => {
          return (
            <div key={index} className={styles.skillCard}>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
