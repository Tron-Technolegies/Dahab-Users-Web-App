import React from "react";
import { Link } from "react-router-dom";

export default function NewUserLanding() {
  return (
    <div className="flex md:flex-row flex-col md:justify-around md:gap-10 gap-10 items-center height70">
      <div className=" flex flex-col gap-5 md:ms-10">
        <div>
          <p className="text-[#07EAD3] md:text-2xl text-center md:text-left font-semibold">
            Welcome to
          </p>
          <p className="md:text-5xl text-2xl text-[#07EAD3] text-center md:text-left">
            Dahab Miners
          </p>
        </div>

        <p className="md:text-xl text-center md:text-left">
          Easy way to earn BTC every day
        </p>
        <Link
          to={"/buy"}
          className="bg-[#07EAD3] px-5 py-2 w-fit md:self-start self-center text-center rounded-md text-black"
        >
          Start Mining Now
        </Link>
      </div>
      <img src="/home/miner.png" className="w-40 md:w-[300px]" />
    </div>
  );
}
