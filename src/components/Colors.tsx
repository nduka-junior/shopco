import React, { SetStateAction, useState } from "react";

function Colors({colors}:{colors:string[]}) {
  const [selectedColor, setSelectedColor] = useState("");
  // const colors = ["#4A4A4A", "#4D6651", "#2E3145"]; // Example colors

  const handleColorClick = (color: SetStateAction<string>) => {
    setSelectedColor(color);
  };
  return (
    <div className="space-y-2 border-y-[1px] py-7">
      <h1 className="font-satoshi font-light ">Select Colors</h1>
      <div className="flex gap-2">
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => handleColorClick(color)}
            style={{
              backgroundColor: color,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border:
                selectedColor === color
                  ? "2px solid white"
                  : "2px solid transparent",
              boxShadow: selectedColor === color ? "0 0 0 2px #000" : "none",
              cursor: "pointer",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Colors;
