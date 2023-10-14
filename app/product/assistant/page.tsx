import FAQ from "@/components/FAQ";
import AssistantInfo from "@/components/layouts/Product/AssistantInfo";
import React from "react";

const page = () => {
  return (
    <>
      <div className="px-1 py-24 lg:py-32 font-grotesk text-[17vw] w-full justify-center flex flex-col items-center leading-[.9]">
        <span className="text-stroke">AI Assistant</span>
        <span>AI Assistant</span>
        <span className="text-stroke">AI Assistant</span>
      </div>
      <AssistantInfo />
      <FAQ variant="primary" />
    </>
  );
};

export default page;
