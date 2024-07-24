// components/Star.js
import React from "react";

export const Star = ({ type, size = 18 }: { type: string; size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={
        type === "full"
          ? "#FFCC00"
          : type === "half"
          ? "url(#half-grad)"
          : "#E0E0E0"
      }
    >
      <defs>
        <linearGradient id="half-grad">
          <stop offset="50%" stopColor="#FFCC00" />
          <stop offset="50%" stopColor="#E0E0E0" />
        </linearGradient>
      </defs>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
};

const Rating = ({
  rating,
  maxRating = 5,
  size,
}: {
  rating: number;
  maxRating?: number;
  size?: number;
}) => {
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    let type = "empty";
    if (i <= rating) {
      type = "full";
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      type = "half";
    }
    stars.push(<Star key={i} type={type} size={size} />);
  }

  return (
    <div className="star-rating font-satoshi">
      {stars}
      <span className=" text-sm ml-2 font-thin">
        {rating.toFixed(1)}/{maxRating}
      </span>
      <style jsx>{`
        .star-rating {
          display: flex;
          align-items: center;
        }
        .rating-text {
          margin-left: 8px;
          font-size: 1.2em;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default Rating;
