import Image from "next/image";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="fixed w-screen border border-black bg-white z-50">
      <div className="px-16 flex w-full py-6 text-xl justify-between">
        <Image src="/logo/Logo.svg" alt="logo" width={180} height={180} />

        <div className="flex items-center gap-10">
          <ul className="flex space-x-12">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Product</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>

          <button className="bg-black text-white px-8 py-4 rounded-2xl">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
