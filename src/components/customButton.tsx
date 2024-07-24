import React from "react";

function CustomButton({
  text,
  color,
  bgColor,
  other,
  asChild
}: {
  text: string;
  color: string;
  bgColor: string;
    other?: string;
  asChild? :boolean
}) {
  return (
    <button
      className={`font-medium ${color}  ${bgColor} py-3 px-6 rounded-[30px] border-none text-center ${other} font-satoshi `}
    >
      {text}
    </button>
  );
}

export default CustomButton;
