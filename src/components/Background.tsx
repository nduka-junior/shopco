import React from "react";
import Button from "./customButton";

function Background() {
  return (
    <div className="bg-[#F2F0F1] flex max-md:flex-col md:px-12 md:pt-10 h-[70vh] max-sm:h-[90vh]  ">
      <div className="p-6 w-full md:space-y-4 lg:space-y-7 h-full">
        <h1 className="font-integral text-3xl md:text-5xl font-semibold lg:text-[60px]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <h1 className="mt-2 font-satoshi font-light  text-[#666666] lg:text-xl">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </h1>
        <Button
          text={"Shop Now"}
          color={"text-[#FFFFFF]"}
          bgColor={"bg-[#000000]"}
          other={" mt-5 mb-12 w-full md:w-[50%]"}
        ></Button>
        <div className="flex gap-5 items-center max-sm:justify-center max-md:flex-wrap font-satoshi  sm:mt-12 max-[490px]:flex-col w-full ">
          <div className="border-r-[1px] border-gray-300  pr-6  max-[490px]:border-0">
            <h1 className="text-2xl font-semibold  lg:text-4xl">200+</h1>
            <h1 className="font-light text-gray-500">International Brand</h1>
          </div>
          <div className="md:border-r-[1px] border-gray-300 md:pr-6  ">
            <h1 className="font-semibold text-2xl lg:text-4xl">2,000+</h1>
            <h1 className="text-gray-500">High-Quality Products</h1>
          </div>
          <div className=" pr-6">
            <h1 className="font-semibold text-2xl lg:text-4xl ">30,000+</h1>
            <h1 className="text-gray-500">Happy Customers </h1>
          </div>
        </div>
      </div>
      <div className=" bg-[url('/bg-small.png')]   w-full max-md:h-[420px] bg-no-repeat bg-center flex-grow"></div>
    </div>
  );
}

export default Background;
