import React from "react";
import Image from "next/image";
import img from "../../assets/img/FP_04788 1.webp";
import border from "../../assets/img/border.png";
import Button from "./Button";
import ButtonTwo from "./ButtonTwo";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="width md:flex justify-between items-center py-20"
      id="contact"
    >
      <div className="hidden md:block basis-2/5">
        <Image src={img} alt="" unoptimized={true} priority />
      </div>

      <div className="basis-3/5">
        <p className="hidden md:block paragraph mb-10">
          If you're searching for the best "Pizza Mykonos" experience or seeking
          a reliable delivery service in the area, look no further than
          Molaraki. Join us for a memorable culinary adventure and indulge in
          the taste of Mykonos that awaits you at our charming harbor-side
          restaurant.
        </p>
        <div className="bg-grey rounded-lg py-10 px-10 md:relative left-[-25%] md:w-[125%] md:pl-[15%]">
          <div className="relative w-fit">
            <h2 className="text-left heading">Contact us</h2>
            <Image
              src={border}
              alt=""
              className="headerBorder"
              unoptimized={true}
              priority
            />
          </div>

          <div className="flex justify-between items-center md:items-start gap-10">
            <p className="paragraph pt-5 pb-3 w-4/5">
              You can order online or via telephone. We will deliver your food
              whenever you are. <br /> However you can still visit us to our
              store located at Mykonos Port(Tourlos)
            </p>
            <div className="flex flex-col gap-6 text-primary text-[22px]">
              <Link href="/">
                <BsFacebook />
              </Link>
              <Link href="/">
                <BsInstagram />
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-center md:justify-normal gap-5 my-5">
            <Button />
            <ButtonTwo text="PHONE ORDER" />
          </div>

          <div className="flex flex-col md:flex-row gap-8 mt-8">
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
                <span className="text-primary font-bold">+30 22890 25181 </span>
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-10">
          <h4 className="font-normal text-black text-xl md:text-[26px] leading-8">
            DAILY <span className="font-bold">DELIVERY</span> AND SCHEDULE
          </h4>
          <span className="text-primary text-3xl md:text-[42px] leading-[51px] font-bold ">
            11.30 - 00:00
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
