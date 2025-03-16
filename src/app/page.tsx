"use client";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/app/components/Sections/Hero/Hero"), {
  ssr: false,
});
const Presentation = dynamic(
  () => import("@/app/components/Sections/Presentation/Presentation"),
  {
    ssr: false,
  }
);
const Skills = dynamic(
  () => import("@/app/components/Sections/Skills/Skills"),
  {
    ssr: false,
  }
);
const Tech = dynamic(() => import("@/app/components/Sections/Tech/Tech"), {
  ssr: false,
});

const Profile = dynamic(
  () => import("@/app/components/Sections/Profile/Profile"),
  {
    ssr: false,
  }
);

const Project = dynamic(
  () => import("@/app/components/Sections/Project/Project"),
  {
    ssr: false,
  }
);

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
