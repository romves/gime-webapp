"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import { SignInButtonDesktop, SignInButtonMobile } from "./ui/SignInButton";

const monserrat = Montserrat({ subsets: ["latin"] });

const Navbar = () => {
  const [scrolling, setScrolling] = React.useState(false);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [isShownMobile, setIsShownMobile] = React.useState(false);
  const [isDropdown, setIsDropdown] = React.useState(false);

  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setScrolling(true) : setScrolling(false);

      const currentScrollPos = window.scrollY;

      const isScrollingDown =
        window.scrollY > window.innerHeight / 2 &&
        currentScrollPos > prevScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(!isScrollingDown || currentScrollPos < 100);
      setIsShownMobile(false);
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
      } z-50 transition-all duration-300 drop-shadow-md`}
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <div className="h6 px-6 lg:px-16 flex w-full h-[75px] lg:h-[100px] text-xl justify-between items-center">
        <Link href="/">
          <Image
            src={`/logo/${isShownMobile ? "Logo-white" : "Logo"}.svg`}
            alt="logo"
            width={120}
            height={120}
          />
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          <div className={`flex space-x-12 ${monserrat.className}`}>
            {navlinks.map((item, index) => (
              <ul key={index}>
                {item.title !== "Product" ? (
                  <li>
                    <Link
                      href={item.url}
                      className={`${
                        pathname === item.url ? "text-black" : "text-black/50"
                      }`}
                      onClick={() => setIsDropdown(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ) : (
                  item.children &&
                  item.children.url &&
                  item.children.url.length > 0 && (
                    <li className="relative">
                      <button
                        className={`${
                          /^\/product\/.*$/.test(pathname)
                            ? "text-black"
                            : "text-black/50"
                        } flex items-center gap-2`}
                        onClick={() => setIsDropdown(!isDropdown)}
                      >
                        {item.title}
                        {isDropdown ? (
                          <BsArrowDownCircle className="rotate-180" />
                        ) : (
                          <BsArrowDownCircle />
                        )}
                      </button>
                      <ul
                        className={`${
                          isDropdown ? "block" : "hidden"
                        } absolute -right-3 top-10 bg-black text-white rounded-2xl p-4 space-y-2 bodytext-2 font-[500]`}
                      >
                        {item.children.url.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link
                              href={child.url}
                              onClick={() => setIsDropdown(!isDropdown)}
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )
                )}
              </ul>
            ))}
          </div>

          <SignInButtonDesktop />
        </div>

        {/* Mobile Nav */}
        <div className="flex lg:hidden items-center">
          <button
            aria-label="navmenu-button"
            className="cursor-pointer"
            onClick={() => setIsShownMobile(!isShownMobile)}
          >
            {isShownMobile ? (
              <div className="w-8 h-8 lg:hidden items-center cursor-pointer -mt-8">
                <span
                  className={`w-full h-[3px] bg-white inline-flex transform rotate-45 translate-y-3 transition-all ease-in-out duration-300 `}
                ></span>
                <span
                  className={`w-full h-[3px] bg-white inline-flex transform -rotate-45 -translate-y-4 transition-all ease-in-out duration-300 `}
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
        } w-full bg-black text-white flex flex-col z-50`}
      >
        {navlinks.map((item, index) => (
          <ul key={index}>
            {item.title !== "Product" ? (
              <li key={index} className="px-12 py-4 text-center">
                <Link
                  href={item.url}
                  onClick={() => setIsShownMobile(!isShownMobile)}
                >
                  {item.title}
                </Link>
              </li>
            ) : (
              item.children &&
              item.children.url &&
              item.children.url.length > 0 && (
                <ul>
                  {item.children.url.map((child, childIndex) => (
                    <li key={childIndex} className=" px-12 py-4 text-center">
                      <Link
                        href={child.url}
                        onClick={() => setIsShownMobile(!isShownMobile)}
                      >
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )
            )}
          </ul>
        ))}

        <SignInButtonMobile setIsShownMobile={setIsShownMobile} />
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
    url: "/about",
  },
  {
    title: "Product",
    url: "^/product/[^/]+",
    children: {
      url: [
        {
          title: "Assistant",
          url: "/product/assistant",
        },
        {
          title: "Diagnostic",
          url: "/product/diagnostic",
        },
      ],
    },
  },
  {
    title: "Contact",
    url: "/contact",
  },
];
