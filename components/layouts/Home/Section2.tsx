import Image from "next/image";
import Link from "next/link";
import React from "react";

const Section2 = () => {
  return (
    <section className="flex">
      <div className="hidden md:flex relative flex-1 border">
        <Image src='/images/robohand.svg' alt='section2-img' fill className="object-cover"/>
      </div>
      <div className="flex-1">
        <div className="bg-[#111111] text-[#FFF] px-[8%] py-28 space-y-10">
          <h2>
            We are committed to changing the way the world views healthcare
          </h2>
          <p className="bodytext-1">
            Sebagai pelopor dalam pengembangan teknologi kecerdasan buatan dalam
            perawatan medis, kami telah berdedikasi untuk memberikan solusi
            terdepan dan inovatif bagi pasien, dokter, dan lembaga kesehatan.
          </p>
        </div>
        <Link href="/about" className="flex justify-between items-center px-[8%] py-6  border-b md:border-b-0 border-black">
          <h3 className="h3">Our Vision</h3>
          <Image
            src="/icon/arrow-right-circle.svg"
            alt="link--button"
            width={55}
            height={55}
          />
        </Link>
      </div>
    </section>
  );
};

export default Section2;
