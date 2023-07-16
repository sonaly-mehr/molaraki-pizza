"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
import logo from "../../assets/img/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="width flex justify-between items-center py-8">
        <div className="md:ml-[12%]">
          <ul className="hidden md:flex gap-5 uppercase text-primary text-base font-normal relative z-50">
            <li>
              <Link
                href="/#menu"
                className="hover:bg-primary hover:text-white px-3 py-2 rounded-3xl transition-[0.7s]"
              >
                OUR MENU
              </Link>
            </li>
            <li>
              <Link
                href="/#gallery"
                className="hover:bg-primary hover:text-white px-3 py-2 rounded-3xl transition-[0.7s]"
              >
                GALLERY
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="hover:bg-primary hover:text-white px-3 py-2 rounded-3xl transition-[0.7s]"
              >
                CONTACT
              </Link>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu className="cursor-pointer text-primary" size={35} />
          </div>
        </div>

        <div className="flex flex-row-reverse md:flex-row gap-5 md:gap-12 items-center">
          <div className="flex gap-4 text-primary md:text-[22px] items-center">
            <Link href="/">
              <BsFacebook />
            </Link>
            <Link href="/">
              <BsInstagram />
            </Link>
          </div>

          <div>
            <Button />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div className="relative z-50">
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#009DC7] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between mb-5">
                <Link href="/">
                  <Image
                    src={logo}
                    alt=""
                    width="100"
                    height="35"
                    unoptimized={true}
                  />
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-md shadow-gray-800 p-3 cursor-pointer"
                >
                  <AiOutlineClose className="text-white" />
                </div>
              </div>
            </div>
            <div className="pt-14 pb-8 flex flex-col">
              <ul className="uppercase font-bebas text-xl">
                <Link href="/#menu">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-lg text-white font-medium tracking-[0.5px]"
                  >
                    OUR MENU
                  </li>
                </Link>
                <Link href="#gallery">
                  <li
                    onClick={() => setNav(false)}
                    className="py-3 text-lg text-white font-medium tracking-[0.5px]"
                  >
                    GALLERY
                  </li>
                </Link>

                <Link href="#contact">
                  <li
                    onClick={() => setNav(false)}
                    className="py-3 text-lg text-white font-medium tracking-[0.5px]"
                  >
                    CONTACT
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
