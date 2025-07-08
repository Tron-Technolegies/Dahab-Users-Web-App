import React from "react";

export default function JoinedCard({ heading, content, image, style }) {
  return (
    <div className="border border-[#004DF480]  rounded-lg flex flex-col gap-5 max-w-[320px] h-[400px] overflow-hidden">
      <div className="flex flex-col gap-2 p-5">
        <p className="text-2xl">{heading}</p>
        <p className="text-sm text-[#9F9F9F]">{content}</p>
      </div>
      <div className={`${style}`}>
        <img src={image} className={`object-cover overflow-hidden`} />
      </div>
    </div>
  );
}
