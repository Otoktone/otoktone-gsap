import styles from "./Skills.module.scss";

const Skills = () => {
  const skills = [
    {
      name: "Design",
      description:
        "Conception de maquettes et création d'identités visuelles cohérentes et uniques, adaptées aux besoins de chaque projet.",
    },
    {
      name: "Développement",
      description:
        "Création de sites web dynamiques et d'applications web sur mesure, en utilisant les technologies actuelles pour offrir des solutions performantes, scalables et sécurisées.",
    },
    {
      name: "Hébergement",
      description:
        "Gestion complète des solutions d'hébergement, incluant la configuration de serveurs, l'optimisation des performances et de la sécurité.",
    },
    {
      name: "SEO",
      description:
        "Optimisation complète pour les moteurs de recherche (SEO), l'amélioration des performances, la recherche de mots-clés et l'optimisation du contenu pour augmenter la visibilité et le référencement.",
    },
    {
      name: "Maintenance",
      description:
        "Assistance continue avec des mises à jour régulières, des sauvegardes sécurisées et un support technique pour garantir la sécurité, les performances et la pérennité des sites web à long terme.",
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
