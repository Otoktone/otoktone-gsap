import { gsap } from "gsap";
import SplitType from "split-type";

/**
 * Animates an element with a fade-in effect.
 * @param element The HTML element to animate.
 * @param fromOpacity Initial opacity (default is 0).
 * @param toOpacity Final opacity (default is 1).
 * @param duration Animation duration in seconds (default is 1).
 */
export const fadeIn = (
  element: HTMLElement | null,
  fromOpacity: number = 0,
  toOpacity: number = 1,
  duration: number = 1,
  ease: string = "power3.out"
) => {
  if (!element) return;
  gsap.fromTo(
    element,
    { opacity: fromOpacity },
    { opacity: toOpacity, duration, ease: ease }
  );
};

/**
 * Animates a list of elements with a staggered fade-in effect.
 * @param elements The list of elements to animate.
 * @param fromOpacity Initial opacity (default is 0).
 * @param toOpacity Final opacity (default is 1).
 * @param duration Duration of each individual animation (default is 0.5).
 * @param stagger Time delay between each element's animation (default is 0.05).
 */
export const fadeInStaggered = (
  elements: NodeListOf<HTMLElement> | null,
  fromOpacity: number = 0,
  toOpacity: number = 1,
  duration: number = 0.5,
  stagger: number = 0.05
) => {
  if (!elements) return;
  gsap.fromTo(
    elements,
    { opacity: fromOpacity },
    { opacity: toOpacity, duration, stagger, ease: "power3.out" }
  );
};

/**
 * Animates navigation links with a hover effect.
 *
 * - On hover, the first text (.text1) moves up with a staggered effect.
 * - Simultaneously, the second text (.text2) moves up without stagger.
 * - On mouse leave, the animation reverses.
 *
 * @param linksRef A reference to an array of HTML elements (either <li> or <a>) to animate.
 */
export const animateLinks = (linksRef: React.RefObject<(HTMLLIElement | HTMLAnchorElement)[]>) => {
  const timelinesRef = new Map<HTMLLIElement | HTMLAnchorElement, gsap.core.Timeline>();

  linksRef.current?.forEach((link) => {
    if (!link) return;

    // Delete old animations
    if (timelinesRef.has(link)) {
      timelinesRef.get(link)?.kill();
    }

    const text1 = new SplitType(link.querySelector(".text1") as HTMLElement);
    const text2 = new SplitType(link.querySelector(".text2") as HTMLElement);

    const tl = gsap
      .timeline({ paused: true })
      .to(text1.chars, {
        yPercent: -120,
        stagger: 0.015,
        duration: 0.35,
        ease: "power3.out",
      })
      .to(text2.chars, { yPercent: -100 }, 0);

    timelinesRef.set(link, tl);

    const playAnimation = () => tl.play();
    const reverseAnimation = () => tl.reverse();

    link.addEventListener("mouseenter", playAnimation);
    link.addEventListener("mouseleave", reverseAnimation);

    // Cleanup
    return () => {
      link.removeEventListener("mouseenter", playAnimation);
      link.removeEventListener("mouseleave", reverseAnimation);
      text1.revert();
      text2.revert();
    };
  });
};