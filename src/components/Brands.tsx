"use client";
import React from "react";
import Image from "next/image";

function Brands() {
  const brands = [
    "/versace.svg",
    "/zara.svg",
    "/gucci.svg",
    "/prada.svg",
    "/calvin.svg",
  ];

  return (
    <div className="bg-black py-5">
      <div className="logos">
        <div className="logo_items flex gap-20">
          {brands.map((brand, index) => (
            <Image
              key={index}
              src={brand}
              width={140}
              height={140}
              alt="logo"
            />
          ))}
          {brands.map((brand, index) => (
            <Image
              key={index}
              src={brand}
              width={140}
              height={140}
              alt="logo"
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .logos {
          overflow: hidden;
          white-space: nowrap;
        }
        .logo_items {
          display: flex;
          animation: 20s slides infinite linear;
        }
        @keyframes slides {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}

export default Brands;
