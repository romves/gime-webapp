import React from "react";

const Hero = () => {
  return (
    <section className="sect-container">
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="flex flex-col items-center w-[50%] text-center gap-12">
          <h1>Empowering Healthcare Professionals with AI Assistance</h1>
          <p className="w-[65%]">
            Dengan dukungan AI, kami bertujuan meningkatkan akurasi dan
            efisiensi deteksi diagnostik penyakit serta mempermudah dokter atau
            lembaga kesehatan dengan AI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
