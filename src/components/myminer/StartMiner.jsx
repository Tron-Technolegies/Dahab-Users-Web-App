import React from "react";
import { Link } from "react-router-dom";

export default function StartMiner() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center mt-10">
      <img src="/home/my-miners.png" className="md:w-[300px]" />
      <p className="text-lg md:text-3xl">Start Mining Now</p>
      <p className="text-sm md:text-lg text-[#A2A2A2]">
        Create your first miner to start earning BTC.
      </p>
      <Link
        to={"/dashboard/buy"}
        className="bg-[#07EAD3] px-6 py-2 rounded-md text-black"
      >
        Buy Miner
      </Link>
    </div>
  );
}
