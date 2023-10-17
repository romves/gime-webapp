"use client";

import TextInput from "@/components/ui/TextInput";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { PropsVariant } from "./ParallaxSection";
import { useSession } from "next-auth/react";

const BookAssistant = ({ variant }: PropsVariant) => {
  const { data: session } = useSession();

  if (session && session.user)
    return (
      <div className="px-6 xl:pr-0 lg:pl-16 py-24 space-y-4">
        <div className="flex gap-[12vw]">
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="h2">Book Assistant</h1>
            <p>Let us show our technology.</p>

            <div className="flex flex-col lg:gap-10">
              <div className="grid lg:grid-cols-2 gap-x-28">
                {/* Send Email */}
                <TextInput type="text" label="First Name" id="firstname" />
                <TextInput type="text" label="Last Name" id="lastname" />
                <TextInput type="text" label="Job Title" id="job" />
                <TextInput type="email" label="Email" id="email" />
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
              src={`/images/book-${variant}.png`}
              alt="section-image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    );
};

export default BookAssistant;
