"use client";

import { useState } from "react";
import Loader from "./components/Loader/Loader";
import Hero from "./components/Sections/Hero/Hero";
import Presentation from "./components/Sections/Presentation/Presentation";
import Skills from "./components/Sections/Skills/Skills";
import Tech from "./components/Sections/Tech/Tech";

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);

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
