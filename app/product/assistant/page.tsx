import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import AssistantInfo from "@/components/layouts/Product/AssistantInfo";
import BookAssistant from "@/components/layouts/Product/BookAssistant";
import ParallaxSection from "@/components/layouts/Product/ParallaxSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "GIME | Assistant",
  description: "Ai Health Assistant and Diagnostic Solutions"
};

const page = () => {
  return (
    <>
      <ParallaxSection variant="Assistant" />
      <div className="absolute z-30">
        <AssistantInfo />
        <FAQ variant="primary" />
        <BookAssistant variant="Assistant" />
        <Footer />
      </div>
    </>
  );
};

export default page;
