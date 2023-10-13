"use client";

import ArticleCard from "@/components/ui/ArticleCard";
import React from "react";

const Artikel = () => {
  const [active, setActive] = React.useState(0);

  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setActive((prevActive) => (prevActive + 1) % artikelData.length);
  //   }, 6000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [active]);

  return (
    <div className="pt-24 space-y-8 transition-all">
      <h2 className="px-6 lg:px-16">Artikel Terbaru</h2>
      <div className="flex overflow-hidden  border-black ">
        <div className="lg:w-[200vh] flex flex-col lg:flex-row">
          {artikelData.map((artikel, index) => (
            <ArticleCard
              key={artikel.id}
              artikel={artikel}
              isActive={index === active}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artikel;

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
