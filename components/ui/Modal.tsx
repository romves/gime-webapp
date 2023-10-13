"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

interface Props {
  title: string;
  onClose: () => void;
  onOK: () => void;
  children: React.ReactNode;
}

const Modal = (props: Props) => {

    const searchParams = useSearchParams()

    const dialogRef = React.useRef<null | HTMLDialogElement>(null)
  return <div></div>;
};

export default Modal;
