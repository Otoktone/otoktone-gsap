import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
    title: "Alexandre Desmot | Otoktone | Profil d'un développeur web",
    description:
        "Découvrir le profil d'Alexandre Desmot, développeur web et fondateur du site Otoktone.fr",
};

const HeroProfile = dynamic(
    () => import('@/app/profil/components/Hero/HeroProfile')
);

const Informations = dynamic(
    () => import('@/app/profil/components/Informations/Informations')
);

const Profile = () => {
    return (
        <>
            <HeroProfile />
            <Informations />
        </>
    );
};

export default Profile;
