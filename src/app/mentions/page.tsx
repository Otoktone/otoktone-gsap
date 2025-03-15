import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Mentions légales | Otoktone",
  description: "Alexandre Desmot | Otoktone - Mentions légales",
};

const HeroMentions = dynamic(
  () => import("@/app/mentions/components/Hero/HeroMentions")
);

const ContentMentions = dynamic(
  () => import("@/app/mentions/components/Content/ContentMentions")
);

const Mentions = () => {
  return (
    <>
      <HeroMentions />
      <ContentMentions />
    </>
  );
};

export default Mentions;
