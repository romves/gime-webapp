import React from "react";

const Landing = () => {
  return (
    <>
      <div className="sect-container">
        <div className="flex flex-col lg:flex-row lg:h-[100vh] p-8 md:p-16 bg-[url(/images/about-bg.png)] object-cover bg-cover rounded-xl gap-20">
          <div className="flex flex-col flex-1 gap-4">
            <span className="py-1 px-6 bg-white/50 self-start rounded-xl">
              Mission
            </span>
            <h1 className="h3 md:h2">
              Memberdayakan sektor perawatan kesehatan dengan teknologi AI
            </h1>
          </div>
          <div className="flex flex-col flex-1 justify-end gap-4">
            <span className="py-1 px-6 bg-white/50 self-start rounded-xl">
              Vision
            </span>
            <h1 className="h3 md:h2">
              Membentuk Masa Depan Perawatan Kesehatan yang Lebih Cerdas
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-0 pb-24 sect-container">
        <p className="lg:w-[50vw] bodytext-4 lg:bodytext-1">
          <strong>GIME</strong>, sebuah perintis dalam dunia AI Healthcare dan
          Robotika Kesehatan. Didirikan pada tahun 2023, kami telah mengukir
          jejak yang kuat dalam pengembangan teknologi AI yang canggih untuk
          meningkatkan efisiensi, akurasi, dan kualitas perawatan kesehatan.
          Dengan tim berpengalaman yang dipimpin oleh para ahli dalam bidangnya,
          kami telah mendedikasikan diri untuk memberdayakan penyedia perawatan
          kesehatan dan pasien dengan solusi yang revolusioner.
        </p>
      </div>
    </>
  );
};

export default Landing;
