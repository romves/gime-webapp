import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const Section2 = () => {
  return (
    <section className="flex">
      <div className="hidden md:flex relative flex-1 border">
        <Image
          src="/images/robohand.jpg"
          alt="section2-img"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="bg-[#111111] text-[#FFF] px-[8%] py-28 space-y-10">
          <h2>
            We are committed to changing the way the world views healthcare
          </h2>
          <p className="">
            Sebagai pelopor dalam pengembangan teknologi kecerdasan buatan dalam
            perawatan medis, kami telah berdedikasi untuk memberikan solusi
            terdepan dan inovatif bagi pasien, dokter, dan lembaga kesehatan.
          </p>
        </div>
        <Link
          href="/about"
          className="relative group flex transition-colors justify-between items-center px-[8%] py-6  border-y md:border-b-0 border-black overflow-hidden hover:border-white"
        >
          <div className="absolute bg-[#111111] group-hover:translate-x-[0%] translate-x-[-100%] w-full h-full transition-transform right-0 duration-500" />
          <h3 className="h3 group-hover:text-white z-10 transition-colors duration-500">
            Our Vision
          </h3>
          <BsArrowRightCircle className="text-4xl group-hover:text-white z-10 transition-colors duration-700" />
        </Link>
      </div>
    </section>
  );
};

export default Section2;
