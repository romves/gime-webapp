import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { MdClose } from "react-icons/md";

interface Props {
  clickOk: () => void;
  closeDialog: () => void;
}

const SignUp = ({ clickOk, closeDialog }: Props) => {
  const router = useRouter();
  const [data, setData] = React.useState({
    name: "",
    password: "",
    email: "",
    address: "",
    number: "",
  });

  const onSubmit = async (e: any) => {
    e.preventDefault();

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
        router.push("?showDialog=y&type=signin")
      } else {
        console.log(await response.json());
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
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label className="h6">Name</label>
            <input
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              type="text"
              placeholder="Gime Ai"
              className="border rounded-xl border-black py-2 px-4"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="h6">Email</label>
            <input
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              type="email"
              placeholder="gime@aitech.com"
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
          <div className="flex flex-col gap-1">
            <label className="h6">Confirm Password</label>
            <input
              type="password"
              placeholder="re-enter password"
              className="border rounded-xl border-black py-2 px-4"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="h6">Address</label>
            <input
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
              type="text"
              placeholder="Jl KapiWoro"
              className="border rounded-xl border-black py-2 px-4"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="h6">Phone</label>
            <input
              value={data.number}
              onChange={(e) => setData({ ...data, number: e.target.value })}
              type="tel"
              placeholder="089123456789"
              className="border rounded-xl border-black py-2 px-4"
            />
          </div>
          <button
            type="submit"
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
      </form>
    </>
  );
};

export default SignUp;
