import React from "react";

const Items = (props) => {
  return (
    <div className="bg-grey p-6 md:p-10 rounded-3xl flex flex-col md:flex-row flex-wrap md:gap-x-16 gap-y-10 mt-12">
      {props.data.map((item) => (
        <div className="basis-[30%] flex flex-col gap-2" key={item.id}>
          <h4 className="text-secondary font-bold text-xl md:text-2xl md:text-[26px] leading-8">
            {item.name}
          </h4>
          <span className="text-primary font-bold text-xl md:text-2xl md:text-[26px] leading-8">
            {item.price}
          </span>
          <p className="font-opensans text-secondary text-base">
            {item.descption}
          </p>
          {item.descptionEng ? (
            <p className="font-opensans text-secondary text-base">
              {item.descptionEng}
            </p>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default Items;
