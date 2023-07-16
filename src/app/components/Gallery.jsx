"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dish1 from "../../assets/img/dish4.webp";
import dish2 from "../../assets/img/dish5.webp";
import dish3 from "../../assets/img/dish6.webp";
import dish4 from "../../assets/img/dish7.webp";
import border from "../../assets/img/border.png";
import Image from "next/image";
import leftArro from "../../assets/img/left-arrow.png";
import rightArro from "../../assets/img/right-arrow.png";
import bg from "../../assets/img/Frame 29.png";

export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Image
        src={leftArro}
        alt=""
        style={{
          ...style,
        }}
        className=""
        unoptimized={true}
        priority
      />
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Image
        src={rightArro}
        alt=""
        style={{
          ...style,
        }}
        className=""
      />
    </div>
  );
}

const Gallery = () => {
  const gallary = [dish1, dish2, dish3, dish4];

  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="relative gallery-container" id="gallery">
      <div className="width">
        <div className="w-full m-auto relative">
          <h2 className="heading text-center">Our Gallery</h2>
          <Image
            src={border}
            alt=""
            className="headerBorder"
            unoptimized={true}
          />
        </div>

        <div className="my-10 md:my-24">
          <Slider {...settings}>
            {gallary.map((img, index) => (
              <div
                className={
                  index === slideIndex ? "slide slide-active" : "slide"
                }
                key={img}
              >
                <Image
                  src={img}
                  alt=""
                  unoptimized={true}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="absolute top-0 md:top-[-60px] right-0 -z-10">
        <Image src={bg} alt="" className="w-[150px] md:w-auto" />
      </div>
    </div>
  );
};

export default Gallery;
