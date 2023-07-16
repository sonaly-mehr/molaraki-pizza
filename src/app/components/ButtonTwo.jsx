import Link from "next/link";
import React from "react";

const ButtonTwo = (props) => {
  return (
    <>
      <Link href="/">
        <button className="border-[1px] border-solid border-primary hover:border-0 bg-transparent hover:bg-[#9AD9EB] hover:text-white text-primary text-sm md:text-base uppercase px-5 md:px-6 py-2 md:py-3 rounded-3xl transition-[0.3s]">
          {props.text}
        </button>
      </Link>
    </>
  );
};

export default ButtonTwo;
