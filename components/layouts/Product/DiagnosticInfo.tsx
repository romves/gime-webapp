import React from "react";
import {
    BsCollection,
  BsLightbulb,
  BsLightning,
} from "react-icons/bs";
import { MdManageSearch } from "react-icons/md";
import { AiOutlineBarChart } from "react-icons/ai";

const DiagnosticInfo = () => {
  return (
    <div className="bg-black text-[#FFF]">
      <h2 className="px-6 py-8 md:p-16 border-b">AI Diagnostic</h2>
      <div className="lg:flex border-b">
        <div className="flex-[.5] border-b lg:border-b-0">
          <p className="text-white/70 px-6 md:px-16 py-8">
            Produk AI kami adalah solusi canggih yang dirancang untuk mendukung
            berbagai aspek perawatan kesehatan. Ini mencakup diagnosa penyakit
            yang cepat dan akurat, manajemen data medis yang efisien, serta
            analisis data yang mendalam untuk perencanaan perawatan yang lebih
            baik.
          </p>
        </div>

        <div className="grid xl:grid-cols-2 flex-1">
          <div className="flex lg:border-l gap-4 md:gap-10 px-6 md:px-16 py-8 border-b">
            <BsLightning className="text-white lg:mt-2 text-[40px] flex-shrink-0" />
            <div className="space-y-4">
              <h2 className="h3 lg:h2">Cepat</h2>
              <p className="text-white/70">
                Teknologi kami dilengkapi dengan algoritma cerdas yang
                memungkinkan diagnosis penyakit dalam waktu singkat dan dengan
                akurasi yang tinggi.
              </p>
            </div>
          </div>
          <div className="flex lg:border-l gap-4 md:gap-10 px-6 md:px-16 py-8 border-b">
            <BsCollection className="text-white lg:mt-2 text-[40px] flex-shrink-0" />
            <div className="space-y-4">
              <h2 className="h3 lg:h2">Manajemen</h2>
              <p className="text-white/70">
                Solusi kami menghadirkan sistem manajemen data medis yang aman
                dan efisien. Ini memungkinkan penyimpanan data medis yang
                terstruktur.
              </p>
            </div>
          </div>
          <div className="flex lg:border-l gap-4 md:gap-10 px-6 md:px-16 py-8 border-b">
            <AiOutlineBarChart className="text-white lg:mt-2 text-[40px] flex-shrink-0" />
            <div className="space-y-4">
              <h2 className="h3 lg:h2">Identifikasi</h2>
              <p className="text-white/70">
                AI kami dapat menganalisis data medis pasien untuk
                mengidentifikasi pola dan tren yang unik. Ini membantu dalam
                merancang rencana perawatan yang lebih disesuaikan dengan
                kebutuhan pasien, meningkatkan hasil perawatan mereka.
              </p>
            </div>
          </div>
          <div className="flex lg:border-l gap-4 md:gap-10 px-6 md:px-16 py-8 border-b">
            <MdManageSearch className="text-white lg:mt-2 text-[40px] flex-shrink-0" />
            <div className="space-y-4">
              <h2 className="h3 lg:h2">Analisis</h2>
              <p className="text-white/70">
                Solusi kami juga dilengkapi dengan alat analitik yang kuat yang
                memungkinkan penyedia perawatan. Ini membantu dalam
                mengidentifikasi pola epidemiologi, risiko pasien, dan tren
                perawatan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticInfo;
