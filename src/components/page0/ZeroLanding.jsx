import React from "react";
import { Link } from "react-router-dom";

export default function ZeroLanding() {
  return (
    <div
      //   style={{ backgroundImage: `url(/page0/zerobg.jpg)` }}
      className="relative zero-landing bg-cover bg-center flex flex-col justify-center items-center md:gap-0 gap-28 px-5"
    >
      {/* <div className="absolute inset-0 bg-black opacity-50 z-0"></div> */}
      <div className="flex flex-col gap-5 items-center z-10 ">
        <div>
          <h1 className="text-[#76C6E0] max-w-[780px] capitalize md:text-4xl text-2xl font-semibold text-center inter md:mt-14">
            Start Earning Bitcoin, With Dahab
          </h1>
          <p className="-mt-3 text-center text-[#76C6E0]">
            Your Trusted Mining Partner
          </p>
        </div>
        <p className="text-center md:text-sm text-sm max-w-[600px]">
          No waiting, no setup. Your mining machine is already live in our data
          centers. Just a few clicks and you're already on your way to earning
          your first Bitcoin.
        </p>

        <Link
          to={"/dashboard"}
          className="px-4 py-2 rounded-full bg-[#07EAD3] w-fit btn-shadow hover:scale-105 ease-out duration-150 "
        >
          Start Mining Now
        </Link>
      </div>
      <img
        src="/page0/zero-bg.jpg"
        className="md:w-[700px] md:mt-10  [mask-image:radial-gradient(circle,white_60%,transparent_100%)]
    [-webkit-mask-image:radial-gradient(circle,white_60%,transparent_100%)] opacity-80 backdrop-contrast-125 drop-shadow-[0_0_120px_rgba(0,5,24,0.9)]"
      />
    </div>
  );
}
