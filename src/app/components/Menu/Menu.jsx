"use client";
import React from "react";
import border from "../../../assets/img/border.png";
import ButtonTwo from "../ButtonTwo";
import Image from "next/image";
import img from "../../../assets/img/Group.png";
import rotateText from "../../../assets/img/roate-text.png";
import pizza from "../../../assets/img/pizza icon.png";
import Appetizers from "../../../assets/img/mushrrom.png";
import pasta from "../../../assets/img/pasta.png";
import Salads from "../../../assets/img/salad.png";
import Meat from "../../../assets/img/meat.png";
import Mediterranean from "../../../assets/img/mousaka.png";
import Seafood from "../../../assets/img/Layer 1.png";
import Drinks from "../../../assets/img/drinks.png";
import Desserts from "../../../assets/img/sweet.png";
import rightArrow from "../../../assets/img/right-arrow.png";
import leftArrow from "../../../assets/img/left-arrow.png";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pizza from "./Pizza";
import Button from "../Button";

const Menu = () => {
  const [activeTab, setActiveTab] = React.useState("pizza");

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 9,
  //   slidesToScroll: 1,
  // };

  const data = [
    {
      label: "Pizza",
      value: "pizza",
      icon: pizza,
      data: <Pizza />,
    },
    {
      label: "Appetizers",
      value: "appetizers",
      icon: Appetizers,
      data: <Pizza />,
    },
    {
      label: "Pasta",
      value: "pasta",
      icon: pasta,
      data: <Pizza />,
    },
    {
      label: "Salads",
      value: "salads",
      icon: Salads,
      data: <Pizza />,
    },
    {
      label: "Meat",
      value: "meat",
      icon: Meat,
      data: <Pizza />,
    },
    {
      label: "Mediterranean",
      value: "mediterranean",
      icon: Mediterranean,
      data: <Pizza />,
    },
    {
      label: "Seafood",
      value: "seafood",
      icon: Seafood,
      data: <Pizza />,
    },
    {
      label: "Drinks",
      value: "drinks",
      icon: Drinks,
      data: <Pizza />,
    },
    {
      label: "Desserts",
      value: "desserts",
      icon: Desserts,
      data: <Pizza />,
    },
  ];
  return (
    <>
      <div
        className="width pt-12 md:pt-60 pb-8 md:pb-20 overflow-auto"
        id="menu"
      >
        <div className="md:flex gap-32 mb-14">
          <div className="basis-3/5">
            <div className="relative text-center md:text-left w-fit">
              <h2 className="heading text-center md:text-left">OUR MENU</h2>
              <Image
                src={border}
                alt=""
                className="headerBorder"
                unoptimized={true}
              />
            </div>
            <p className="text-black text-xl md:text-[34px] md:leading-[41px] my-5 md:my-10 text-center md:text-left ">
              The menu that will make you enjoy our food again and again
            </p>
            <div className="flex md:block justify-center my-5 md:my-0">
              <ButtonTwo text="VIEW PDF CATALOG" />
            </div>
          </div>

          <div className="flex md:block justify-center">
            <div className="relative w-fit h-fit text-center">
              <Image
                src={rotateText}
                alt=""
                className="w-[150px] md:w-[220px] rotate-text "
              />

              <div className=" translate">
                <Image src={img} alt="" className="" unoptimized={true} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="width">
          <Tabs value={activeTab}>
            <TabsHeader
              className="border-b-8 border-[#F2F2F2] bg-transparent relative pb-5 tabs-header"
              indicatorProps={{
                className: "bg-transparent active-border",
              }}
            >
              {/* <Slider {...settings}> */}
              {data.map(({ label, value, icon }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={`font-montserrat text-sm md:text-xl h-[90px] ${
                    activeTab === value
                      ? "text-white bg-primary rounded-2xl"
                      : ""
                  }`}
                >
                  <div className="flex justify-center mb-2">
                    <Image
                      src={icon && icon}
                      alt=""
                      className=""
                      unoptimized={true}
                    />
                  </div>
                  {label}
                </Tab>
              ))}
              {/* </Slider> */}
            </TabsHeader>
            <TabsBody className="items-body">
              {data.map(({ value, data }) => (
                <TabPanel key={value} value={value} className="">
                  {data}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>

        <div className="hidden md:block md:absolute top-[60px] left-[20px]">
          <Image src={leftArrow} alt="" className="" unoptimized={true} />
        </div>
        <div className="hidden md:block md:absolute top-[60px] right-[20px]">
          <Image src={rightArrow} alt="" className="" unoptimized={true} />
        </div>
      </div>

      <div className="text-center mt-8 md:mt-12 mb-16 md:mb-28">
        <Button />
      </div>
    </>
  );
};

export default Menu;
