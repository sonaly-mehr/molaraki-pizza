import Image from "next/image";
import React from "react";
import dish from "../../assets/img/dish3.webp";
import art from "../../assets/img/art.png";
import art2 from "../../assets/img/Asset 2 1.png";
const About = () => {
  return (
    <div className="bg-primary h-[70vh] relative">
      <div className="width relative">
        <div className="bg-grey md:w-[600px] mt-12 py-6 md:py-16 px-6 absolute top-[30px] md:top-[170px] md:left-0 left-[16px] right-[16px] md:right-0 rounded-2xl">
          <p className="text-sm md:text-base font-normal rounded-xl">
            Nestled in the picturesque Tourlos area, our restaurant is just a
            stone's throw away from the vibrant New Port and Marina of Mykonos,
            where cruise ships, motor yachts, and sailing yachts grace the
            sparkling waters. <br /> <br />
            Our name, Molaraki, is inspired by the local term for "very small
            harbor," paying homage to our roots and the quaint fishing harbor
            that once occupied this beautiful spot. Established in 2009,
            Molaraki is the culmination of a successful four-decade journey in
            the Mykonian tourism industry, with a passion for bringing the
            authentic taste of the island to your plate.
          </p>
        </div>

        <div className="hidden md:block absolute top-[-150px] right-0">
          <Image src={dish} alt="" className="" unoptimized={true} priority />
        </div>

        <div className="absolute top-[-150px] left-0 -z-10">
          <Image src={art2} alt="" unoptimized={true} priority />
        </div>
      </div>

      <div className="absolute bottom-0 right-0">
        <Image src={art} alt="" unoptimized={true} priority />
      </div>
    </div>
  );
};

export default About;
