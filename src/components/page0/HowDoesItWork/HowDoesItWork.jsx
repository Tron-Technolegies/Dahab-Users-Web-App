import React from "react";

export default function HowDoesItWork({ oneA }) {
  return (
    <div
      id="working"
      className={`${
        oneA
          ? "z-10 my-10"
          : "px-5 md:px-10 lg:px-[120px]  md:py-5 py-2 my-10 z-10"
      }`}
    >
      <h3
        className={`text-[#76C6E0] text-3xl text-center my-10 ${
          oneA && "hidden"
        }`}
      >
        How does it Work?
      </h3>
      <div
        className={`grid lg:grid-cols-3 gap-2 z-10 ${
          oneA ? "max-w-full" : "max-w-[1000px]"
        }  mx-auto`}
      >
        <div className="bg-[#041637] rounded-md md:h-[320px] h-[400px] flex flex-col relative">
          {/* <div className="absolute inset-0 bg-[#101e39e5] opacity-40 z-10"></div> */}
          <div className="flex flex-col gap-2 pt-5 px-5">
            <p className="text-[21px]">What Is Bitcoin Mining?</p>
            <p className="text-[#9F9F9F] text-sm">
              Bitcoin is earned — not printed. Mining is the process where
              powerful computers solve puzzles to keep the Bitcoin network
              secure. In return, miners are rewarded with new Bitcoin.
            </p>
            <p className="text-[#9F9F9F] text-sm">
              One of the very few ways to earn Bitcoin directly.
            </p>
          </div>

          <div className="overflow-hidden flex items-start justify-end">
            <img
              src="/page0/icon-2.png"
              className="md:rotate-[40deg] object-cover md:w-[300px]"
            />
          </div>
        </div>{" "}
        <div className="lg:col-span-2 bg-[#041637] rounded-md flex justify-between md:h-[320px] h-[400px] relative">
          {/* <div className="absolute inset-0 bg-[#101e39e5] opacity-40 z-10"></div> */}
          <div className="flex flex-col gap-2 p-5">
            <p className="text-[21px]">
              Why Most People Struggle to Start Mining
            </p>
            <p className="text-[#9F9F9F] text-sm">
              If you have tried it before, You know Getting into mining can be
              difficult:
            </p>
            <p className="text-[#9F9F9F] text-sm ms-2">
              <li>
                Hardware is expensive, Finding Reliable supplier even harder
              </li>
              <li>Shipping and customs take weeks</li>
              <li>
                Hosting setup is technical, Electricity and cooling are
                complicated
              </li>
              <li>
                Finding a reliable Hosting Partner, Paying setup, deposit and
                hidden fees
              </li>
              <li>And you still need to monitor everything 24/7</li>
            </p>
            <p className="text-[#9F9F9F] text-sm">
              That’s why most beginners give up before they even begin.
            </p>
          </div>
          <div className="overflow-hidden flex justify-end items-end">
            <img
              src="/page0/icon-4.png"
              className="xl:w-[200px] xl:block hidden object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-2 bg-[#041637] rounded-md relative md:h-[250px] h-[400px] flex sm:flex-row flex-col">
          {/* <div className="absolute inset-0 bg-[#101e39e5] opacity-40 z-10"></div> */}
          <div className="flex flex-col gap-3 p-5">
            <p className="text-[21px]">Dahab Makes It Simple</p>
            <p className="text-[#9F9F9F] text-sm">
              We’ve already done all the heavy lifting. Our Machines are running
              in secure farms — you just choose your digital Dahab Miners and
              start earning from real miners.
            </p>
            <p className="text-[#9F9F9F] text-sm">
              No setup. No shipping. No stress.
            </p>
          </div>
          <div className=" overflow-hidden pt-5 sm:self-end">
            <img
              src="/page0/icon-1.png"
              className="object-cover  md:w-[320px]"
            />
          </div>
        </div>
        <div className="bg-[#041637] rounded-md  sm:h-[250px] h-[300px] flex flex-col relative">
          {/* <div className="absolute inset-0 bg-[#101e39e5] opacity-40 z-10"></div> */}
          <div className="flex flex-col gap-5 pt-5 px-5">
            <p className="text-[21px]">Fully Remote, Fully Yours</p>
            <p className="text-[#9F9F9F] text-sm">
              You’re in control at all times. Track your earnings, switch payout
              modes, and manage everything from your phone — wherever you are.
            </p>
          </div>
          <div className="overflow-hidden flex items-start justify-end">
            <img
              src="/page0/icon-3.png"
              className="object-cover md:w-[200px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
