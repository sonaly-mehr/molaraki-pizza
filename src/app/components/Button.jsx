import Link from "next/link";
import React from "react";

const Button = () => {
  return (
    <>
      <Link href="/">
        <button className="bg-primary hover:bg-[#9AD9EB] text-white text-sm md:text-base uppercase px-5 md:px-6 py-2 md:py-3 rounded-3xl transition-[0.3s]">
          ONLINE ORDER
        </button>
      </Link>
    </>
  );
};

export default Button;
