import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import { MdClose } from "react-icons/md";
import { CgSpinner } from "react-icons/cg";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";

interface Props {
  clickOk: () => void;
  closeDialog: () => void;
}

const SignIn = ({ clickOk, closeDialog }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.status == 200) {
        toast("Signin success");
        closeDialog();
      }

      toast(res?.error!);
    } catch (error: any) {
      console.log(error);
    }
    reset();
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="h4">Sign In</h1>
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
          <div className="flex flex-col gap-1">
            <label className="h6">Password</label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              type="password"
              placeholder="password"
              className="border rounded-xl border-black py-2 px-4"
            />
            {errors.password && (
              <p className="text-red-500">{`${errors.password.message}`}</p>
            )}
          </div>
          <Link href="?showDialog=y&type=forgotpass" className="self-end">
            forgot password
          </Link>
          <button
            disabled={isSubmitting}
            type="submit"
            className="flex justify-center items-center bg-black hover:bg-neutral-800 text-white rounded-xl py-3 transition-colors"
          >
            {isSubmitting ? (
              <CgSpinner className="text-2xl animate-spin" />
            ) : (
              "Sign in"
            )}
          </button>
          <Link
            href="?showDialog=y&type=signup"
            className="bg-[#EDEDED] hover:bg-neutral-200 transition-colors text-black rounded-xl py-3 text-center"
          >
            Dont have account?
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignIn;
