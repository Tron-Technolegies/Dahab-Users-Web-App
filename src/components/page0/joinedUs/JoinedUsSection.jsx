import React from "react";
import JoinedCard from "./JoinedCard";

export default function JoinedUsSection() {
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] md:py-5 py-2 my-10">
      <h3 className="text-3xl text-[#76C6E0] font-semibold text-center">
        Who Already Joined Us
      </h3>
      <div className="grid sm:grid-cols-2 gap-5 my-10 justify-items-center-safe max-w-[700px] mx-auto">
        <JoinedCard
          heading={"Private miners"}
          content={
            "looking to profit in a growing market: you can start with a single piece of hardware"
          }
          image={"/page0/img-2.png"}
          style={"w-[150px] overflow-hidden self-center mt-5"}
        />
        <JoinedCard
          heading={"Experienced miners"}
          content={
            "looking to profit in a growing market: you can start with a single piece of hardware"
          }
          image={"/page0/img-3.png"}
          style={"w-[150px] overflow-hidden self-center mt-5"}
        />
        <JoinedCard
          heading={"Investors"}
          content={
            "looking into diversifying their assets: we’ll help you figure out legal and tax aspects before you get started"
          }
          image={"/page0/img-4.png"}
          style={"w-[250px] self-center mt-auto"}
        />
        <JoinedCard
          heading={"Businesses"}
          content={
            "exploring additional income streams: we’ll help you develop a comprehensive business plan"
          }
          image={"/page0/img-5.png"}
          style={"w-[180px] self-center"}
        />
      </div>
    </div>
  );
}
