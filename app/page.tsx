import HomePage from "@/components/layouts/Home/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GIME | Home",
  description: "Ai Health Assistant and Diagnostic Solutions"
};

export default function Home() {

  return (
    <>
      <HomePage />
    </>
  );
}
