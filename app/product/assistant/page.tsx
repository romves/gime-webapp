import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import AssistantInfo from "@/components/layouts/Product/AssistantInfo";
import ParallaxSection from "@/components/layouts/Product/ParallaxSection";
import React from "react";

const page = () => {
  return (
    <>
      <ParallaxSection />
      <div className="absolute z-30">
        <AssistantInfo />
        <FAQ variant="primary" />
        <Footer />
      </div>
    </>
  );
};

export default page;
