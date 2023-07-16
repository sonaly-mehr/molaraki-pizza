import React from "react";
import img from "../../assets/img/Asset 2 1.png";
import Image from "next/image";
import border from "../../assets/img/border.png";

const Map = () => {
  return (
    <>
      <div className="width relative">
        <div className="absolute top-[50px] md:top-[-100px] left-0 -z-10">
          <Image src={img} alt="" />
        </div>

        <div className="flex justify-end mb-10">
          <div className="relative w-fit">
            <h2 className=" heading">Location</h2>
            <div className="flex justify-end">
              <Image
                src={border}
                alt=""
                className="headerBorder"
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-transparent w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.7797058984215!2d25.32479257542709!3d37.46592292989181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a2bf9c2012bd01%3A0xa70659f814ff8b31!2sMolaraki%20Mediterranean%20%26%20Pizza%20Restaurant%20Mykonos%20%7C%20Dine%20in%20%26%20Delivery!5e0!3m2!1sen!2sbd!4v1685287951588!5m2!1sen!2sbd"
          style={{ border: "0" }}
          // allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[300px] md:h-[550px]"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
