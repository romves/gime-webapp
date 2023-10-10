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
        scrolling
          ? `${isShownMobile ? "bg-black" : "bg-white"} shadow-l`
          : `${isShownMobile ? "bg-black" : "bg-transparent"}`
      } z-50 transition-all duration-300`}
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <div className="h6 px-8 lg:px-16 flex w-full h-[75px] lg:h-[100px] text-xl justify-between">
        <Image
          src={`/logo/${isShownMobile ? "Logo-white" : "Logo"}.svg`}
          alt="logo"
          width={120}
          height={120}
        />

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
            onClick={() => setIsShownMobile(!isShownMobile)}
          >
            {isShownMobile ? (
              <div className="w-8 h-8 lg:hidden items-center cursor-pointer -mt-8">
                <span
                  className={`w-full h-[4px] bg-white inline-flex transform rotate-45 translate-y-3 transition-all ease-in-out duration-300 `}
                ></span>
                <span
                  className={`w-full h-[4px] bg-white inline-flex transform -rotate-45 -translate-y-4 transition-all ease-in-out duration-300 `}
                ></span>
              </div>
            ) : (
              <div className="w-7 h-7 flex flex-col justify-between items-center lg:hidden text-4xl cursor-pointer overflow-hidden group">
                <span
                  className={`w-full h-[4px] bg-black inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300  `}
                ></span>
                <span
                  className={`w-full h-[4px] bg-black inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300 `}
                ></span>
                <span
                  className={`w-full h-[4px] bg-black inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300 `}
                ></span>
              </div>
            )}
          </button>
        </div>
      </div>

      <div
        className={`${
          isShownMobile ? "absolute" : "hidden"
        } w-full bg-black text-white`}
      >
        <ul>
          {navlinks.map((item, index) => (
            <li
              key={index}
              className="border-t-[.1px] border-[#FFFFFF] px-12 py-4 text-center"
            >
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
