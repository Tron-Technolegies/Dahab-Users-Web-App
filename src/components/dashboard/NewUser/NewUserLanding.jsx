import React from "react";
import { Link } from "react-router-dom";

export default function NewUserLanding() {
  return (
    <div className="flex md:flex-row flex-col md:justify-around md:gap-10 gap-10 items-center height70">
      <div className=" flex flex-col gap-3 md:ms-10">
        <div>
          <p className="text-[#07EAD3] md:text-2xl text-center md:text-left font-semibold">
            Welcome to <span className="text-white text-2xl">Dahab Mining</span>
          </p>
        </div>
        <h1 className="text-4xl font-semibold text-[#76C6E0] text-center">
          Generate Your First Miner
        </h1>
        <p className=" text-center md:text-left max-w-[400px]">
          Start your mining journey today via our crypto mining app and receive
          the first BTC rewards in just 24 hours
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
