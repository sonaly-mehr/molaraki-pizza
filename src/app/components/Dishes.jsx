import Image from "next/image";
import React from "react";
import dish from "../../assets/img/dish1.webp";
import dish2 from "../../assets/img/dish2.webp";
import border from "../../assets/img/border.png";
import pizza from "../../assets/img/pizza.png";
import Button from "./Button";

const Dishes = () => {
  return (
    <div className="mb-60 md:mb-80">
      <div className="width relative md:flex gap-3 md:gap-8">
        <div className="hidden md:block basis-1/4">
          <Image
            src={dish}
            alt=""
            className="w-full"
            unoptimized={true}
            priority
          />
        </div>

        <div className="basis-3/4">
          <div className="relative w-fit mb-5">
            <h2 className="text-center md:text-left heading">OUR DISHES</h2>
            <Image
              src={border}
              alt=""
              className="headerBorder"
              unoptimized={true}
              priority
            />
          </div>
          <div className="md:flex gap-3 md:gap-8 md:items-center">
            <div className="basis-[35%]">
              <Image
                src={dish2}
                alt=""
                className="w-full"
                unoptimized={true}
                priority
              />
            </div>
            <div className="basis-[65%]">
              <p className="paragraph mt-8 md:mt-0">
                At Molaraki, we pride ourselves on crafting the finest pizza in
                Mykonos, using only the freshest ingredients and traditional
                techniques. Our skilled chefs create mouthwatering, authentic
                Italian pizzas that will transport your taste buds straight to
                the heart of Italy, while you soak in the stunning views of the
                island. Relish our scrumptious pizza creations, from classic
                Margherita to delectable seafood-inspired toppings, all prepared
                with the same love and dedication we pour into every dish served
                at our restaurant.
              </p>
              <div className="mt-8 md:mt-14">
                <Button />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 -z-10">
          <Image src={pizza} alt="" unoptimized={true} priority />
        </div>
      </div>
    </div>
  );
};

export default Dishes;
