import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Alexandre Desmot | Otoktone | Portfolio de mes projets",
  description:
    "Découvrez le portfolio et les réalisations d'Alexandre Desmot, développeur web à Vannes",
};

const HeroPortfolio = dynamic(
  () => import("@/app/portfolio/components/HeroPortfolio")
);

const Portfolio = () => {
  return <HeroPortfolio />;
};

export default Portfolio;
