import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <section className="flex">
      <div className="hidden md:flex relative flex-1 border">
        <Image src='/images/robohand.svg' alt='section2-img' fill className="object-cover"/>
      </div>
      <div className="flex-1">
        <div className="bg-[#111111] text-[#FFF] px-[10%] py-28 space-y-10">
          <h2>
            We are committed to changing the way the world views healthcare
          </h2>
          <p className="bodytext-1">
            Sebagai pelopor dalam pengembangan teknologi kecerdasan buatan dalam
            perawatan medis, kami telah berdedikasi untuk memberikan solusi
            terdepan dan inovatif bagi pasien, dokter, dan lembaga kesehatan.
          </p>
        </div>
        <div className="flex justify-between items-center px-[10%] py-6 md:py-8 border-b md:border-b-0 border-black">
          <h2 className="h2">Our Vision</h2>
          <Image
            src="/icon/arrow-right-circle.svg"
            alt="link--button"
            width={65}
            height={65}
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;
