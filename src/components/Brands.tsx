"use client";
import React from "react";
import Slider from "react-infinite-logo-slider";
import Image from "next/image";

function Brands() {
  const brands = [
    "versace.svg",
    "zara.svg",
    "gucci.svg",
    "prada.svg",
    "calvin.svg",
  ];
  return (
    <div className="bg-black py-3">
      <Slider
        width="250px"
        duration={30}
        pauseOnHover={true}
        blurBorders={false}
        blurBoderColor={"#fff"}
      >
        {brands.map((brand, index) => {
          return (
            <Slider.Slide key={index}>
              <Image src={brand} width={120} height={120} alt="logo " />
            </Slider.Slide>
          );
        })}
      </Slider>
    </div>
  );
}

export default Brands;
