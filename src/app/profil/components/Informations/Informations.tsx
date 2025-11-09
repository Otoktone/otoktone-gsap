'use client';

import styles from './Informations.module.scss';

const Informations = () => {
    return (
        <section id={styles.informations}>
            <div className={styles.informationsContainer}>
                <div className={styles.profile}>
                    <div className={styles.profileHeader}></div>
                </div>
            </div>
        </section>
    );
};

export default Informations;
