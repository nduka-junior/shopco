"use client";
import { Product } from "@/app/page";
import React, { SetStateAction, useState } from "react";

import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

function FilterBig({ product }: { product: Product[] }) {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const ClothTypes: string[] = Array.from(
    new Set(product.map((prod) => prod.type))
  );
  const colorTypes: string[] = Array.from(
    new Set(product.flatMap((prod) => prod.colors))
  );
  const sizeTypes: string[] = Array.from(
    new Set(product.flatMap((prod) => prod.size))
  );

  const handleColorClick = (color: SetStateAction<string>) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (color: SetStateAction<string>) => {
    setSelectedSize(color);
  };
  return (
    <div className="lg:border-[1px] rounded-2xl lg:p-6 h-full">
      <div className="flex justify-between items-center border-b-[1px] pb-4">
        <h1 className="text-2xl font-semibold max-md:hidden">Filter</h1>

        <svg
          width="24"
          height="24"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.9375 7.6875V14.875C9.9375 15.1236 9.83873 15.3621 9.66291 15.5379C9.4871 15.7137 9.24864 15.8125 9 15.8125C8.75136 15.8125 8.5129 15.7137 8.33709 15.5379C8.16127 15.3621 8.0625 15.1236 8.0625 14.875V7.6875C8.0625 7.43886 8.16127 7.2004 8.33709 7.02459C8.5129 6.84877 8.75136 6.75 9 6.75C9.24864 6.75 9.4871 6.84877 9.66291 7.02459C9.83873 7.2004 9.9375 7.43886 9.9375 7.6875ZM14.625 13C14.3764 13 14.1379 13.0988 13.9621 13.2746C13.7863 13.4504 13.6875 13.6889 13.6875 13.9375V14.875C13.6875 15.1236 13.7863 15.3621 13.9621 15.5379C14.1379 15.7137 14.3764 15.8125 14.625 15.8125C14.8736 15.8125 15.1121 15.7137 15.2879 15.5379C15.4637 15.3621 15.5625 15.1236 15.5625 14.875V13.9375C15.5625 13.6889 15.4637 13.4504 15.2879 13.2746C15.1121 13.0988 14.8736 13 14.625 13ZM16.5 9.875H15.5625V1.125C15.5625 0.87636 15.4637 0.637903 15.2879 0.462087C15.1121 0.286272 14.8736 0.1875 14.625 0.1875C14.3764 0.1875 14.1379 0.286272 13.9621 0.462087C13.7863 0.637903 13.6875 0.87636 13.6875 1.125V9.875H12.75C12.5014 9.875 12.2629 9.97377 12.0871 10.1496C11.9113 10.3254 11.8125 10.5639 11.8125 10.8125C11.8125 11.0611 11.9113 11.2996 12.0871 11.4754C12.2629 11.6512 12.5014 11.75 12.75 11.75H16.5C16.7486 11.75 16.9871 11.6512 17.1629 11.4754C17.3387 11.2996 17.4375 11.0611 17.4375 10.8125C17.4375 10.5639 17.3387 10.3254 17.1629 10.1496C16.9871 9.97377 16.7486 9.875 16.5 9.875ZM3.375 10.5C3.12636 10.5 2.8879 10.5988 2.71209 10.7746C2.53627 10.9504 2.4375 11.1889 2.4375 11.4375V14.875C2.4375 15.1236 2.53627 15.3621 2.71209 15.5379C2.8879 15.7137 3.12636 15.8125 3.375 15.8125C3.62364 15.8125 3.8621 15.7137 4.03791 15.5379C4.21373 15.3621 4.3125 15.1236 4.3125 14.875V11.4375C4.3125 11.1889 4.21373 10.9504 4.03791 10.7746C3.8621 10.5988 3.62364 10.5 3.375 10.5ZM5.25 7.375H4.3125V1.125C4.3125 0.87636 4.21373 0.637903 4.03791 0.462087C3.8621 0.286272 3.62364 0.1875 3.375 0.1875C3.12636 0.1875 2.8879 0.286272 2.71209 0.462087C2.53627 0.637903 2.4375 0.87636 2.4375 1.125V7.375H1.5C1.25136 7.375 1.0129 7.47377 0.837087 7.64959C0.661272 7.8254 0.5625 8.06386 0.5625 8.3125C0.5625 8.56114 0.661272 8.7996 0.837087 8.97541C1.0129 9.15123 1.25136 9.25 1.5 9.25H5.25C5.49864 9.25 5.7371 9.15123 5.91291 8.97541C6.08873 8.7996 6.1875 8.56114 6.1875 8.3125C6.1875 8.06386 6.08873 7.8254 5.91291 7.64959C5.7371 7.47377 5.49864 7.375 5.25 7.375ZM10.875 3.625H9.9375V1.125C9.9375 0.87636 9.83873 0.637903 9.66291 0.462087C9.4871 0.286272 9.24864 0.1875 9 0.1875C8.75136 0.1875 8.5129 0.286272 8.33709 0.462087C8.16127 0.637903 8.0625 0.87636 8.0625 1.125V3.625H7.125C6.87636 3.625 6.6379 3.72377 6.46209 3.89959C6.28627 4.0754 6.1875 4.31386 6.1875 4.5625C6.1875 4.81114 6.28627 5.0496 6.46209 5.22541C6.6379 5.40123 6.87636 5.5 7.125 5.5H10.875C11.1236 5.5 11.3621 5.40123 11.5379 5.22541C11.7137 5.0496 11.8125 4.81114 11.8125 4.5625C11.8125 4.31386 11.7137 4.0754 11.5379 3.89959C11.3621 3.72377 11.1236 3.625 10.875 3.625Z"
            fill="#666666"
          />
        </svg>
      </div>

      <div className="flex justify-between items-center font-satoshi">
        <div className="font-satoshi overflow-y-auto">
          <div className="py-5">
            <ul className="flex flex-col gap-2 items-start justify-center  text-lg font-satoshi text-[#666666] border-b-[1px] pb-4">
              {ClothTypes.map((ClothType, index) => {
                return (
                  <li
                    key={index}
                    className="capitalize cursor-pointer hover:opacity-70"
                  >
                    {ClothType}
                  </li>
                );
              })}
            </ul>

            <div>
              <Accordion type="single" defaultValue="item-1" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className=" text-lg text-black font-satoshi hover:no-underline">
                    Price
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-8">
                    <Slider defaultValue={[33, 60]} max={100} step={1} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion type="single" defaultValue="item-1" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className=" text-lg text-black font-satoshi hover:no-underline">
                    Color
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-8">
                    <div className="flex gap-2 pl-3 flex-wrap">
                      {colorTypes.map((color, index) => (
                        <div
                          key={index}
                          onClick={() => handleColorClick(color)}
                          style={{
                            backgroundColor: color,
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            border:
                              selectedColor === color
                                ? "2px solid white"
                                : "2px solid transparent",
                            boxShadow:
                              selectedColor === color
                                ? "0 0 0 2px #000"
                                : "none",
                            cursor: "pointer",
                          }}
                        ></div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion type="single" defaultValue="item-1" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className=" text-lg text-black font-satoshi hover:no-underline">
                    Sizes
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-8">
                    <div className="flex gap-2 pl-3 flex-wrap">
                      {sizeTypes.map((size, index) => {
                        return (
                          <button
                            onClick={() => handleSizeClick(size)}
                            key={index}
                            className={`font-medium  bg-[#F0F0F0] text-[#666666] py-3 px-6 rounded-[30px] border-none text-center font-satoshi `}
                            style={{
                              backgroundColor:
                                selectedSize == size ? "black" : "",
                              color: selectedSize == size ? "white" : "",
                            }}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion
                type="single"
                collapsible
                defaultValue="item-1"
                className="border-none"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className=" text-lg text-black font-satoshi hover:no-underline">
                    Dress Style
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-8">
                    <ul className="flex items-start justify-center font-satoshi text-lg  flex-col gap-1">
                      <Link
                        href={{
                          pathname: "/shop",
                          query: { category: "casual" },
                        }}
                      >
                        <h1 className="cursor-pointer hover:text-gray-300">
                          Casual
                        </h1>
                      </Link>
                      <Link
                        href={{
                          pathname: "/shop",
                          query: { category: "formal" },
                        }}
                      >
                        <h1 className="cursor-pointer hover:text-gray-300">
                          Formal
                        </h1>
                      </Link>
                      <Link
                        href={{
                          pathname: "/shop",
                          query: { category: "party" },
                        }}
                      >
                        <h1 className="cursor-pointer hover:text-gray-300">
                          Party
                        </h1>
                      </Link>
                      <Link
                        href={{ pathname: "/shop", query: { category: "gym" } }}
                      >
                        <h1 className="cursor-pointer hover:text-gray-300">
                          Gym
                        </h1>
                      </Link>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBig;
