import TextInput from "@/components/ui/TextInput";
import Image from "next/image";
import React from "react";
import { BsInbox, BsTelephone } from "react-icons/bs";

const Landing = () => {
  return (
    <>
      <div className="px-6 xl:pr-0 lg:pl-16 pt-24 space-y-4">
        <div className="flex gap-[12vw]">
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="h2">Get in touch</h1>
            <p>
              Jika Anda memiliki pertanyaan, saran, atau ingin berdiskusi lebih
              lanjut tentang bagaimana produk dan layanan kami dapat membantu
              Anda, jangan ragu untuk menghubungi tim kami.
            </p>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-[10vw]">
              <span className="flex gap-4 items-center">
                <BsTelephone className="text-4xl" />
                <h2 className="h4">+6213123213123</h2>
              </span>
              <span className="flex gap-4 items-center">
                <BsInbox className="text-4xl" />
                <h2 className="h4">Gime@aitech.com</h2>
              </span>
            </div>

            <div className="flex flex-col lg:gap-10">
              <div className="grid lg:grid-cols-2 gap-x-28">
                {/* Send Email */}
                <TextInput type="email" label="Email" id="email" />
                <TextInput type="text" label="Name" id="name" />
                <TextInput type="tel" label="Phone" id="phone" />
                <TextInput type="text" label="Country" id="country" />
              </div>
              <TextInput
                type="text"
                label="Message"
                id="message"
                className="w-full"
              />
              <button className="mt-12 lg:mt-4 self-end bg-black text-white px-8 py-4 rounded-2xl font-[500]">
                Submit
              </button>
            </div>
          </div>

          <div className="hidden lg:block relative flex-[.8] w-full rounded-l-xl overflow-hidden">
            <Image
              src="/images/contact-img.svg"
              alt="section-image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="sect-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d493.9291398929124!2d112.6138438330748!3d-7.954113514222278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7882798ee8f48d%3A0x119af7bd320d6d73!2sGedung%20Utama%20Fakultas%20Ilmu%20Komputer!5e0!3m2!1sen!2sid!4v1697158890144!5m2!1sen!2sid"
          loading="lazy"
          className="mx-auto object-cover h-[50vh] w-full rounded-xl"
        ></iframe>
      </div>
    </>
  );
};

export default Landing;
