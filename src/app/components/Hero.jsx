import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import logo from "../../assets/img/logo.png";
import Button from "./Button";
import ButtonTwo from "./ButtonTwo";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import heroLogo from "../../assets/img/hero-logo.png";
import heroImg from "../../assets/img/hero-img.png";

const Hero = () => {
  return (
    <div className="hero-gradient-bg md:h-[136vh] relative pb-14 md:pb-0">
      <Navbar />

      <div className="hidden md:block absolute h-auto top-0 left-0 bottom-0">
        <Image src={heroLogo} alt="" unoptimized={true} />
      </div>

      <div className="width relative flex flex-col hero-content justify-end">
        <div className="md:w-[32%] md:ml-[150px] mt-12 md:mt-[110px]">
          <Image
            src={logo}
            alt=""
            className="w-[280px] md:w-auto"
            unoptimized={true}
          />

          <div>
            <p className="text-secondary text-[26px] leading-[36px] mt-12 md:mt-24">
              Welcome to{" "}
              <span className="text-primary font-bold">PIZZA MYKONOS</span>, the
              ultimate destination for{" "}
              <span className="text-primary font-bold">
                mouthwatering pizza
              </span>{" "}
              in Mykonos!
            </p>

            <div className="flex gap-5 my-12">
              <Button />
              <ButtonTwo text="VIEW OUR MENU" />
            </div>

            <div className="flex flex-col gap-8">
              <Link
                href="/"
                className="text-base text-black flex gap-3 items-center"
              >
                <BsWhatsapp className="text-primary text-xl" />
                <span>
                  {" "}
                  What’s up:{" "}
                  <span className="text-primary font-bold">+30 6980671809</span>
                </span>
              </Link>
              <Link
                href="/"
                className="text-base text-black flex gap-3 items-center"
              >
                <FaPhoneAlt className="text-primary text-xl" />
                <span>
                  {" "}
                  Phone:
                  <span className="text-primary font-bold">
                    +30 22890 25181{" "}
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute top-[130px] right-0">
        <Image src={heroImg} alt="" className="w-full" unoptimized={true} />
      </div>
    </div>
  );
};

export default Hero;
