import React from "react";

export default function HowItWorkCard({ heading, content, number }) {
  return (
    <div className="bg-[#041637] p-5 relative flex flex-col gap-5 justify-center items-center md:w-[350px] w-full h-[250px]">
      <p className="text-center text-[#76C6E0] text-2xl">{heading}</p>
      <p className="text-center">{content}</p>
      <p className="absolute left-0 -top-16 text-9xl opacity-25 text-[#01C3FD]">
        {number}
      </p>
    </div>
  );
}
