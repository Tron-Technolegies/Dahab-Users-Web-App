import React from "react";

export default function HowDoesItWork({ oneA }) {
  return (
    <div
      className={`${
        oneA
          ? "z-10 my-10"
          : "px-5 md:px-10 lg:px-[120px] xl:px-[180px] md:py-5 py-2 my-10 z-10"
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
          <div className="absolute inset-0 bg-[#101e39e5] opacity-40 z-10"></div>
          <div className="flex flex-col gap-2 pt-5 px-5">
            <p className="text-2xl">What is Bitcoin Mining, Really?</p>
            <p className="text-[#9F9F9F] text-sm">
              Bitcoin mining is the process of using powerful computers to solve
              complex problems that secure the Bitcoin network.
            </p>
            <p className="text-[#9F9F9F] text-sm">
              As a reward, miners earn newly generated Bitcoin — which makes
              mining one of the few ways to earn Bitcoin directly.
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
          <div className="absolute inset-0 bg-[#101e39e5] opacity-40 z-10"></div>
          <div className="flex flex-col gap-2 p-5">
            <p className="text-2xl">
              What Do You Usually Need to Start Mining?
            </p>
            <p className="text-[#9F9F9F] text-sm">
              If you’ve ever tried mining on your own, you know how exhausting
              it can be:
            </p>
            <p className="text-[#9F9F9F] text-sm ms-2">
              <li>Searching for reliable hardware sellers</li>
              <li>Waiting weeks for delivery and customs clearance</li>
              <li>Finding a secure location with enough power</li>
              <li>
                Paying upfront for setup, hosting, deposits, and hidden fees
              </li>
              <li>
                Dealing with overheating, firmware issues, and constant
                monitoring
              </li>
            </p>
            <p className="text-[#9F9F9F] text-sm">
              And after all that? You're still not sure if your machine is even
              earning properly..No wonder most people give up before they even
              get started.
            </p>
          </div>
          <div className="overflow-hidden flex justify-end items-end">
            <img
              src="/page0/icon-4.png"
              className="xl:w-[280px] xl:block hidden object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-2 bg-[#041637] rounded-md relative md:h-[250px] h-[400px] flex sm:flex-row flex-col">
          <div className="absolute inset-0 bg-[#101e39e5] opacity-40 z-10"></div>
          <div className="flex flex-col gap-3 p-5">
            <p className="text-2xl">Dahab Makes It Easy</p>
            <p className="text-[#9F9F9F] text-sm">
              At Dahab, we’ve already done all the hard work. The machines are
              live in our data centers — just pick one, and it starts mining for
              you in minutes.
            </p>
            <p className="text-[#9F9F9F] text-sm">
              No shipping. No setup. No waiting.
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
          <div className="absolute inset-0 bg-[#101e39e5] opacity-40 z-10"></div>
          <div className="flex flex-col gap-5 pt-5 px-5">
            <p className="text-2xl">Fully Remote, Fully Yours</p>
            <p className="text-[#9F9F9F] text-sm">
              Once your machine is active, you can monitor everything from your
              phone or laptop. Track earnings, choose payout modes, and stay in
              control — wherever you are.
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
