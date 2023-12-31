import Landing from "@/components/layouts/Contact/Landing";
import Maps from "@/components/ui/Maps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GIME | Contact us",
  description: "Ai Health Assistant and Diagnostic Solutions"
};

const page = () => {
  return (
    <>
      <Landing />
      <Maps />
    </>
  );
};

export default page;
