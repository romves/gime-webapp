"use client";

import TextInput from "@/components/ui/TextInput";
import Image from "next/image";
import toast from 'react-hot-toast';
import React from "react";
import { PropsVariant } from "./ParallaxSection";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { CgSpinner } from "react-icons/cg";

const BookAssistant = ({ variant }: PropsVariant) => {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  if (!session) return null;

  const fullName = session?.user.uname.split(" ");

  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();

    formData.append("fname", data.fname);
    formData.append("lname", data.lname);
    formData.append("job", data.job);
    formData.append("country", data.country);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("address", data.address);
    formData.append("message", data.message);

    try {
      const response = await fetch(
        `https://valter-production.up.railway.app/bookings/${
          variant === "Assistant" ? 1 : 2
        }`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        }
      );

      const data = await response.json();
      if (data.status === "success") {
        toast("Book Success, Please check your email!");
      }

      console.log(data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  if (session && session.user)
    return (
      <div className="px-6 xl:pr-0 lg:pl-16 py-24 space-y-4">
        <div className="flex gap-[12vw]">
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="h2">Book Assistant</h1>
            <p>Let us show our technology.</p>

            <form
              className="flex flex-col lg:gap-10"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid lg:grid-cols-2 gap-x-28">
                {/* Send Email */}
                <TextInput
                  {...register("fname", { value: fullName[0] })}
                  type="text"
                  label="First Name"
                  id="firstname"
                />
                {errors.fname && (
                  <p className="text-red-500">{`${errors.fname.message}`}</p>
                )}
                <TextInput
                  {...register("lname", {
                    value: fullName[fullName.length - 1],
                  })}
                  type="text"
                  label="Last Name"
                  id="lastname"
                />
                {errors.lname && (
                  <p className="text-red-500">{`${errors.lname.message}`}</p>
                )}
                <TextInput
                  {...register("job")}
                  type="text"
                  label="Job Title"
                  id="jobtitle"
                />
                {errors.job && (
                  <p className="text-red-500">{`${errors.job.message}`}</p>
                )}

                <TextInput
                  {...register("email", { value: session.user.email })}
                  type="email"
                  label="Email"
                  id="email"
                />
                {errors.email && (
                  <p className="text-red-500">{`${errors.email.message}`}</p>
                )}
                <TextInput
                  {...register("phone", { required: "Country is required" })}
                  type="tel"
                  label="Phone"
                  id="phone"
                />
                {errors.phone && (
                  <p className="text-red-500">{`${errors.phone.message}`}</p>
                )}
                <TextInput
                  {...register("country", { required: "Country is required" })}
                  type="text"
                  label="Country"
                  id="country"
                />
                {errors.country && (
                  <p className="text-red-500">{`${errors.country.message}`}</p>
                )}
              </div>
              <TextInput
                {...register("address", { required: "Address is required" })}
                type="text"
                label="Address"
                id="address"
              />
              {errors.address && (
                <p className="text-red-500">{`${errors.address.message}`}</p>
              )}
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
                className="mt-12 lg:mt-4 self-end bg-black text-white px-8 py-4 rounded-2xl font-[500]"
              >
                {isSubmitting ? (
                  <CgSpinner className="text-2xl animate-spin" />
                ) : (
                  "Sign in"
                )}
              </button>
            </form>
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
