import React from "react";

export default function JoinedCard({ heading, content, image, style }) {
  return (
    <div className="border border-[#004DF480]  rounded-lg flex flex-col gap-5 max-w-[350px] h-[400px] overflow-hidden bg-[#050F25]">
      <div className="flex flex-col gap-4 p-5 pt-10">
        <p className="text-2xl">{heading}</p>
        <p className="text-sm text-[#9F9F9F] text-justify">{content}</p>
      </div>
      <div className={`${style}`}>
        <img src={image} className={`object-cover overflow-hidden`} />
      </div>
    </div>
  );
}
