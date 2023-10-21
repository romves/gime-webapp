"use client";

import Image from "next/image";
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const ScrollButton = () => {
  return (
    <Link
      to="scrollTarget"
      href="/"
      smooth={true}
      duration={400}
      offset={-50}
    >
      <button
        className="animate-bounce"
        onClick={() => scroll.scrollTo(window.innerHeight)}
      >
        <Image
          src="/icon/scroll.svg"
          alt="scroll-button"
          width={40}
          height={40}
        />
      </button>
    </Link>
  );
};

export default ScrollButton;
