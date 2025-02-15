"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import styles from "./Loader.module.scss";

interface LoaderProps {
  setLoading: (loading: boolean) => void;
}

const Loader: React.FC<LoaderProps> = ({ setLoading }) => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setLoading(false),
    });

    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 2,
      ease: "power4.inOut",
    });
  }, [setLoading]);

  return (
    <div ref={loaderRef} className={styles.loader}>
      <Image
        className={styles.loaderImage}
        src="/oda_white.svg"
        width={80}
        height={80}
        alt="Otoktone.fr logo site web chargement"
        loading="lazy"
      />
    </div>
  );
};

export default Loader;
