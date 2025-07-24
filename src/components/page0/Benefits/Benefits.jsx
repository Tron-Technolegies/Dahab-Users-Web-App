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
            "Real miners hosted in our facilities across Abu Dhabi and Ethiopia - with stable power, cooling, and Great uptime."
          }
        />
        <BenefitCard
          icon={"/page0/icon-9.png"}
          content={"Built-in Mining Pool"}
          sub={
            "No external pool setup required. Your Dahab Miners are connected internally - rewards go straight to your dashboard."
          }
        />
        <BenefitCard
          icon={"/page0/icon-10.png"}
          content={"24/7 Support"}
          sub={
            "Have a question? Our team is always here - ready to assist you anytime, anywhere."
          }
        />
        <BenefitCard
          icon={"/page0/icon-11.png"}
          content={"Instant Miner Marketplace"}
          sub={
            "Browse a live list of Dahab Miners - already online and earning. Start mining the moment you buy"
          }
        />
      </div>
    </div>
  );
}
