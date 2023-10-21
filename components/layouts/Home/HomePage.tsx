"use client";

import React, { useEffect } from "react";
import Hero from "./Hero";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Artikel from "./Artikel";

const HomePage = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Artikel />
    </>
  );
};

export default HomePage;
