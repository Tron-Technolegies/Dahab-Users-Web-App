import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function CreateContainer() {
  return (
    <div className="p-3 rounded-lg border border-[#42E8E03B] w-[350px]">
      <div className="bg-[#011532] p-2 rounded-lg flex justify-between gap-5">
        <div className="flex flex-col justify-around">
          <p>Buy a unique miner and get daily BTC rewards</p>
          <Link className="text-sm text-[#07EAD3] flex gap-2 items-center">
            Create
            <span>
              <MdKeyboardArrowRight />
            </span>
          </Link>
        </div>
        <img src="/home/miner.png" className="w-32" />
      </div>
    </div>
  );
}
