import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import AssistantInfo from "@/components/layouts/Product/AssistantInfo";
import BookAssistant from "@/components/layouts/Product/BookAssistant";
import ParallaxSection from "@/components/layouts/Product/ParallaxSection";
import React from "react";

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
