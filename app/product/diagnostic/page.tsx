import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import BookAssistant from "@/components/layouts/Product/BookAssistant";
import DiagnosticInfo from "@/components/layouts/Product/DiagnosticInfo";
import ParallaxSection from "@/components/layouts/Product/ParallaxSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GIME | Diagnostic",
};

const page = () => {
  return (
    <>
      <ParallaxSection variant="Diagnostic" />
      <div className="absolute z-30">
        <DiagnosticInfo />
        <FAQ variant="primary" />
        <BookAssistant variant="Diagnostic" />
        <Footer />
      </div>
    </>
  );
};

export default page;
