import React from "react";

export default function LiveCard({ data }) {
  return (
    <div className="border border-[#07EAD3] p-5 rounded-md max-w-[200px] flex flex-col gap-3 overflow-visible">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src={data?.image} className="w-10 " />
          <p className="text-sm">{data?.symbol?.toUpperCase()}</p>
        </div>
        <p className="text-[10px] bg-[#B6B6B6] p-1 rounded-md text-black h-fit">
          {data?.name}
        </p>
      </div>

      <div className="flex justify-between">
        <p className="text-[#07EAD3]">{"Value"}</p>
        <p className="font-bold">{data?.current_price} USD</p>
      </div>
      <div className="flex justify-between">
        <p className="text-[#07EAD3]">24h</p>
        <p>{data?.price_change_percentage_24h} %</p>
      </div>
    </div>
  );
}
