import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Contact | Otoktone",
  description:
    "Contactez Alexandre Desmot, développeur web en Bretagne à Vannes et fondateur du site Otoktone",
};

const HeroContact = dynamic(
  () => import("@/app/contact/components/Hero/HeroContact")
);

const Contact = () => {
  return <HeroContact />;
};

export default Contact;
