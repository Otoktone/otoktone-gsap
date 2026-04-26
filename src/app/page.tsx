import Hero from '@/app/components/Sections/Hero/Hero';
import Presentation from '@/app/components/Sections/Presentation/Presentation';
import Skills from '@/app/components/Sections/Skills/Skills';
import Tech from '@/app/components/Sections/Tech/Tech';
import Profile from '@/app/components/Sections/Profile/Profile';
import Project from '@/app/components/Sections/Project/Project';

const Home = () => {
    return (
        <>
            <Hero />
            <Presentation />
            <Skills />
            <Tech />
            <Profile />
            <Project />
        </>
    );
};

export default Home;
