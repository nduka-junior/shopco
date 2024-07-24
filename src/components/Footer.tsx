import React from "react";
import CustomButton from "./customButton";
import Image from "next/image";
function Footer() {
  return (
    <div>
      <div className="p-5  relative top-[150px]">
        <div className="bg-black text-white p-10 rounded-3xl flex max-md:flex-col space-y-6 lg:space-x-10">
          <h1 className="font-integral text-3xl w-full lg:text-[4xl]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
          <div className="space-y-4  w-full flex flex-col items-center justify-center">
            <div className="flex items-center border bg-white border-none w-full rounded-3xl  md:font-satoshi p-3  font-thin  ">
              <Image
                src="/mail.svg"
                height={18}
                width={18}
                alt="search icon"
                className="mr-4"
              />
              <input
                type="text"
                placeholder="Search for products..."
                className="outline-none flex-1 bg-transparent  w-full"
              />
            </div>

            <CustomButton
              text="Subscribe to Newsletter"
              color="text-black"
              bgColor="bg-white"
              other="w-full"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F0F0F0] p-10 space-y-8 lg:flex justify-between items-center gap-20 pt-[160px]">
        <div className="space-y-3">
          <h1 className=" font-bold font-integral text-2xl ">SHOP.CO</h1>
          <h1 className="font-satoshi font-thin pt-3">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </h1>
          <div className="flex gap-2 pt-12">
            <Image src="/4.svg" width={33} height={33} alt="icon" />
            <Image src="/3.svg" width={33} height={33} alt="icon" />
            <Image src="/2.svg" width={33} height={33} alt="icon" />
            <Image src="/1.svg" width={33} height={33} alt="icon" />
          </div>
        </div>

        <div className="grid grid-cols-4 max-sm:grid-cols-2 max-md:grid-cols-3 gap-10 justify-between items-center w-full ">
          <div>
            <h1 className="font-medium mb-3 tracking-widest ">COMPANY</h1>
            <ul className="font-light flex flex-col gap-2">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h1 className="font-medium mb-3 tracking-widest ">HELP</h1>
            <ul className="font-light flex flex-col gap-2">
              <li>Customer Supoort</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h1 className="font-medium mb-3 tracking-widest ">FAQ</h1>
            <ul className="font-light flex flex-col gap-2">
              <li>Account</li>
              <li>Manange Deliveries</li>
              <li>Orders</li>
              <li>Payment</li>
            </ul>
          </div>
          <div>
            <h1 className="font-medium mb-3 tracking-widest  ">RESOURCES</h1>
            <ul className="font-light flex flex-col gap-2">
              <li>Free ebooks</li>
              <li>Developemt Tutorials</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
        {/*  */}
      </div>
      <div className="bg-[#F0F0F0] p-10 space-y-6 flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        <h1 className="font-satoshi text-lg ">
          Shop.co © 2000-2023, All Rights Reserved
        </h1>
        <div className="flex gap-3 items-center justify center">
          <Image src="/Badge.svg" height={70} width={70} alt="icon" />
          <Image src="/Badge-1.svg" height={70} width={70} alt="icon" />
          <Image src="/Badge-2.svg" height={70} width={70} alt="icon" />
          <Image src="/Badge-3.svg" height={70} width={70} alt="icon" />
          <Image src="/Badge-4.svg" height={70} width={70} alt="icon" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
