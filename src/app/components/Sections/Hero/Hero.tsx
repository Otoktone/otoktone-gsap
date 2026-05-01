'use client';

import { useEffect, useRef, useState } from 'react';
import { fadeIn } from '@/app/utils/animation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from './Hero.module.scss';

const Hyperspeed = dynamic(() => import('./Hyperspeed'), {
    ssr: false,
    loading: () => null,
});

type HyperspeedProps = {
    effectOptions: {
        distortion: string;
        length: number;
        roadWidth: number;
        islandWidth: number;
        lanesPerRoad: number;
        fov: number;
        fovSpeedUp: number;
        speedUp: number;
        carLightsFade: number;
        totalSideLightSticks: number;
        lightPairsPerRoadWay: number;
        shoulderLinesWidthPercentage: number;
        brokenLinesWidthPercentage: number;
        brokenLinesLengthPercentage: number;
        lightStickWidth: [number, number];
        lightStickHeight: [number, number];
        movingAwaySpeed: [number, number];
        movingCloserSpeed: [number, number];
        carLightsLength: [number, number];
        carLightsRadius: [number, number];
        carWidthPercentage: [number, number];
        carShiftX: [number, number];
        carFloorSeparation: [number, number];
        colors: {
            roadColor: number;
            islandColor: number;
            background: number;
            shoulderLines: number;
            brokenLines: number;
            leftCars: number[];
            rightCars: number[];
            sticks: number;
        };
    };
};

type HyperspeedComponent = React.ComponentType<HyperspeedProps>;

const Hero = () => {
    const subTitle = 'Otoktone';
    const title = "Conception et développement d'applications web";

    const h1Ref = useRef<HTMLHeadingElement>(null);
    const h2Ref = useRef<HTMLDivElement>(null);

    const [HyperspeedComponent, setHyperspeedComponent] =
        useState<HyperspeedComponent | null>(null);
    const [shouldShowHyperspeed, setShouldShowHyperspeed] = useState(false);

    useEffect(() => {
        fadeIn(h1Ref.current, 0, 0.65, 3);
        fadeIn(h2Ref.current, 0, 0.7, 3);
    }, []);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        if (prefersReducedMotion || window.navigator.webdriver) {
            return;
        }

        const isTestEnvironment = () => {
            if (window.navigator.webdriver === true) return true;

            const canvas = document.createElement('canvas');
            const gl =
                canvas.getContext('webgl') ||
                canvas.getContext('experimental-webgl');
            if (!gl) return true;

            if (
                /headless|phantom|crawler|bot/i.test(window.navigator.userAgent)
            )
                return true;

            return false;
        };

        if (isTestEnvironment()) {
            return;
        }

        const nav = navigator as Navigator & { deviceMemory?: number };
        const isLowEnd =
            navigator.hardwareConcurrency <= 4 ||
            (nav.deviceMemory !== undefined && nav.deviceMemory <= 4);

        if (isLowEnd) {
            return;
        }

        const w = window as typeof window & {
            requestIdleCallback?: (cb: () => void) => number;
            cancelIdleCallback?: (id: number) => void;
        };

        const activate = async () => {
            const { default: Hyperspeed } = await import('./Hyperspeed');
            setHyperspeedComponent(() => Hyperspeed);
            setShouldShowHyperspeed(true);
        };

        if (w.requestIdleCallback) {
            const id = w.requestIdleCallback(activate);
            return () => w.cancelIdleCallback?.(id);
        } else {
            const t = setTimeout(activate, 200);
            return () => clearTimeout(t);
        }
    }, []);

    return (
        <section id={styles.hero}>
            <div className={styles.heroHeaderContainer}>
                {/* // Hyperspeed component — source: https://reactbits.dev/backgrounds/hyperspeed */}
                {shouldShowHyperspeed && HyperspeedComponent ? (
                    <Hyperspeed
                        effectOptions={{
                            distortion: 'turbulentDistortion',
                            length: 200,
                            roadWidth: 5,
                            islandWidth: 2,
                            lanesPerRoad: 2,
                            fov: 80,
                            fovSpeedUp: 80,
                            speedUp: 0.5,
                            carLightsFade: 0.4,
                            totalSideLightSticks: 4,
                            lightPairsPerRoadWay: 8,
                            shoulderLinesWidthPercentage: 0.05,
                            brokenLinesWidthPercentage: 0.1,
                            brokenLinesLengthPercentage: 0.5,
                            lightStickWidth: [0.12, 0.5],
                            lightStickHeight: [1.3, 1.7],
                            movingAwaySpeed: [60, 80],
                            movingCloserSpeed: [-120, -160],
                            carLightsLength: [200 * 0.03, 200 * 0.2],
                            carLightsRadius: [0.05, 0.14],
                            carWidthPercentage: [0.3, 0.5],
                            carShiftX: [-0.8, 0.8],
                            carFloorSeparation: [0, 5],
                            colors: {
                                roadColor: 0x080808,
                                islandColor: 0x0a0a0a,
                                background: 0x000000,
                                shoulderLines: 0xffffff,
                                brokenLines: 0xffffff,
                                leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                                rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                                sticks: 0x03b3c3,
                            },
                        }}
                    />
                ) : (
                    <Image
                        src="/abstract_background_white.svg"
                        className={styles.hearoHeaderImage}
                        alt="Ambiance technologique abstraite illustrant la conception et le développement d'applications web par Alexandre Desmot"
                        fill
                        priority
                        sizes="100vw"
                        style={{
                            objectFit: 'cover',
                            zIndex: 0,
                        }}
                    />
                )}
                <div className={styles.heroHeaderTitle}>
                    <h1 ref={h1Ref}>{title}</h1>
                    <h2 ref={h2Ref}>{subTitle}</h2>
                </div>
            </div>
        </section>
    );
};

export default Hero;
