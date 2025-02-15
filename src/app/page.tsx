"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("@/app/components/Loader/Loader"), {
  ssr: false,
});
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

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <Hero />
          <Presentation />
          <Skills />
          <Tech />
        </>
      )}
    </>
  );
};

export default Home;
