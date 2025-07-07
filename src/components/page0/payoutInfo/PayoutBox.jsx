import { motion } from "framer-motion";
import React from "react";
import { FaCircle } from "react-icons/fa";

export default function PayoutBox({ heading, list, recommended }) {
  return (
    <div className="border border-[#76C6E0] lg:p-10 p-3 rounded-lg flex flex-col gap-5 relative">
      {recommended && (
        <p className="absolute right-5 top-5 bg-[#2558B0] py-1 px-2 rounded-full text-sm">
          Recommended
        </p>
      )}
      <p className="text-[#07EAD3] text-2xl mt-10">{heading}</p>
      <div className="ms-2 flex flex-col gap-2">
        {list?.map((x) => (
          <p key={x} className="flex gap-2 items-center">
            <span className="text-[8px]">
              <FaCircle />
            </span>
            <span>{x}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
