import React from "react";
import BenefitCard from "./BenefitCard";

export default function Benefits() {
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] md:py-5 py-2 my-10 flex md:flex-row flex-col justify-around items-center">
      <div className="flex flex-col  gap-5">
        <h3 className="text-3xl text-[#76C6E0] font-semibold md:text-left text-center">
          Benefits
        </h3>
        <p className="md:text-xl md:m-0 mb-5 md:text-left text-center">
          Make mining simple with our all-in-one solution
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <BenefitCard
          icon={"/page0/icon-8.png"}
          content={"data center infrastructure"}
        />
        <BenefitCard icon={"/page0/icon-9.png"} content={"Mining Pool"} />
        <BenefitCard icon={"/page0/icon-10.png"} content={"24/7 Support"} />
        <BenefitCard icon={"/page0/icon-11.png"} content={"Secure Wallets"} />
      </div>
    </div>
  );
}
