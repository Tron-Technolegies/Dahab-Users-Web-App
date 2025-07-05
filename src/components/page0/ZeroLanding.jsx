import React from "react";

export default function ZeroLanding() {
  return (
    <div
      //   style={{ backgroundImage: `url(/page0/zerobg.jpg)` }}
      className="relative zero-landing bg-cover bg-center flex flex-col justify-center items-center"
    >
      {/* <div className="absolute inset-0 bg-black opacity-50 z-0"></div> */}
      <div className="max-w-[500px] flex flex-col gap-5 items-center z-10 ">
        <h1 className="text-[#76C6E0] capitalize text-4xl font-semibold text-center">
          Launch Bitcoin mining with an industry leader
        </h1>
        <p className="text-center">
          Your hardware is already in our data center, you’re just several
          clicks and 24 hours away from getting your first coins
        </p>
        <button className="px-4 py-2 rounded-full bg-[#07EAD3] w-fit">
          Get Started Now
        </button>
      </div>
      <img src="/page0/zerobg.jpg" className="w-[700px]" />
    </div>
  );
}
