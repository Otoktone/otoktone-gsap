import { gsap } from "gsap";

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