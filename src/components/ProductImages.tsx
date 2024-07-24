"use client";
import React, { useState } from "react";
import Image from "next/image";

const ProductImages = ({ images }: { images: string[] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center lg:flex-row-reverse lg:gap-5">
      <div className=" max-lg:mb-4  ">
        <Image
          src={mainImage}
          alt="Main Product"
          width={500}
          height={500}
          className="rounded-2xl max-lg:w-screen h-[50vh] object-contain lg:h-full "
        />
      </div>
      <div className=" flex justify-between items-center lg:flex-col  gap-3 ">
        {images.map((image, index) => (
          <div
            key={index}
            className={` rounded-2xl cursor-pointer `}
            onClick={() => setMainImage(image)}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={100}
              height={100}
              className={`w-[210px] h-[160px] lg:h-[190px] rounded-2xl object-cover object-top cursor-pointer ${
                mainImage === image ? "border-[1x] border-black" : ""
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
