import React from "react";
import { BsCartPlus } from "react-icons/bs";

export default function BuyCard({
  hashRate,
  power,
  stock,
  image,
  name,
  price,
}) {
  return (
    <div
      className={`p-5 rounded-2xl border border-[#76C6E038] flex flex-col gap-3 items-center w-full ${
        stock > 0 ? "bg-[#011532]" : "bg-gray-700"
      }`}
    >
      <div className="flex justify-between items-start w-full">
        <div className="flex flex-col gap-1">
          <p className="flex gap-2 items-center">
            <img src={"/my-miners/i2.png"} className="w-2" />
            {hashRate}
          </p>
          <p className="flex gap-2 items-center">
            <img src={"/my-miners/i1.png"} className="w-2" />
            {power}
          </p>
        </div>
        <p>
          {stock > 0 ? (
            <span className="text-[#07EAD3]">In Stock</span>
          ) : (
            <span className="text-red-500">Out Of Stock</span>
          )}
        </p>
      </div>
      <img src={image} className="w-32 object-cover" />
      <div className="flex flex-col gap-1 items-center">
        <p>{name}</p>
        <p className="text-[#07EAD3]">AED {price}</p>
      </div>
      {stock > 0 ? (
        <div className="flex gap-2 items-center w-full">
          <button className="bg-[#0194FE] w-full py-2 rounded-md cursor-pointer">
            Buy Now
          </button>
          <button className="p-2 bg-[#42E8E0] rounded-md text-2xl text-black cursor-pointer">
            <BsCartPlus />
          </button>
        </div>
      ) : (
        <button className="bg-[#198FA6] w-full py-2 rounded-md cursor-pointer">
          Join Waitlist
        </button>
      )}
    </div>
  );
}
