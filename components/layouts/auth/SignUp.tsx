import Link from "next/link";
import React from "react";

interface Props {
  clickOk: () => void;
  closeDialog: () => void;
}

const SignUp = ({ clickOk, closeDialog }: Props) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="h4">Sign up</h1>
        <button onClick={closeDialog}>x</button>
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label className="h6">Name</label>
            <input
              type="text"
              placeholder="name"
              className="border rounded-xl border-black py-2 px-4"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="h6">Email</label>
            <input
              type="email"
              placeholder="gime@aitech.com"
              className="border rounded-xl border-black py-2 px-4"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="h6">Password</label>
            <input
              type="password"
              placeholder="password"
              className="border rounded-xl border-black py-2 px-4"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="h6">Confirm Password</label>
            <input
              type="password"
              placeholder="re-enter password"
              className="border rounded-xl border-black py-2 px-4"
            />
          </div>
          <button
            onClick={clickOk}
            className="bg-black text-white rounded-xl py-3 mt-2"
          >
            Sign up
          </button>
          <Link
            href="?showDialog=y&type=signin"
            className="bg-[#EDEDED] text-black rounded-xl py-3 text-center"
          >
            Already have account?
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
