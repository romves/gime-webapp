"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Montserrat } from "next/font/google";

const monserrat = Montserrat({ subsets: ["latin"] });

const Navbar = () => {
  const [scrolling, setScrolling] = React.useState(false);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [isShownMobile, setIsShownMobile] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setScrolling(true) : setScrolling(false);

      const currentScrollPos = window.scrollY;

      const isScrollingDown =
        window.scrollY > window.innerHeight && currentScrollPos > prevScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(!isScrollingDown || currentScrollPos < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed w-screen ${
        scrolling ? "bg-white shadow-lg" : "bg-transparent"
      } z-50 transition-all duration-200`}
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <div className="h6 px-8 lg:px-16 flex w-full h-[75px] lg:h-[100px] text-xl justify-between">
        <Image src="/logo/Logo.svg" alt="logo" width={120} height={120} />

        <div className="hidden lg:flex items-center gap-10">
          <ul className={`flex space-x-12 ${monserrat.className}`}>
            {navlinks.map((item, index) => (
              <li key={index}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>

          <button className="bg-black text-white px-8 py-4 rounded-2xl">
            Sign in
          </button>
        </div>

        <div className="flex lg:hidden items-center">
          <button
            className="cursor-pointer"
            onClick={() => setIsShownMobile(true)}
          >
            <Image src="/icon/navicon.svg" alt="logo" width={35} height={35} />
          </button>
        </div>
      </div>

      <div
        className={`${
          isShownMobile ? "absolute" : "hidden"
        } w-full top-0 bg-black text-white`}
      >
        <ul>
          <li className="flex justify-between px-8 py-4">
            <Image
              src="/logo/Logo-white.svg"
              alt="logo"
              width={120}
              height={120}
            />
            <button onClick={() => setIsShownMobile(false)}>
              <Image src="/icon/x.svg" alt="logo" width={25} height={25} />
            </button>
          </li>

          {navlinks.map((item, index) => (
            <li key={index} className="border-t-[.1px] border-[#FFFFFF] px-12 py-4 text-center">
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

const navlinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/",
  },
  {
    title: "Product",
    url: "/",
  },
  {
    title: "Contact",
    url: "/",
  },
];
