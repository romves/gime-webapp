import React from "react";
import { BsTelephone, BsInbox } from "react-icons/bs";

const page = () => {
  return (
    <div className="sect-container space-y-4">
      <h1>Get in touch</h1>
      <p>
        Jika Anda memiliki pertanyaan, saran, atau ingin berdiskusi lebih lanjut
        tentang bagaimana produk dan layanan kami dapat membantu Anda, jangan
        ragu untuk menghubungi tim kami.
      </p>
      <div className="flex justify-between">
        <span className="flex gap-4 items-center">
          <BsTelephone className="text-4xl" />
          <h2>+6213123213123</h2>
        </span>
        <span className="flex gap-4 items-center">
          <BsInbox className="text-4xl" />
          <h2>Gime@aitech.com</h2>
        </span>
      </div>
      <div>
        {/* Send Email */}
      </div>
      <div className="py-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d493.9291398929124!2d112.6138438330748!3d-7.954113514222278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7882798ee8f48d%3A0x119af7bd320d6d73!2sGedung%20Utama%20Fakultas%20Ilmu%20Komputer!5e0!3m2!1sen!2sid!4v1697158890144!5m2!1sen!2sid"
          loading="lazy"
          className="mx-auto object-cover h-[50vh] w-full rounded-xl"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
