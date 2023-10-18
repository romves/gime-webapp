import Landing from "@/components/layouts/About/Landing";
import Value from "@/components/layouts/About/Value";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "GIME | About",
};

const page = () => {
  return (
    <>
      <Landing />
      <Value />
    </>
  );
};

export default page;
