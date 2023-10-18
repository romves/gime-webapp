"use client";

import TextInput from "@/components/ui/TextInput";
import Image from "next/image";
import React from "react";
import { BsInbox, BsTelephone } from "react-icons/bs";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";

const Landing = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data.name, data.country, data.email, data.phone, data.message);
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("country", data.country);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("message", data.message);

    const response = await fetch(
      "https://formsubmit.co/ajax/6af632c7e125bc1eece3243585f9a529",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      toast("Form has been submitted!");
    } else {
      toast("Form submission failed");
    }
    reset()
  };

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

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col lg:gap-10"
            >
              <div className="grid lg:grid-cols-2 gap-x-28">
                {/* Send Email */}
                <TextInput
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  label="Email"
                  id="email"
                />
                <TextInput
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  label="Name"
                  id="name"
                />

                <TextInput
                  {...register("phone", { required: "Phone is required" })}
                  type="tel"
                  label="Phone"
                  id="phone"
                />
                <TextInput
                  {...register("country", { required: "Country is required" })}
                  type="text"
                  label="Country"
                  id="country"
                />
              </div>
              <TextInput
                {...register("message")}
                type="text"
                label="Message"
                id="message"
                className="w-full"
              />
              <button
                disabled={isSubmitting}
                type="submit"
                className="mt-12 lg:mt-4 self-end bg-black hover:bg-neutral-800 text-white  px-8 py-4 rounded-2xl font-[500] transition-colors"
              >
                {isSubmitting ? (
                  <CgSpinner className="text-2xl animate-spin" />
                ) : (
                  "Submit"
                )}
              </button>
            </form>
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
