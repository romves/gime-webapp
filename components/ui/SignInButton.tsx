import { signOut, useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";
import {
  HiOutlineArrowDownCircle,
  HiOutlineArrowUpCircle,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import { MdLogout } from "react-icons/md";
import toast from "react-hot-toast";

const SignInButtonDesktop = () => {
  const { data: session } = useSession();
  const [isDropdown, setIsDropdown] = React.useState(false);

  if (session && session.user) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsDropdown(!isDropdown)}
          className={` ${
            isDropdown
              ? "rounded-t-2xl bg-white text-black border-b border-black"
              : "rounded-2xl text-white bg-black"
          } flex items-center gap-8  px-8 py-4 transition-colors`}
        >
          <span className="flex items-center gap-2">
            <HiOutlineUserCircle className="text-2xl" /> {session.user.uname}
          </span>
          {isDropdown ? (
            <HiOutlineArrowUpCircle className="text-2xl" />
          ) : (
            <HiOutlineArrowDownCircle className="text-2xl" />
          )}
        </button>
        <button
          onClick={() => {
            toast("Logout Success");
            signOut();
          }}
          className={`${
            isDropdown ? "flex" : "hidden"
          } items-center gap-2 absolute bg-white px-8 py-4 rounded-b-2xl w-full`}
        >
          <MdLogout /> Sign Out
        </button>
      </div>
    );
  } else
    return (
      <Link
        href={`?showDialog=y&type=signin`}
        className="bg-black text-white px-8 py-4 rounded-2xl"
      >
        Sign in
      </Link>
    );
};

const SignInButtonMobile = ({
  setIsShownMobile,
}: {
  setIsShownMobile: (x: boolean) => void;
}) => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <button
        onClick={() => {
          setIsShownMobile(false);
          signOut();
        }}
        className="self-center bg-white text-black font-[500] px-16 py-2 rounded-xl my-4"
      >
        Sign out
      </button>
    );
  } else
    return (
      <Link
        href={`?showDialog=y&type=signin`}
        onClick={() => {
          setIsShownMobile(false);
        }}
        className="self-center bg-white text-black font-[500] px-16 py-2 rounded-xl my-4"
      >
        Sign in
      </Link>
    );
};

export { SignInButtonDesktop, SignInButtonMobile };
