import React from "react";
import Review from "./Review";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Modal from "./Modal";
import reviews from "@/utils/review.json";

interface ReviewType {
  id: number;
  reviews: ReviewDetailsType[];
}
export interface ReviewDetailsType {
  name: string;
  review: number; // Assuming review is a numeric rating
  date: string; // Assuming date is in "Month Day, Year" format
  description: string;
}

function Reviews({ id }: { id: number }) {
   const product = reviews.find((p) => p.id == id);

   if (!product) {
     return <div>No reviews found for this product.</div>;
   }

  const reviewList: ReviewDetailsType[] = product.reviews;
console.log(reviewList ,"fejks");


  
  return (
    <div className="pt-10">
      <h1 className="text-center font-satoshi text-2xl font-medium">
        Rating & Reviews
      </h1>
      <div className="flex items-center justify-between mt-4 ">
        <div className="flex items-center font-satoshi gap-2">
          <h1 className="font-bold text-xl">All Reviews</h1>
          <h1 className="font-light ">({reviewList.length})</h1>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="w-auto h-auto p-4 rounded-full bg-[#F0F0F0]">
                <Image
                  src="/filter.svg"
                  width={25}
                  height={25}
                  alt="filter icon"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Earliest</DropdownMenuItem>
              <DropdownMenuItem>Latest</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Modal />
        </div>
      </div>
      <div className="mt-9 grid lg:grid-cols-3 max-sm:grid-cols-1 md:grid-cols-2 gap-4 w-full flex-shrink flex-wrap  ">
        <Review review={reviewList} />
      </div>
    </div>
  );
}

export default Reviews;
