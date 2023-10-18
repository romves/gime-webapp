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
              <button className="mt-12 lg:mt-4 self-end bg-black hover:bg-neutral-800 text-white  px-8 py-4 rounded-2xl font-[500] transition-colors">
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
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
