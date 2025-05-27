import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function AlertContainer() {
  return (
    <div className="p-3 rounded-lg border border-[#42E8E03B] w-[350px]">
      <div className="bg-[#011532] p-2 rounded-lg flex flex-col gap-9">
        <p className="text-[#D6A045] text-sm">Alert</p>
        <div className="flex gap-3 items-center justify-center ">
          <img src="/home/inactive.png" />
          <div>
            <p>Miner 003</p>
            <p className="text-xs text-[#FD5353DB]">Offline for 2 hrs</p>
          </div>
        </div>
        <Link className="text-sm text-[#07EAD3] flex gap-2 items-center ms-auto">
          Details
          <span>
            <MdKeyboardArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
}
