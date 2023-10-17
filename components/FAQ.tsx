"use client";

import React from "react";
import { BsArrowDownCircle } from "react-icons/bs";

const FAQ = ({ variant }: { variant: string }) => {
  const [isActive, setIsActive] = React.useState(1);

  return (
    <section className="sect-container">
      <div
        className={`py-10 px-4 md:px-10 flex flex-col items-center rounded-xl ${
          variant === "dark"
            ? "bg-[url(/images/faq-bg-dark.png)]"
            : "bg-[url(/images/faq-bg.png)]"
        } bg-cover`}
      >
        <div className="lg:w-[40%] space-y-8">
          <h2
            className={`h3 lg:h2 text-center ${
              variant === "dark" ? "text-white" : "text-black"
            }`}
          >
            Helping you create positive lasting impact
          </h2>
          <div className="space-y-2">
            {faqData.map((items) => (
              <React.Fragment key={items.id}>
                <button
                  onClick={() =>
                    setIsActive(isActive == items.id ? -1 : items.id)
                  }
                  className={`cursor-pointer text-start bg-white w-full border p-4 rounded-xl space-y-4 transition-all`}
                >
                  <div className="flex gap-4 md:gap-16 items-center justify-between">
                    <span className="h5 lg:h4">{items.question}</span>
                    {isActive == items.id ? (
                      <BsArrowDownCircle className="rotate-180 text-2xl flex-shrink-0 mr-2" />
                    ) : (
                      <BsArrowDownCircle className="text-2xl flex-shrink-0 mr-2" />
                    )}
                  </div>
                  <p
                    className={`bodytext-3 lg:bodytext-2 ${
                      isActive == items.id ? "block" : "hidden"
                    }`}
                  >
                    {items.answer}
                  </p>
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

const faqData = [
  {
    id: 1,
    question: "Apakah produk kesehatan ini memerlukan perawatan?",
    answer:
      "Produk asisten kesehatan kami dirancang untuk meminimalkan perawatan dan pemeliharaan. Namun, kami merekomendasikan perawatan rutin dan pemeliharaan sesuai dengan panduan.",
  },
  {
    id: 2,
    question: "Bagaimana cara memesan produk kesehatan ini?",
    answer:
      'Untuk memesan produk asisten kesehatan kami, silakan login terlebih dahulu. Anda dapat mengisi formulir kontak dengan detail Anda, pada page produk di website kami atau menghubungi tim layanan pelanggan.',
  },
  {
    id: 3,
    question: "Bagaimana cara menggunakan produk asisten kesehatan ini?",
    answer:
      "Penggunaan produk asisten kesehatan kami sangat sederhana. Setiap produk dilengkapi dengan panduan penggunaan yang jelas. Tim teknis kami juga akan memberikan pelatihan awal.",
  },
  {
    id: 4,
    question: "Bagaimana sistem keamanan dan privasi diatur dalam produk ini?",
    answer:
      "Produk asisten kesehatan kami dilengkapi dengan fitur keamanan tingkat tinggi dan pengamanan data yang kuat. Kami mematuhi standar tertinggi dalam menjaga keamanan dan privasi data pasien.",
  },
  {
    id: 5,
    question: "Bagaimana saya dapat menghubungi tim dukungan pelanggan",
    answer:
      'Tim dukungan pelanggan kami selalu siap membantu Anda. Anda dapat menghubungi mereka melalui Nomor Telepon atau Alamat Email yang tercantum pada halaman "Kontak" di website kami.',
  },
];
