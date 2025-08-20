import React, { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";

export default function FieldItem({
  item,
  value,
  formula,
  description,
  style,
  style2,
}) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="w-full flex justify-between relative">
      <p className={`flex gap-2 items-center md:text-base text-sm ${style}`}>
        <span
          className="text-[#0194FE] text-sm cursor-pointer"
          onMouseEnter={() => setShowInfo(true)}
          onMouseLeave={() => setShowInfo(false)}
        >
          <IoInformationCircleOutline />
        </span>
        {item}{" "}
      </p>
      <p className={`md:text-base text-sm ${style2}`}>{value}</p>
      {showInfo && (
        <div
          className="absolute bg-black p-5 rounded-lg z-10 lg:w-[400px] w-[300px] flex flex-col gap-3 items-center"
          onMouseEnter={() => setShowInfo(true)}
          onMouseLeave={() => setShowInfo(false)}
        >
          <p className="text-center">{item}</p>
          <p className="text-sm font-semibold">{formula}</p>
          <div
            className="text-xs text-justify flex flex-col gap-1"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
      )}
    </div>
  );
}
