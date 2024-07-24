import React, { SetStateAction, useState } from "react";
import Button from "./customButton";

function Sizes({sizes} :{sizes:string[]}) {
  const [selectedSize, setSelectedSize] = useState("");
  // const sizes = ["Small", "Medium", "Large", "X-Large"];

  const handleSizeClick = (color: SetStateAction<string>) => {
    setSelectedSize(color);
  };
  return (
    <div className="space-y-2 border-b-[1px] py-7">
      <h1 className="font-satoshi font-light ">Select Sizes</h1>
      <div className="flex gap-3">
        {sizes.map((size, index) => {
          return (
            <button
              onClick={() => handleSizeClick(size)}
              key={index}
              className={`font-medium  bg-[#F0F0F0] text-[#666666] py-3 px-6 rounded-[30px] border-none text-center font-satoshi `}
              style={{
                backgroundColor: selectedSize == size ? "black" : "",
                color: selectedSize == size ? "white" : "",
              }}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Sizes;
