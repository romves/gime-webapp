import React from "react";
import { BsClipboard2Check } from "react-icons/bs";
import { FaListCheck } from "react-icons/fa6";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const AssistantInfo = () => {
  return (
    <div className="bg-black text-[#FFF] z-40">
      <h2 className="px-6 py-8 md:p-16 border-b">AI Assistant</h2>
      <div className="lg:flex border-b">
        <div className="flex-[.5] border-b lg:border-b-0">
          <p className="text-white/70 px-6 md:px-16 py-8">
            Asisten Kesehatan kami adalah teknologi yang memadukan kecerdasan
            buatan dengan robotika untuk memberikan dukungan dalam berbagai
            tugas perawatan kesehatan. Ini mencakup bantuan administratif,
            perawatan pasien, dan pemantauan kondisi pasien.
          </p>
        </div>

        <div className="grid xl:grid-cols-2 flex-1">
          <div className="flex lg:border-l gap-4 md:gap-10 px-6 md:px-16 py-8 border-b">
            <MdOutlineAdminPanelSettings className="text-white lg:mt-2 text-[40px] flex-shrink-0" />
            <div className="space-y-4">
              <h2 className="h3 lg:h2">Admin</h2>
              <p className="text-white/70">
                Robot asisten kami dapat membantu dalam tugas-tugas
                administratif rumah sakit seperti pengiriman pesan, pengarsipan,
                dan pencatatan data.
              </p>
            </div>
          </div>
          <div className="flex lg:border-l gap-4 md:gap-10 px-6 md:px-16 py-8 border-b">
            <HiOutlineWrenchScrewdriver className="text-white lg:mt-2 text-[40px] flex-shrink-0" />
            <div className="space-y-4">
              <h2 className="h3 lg:h2">Perawatan</h2>
              <p className="text-white/70">
                Robot kami dilengkapi dengan teknologi canggih yang memungkinkan
                mereka memberikan perawatan dasar kepada pasien.
              </p>
            </div>
          </div>
          <div className="flex lg:border-l gap-4 md:gap-10 px-6 md:px-16 py-8 border-b">
            <BsClipboard2Check className="text-white lg:mt-2 text-[40px] flex-shrink-0" />
            <div className="space-y-4">
              <h2 className="h3 lg:h2">Pemantauan</h2>
              <p className="text-white/70">
                Robot kami dapat memantau kondisi pasien secara real-time dan
                memberikan laporan kepada tim medis.
              </p>
            </div>
          </div>
          <div className="flex lg:border-l gap-4 md:gap-10 px-6 md:px-16 py-8 border-b">
            <FaListCheck className="text-white lg:mt-2 text-[40px] flex-shrink-0" />
            <div className="space-y-4">
              <h2 className="h3 lg:h2">Tepat</h2>
              <p className="text-white/70">
                Diatur untuk mematuhi prosedur dan protokol dengan ketat, yang
                meningkatkan keselamatan pasien dan memastikan bahwa perawatan
                sesuai dengan standar tertinggi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantInfo;
