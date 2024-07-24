"use client";
import React from "react";
import ProductImages from "./ProductImages";
import Rating from "./Rating";
import Colors from "./Colors";
import Sizes from "./Sizes";
import Counter from "./Counter";
import Button from "./customButton";
import Reviews from "./Reviews";
import products from "@/utils/products.json";
import { Product } from "@/app/page";
import Products, { DiscountPercentage } from "./Products";
import datas from "@/utils/products.json";
function ProductsDisplay({ id }: { id: number }) {
  const images = [
    "/tshirt/tshirt1_1.jpg",
    "/tshirt/tshirt1_2.jpg",
    "/tshirt/tshirt1_3.jpg",
  ];

  console.log(id, "idddddd");
  const product: Product | undefined = products.find(
    (prod) => prod.id === Number(id)
  );

  if (product) {
    console.log(product);
  } else {
    return <div className="text-2xl text-center m-20">Product notFound</div>;
  }

  const simProducts = datas.filter((data) => {
    return data.category == product.category && data.type == product.type;
  }).filter(d => {return d.id != product.id});
  console.log(simProducts)
  return (
    <div>
      <div className="lg:flex  gap-10">
        <div>
          `<ProductImages images={product.displayImage} />
        </div>
        <div className="mt-7 space-y-5">
          <div>
            <h1 className="font-integral text-2xl mb-1">{product.title}</h1>
            <Rating rating={4} maxRating={5} />
            <div className="flex  w-full bg-red  items-center gap-3 mt-2">
              <h1 className="font-bold font-satoshi text-xl">
                ${product.price}
              </h1>

              <>
                <h1 className="text-[#666666] line-through font-satoshi font-bold text-xl">
                  ${product.discountPrice}
                </h1>
                <span className="text-[#FF3333] bg-[rgba(255,51,51,0.11)] rounded-3xl py-1 px-2 text-[12px] font-satoshi ">
                  <DiscountPercentage
                    originalPrice={product.price}
                    discountPrice={product.discountPrice}
                  />
                </span>
              </>
            </div>

            <h1 className="font-thin leading-13 mt-2">{product.description}</h1>
          </div>
          {product.colors.length > 0 && <Colors colors={product.colors} />}
          {product.size.length > 0 && <Sizes sizes={product.size} />}

          <div className="flex gap-4 items-center">
            <Counter />
            <Button
              text="Add to Cart"
              bgColor="bg-black"
              color="text-white"
              other="w-[60%]"
            />
          </div>
        </div>
      </div>
      <Reviews id={id} />

      {simProducts.length > 0 && (
        <Products products={simProducts} title="YOU MIGHT ALSO LIKE" />
      )}
    </div>
  );
}

export default ProductsDisplay;
