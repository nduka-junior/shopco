"use client";
import React from "react";
import { DiscountPercentage } from "./Products";
import Image from "next/image";
import { Product } from "@/app/page";
import Link from "next/link";
import Rating from "./Rating";
import Filter from "./Filter";

function MainProduct({
  products,
  title,
}: {
  products: Product[];
  title: string;
}) {
  return (
    <div>
      <div className="font-integral text-3xl font-bold text-center my-8  flex justify-between">
        <h1>{title}</h1>
        <div className="lg:hidden">
          <Filter product={products} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
        {products.map((product: Product, index: number) => {
          return (
            <Link href={`/shop/${product.id}`}>
              <div key={index} className="flex flex-col  ">
                <div className="w-70 flex items-center justify-center">
                  <Image
                    src={product.mainImage}
                    width={310}
                    height={100}
                    alt="tshirt"
                    className="rounded-xl !w-[310px] h-full object-contain "
                  />
                </div>
                <div className="mt-4 space-y-1 ml-2">
                  <h1 className="text-xl max-sm:text-sm font-semibold">
                    {product.title}
                  </h1>
                  <div>
                    <Rating rating={product.rating} />
                  </div>
                  <div className="flex  w-full bg-red  items-center gap-3 mt-2">
                    <h1 className="font-bold font-satoshi text-lg">
                      ${product.price}
                    </h1>
                    {product.price && (
                      <>
                        <h1 className="text-[#666666] line-through font-satoshi font-medium text-lg">
                          ${product.discountPrice}
                        </h1>
                        <span className="text-[#FF3333] bg-[rgba(255,51,51,0.11)] rounded-3xl py-1 px-2 text-[12px]">
                          <DiscountPercentage
                            originalPrice={product.discountPrice}
                            discountPrice={product.price}
                          />
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 flex items-center flex-col  w-full px-14 cursor-pointer ">
        <span className="border-[1px] py-3 px-10 rounded-3xl cursor-pointer max-sm:w-full text-center">
          View All
        </span>
      </div>
    </div>
  );
}

export default MainProduct;
