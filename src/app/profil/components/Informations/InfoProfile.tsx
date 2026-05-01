'use client';
import Image from 'next/image';
import styles from './InfoProfile.module.scss';

const InfoProfile = () => {
    const birthDate: Date = new Date('1988-11-25');
    const ageDiffMs: number = Date.now() - birthDate.getTime();
    const ageDate: Date = new Date(ageDiffMs);
    const age: number = Math.abs(ageDate.getUTCFullYear() - 1970);

    return (
        <section id={styles.infoProfile}>
            <div className={styles.infoProfileContainer}>
                <div className={styles.idCard}>
                    {/* Coins décoratifs */}
                    <span className={styles.cornerTl} />
                    <span className={styles.cornerBr} />

                    {/* Header */}
                    <div className={styles.idHeader}>
                        <span className={styles.idHeaderLabel}>
                            OTOKTONE // SYS_IDENT v2.0
                        </span>
                        <div className={styles.authorizedBadge}>
                            <span>{'// AUTHORIZED //'}</span>
                        </div>
                        <span className={styles.idHeaderLabel}>
                            NODE_FR::BRETAGNE
                        </span>
                    </div>

                    {/* Body */}
                    <div className={styles.idBody}>
                        {/* Colonne photo */}
                        <div className={styles.idPhotoCol}>
                            <div className={styles.photoFrame}>
                                <Image
                                    src="/otoktone_alexandre_profile.webp"
                                    alt="Alexandre Desmot | Otoktone | Développeur Web Bretagne Vannes"
                                    width={160}
                                    height={180}
                                    className={styles.photo}
                                />
                            </div>
                            <p className={styles.photoLabel}>
                                SCAN BIOMÉTRIQUE
                                <br />
                                EN COURS...
                            </p>
                            <p className={styles.idNumber}>
                                {'// UID-19881125-AD //'}
                            </p>
                        </div>

                        {/* Colonne données */}
                        <div className={styles.idDataCol}>
                            <div className={styles.dataRow}>
                                <span className={styles.dataKey}>
                                    {'// identifiant'}
                                </span>
                                <span
                                    className={`${styles.dataVal} ${styles.typing}`}
                                >
                                    Alexandre_DESMOT
                                </span>
                            </div>
                            <div className={styles.dataRow}>
                                <span className={styles.dataKey}>
                                    {'// création'}
                                </span>
                                <span className={styles.dataVal}>
                                    25/11/1988{' '}
                                    <span className={styles.dataMuted}>
                                        ({age} cycles)
                                    </span>
                                </span>
                            </div>
                            <div className={styles.dataRow}>
                                <span className={styles.dataKey}>
                                    {'// localisation'}
                                </span>
                                <span className={styles.dataVal}>
                                    Bretagne
                                    <span className={styles.dataSep}>::</span>
                                    Vannes
                                </span>
                            </div>
                            <div className={styles.dataRow}>
                                <span className={styles.dataKey}>
                                    {'// dépendances'}
                                </span>
                                {/* eslint-disable react/no-unescaped-entities */}
                                <span
                                    className={`${styles.dataVal} ${styles.dataSmall}`}
                                >
                                    ["Informatique", "Surf",
                                    <br />
                                    "Voyages", "Cinématographie", "Jeux vidéo"]
                                </span>
                                {/* eslint-enable react/no-unescaped-entities */}
                            </div>
                            <div className={styles.dataRow}>
                                <span className={styles.dataKey}>
                                    {'// statut'}
                                </span>
                                <span className={styles.dataVal}>
                                    <span className={styles.statusDot} />
                                    Maintenance active
                                </span>
                            </div>
                            <div
                                className={`${styles.dataRow} ${styles.dataRowLast}`}
                            >
                                <span className={styles.dataKey}>
                                    {'// version'}
                                </span>
                                <span className={styles.dataVal}>
                                    2.0.26{' '}
                                    <span className={styles.dataMuted}>
                                        (LTS)
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className={styles.idFooter}>
                        <span>OTOKTONE.FR // DOSSIER CLASSIFIÉ</span>
                        <span>SYS_ACCESS: GRANTED</span>
                        <span>CRC: 0xDESM0T</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoProfile;
