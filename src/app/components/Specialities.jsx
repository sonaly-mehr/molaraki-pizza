import Image from "next/image";
import React from "react";
import border from "../../assets/img/border.png";
import delivery from "../../assets/img/delivery.png";
import fresh from "../../assets/img/fresh.png";
import taste from "../../assets/img/taste.png";
import ellips from "../../assets/img/Ellipse 4.png";
const Specialities = () => {
  const specialities = [
    {
      id: 1,
      icon: delivery,
      heading: "DELIVERY",
      text: "Enjoy the delicious flavors of Molaraki in the comfort of your home, hotel, or yacht with our seamless delivery service",
    },
    {
      id: 2,
      icon: fresh,
      heading: "ALWAYS FRESH",
      text: "At Molaraki, we pride ourselves on crafting the finest pizza in Mykonos, using only the freshest ingredients and traditional techniques",
    },
    {
      id: 3,
      icon: taste,
      heading: "ALWAYS FRESH",
      text: "Our skilled chefs create mouthwatering, authentic Italian pizzas that will transport your taste buds straight to the heart of Italy, while you soak in the stunning views of the island.",
    },
  ];
  return (
    <div className="width pt-12 md:pt-40 pb-10">
      <div className="w-full m-auto relative">
        <h2 className="heading text-center">OUR SPECIALITIES</h2>
        <Image
          src={border}
          alt=""
          className="headerBorder"
          unoptimized={true}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-20  text-center mt-10 mb-10 md:mt-24">
        {specialities.map((speciality) => (
          <div id={speciality.id} className="text-secondary">
            <div className="flex justify-center">
              <Image
                src={speciality.icon}
                alt=""
                className="w-[150px] md:w-auto"
                unoptimized={true}
              />
            </div>
            <h4 className="font-bold text-2xl md:text-[34px] leading-[41px] mt-3 md:mt-8 mb-2 md:mb-6">
              {speciality.heading}
            </h4>
            <p className="paragraph">{speciality.text}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <div className="relative w-[380px] text-center flex justify-center">
          <Image
            src={ellips}
            alt=""
            className="flex justify-center w-[300px]"
          />
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <h4 className="text-secondary text-3xl md:text-[42px] leading-[51px] w-[350px]">
              DAILY DELIVERY
            </h4>
            <span className="text-white text-3xl md:text-[42px] ">
              11.30-00:00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialities;
