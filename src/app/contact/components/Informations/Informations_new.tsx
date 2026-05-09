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

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.subject.trim() ||
            !formData.message.trim()
        ) {
            setStatus('error');
            return;
        }

        const mailtoBody = `
            Nom: ${formData.name}
            Email: ${formData.email}

            ---

            ${formData.message}

            ---
            Message envoyé depuis le formulaire de contact d'Otoktone.fr
        `.trim();

        const mailtoLink = `mailto:contact@otoktone.fr?subject=${encodeURIComponent(
            `[Contact Otoktone] ${formData.subject}`
        )}&body=${encodeURIComponent(mailtoBody)}`;

        window.location.href = mailtoLink;

        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1000);
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
                                    <span>[SUCCESS]</span> Votre client mail
                                    s&apos;est ouvert !
                                </div>
                                <p>
                                    Envoyez le message depuis votre client mail
                                    pour finaliser l&apos;envoi.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className={styles.resetBtn}
                                >
                                    &gt; Nouveau message
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
                                        maxLength={100}
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
                                        maxLength={100}
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
                                        maxLength={200}
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
                                        maxLength={2000}
                                    />
                                </div>

                                {status === 'error' && (
                                    <div className={styles.errorMessage}>
                                        <span>[ERROR]</span> Tous les champs
                                        sont requis.
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
                                            Ouverture du client mail...
                                        </>
                                    ) : (
                                        <>
                                            &gt; Ouvrir mon client mail
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
