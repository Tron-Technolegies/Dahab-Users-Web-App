import React from "react";
import { Link } from "react-router-dom";

export default function ZeroLanding() {
  return (
    <div
      //   style={{ backgroundImage: `url(/page0/zerobg.jpg)` }}
      className="relative zero-landing bg-cover bg-center flex flex-col justify-center items-center md:gap-0 gap-28 px-5"
    >
      {/* <div className="absolute inset-0 bg-black opacity-50 z-0"></div> */}
      <div className="max-w-[600px] flex flex-col gap-5 items-center z-10 ">
        <h1 className="text-[#76C6E0] capitalize md:text-4xl text-2xl font-semibold text-center">
          Start Earning Bitcoin — With Dahab, Your Trusted Mining Partner
        </h1>
        <p className="text-center md:text-base text-sm">
          No waiting, no setup. Your mining machine is already live in our data
          centers. Just a few clicks — and you’re already on your way to earning
          your first Bitcoin
        </p>
        <Link
          to={"/dashboard"}
          className="px-4 py-2 rounded-full bg-[#07EAD3] w-fit"
        >
          Start Mining Now
        </Link>
      </div>
      <img src="/page0/zerobg.jpg" className="md:w-[700px]" />
    </div>
  );
}
