import Image from "next/image";
import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import logo from "../../assets/img/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-grey pt-10 md:pt-16">
      <div className="w-full flex md:block justify-center">
        <div className="width flex flex-col md:flex-row justify-center md:justify-between pb-10 gap-10 md:gap-0 ">
          <div className="text-center md:text-left">
            <span className="mb-3 md:mb-5 text-base md:text-xl text-secondary block">
              Give us a like
            </span>
            <div className="flex gap-4 text-primary text-[22px] items-center justify-center md:justify-normal">
              <Link href="/">
                <BsFacebook />
              </Link>
              <Link href="/">
                <BsInstagram />
              </Link>
            </div>
          </div>

          <div className="flex md:block justify-center">
            <Image
              src={logo}
              width={220}
              alt=""
              unoptimized={true}
              className="w-[160px] md:w-[200px]"
            />
          </div>

          <div className="text-center">
            <span className="text-base md:text-xl text-secondary block mb-3 md:text-right">
              Contact info
            </span>
            <p className="text-base md:text-xl text-secondary w-[250px] md:text-right">
              +30 22890 25181 molarakimyk@gmail.com Mykonos Port (Tourlos)
              84600, Greece
            </p>
          </div>
        </div>
      </div>

      <div className="text-secondary text-sm md:text-xl py-3 border-t-[1px] border-solid border-primary text-center">
        <p>
          © 2023 Molaraki Mykonos Pizza. Website By{" "}
          <span className="text-primary">Webee.gr</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
