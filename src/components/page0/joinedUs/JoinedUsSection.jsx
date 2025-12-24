import React from "react";
import JoinedCard from "./JoinedCard";

export default function JoinedUsSection() {
  return (
    <div
      id="customers"
      className="px-5 md:px-10 lg:px-[120px] md:py-5 py-2 my-10"
    >
      <h3 className="text-3xl text-[#76C6E0] max-w-[360px] mx-auto font-semibold text-center">
        Who Already Joined Us
      </h3>
      <div className="grid sm:grid-cols-2 gap-5 gap-y-14 my-10 justify-items-center-safe max-w-[800px] mx-auto">
        <JoinedCard
          heading={"First-Time Miners"}
          content={
            "Beginners entering Bitcoin for the first time, Starting with just one Dahab Miner and learning as they go."
          }
          image={"/page0/img-2.png"}
          style={"w-[150px] overflow-hidden self-center mt-5"}
        />
        <JoinedCard
          heading={"Businesses & Brands"}
          content={
            "Adding Bitcoin mining as a revenue stream or reserve asset. Dahab helps structure scalable, low-maintenance plans."
          }
          image={"/page0/img-3.png"}
          style={"w-[150px] overflow-hidden self-center "}
        />
        <JoinedCard
          heading={"Investors"}
          content={
            "Looking to diversify with real Bitcoin infrastructure. We simplify the legal, tax, and technical side, While you collect real BTC."
          }
          image={"/page0/img-4.png"}
          style={"w-[250px] self-center mt-auto"}
        />
        <JoinedCard
          heading={"Crypto Believers & Stackers"}
          content={
            "Those who don’t want the hassle of buying real hardware — but still want real Bitcoin, daily. From students to seasoned hodlers, anyone can start from AED 2,000."
          }
          image={"/page0/img-5.png"}
          style={"w-[180px] self-center"}
        />
      </div>
    </div>
  );
}
