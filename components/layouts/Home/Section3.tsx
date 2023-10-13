import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <div className="flex flex-col items-center sect-container gap-6 md:gap-10">
      <h2 className="text-center">Alasan Memilih Kami untuk Masa Depan</h2>
      <div className="flex gap-12 py-12">
        <ul className="flex-1 space-y-6 px-4">
          <li className="space-y-4">
            <h3>Solusi yang telah disesuaikan</h3>
            <p>
              Memahami bahwa setiap situasi dalam kesehatan dapat berbeda. Oleh
              karena itu, menawarkan solusi yang sesuaikan dengan kebutuhan
            </p>
          </li>
          <li className="space-y-4">
            <h3>Dedikasi terhadap kualitas</h3>
            <p>
              Sangat mementingkan kualitas produk dan layanan kami. Semua produk
              kami melalui pengujian ketat dan pengembangan cermat
            </p>
          </li>
          <li className="space-y-4">
            <h3>Pendekatan berkelanjutan</h3>
            <p>
              Terus berinovasi dan memperbarui produk dan layanan kami sesuai
              dengan perkembangan terbaru dalam teknologi kesehatan
            </p>
          </li>
        </ul>
        <div
          className="hidden md:block relative flex-1 overflow-hidden rounded-3xl"
          style={{
            backgroundImage: "url(/images/robot.svg)",
            backgroundPosition: "center",
            backgroundSize: 'cover',
            backgroundRepeat: "no-repeat"
          }}
        ></div>
      </div>
    </div>
  );
};

export default Section3;
