"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Profile.module.scss";

const Profile = () => {
  const birthDate: Date = new Date("1988-11-25");
  const ageDiffMs: number = Date.now() - birthDate.getTime();
  const ageDate: Date = new Date(ageDiffMs);
  const age: number = Math.abs(ageDate.getUTCFullYear() - 1970);

  return (
    <section id={styles.profile}>
      <div className={styles.profileContainer}>
        <div className={styles.contentProfile}>
          <div className={styles.contentImageProfile}>
            <Image
              src={"/profile.jpg"}
              alt="Alexandre Desmot | Otoktone | Développeur Web Bretagne Vannes"
              width={0}
              height={0}
            />
          </div>
          <div className={styles.contentTextProfile}>
            {/* eslint-disable react/no-unescaped-entities */}
            <p>
              Bienvenue sur <Link href={"/"}>Otoktone.fr</Link>,
            </p>
            <p>
              Je suis Alexandre, un passionné de développement web résidant en
              Bretagne, âgé de {age} ans, qui trouve son inspiration dans
              l'informatique, les embruns marins et les aventures lointaines.
            </p>
            <p>
              Mon parcours est marqué par une évolution constante. Initialement
              formé en architecture d'intérieur, j'ai rapidement ressenti
              l'appel de la créativité et des technologies numériques. Mes
              premiers pas dans le domaine du développement web ont débuté dans
              l'univers du jeu en ligne, où j'ai acquis de l'expérience en
              louant et configurant des serveurs de jeu dédiés, en y intégrant
              des solutions de communication vocale et en mettant en place des
              plateformes de discussion pour nos communautés. Cela m'a également
              permis de concevoir des calendriers de compétition et d'optimiser
              l'expérience utilisateur au sein de nos équipes. C'est à ce
              moment-là que j'ai découvert les outils d'
              <a href="https://www.adobe.com/" target="_blank">
                Adobe
              </a>
              , tels que Photoshop et Illustrator, que j'ai utilisés pour créer
              des logos, des bannières et des visuels pour nos projets en ligne.
            </p>
            <p>
              Mon expérience s'est enrichie au fil du temps, passant même par
              une collaboration avec une mairie où j'ai géré le contenu des
              publications en ligne tout en assurant la maintenance du site.
              C'est à ce moment-là que j'ai réalisé que le web n'était pas
              seulement un passe-temps, mais bien une passion et un métier à
              part entière.
            </p>
            <p>
              C'est donc tout naturellement que j'ai décidé de me perfectionner
              en suivant une formation chez{" "}
              <a href="https://openclassrooms.com/" target="_blank">
                OpenClassrooms
              </a>{" "}
              pour devenir Développeur - Intégrateur Web. J'ai ensuite poursuivi
              ma formation en tant que concepteur développeur d'applications en
              alternance à l'école{" "}
              <a href="https://www.mydigitalschool.com/" target="_blank">
                MyDigitalSchool
              </a>{" "}
              et dans l'agence web vannetaise{" "}
              <a href="https://leadoff.fr" target="_blank">
                LEADOFF
              </a>
              , où je travaille actuellement.
            </p>
            <p>
              Otoktone.fr incarne un rêve de longue date, un pseudonyme qui
              prend aujourd'hui une dimension professionnelle. Ce site est pour
              moi une plateforme où je peux mettre en lumière mes réalisations,
              mes projets et mes compétences, tout en partageant les valeurs qui
              me sont chères.
            </p>
            <h3>Alexandre Desmot | Otoktone | Développeur Web</h3>
            {/* eslint-enable react/no-unescaped-entities */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
