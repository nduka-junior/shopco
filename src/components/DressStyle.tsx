import Link from "next/link";
import React from "react";

function DressStyle() {
  return (
    <div className="p-10 bg-[#F0F0F0] rounded-[30px] mx-4 mt-10">
      <h1 className="font-integral text-4xl text-center mb-14 font-semibold">
        Browse by dress style
      </h1>
      <div className="grid gap-5  md:grid-cols-3">
        <Link href={{ pathname: "/shop", query: { category: "casual" } }}>
          <div className='bg-[url("/tshirt/tshirt3_1.jpg")] sm:bg-[url("/tshirt/tshirt3_1.jpg")] bg-no-repeat h-[250px] font-satoshi rounded-[28px] p-7 bg-cover'>
            <h1 className="font-semibold text-3xl">Casual</h1>
          </div>
        </Link>
        <Link href={{ pathname: "/shop", query: { category: "formal" } }}>
          <div className='bg-[url("/pants/pants2_1.jpg")] sm:bg-[url("/pants/pants2_1.jpg")] bg-no-repeat h-[250px] font-satoshi rounded-[28px] p-7 bg-cover md:col-span-2'>
            <h1 className="font-semibold text-3xl">Formal</h1>
          </div>
        </Link>
        <Link href={{ pathname: "/shop", query: { category: "party" } }}>
          <div className='bg-[url("/partysm.png")] sm:bg-[url("/party.png")] bg-no-repeat h-[250px] font-satoshi rounded-[28px] p-7 bg-cover md:col-span-2'>
            <h1 className="font-semibold text-3xl">Party</h1>
          </div>
        </Link>
        <Link href={{ pathname: "/shop", query: { category: "gym" } }}>
          <div className='bg-[url("/gym/gym2_1.jpg")] sm:bg-[url("/gym/gym2_1.jpg")] bg-no-repeat h-[250px] font-satoshi rounded-[28px] p-7 bg-cover'>
            <h1 className="font-semibold text-3xl">Gym</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DressStyle;
