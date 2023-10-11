import Image from "next/image";
import React from "react";


const Section4 = () => {
  return (
    <>
      <div className="bg-black text-[#FFF]">
        <h2 className="px-12 py-8 md:p-16 border-b">Layanan unggulan kami</h2>
        <div className="lg:flex">
          <div className="flex-[.5] border-b lg:border-r">
            <p className="text-white/70 px-12 md:px-16 py-8">
              Teknologi yang menggabungkan kecerdasan buatan dengan robotik
              untuk memberikan dukungan dalam berbagai aspek perawatan
              kesehatan. Ini termasuk bantuan dalam tugas administratif rumah
              sakit, perawatan pasien, dan lebih banyak lagi.
            </p>
          </div>

          <div className="flex-1">
            <div className="flex gap-4 md:gap-10 px-12 md:px-16 py-8 border-b">
              <Image
                src="/icon/loader.svg"
                alt="layanan-icon"
                width={40}
                height={40}
                className=" self-start"
              />
              <div className="space-y-4">
                <h2 className="h3 lg:h2">AI Assistance</h2>
                <p className="text-white/70">
                  Teknologi yang menggabungkan kecerdasan buatan dengan robotik
                  untuk memberikan dukungan dalam berbagai aspek perawatan
                  kesehatan. Ini termasuk bantuan dalam tugas administratif
                  rumah sakit, perawatan pasien, dan lebih banyak lagi.
                </p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-10 px-12 md:px-16 py-8 border-b">
              <Image
                src="/icon/cpu.svg"
                alt="layanan-icon"
                width={40}
                height={40}
                className=" self-start"
              />
              <div className="space-y-4">
                <h2 className="h3 lg:h2">AI Diagnostic</h2>
                <p className="text-white/70">
                  Solusi yang dikembangkan untuk merampingkan dan meningkatkan
                  efisiensi perawatan kesehatan. Solusi ini menggunakan
                  kecerdasan buatan untuk membantu dalam diagnosis, pengobatan,
                  dan manajemen data medis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-12 py-8 px-12 md:px-16 ">
          <h3 className="h4">Pelajari Lebih Lanjut </h3>
          <Image
            src="/icon/arrow-right-circle-white.svg"
            alt="link--button"
            width={45}
            height={45}
          />
        </div>
      </div>
    </>
  );
};

export default Section4;
