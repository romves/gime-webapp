import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { CgSpinner } from "react-icons/cg";

interface Props {
  clickOk: () => void;
  closeDialog: () => void;
}

const SignUp = ({ clickOk, closeDialog }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();

    formData.append("uname", data.name);
    formData.append("password", data.password);
    formData.append("email", data.email);
    formData.append("address", data.address);
    formData.append("number", data.number);

    try {
      const response = await fetch(
        "https://valter-production.up.railway.app/register",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert("Signup Success")
        router.push("?showDialog=y&type=signin");
      } 
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="h4">Sign up</h1>
        <button onClick={closeDialog}>
          <MdClose />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label className="h6">Name</label>
            <input
              {...register("name", {
                required: "Name is required",
              })}
              type="text"
              placeholder="Gime Ai"
              className="border rounded-xl border-black py-2 px-4"
            />
            {errors.name && (
              <p className="text-red-500">{`${errors.name.message}`}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="h6">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="gime@aitech.com"
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
            <label className="h6">Address</label>
            <input
              {...register("address", { required: "Address is required" })}
              type="text"
              placeholder="Jl KapiWoro"
              className="border rounded-xl border-black py-2 px-4"
            />
            {errors.address && (
              <p className="text-red-500">{`${errors.address.message}`}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="h6">Phone</label>
            <input
              {...register("phone", { required: "Phone is required" })}
              type="tel"
              placeholder="089123456789"
              className="border rounded-xl border-black py-2 px-4"
            />
            {errors.phone && (
              <p className="text-red-500">{`${errors.phone.message}`}</p>
            )}
          </div>
          <button
            type="submit"
            className="flex items-center justify-center bg-black text-white rounded-xl py-3 mt-2"
          >
            {isSubmitting ? (
              <CgSpinner className="text-2xl animate-spin" />
            ) : (
              "Sign Up"
            )}
          </button>
          <Link
            href="?showDialog=y&type=signin"
            className="bg-[#EDEDED] text-black rounded-xl py-3 text-center"
          >
            Already have account?
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignUp;
