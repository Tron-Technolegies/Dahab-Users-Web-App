import React from "react";
import BenefitCard from "./BenefitCard";

export default function Benefits() {
  return (
    <div
      id="benefits"
      className="px-5 md:px-10 lg:px-[120px] md:py-5 py-2 my-10 flex md:flex-row flex-col gap-10 justify-between items-center max-w-[1200px] mx-auto"
    >
      <div className="flex flex-col gap-5 max-w-[280px]">
        <h3 className="text-3xl text-[#76C6E0] font-semibold md:text-left text-center">
          Benefits
        </h3>
        <p className="md:text-[22px] md:m-0 mb-5 md:text-left text-center">
          Simple, secure, and ready to mine — everything in one place.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 w-full">
        <BenefitCard
          icon={"/page0/icon-8.png"}
          content={"Data Center Infrastructure"}
          sub={
            "Top-tier hosting in Abu Dhabi and Ethiopia with reliable power and cooling."
          }
        />
        <BenefitCard
          icon={"/page0/icon-9.png"}
          content={"Built-in Mining Pool"}
          sub={
            "No pool setup needed. The app itself handles everything — your mining rewards go straight to your account."
          }
        />
        <BenefitCard
          icon={"/page0/icon-10.png"}
          content={"24/7 Support"}
          sub={
            "Questions? Issues? Our team is available round the clock to assist you."
          }
        />
        <BenefitCard
          icon={"/page0/icon-11.png"}
          content={"Instant Miner Marketplace"}
          sub={
            "Pick from a live list of machines — already online and ready to mine the moment you buy."
          }
        />
      </div>
    </div>
  );
}
