"use client";
import React, { useState } from "react";
import Image from "next/image";
import Search from "./Search";
import Link from "next/link";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between p-4 bg-white relative w-full">
      <div className="flex !items-center  md:gap-8 justify-between w-full md:w-full md:mb-0 ">
        <div className="flex items-center justify-between  ">
          <button
            className="md:hidden focus:outline-none  "
            onClick={toggleDropdown}
          >
            <Image src="/menu.svg" height={24} width={24} alt="menu icon " />
          </button>
          <div className=" font-bold ml-2 font-integral ">
            <Link href={"/"}>SHOP.CO</Link>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } fixed inset-0 z-50 bg-white md:bg-transparent md:static md:flex md:items-center md:font-satoshi md:justify-center`}
        >
          <button
            onClick={closeDropdown}
            className="text-black font-integral font-bold  p-2 rounded-full absolute top-4 right-4 md:hidden"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5459 14.4541C15.7572 14.6654 15.876 14.952 15.876 15.2509C15.876 15.5498 15.7572 15.8365 15.5459 16.0478C15.3346 16.2592 15.0479 16.3779 14.749 16.3779C14.4501 16.3779 14.1635 16.2592 13.9521 16.0478L7.99996 10.0937L2.0459 16.0459C1.83455 16.2573 1.54791 16.376 1.24902 16.376C0.950136 16.376 0.663491 16.2573 0.452147 16.0459C0.240802 15.8346 0.12207 15.5479 0.12207 15.2491C0.12207 14.9502 0.240803 14.6635 0.452147 14.4522L6.40621 8.5L0.454022 2.54593C0.242677 2.33459 0.123945 2.04795 0.123945 1.74906C0.123945 1.45017 0.242677 1.16353 0.454022 0.952184C0.665366 0.74084 0.95201 0.622107 1.2509 0.622107C1.54978 0.622107 1.83643 0.74084 2.04777 0.952184L7.99996 6.90625L13.954 0.951246C14.1654 0.739902 14.452 0.62117 14.7509 0.62117C15.0498 0.62117 15.3364 0.739902 15.5478 0.951246C15.7591 1.16259 15.8778 1.44924 15.8778 1.74812C15.8778 2.04701 15.7591 2.33365 15.5478 2.545L9.59371 8.5L15.5459 14.4541Z"
                fill="black"
                fillOpacity="0.4"
              />
            </svg>
          </button>
          <ul className="flex flex-col space-y-20 items-center justify-center max-sm:h-full  max-sm:font-integral font-medium text-center md:flex-row md:space-y-0 md:space-x-4">
            <li className="hover:text-gray-700 cursor-pointer">Shop</li>
            <li className="hover:text-gray-700 cursor-pointer">On Sale</li>
            <li className="hover:text-gray-700 cursor-pointer">New Arrivals</li>
            <li className="hover:text-gray-700 cursor-pointer">Brands</li>
          </ul>
        </div>

        <div className="hidden md:flex items-center border bg-[#F0F0F0] border-none p-3 w-full md:w-auto rounded-3xl  md:font-satoshi flex-grow ">
          <Image
            src="/search 1.svg"
            height={20}
            width={20}
            alt="search icon"
            className="mr-2"
          />
          <input
            type="text"
            placeholder="Search for products..."
            className="outline-none flex-1 text-sm bg-transparent  w-full"
          />
        </div>

        {/* {showSearch && (
          <div className="md:hidden items-center border bg-[#F0F0F0] border-none p-2 w-[60%] rounded-3xl  md:font-satoshi flex">
            <Image
              src="/search 1.svg"
              height={20}
              width={20}
              alt="search icon"
              className="mr-2"
            />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none  bg-transparent  w-full text-sm"
            />
          </div>
        )} */}

        <div className="flex items-center justify-between gap-3">
          {/* <div className="md:hidden">
            <button
              onClick={toggleSearch}
              className="flex justify-center items-center"
            >
              <Image
                src="/search.svg"
                height={24}
                width={24}
                alt="search icon"
              />
            </button>
          </div> */}
          <Search />

          <Image src="/cart.svg" height={24} width={24} alt="cart icon" />
          <Image src="/account.svg" height={24} width={24} alt="account icon" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
