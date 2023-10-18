import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { CgSpinner } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import toast from 'react-hot-toast';

interface Props {
  closeDialog: () => void;
}

const ForgotPass = ({ closeDialog }: Props) => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();

    formData.append("email", data.email);

    try {
      const res = await fetch(
        "https://valter-production.up.railway.app/forgot-pass",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json()
      if (data.status === "success") {
        toast("Check your email!");
        router.push('?showDialog=y&type=verifycode')
      }
    } catch (error: any) {
      console.log(error);
    }
    reset();
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="h4">Forgot Password</h1>
        <button onClick={closeDialog}>
          <MdClose />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label className="h6">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="text"
              placeholder="user@gimeai.com"
              className="border rounded-xl border-black py-2 px-4"
            />
            {errors.email && (
              <p className="text-red-500">{`${errors.email.message}`}</p>
            )}
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="flex justify-center items-center bg-black text-white rounded-xl py-3"
          >
            {isSubmitting ? (
              <CgSpinner className="text-2xl animate-spin" />
            ) : (
              "Send Reset Instructions"
            )}
          </button>
          <Link
            href="?showDialog=y&type=verifycode"
            className="bg-[#EDEDED] text-black rounded-xl py-3 text-center"
          >
            Already have the code?
          </Link>
        </div>
      </form>
    </>
  );
};

export default ForgotPass;
