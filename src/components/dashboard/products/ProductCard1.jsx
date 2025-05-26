import React from "react";

export default function ProductCard1({ image, name, price }) {
  return (
    <div className="p-5 rounded-md border border-[#1F4A69] flex flex-col items-center gap-3">
      <img src={image} className="w-32" />
      <p className="text-center font-semibold">{name}</p>
      <p className="text-[#07EAD3]">AED {price}</p>
    </div>
  );
}
