import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { CgSpinner } from "react-icons/cg";
import { MdClose } from "react-icons/md";

interface Props {
  closeDialog: () => void;
}

const ChangePass = ({ closeDialog }: Props) => {
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
    formData.append("pass", data.password);
    formData.append("code", data.code);

    try {
      const res = await fetch(
        "https://valter-production.up.railway.app/verify-code",
        {
          method: "POST",
          body: formData,
        }
      );
        const response = await res.json()
      if (response.status === 'success') {
        alert("Your password has been changed");
        router.push('?showDialog=y&type=signin')
        reset();
      }

    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="h4">Change Password</h1>
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
          <div className="flex flex-col gap-1">
            <label className="h6">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === getValues("password") || "Password must match",
              })}
              placeholder="re-enter password"
              className="border rounded-xl border-black py-2 px-4"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="h6">Verification Code</label>
            <input
              type="code"
              {...register("code", {
                required: "Verification code is required",
                minLength: {
                  value: 6,
                  message: "Input the correct code",
                },
              })}
              placeholder="check the code sent to email"
              className="border rounded-xl border-black py-2 px-4"
            />
            {errors.code && (
              <p className="text-red-500">{`${errors.code.message}`}</p>
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
              "Change Password"
            )}
          </button>
          <Link
            href="?showDialog=y&type=forgotpass"
            className="bg-[#EDEDED] text-black rounded-xl py-3 text-center"
          >
            Send Reset Instructions
          </Link>
        </div>
      </form>
    </>
  );
};

export default ChangePass;
