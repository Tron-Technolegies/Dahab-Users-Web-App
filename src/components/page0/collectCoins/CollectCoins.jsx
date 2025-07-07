import React from "react";

export default function CollectCoins() {
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] md:py-5 py-2 my-10">
      <div className="rounded-xl overflow-hidden flex md:flex-row flex-col justify-between items-center max-w-[1000px] mx-auto bg-[#030E21]">
        <div className="overflow-hidden rounded-2xl md:w-auto w-full">
          <img src="/page0/img-1.png" className="overflow-hidden" />
        </div>
        <div className="flex flex-col gap-5 justify-between p-3 md:w-auto w-full">
          <p className="lg:text-3xl text-xl font-semibold">
            You just collect your bitcoins. We do everything else.
          </p>
          <p className="text-[#9F9F9F]">
            If you have any questions, our support team is here to help 24/7
          </p>
          <button className="px-4 py-1.5 border border-white rounded-md w-fit">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
