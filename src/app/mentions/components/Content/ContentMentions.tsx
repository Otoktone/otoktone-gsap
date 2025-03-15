import styles from "./ContentMentions.module.scss";

const ContentMentions = () => {
  const address: string = "16 allée des paludiers - 44510 LE POULIGUEN";
  const mail: string = "alexandre.desmot@otoktone.fr";
  const phone: string = "+33635443347";

  return (
    <section id={styles.contentMentions}>
      <div className={styles.mentionsContainer}>
        {/* eslint-disable react/no-unescaped-entities */}
        <h3>1. Éditeur du site</h3>
        <p>
          Le site <a href="https://otoktone.fr">otoktone.fr</a> est édité par :
          <br />
          <br />
          Alexandre DESMOT
          <br />
          Adresse : {address}
          <br />
          Email : <a href={`mailto:${mail}`}>{mail}</a>
          <br />
          Téléphone : <a href={`tel:${phone}`}>{phone}</a>
        </p>
        <h3>2. Hébergement</h3>
        <p>
          Le site <a href="https://otoktone.fr">otoktone.fr</a> est hébergé par
          :
          <br />
          <br />
          <a href="https://www.scaleway.com/" target="_blank">
            SCALEWAY
          </a>
          <br />
          Siège social : 8 rue de la Ville l'Evêque, 75008 PARIS
          <br />
          Site web :{" "}
          <a href="https://www.scaleway.com" target="_blank">
            https://www.scaleway.com
          </a>
        </p>
        <h3>3. Propriété intellectuelle</h3>
        <p>
          L'ensemble des contenus présents sur le site{" "}
          <a href="https://otoktone.fr">otoktone.fr</a> (textes, images, logos,
          vidéos, etc.) est protégé par le droit d'auteur et appartient à
          Alexandre Desmot, sauf mention contraire.
          <br />
          Les images utilisées sur le site provenant de{" "}
          <a href="https://www.freepik.com/" target="_blank">
            Freepik
          </a>{" "}
          sont sous licence et respectent les conditions d'utilisation du
          fournisseur. Toute reproduction, distribution ou modification des
          contenus sans autorisation préalable est interdite.
        </p>
        <h3>4. Données personnelles et cookies</h3>
        <p>
          Le site <a href="https://otoktone.fr">otoktone.fr</a> utilise Google
          Tag Manager pour collecter des statistiques anonymes sur l'utilisation
          du site.
        </p>
        <ul>
          <li>
            Cookies essentiels : Nécessaires au bon fonctionnement du site.
          </li>
          <li>
            Cookies analytiques : Permettent d'améliorer l'expérience
            utilisateur (désactivés par défaut, activables par consentement).
          </li>
        </ul>
        <h3>5. Responsabilité</h3>
        <p>
          L'éditeur du site s'efforce de fournir des informations à jour et
          exactes, mais ne saurait être tenu responsable :
          <br />
        </p>
        <ul>
          <li>
            Des erreurs, omissions ou d'une éventuelle indisponibilité du site.
          </li>
          <li>
            De l'utilisation qui pourrait être faite des informations publiées.
          </li>
          <li>
            De tout dommage direct ou indirect résultant de l'accès au site.
          </li>
        </ul>
        <h3>6. Liens hypertextes</h3>
        <p>
          Le site <a href="https://otoktone.fr">otoktone.fr</a> peut contenir
          des liens vers des sites tiers. L'éditeur du site n'a aucun contrôle
          sur ces derniers et ne saurait être tenu responsable de leur contenu.
        </p>
        <h3>7. Contact</h3>
        <p>
          Une page dédiée est disponible pour toute demande de{" "}
          <a href="/contact">contact</a>.
        </p>
        {/* eslint-enable react/no-unescaped-entities */}
      </div>
    </section>
  );
};

export default ContentMentions;
