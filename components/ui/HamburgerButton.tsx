import React from "react";

const HamburgerButton = () => {
  return (
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
  );
};

const HamburgerCloseButton = () => {
  return (
    <div className="w-8 h-8 lg:hidden items-center cursor-pointer -mt-8">
      <span
        className={`w-full h-[3px] bg-white inline-flex transform rotate-45 translate-y-3 transition-all ease-in-out duration-300 `}
      ></span>
      <span
        className={`w-full h-[3px] bg-white inline-flex transform -rotate-45 -translate-y-4 transition-all ease-in-out duration-300 `}
      ></span>
    </div>
  );
};

export { HamburgerButton, HamburgerCloseButton };
