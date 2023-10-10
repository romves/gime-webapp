import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <video
        className="object-cover w-full h-screen"
        autoPlay={true}
        loop
        controls={false}
        muted
      >
        <source src="./videos/1.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-screen bg-[#bdcdd6] opacity-40"/>
      <section className=" top-0 w-full h-full px-8 absolute">
        <div className="flex flex-col justify-center items-center w-full h-[100vh]">
          <div className="flex flex-col items-center lg:w-[50%] text-center gap-8 md:gap-12">
            <h1>Empowering Healthcare Professionals with AI</h1>
            <p className=" md:w-[65%]">
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
