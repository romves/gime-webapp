import ScrollButton from "@/components/ui/ScrollButton";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <video
        className="object-cover w-full h-screen"
        autoPlay
        loop
        controls={false}
        muted
      >
        <source src="./videos/1.mp4" type="video/mp4" />
      </video>
      <div className="hidden md:flex absolute z-40 bottom-[10vh] w-full justify-center">
        <ScrollButton />
      </div>
      <div className="absolute top-0 left-0 w-full h-screen bg-[#bdcdd6] opacity-40" />
      <section className=" top-0 w-full h-full px-6 absolute">
        <div className="flex flex-col justify-center items-center w-full h-[100vh]">
          <div className="flex flex-col items-center lg:w-[50%] text-center gap-8 md:gap-12">
            <h1>Empowering Healthcare Professionals with AI</h1>
            <p className=" md:w-[65%] text-base md:text">
              Dengan dukungan AI, kami bertujuan meningkatkan akurasi dan
              efisiensi deteksi diagnostik penyakit serta mempermudah dokter
              atau lembaga kesehatan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
