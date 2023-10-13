import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Artikel from "@/components/layouts/Home/Artikel";
import Hero from "@/components/layouts/Home/Hero";
import Section2 from "@/components/layouts/Home/Section2";
import Section3 from "@/components/layouts/Home/Section3";
import Section4 from "@/components/layouts/Home/Section4";
import Image from "next/image";

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
