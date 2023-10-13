"use client";

import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const TextInput = (props: Props) => {
  const { label, id, type, className, ...rest } = props;
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative mt-8">
      <input
        id={id}
        type={type}
        className={`${className} w-full focus:outline-none border-b border-black/50 py-1 focus:border-black transition-colors peer text-[16px] md:text-[24px]`}
        {...rest}
        value={inputValue}
        onChange={handleInputChange}
      />
      <label
        htmlFor={id}
        className={`absolute left-0  ${
          inputValue
            ? "text-[12px] md:text-base -top-4 lg:-top-5 text-black"
            : " md:text-[20px] text-black/50 cursor-text"
        } peer-focus:text-[12px] md:peer-focus:text-base peer-focus:-top-4 lg:peer-focus:-top-5 peer-focus:text-black  font-[500] transition-all`}
      >
        {label}
      </label>
    </div>
  );
};

export default TextInput;
