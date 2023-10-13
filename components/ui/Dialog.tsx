"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {}

const Dialog = ({}: Props) => {
  const searchParams = useSearchParams();

  const dialogRef = React.useRef<null | HTMLDialogElement>(null);
  const showDialog = searchParams.get("showDialog");

  const router = useRouter();

  useEffect(() => {
    if (showDialog === "y") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const closeDialog = () => {
    dialogRef.current?.close();
    router.replace("/");
  };

  const clickOk = () => {
    closeDialog();
  };

  const dialog: JSX.Element | null =
    showDialog === "y" ? (
      <dialog
        ref={dialogRef}
        className="w-[350px] md:w-[350px] p-8 rounded-xl space-y-8"
      >
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
                className="border rounded-xl border-black p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="h6">Password</label>
              <input
                type="password"
                placeholder="password"
                className="border rounded-xl border-black p-2"
              />
            </div>
            <a href="s" className="self-end">
              forgot password
            </a>
            <button
              onClick={clickOk}
              className="bg-black text-white rounded-lg py-2"
            >
              Sign in
            </button>
            <button
              onClick={clickOk}
              className="bg-[#EDEDED] text-black rounded-lg py-2"
            >
              Dont have account?
            </button>
          </div>
        </div>
      </dialog>
    ) : null;

  return dialog;
};

export default Dialog;
