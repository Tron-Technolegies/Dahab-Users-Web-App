import React from "react";
import { Link } from "react-router-dom";

export default function StartMiner() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center mt-10">
      <img src="/home/my-miners.png" />
      <p className="text-lg">Start Mining Now</p>
      <p className="text-sm text-[#A2A2A2]">
        Create your first miner to start earning BTC.
      </p>
      <Link
        to={"/buy"}
        className="bg-[#07EAD3] px-6 py-1 rounded-md text-black"
      >
        Buy Miner
      </Link>
    </div>
  );
}
