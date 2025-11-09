import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
    title: 'Alexandre Desmot | Otoktone | Contact',
    description:
        'Contactez Alexandre Desmot, développeur web en Bretagne à Vannes et fondateur du site Otoktone',
};

const HeroContact = dynamic(
    () => import('@/app/contact/components/Hero/HeroContact')
);

const Informations = dynamic(
    () => import('@/app/contact/components/Informations/Informations')
);

const Contact = () => {
    return (
        <>
            <HeroContact />
            <Informations />
        </>
    );
};

export default Contact;
