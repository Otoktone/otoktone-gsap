'use client';

import { useState, FormEvent } from 'react';
import styles from './Informations.module.scss';

const Informations = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<
        'idle' | 'sending' | 'success' | 'error'
    >('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMessage('');

        try {
            // Utilisation de Formspree (gratuit, simple à setup)
            const response = await fetch(
                'https://formspree.io/f/YOUR_FORM_ID',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                throw new Error("Erreur lors de l'envoi");
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Une erreur est survenue. Réessayez plus tard.');
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

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

                    <div className={styles.formWrapper}>
                        <div className={styles.terminalHeader}>
                            <span className={styles.terminalTitle}>
                                root@otoktone:~$
                            </span>
                            <div className={styles.terminalButtons}>
                                <span className={styles.btnClose}></span>
                                <span className={styles.btnMinimize}></span>
                                <span className={styles.btnMaximize}></span>
                            </div>
                        </div>

                        {status === 'success' ? (
                            <div className={styles.successMessage}>
                                <div className={styles.glitchText}>
                                    <span>[SUCCESS]</span> Message envoyé avec
                                    succès !
                                </div>
                                <p>
                                    Je vous répondrai dans les plus brefs
                                    délais.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className={styles.resetBtn}
                                >
                                    &gt; Envoyer un autre message
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className={styles.contactForm}
                            >
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">
                                        <span className={styles.prompt}>
                                            &gt;
                                        </span>{' '}
                                        Nom :
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        disabled={status === 'sending'}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email">
                                        <span className={styles.prompt}>
                                            &gt;
                                        </span>{' '}
                                        Email :
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                        disabled={status === 'sending'}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="subject">
                                        <span className={styles.prompt}>
                                            &gt;
                                        </span>{' '}
                                        Sujet :
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="Demande de devis"
                                        disabled={status === 'sending'}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message">
                                        <span className={styles.prompt}>
                                            &gt;
                                        </span>{' '}
                                        Message :
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        placeholder="Votre message..."
                                        disabled={status === 'sending'}
                                    />
                                </div>

                                {status === 'error' && (
                                    <div className={styles.errorMessage}>
                                        <span>[ERROR]</span> {errorMessage}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className={styles.submitBtn}
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? (
                                        <>
                                            <span
                                                className={styles.loader}
                                            ></span>
                                            Envoi en cours...
                                        </>
                                    ) : (
                                        <>
                                            &gt; Envoyer le message
                                            <span className={styles.cursor}>
                                                _
                                            </span>
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Informations;
