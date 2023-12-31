import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const Section4 = () => {
  return (
    <>
      <div className="bg-black text-[#FFF]">
        <h2 className="px-6 py-8 md:p-16 border-b">Layanan unggulan kami</h2>
        <div className="lg:flex">
          <div className="flex-[.5] border-b lg:border-r">
            <p className="text-white/70 px-6 md:px-16 py-8">
              Teknologi yang menggabungkan kecerdasan buatan dengan robotik
              untuk memberikan dukungan dalam berbagai aspek perawatan
              kesehatan. Ini termasuk bantuan dalam tugas administratif rumah
              sakit, perawatan pasien, dan lebih banyak lagi.
            </p>
          </div>

          <div className="flex-1">
            <div className="flex gap-4 md:gap-10 px-6 md:px-16 py-8 border-b">
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
            <div className="flex gap-4 md:gap-10 px-6 md:px-16 py-8 border-b">
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

        <Link
          href="/product/assistant"
          className="relative group flex hover:border-b border-black items-center gap-12 py-8 px-6 md:px-16 justify-between md:justify-start transition-colors"
        >
          <div className="absolute bg-white group-hover:translate-x-[0%] translate-x-[-100%] w-full h-full transition-transform right-0 duration-500" />
          <h3 className="h4 z-10 group-hover:text-black">
            Pelajari Lebih Lanjut
          </h3>
          <BsArrowRightCircle className="text-4xl group-hover:text-black z-10 transition-colors duration-700" />
        </Link>
      </div>
    </>
  );
};

export default Section4;
