'use client';

import styles from './Informations.module.scss';

const Informations = () => {
    return (
        <section id={styles.informations}>
            <div className={styles.informationsContainer}>
                <div className={styles.contact}>
                    <div className={styles.contactHeader}>
                        <h3>Comment me contacter ?</h3>
                        <p>
                            Vous pouvez me contacter par email, téléphone ou via
                            les réseaux sociaux.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Informations;
