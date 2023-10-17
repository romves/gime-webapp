import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import { MdClose } from "react-icons/md";

interface Props {
  clickOk: () => void;
  closeDialog: () => void;
}

const SignIn = ({ clickOk, closeDialog }: Props) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.status == 200) {
        closeDialog();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="h4">Sign In</h1>
        <button onClick={closeDialog}><MdClose /></button>
      </div>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label className="h6">Email</label>
            <input
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              type="text"
              placeholder="user@gimeai.com"
              className="border rounded-xl border-black py-2 px-4"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="h6">Password</label>
            <input
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              type="password"
              placeholder="password"
              className="border rounded-xl border-black py-2 px-4"
            />
          </div>
          <a href="s" className="self-end">
            forgot password
          </a>
          <button type="submit" className="bg-black text-white rounded-xl py-3">
            Sign in
          </button>
          <Link
            href="?showDialog=y&type=signup"
            className="bg-[#EDEDED] text-black rounded-xl py-3 text-center"
          >
            Dont have account?
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignIn;
