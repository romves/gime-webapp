"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

import SignUp from "../layouts/auth/SignUp";
import SignIn from "../layouts/auth/SignIn";

interface Props {}

const Dialog = ({}: Props) => {
  const searchParams = useSearchParams();

  const dialogRef = React.useRef<null | HTMLDialogElement>(null);
  const showDialog = searchParams.get("showDialog");
  const type = searchParams.get("type");
  const pathname = usePathname();

  const { data: session } = useSession();

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
    router.replace(`${pathname}`);
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
        {type === "signin" ? (
          <SignIn closeDialog={closeDialog} clickOk={clickOk} />
        ) : (
          <SignUp closeDialog={closeDialog} clickOk={clickOk} />
        )}
      </dialog>
    ) : null;

  return dialog;
};

export default Dialog;
