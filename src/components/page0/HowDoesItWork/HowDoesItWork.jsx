import React from "react";

export default function HowDoesItWork() {
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] md:py-5 py-2 my-10 z-10">
      <h3 className="text-[#76C6E0] text-3xl text-center my-10">
        How does it Work?
      </h3>
      <div className="grid lg:grid-cols-3 gap-2 z-10 max-w-[1000px] mx-auto">
        <div className="md:col-span-2 bg-[#041637] rounded-md flex justify-between sm:h-[250px] h-[300px] relative">
          <div className="absolute inset-0 bg-[#101e39e5] opacity-40 z-10"></div>
          <div className="flex flex-col justify-between py-10 p-5">
            <p className="text-2xl">
              An all-in-one, ready-to-use solution from DAHAB
            </p>
            <p className="text-[#9F9F9F]">
              the equipment is hosted at our facilities worldwide and ready for
              work
            </p>
          </div>
          <div className=" overflow-hidden pt-5">
            <img
              src="/page0/icon-1.png"
              className="object-cover  md:w-[300px]"
            />
          </div>
        </div>
        <div className="bg-[#041637] rounded-md sm:h-[250px] h-[300px] flex flex-col relative">
          <div className="absolute inset-0 bg-[#101e39e5] opacity-40 z-10"></div>
          <div className="flex flex-col gap-5 pt-5 px-5">
            <p className="text-2xl">Complete legal transparency</p>
            <p className="text-[#9F9F9F]">
              contract with a Dubai-based company
            </p>
          </div>

          <div className="overflow-hidden flex items-start justify-end">
            <img
              src="/page0/icon-2.png"
              className="md:rotate-[40deg] object-cover md:w-[300px]"
            />
          </div>
        </div>
        <div className="bg-[#041637] rounded-md  sm:h-[250px] h-[300px] flex flex-col relative">
          <div className="absolute inset-0 bg-[#101e39e5] opacity-40 z-10"></div>
          <div className="flex flex-col gap-5 pt-5 px-5">
            <p className="text-2xl">
              We help you start mining quickly and take care of all the
              technical details
            </p>
            <p className="text-[#9F9F9F]">
              you don’t need to worry about shipping, customs clearance, setup,
              or maintenance
            </p>
          </div>
          <div className="overflow-hidden flex items-start justify-end">
            <img
              src="/page0/icon-3.png"
              className="object-cover md:w-[200px] "
            />
          </div>
        </div>
        <div className="md:col-span-2 bg-[#041637] rounded-md relative sm:h-[250px] h-[300px] flex ">
          <div className="absolute inset-0 bg-[#101e39e5] opacity-40 z-10"></div>
          <div className="flex flex-col justify-around p-5">
            <p className="text-2xl">
              Monitoring your mining is simple and fully remote
            </p>
            <p className="text-[#9F9F9F]">
              you can live anywhere while mining on a hosting facility on the
              other side of the globe. All you need is a smartphone or laptop
              with access to your account to track your income
            </p>
          </div>
          <div className="overflow-hidden flex justify-end items-end">
            <img
              src="/page0/icon-4.png"
              className="md:w-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
