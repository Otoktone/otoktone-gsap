"use client";

import styles from "./CookieBanner.module.scss";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  useEffect(() => {
    const handleReopen = () => {
      setShowBanner(true);
    };
    window.addEventListener("cookiesAcceptedChanged", handleReopen);
    return () => {
      window.removeEventListener("cookiesAcceptedChanged", handleReopen);
    };
  }, []);

  const handleAccept = () => {
    document.cookie = "cookie_consent=granted; path=/; max-age=31536000";
    localStorage.setItem("cookie_consent", "granted");
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "cookie_consent", consent: "granted" });
    setShowBanner(false);
  };

  const handleDecline = () => {
    document.cookie = "cookie_consent=denied; path=/; max-age=31536000";
    localStorage.setItem("cookie_consent", "denied");
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "cookie_consent", consent: "denied" });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className={styles.cookieBanner}>
      <p>
        Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez
        accepter ou refuser le suivi.{" "}
        <button className={styles.declineCookie} onClick={handleDecline}>
          Continuer sans accepter
        </button>
        .
      </p>
      <div className={styles.coookieBtn}>
        <button className={styles.acceptCookie} onClick={handleAccept}>
          Accepter
        </button>
      </div>
    </div>
  );
}
