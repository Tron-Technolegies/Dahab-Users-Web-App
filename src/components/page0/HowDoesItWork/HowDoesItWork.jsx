import React from "react";

export default function HowDoesItWork() {
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] md:py-5 py-2 my-10 z-10">
      <h3 className="text-[#76C6E0] text-3xl text-center my-10">
        How does it Work?
      </h3>
      <div className="grid grid-cols-3 gap-2 z-10 max-w-[1000px] mx-auto">
        <div className="col-span-2 bg-[#041637] rounded-md flex justify-between h-[250px]">
          <div className="flex flex-col justify-between py-10 p-5">
            <p className="text-2xl">
              An all-in-one, ready-to-use solution from DAHAB
            </p>
            <p className="text-[#9F9F9F]">
              the equipment is hosted at our facilities worldwide and ready for
              work
            </p>
          </div>
          <div className=" w-[300px] overflow-hidden pt-5">
            <img
              src="/page0/icon-1.png"
              className="object-cover ml-5 shadow-2xl rotate-z-[10deg]"
            />
          </div>
        </div>
        <div className="bg-[#041637] rounded-md h-[250px] flex flex-col">
          <div className="flex flex-col gap-5 pt-5 px-5">
            <p className="text-2xl">Complete legal transparency</p>
            <p className="text-[#9F9F9F]">
              contract with a Dubai-based company
            </p>
          </div>

          <div className="overflow-hidden">
            <img
              src="/page0/icon-2.png"
              className="rotate-[40deg] object-cover ms-18 w-[300px]"
            />
          </div>
        </div>
        <div className="bg-[#041637] rounded-md  relative h-[250px] flex flex-col">
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
          <div className="overflow-hidden">
            <img
              src="/page0/icon-3.png"
              className="object-cover w-[200px] ms-20"
            />
          </div>
        </div>
        <div className="col-span-2 bg-[#041637] rounded-md relative h-[250px] flex">
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
          <div className="overflow-hidden w-[350px] mt-32">
            <img src="/page0/icon-4.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
