'use client'
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="flex items-center   bg-[#F0F0F0] rounded-[30px] w-[40%] justify-evenly p-2 gap-3 font-satoshi font-light">
      <button onClick={handleDecrement} className="text-4xl  text-black">
        -
      </button>
      <span className="text-2xl ">{count}</span>
      <button onClick={handleIncrement} className="text-3xl  text-black">
        +
      </button>
    </div>
  );
};

export default Counter;
