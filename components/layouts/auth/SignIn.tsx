import Link from "next/link";
import React from "react";

interface Props {
  clickOk: () => void;
  closeDialog: () => void;
}

const SignIn = ({ clickOk, closeDialog }: Props) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="h4">Sign In</h1>
        <button onClick={closeDialog}>x</button>
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label className="h6">Email</label>
            <input
              type="email"
              placeholder="user@gimeai.com"
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
          <a href="s" className="self-end">
            forgot password
          </a>
          <button
            onClick={clickOk}
            className="bg-black text-white rounded-xl py-3"
          >
            Sign in
          </button>
          <Link
            href="?showDialog=y&type=signup"
            className="bg-[#EDEDED] text-black rounded-xl py-3 text-center"
          >
            Dont have account?
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignIn;
