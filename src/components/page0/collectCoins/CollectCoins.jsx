import React from "react";
import { Link } from "react-router-dom";

export default function CollectCoins({ oneA }) {
  return (
    <div
      className={`${
        oneA ? "my-10" : "px-5 md:px-10 lg:px-[120px] md:py-5 py-2 my-10"
      } `}
    >
      <div
        className={`rounded-xl overflow-hidden flex md:flex-row flex-col justify-between items-center ${
          oneA ? "max-w-full" : "max-w-[1000px]"
        }  mx-auto bg-[#030E21]`}
      >
        <div className="overflow-hidden rounded-2xl md:w-auto w-full">
          <img src="/page0/img-1.png" className="overflow-hidden" />
        </div>
        <div className="flex flex-col gap-5 justify-between p-3 md:w-auto w-full">
          <p className="lg:text-2xl text-xl font-semibold">
            You don’t need to understand mining — just own it.
            <br />
            We run the machines. You collect the Bitcoin. It’s that simple.
          </p>
          <p className="text-[#9F9F9F]">
            And yes — we’re here 24/7 if you ever need help.
          </p>
          <Link
            to={"/dashboard"}
            className="px-4 py-1.5 border border-white rounded-md w-fit"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
