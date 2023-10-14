import Image from "next/image";
import React from "react";

import { BsShieldLock, BsPeople, BsLightbulb } from "react-icons/bs";
import { LiaHandshake } from "react-icons/lia";

const Value = () => {
  return (
    <div className="bg-black text-[#FFF]">
      <h2 className="px-6 py-8 md:p-16 border-b">Our Value</h2>
      <div className="lg:flex border-b">
        <div className="flex-[.5] border-b lg:border-b-0">
          <p className="text-white/70 px-6 md:px-16 py-8">
            Mengedepankan peran dalam pembentukan perusahaan kami. Mereka adalah
            pusat keberhasilan perusahaan ini, dan semangat kami tercermin dalam
            nilai-nilai.
          </p>
        </div>

        <div className="grid xl:grid-cols-2 flex-1">
          <div className="flex lg:border-l gap-4 md:gap-10 px-6 md:px-16 py-8 border-b">

            <BsShieldLock className="text-white lg:mt-2 text-[40px] flex-shrink-0" />
            <div className="space-y-4">
              <h2 className="h3 lg:h2">Integritas</h2>
              <p className="text-white/70">
                Bertindak dengan jujur, etis, dan transparan dalam setiap aspek
                bisnis kami. Integritas adalah landasan yang memandu setiap
                keputusan dan tindakan kami.
              </p>
            </div>
          </div>
          <div className="flex lg:border-l gap-4 md:gap-10 px-6 md:px-16 py-8 border-b">

            <BsPeople className="text-white lg:mt-2 text-[40px] flex-shrink-0" />
            <div className="space-y-4">
              <h2 className="h3 lg:h2">Kolaborasi</h2>
              <p className="text-white/70">
                Bekerja sama dengan penyedia perawatan kesehatan, pasien, dan
                mitra untuk mencapai tujuan bersama. Kolaborasi adalah pondasi
                yang memungkinkan kami menciptakan solusi yang lebih baik.
              </p>
            </div>
          </div>
          <div className="flex lg:border-l gap-4 md:gap-10 px-6 md:px-16 py-8 border-b">
            <BsLightbulb className="text-white lg:mt-2 text-[40px] flex-shrink-0" />
            <div className="space-y-4">
              <h2 className="h3 lg:h2">Inovasi</h2>
              <p className="text-white/70">
                Kami percaya bahwa inovasi adalah kunci untuk menciptakan
                perubahan positif dalam perawatan kesehatan. Kami selalu mencari
                cara baru untuk memanfaatkan teknologi AI dan robotika dalam
                meningkatkan layanan kesehatan.
              </p>
            </div>
          </div>
          <div className="flex lg:border-l gap-4 md:gap-10 px-6 md:px-16 py-8 border-b">
            <LiaHandshake className="text-white lg:mt-2 text-[50px] flex-shrink-0" />
            <div className="space-y-4">
              <h2 className="h3 lg:h2">Pelayanan</h2>
              <p className="text-white/70">
                memiliki komitmen yang kuat untuk memberikan kontribusi positif
                kepada masyarakat dan dunia di sekitar kami. Kami percaya bahwa
                bisnis yang berkelanjutan harus berdampak baik pada semua pihak.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;

