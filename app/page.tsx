import Artikel from "@/components/layouts/Home/Artikel";
import Hero from "@/components/layouts/Home/Hero";
import Section2 from "@/components/layouts/Home/Section2";
import Section3 from "@/components/layouts/Home/Section3";
import Section4 from "@/components/layouts/Home/Section4";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GIME | Home",
  description: "Ai Health Assistant and Diagnostic Solutions"
};

export default function Home() {

  return (
    <>
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Artikel />
    </>
  );
}
