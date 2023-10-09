"use client";

import Image from "next/image";
import React from "react";

const Artikel = () => {
  const [active, setActive] = React.useState(0);

  //   React.useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setActive((prevActive) => (prevActive + 1) % 8); // Assuming you have 8 ArticleCard components
  //     }, 5000);

  //     return () => {
  //       clearTimeout(timer); // Clear the timer when the component unmounts or active changes
  //     };
  //   }, [active]);
  return (
    <div className="border border-black py-24 space-y-16">
      <h2 className="px-16">Artikel Terbaru</h2>
      <div className="flex overflow-x-scroll">
        <div className="w-[200vh] flex">
          {artikelData.map((artikel, index) => (
            <ArticleCard
              key={artikel.id}
              artikel={artikel}
              isActive={index === active}
            />
            // <ArticleCard key={index} isActive={index === active} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artikel;

const ArticleCard = ({
  isActive,
  artikel,
}: {
  isActive: boolean;
  artikel: any;
}) => {
  return (
    <div
      className={`transition-all border-l border-black ${
        isActive ? "w-[40%]" : "w-[30%]"
      } flex-shrink-0`}
    >
      <div
        className={`relative w-full ${
          isActive ? "h-[35vh]" : "h-[30vh]"
        } border flex items-center`}
      >
        <Image
          src={artikel.imageUrl}
          alt="artikel-img"
          className="object-cover"
          fill
        />
      </div>

      <div className="p-16 space-y-4 flex-1">
        <h3>{artikel.title}</h3>
        <p className="bodytext-2">{artikel.description}</p>
      </div>
    </div>
  );
};

const artikelData = [
  {
    id: 1,
    title: "Teknologi AI Terbaru Membantu Meningkatkan Akurasi Diagnosis",
    description:
      "Dalam perkembangan terbaru di dunia perawatan kesehatan, teknologi kecerdasan buatan (AI) telah membantu meningkatkan akurasi diagnosis penyakit. AI Healthcare Solutions, yang dikembangkan oleh Gime, telah berhasil mengurangi waktu diagnosa dan meningkatkan kepastian diagnosis dalam berbagai kasus penyakit kritis.",
    imageUrl: "/images/artikel/artikel1.svg",
  },
  {
    id: 2,
    title: "Robot Asisten Kesehatan: Masa Depan Perawatan Pasien",
    description:
      "Perawatan pasien semakin cerdas dengan kehadiran robot asisten dalam rumah sakit dan pusat perawatan kesehatan. Gime telah memperkenalkan teknologi robotik canggih yang membantu perawat dan staf medis dalam memberikan perawatan yang lebih baik dan lebih efisien kepada pasien.",
      imageUrl: "/images/artikel/artikel2.svg",
  },
  {
    id: 3,
    title: "Revolutionizing Data Management in Healthcare with AI",
    description:
      "Manajemen data medis yang efisien adalah kunci untuk perawatan kesehatan yang berkualitas. Dalam artikel ini, kita akan menjelajahi bagaimana Gime telah merevolusi cara data medis dikelola dengan bantuan kecerdasan buatan.",
      imageUrl: "/images/artikel/artikel3.svg",
  },
];
