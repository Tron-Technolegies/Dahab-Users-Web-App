import React from "react";
import { Link } from "react-router-dom";

export default function NewUserLanding() {
  return (
    <div className="flex justify-center gap-10 items-center height70">
      <div className="w-[300px] flex flex-col gap-3">
        <p className="text-[#07EAD3] text-2xl font-semibold">
          Welcome to Dahab Miners
        </p>
        <p>Easy way to earn BTC every day</p>
        <Link
          to={"/buy"}
          className="bg-[#07EAD3] px-5 py-1 text-center rounded-md text-black"
        >
          Start Mining Now
        </Link>
      </div>
      <img src="/home/miner.png" className="w-40" />
    </div>
  );
}
