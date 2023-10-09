import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <section className="">
      <div className="flex border border-black">
        <div className="relative flex-1">
          {/* <Image src='/' alt='section2-img' /> */}
        </div>
        <div className="flex-1">
          <div className="bg-[#111111] text-[#FFF] px-24 py-28 space-y-10">
            <h2>
              We are committed to changing the way the world views healthcare
            </h2>
            <p className="bodytext-1">
              Sebagai pelopor dalam pengembangan teknologi kecerdasan buatan
              dalam perawatan medis, kami telah berdedikasi untuk memberikan
              solusi terdepan dan inovatif bagi pasien, dokter, dan lembaga
              kesehatan.
            </p>
          </div>
          <div className="flex justify-between items-center px-[12%] py-8 ">
            <h2 className="h2">Our Vision</h2>
            <Image
              src="/icon/arrow-right-circle.svg"
              alt="link-arrow-button"
              width={65}
              height={65}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
