import React from "react";
import Rating from "./Rating";
import Image from "next/image";
import { ReviewDetailsType } from "./Reviews";

function Review({ review }: { review: ReviewDetailsType[] }) {
  return (
    <>
      {review.map((rev, index) => {
        return (
          <div
            className="font-satoshi p-6 border-[1px] rounded-3xl  space-y-3"
            key={index}
          >
            <Rating rating={rev.review} maxRating={5} size={27} />
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-lg">{rev.name}</h2>
              <Image
                src="/verified.svg"
                width={25}
                height={25}
                alt="verified icon"
              />
            </div>
            <div className="font-light">
              <span>&quot</span>
              {rev.description}
              <span>&quot</span>
            </div>
            <div className="font-medium">
              <h1>
                Posted on <span>{rev.date}</span>
              </h1>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Review;
