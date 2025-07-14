import React from "react";
import JoinedCard from "./JoinedCard";

export default function JoinedUsSection() {
  return (
    <div
      id="customers"
      className="px-5 md:px-10 lg:px-[120px] md:py-5 py-2 my-10"
    >
      <h3 className="text-3xl text-[#76C6E0] max-w-[360px] mx-auto font-semibold text-center">
        Who’s Already Mining With Us?
      </h3>
      <div className="grid sm:grid-cols-2 gap-5 gap-y-14 my-10 justify-items-center-safe max-w-[800px] mx-auto">
        <JoinedCard
          heading={"Private miners"}
          content={
            "Individuals entering the Bitcoin space for the first time - starting with just one machine and building from there."
          }
          image={"/page0/img-2.png"}
          style={"w-[150px] overflow-hidden self-center mt-5"}
        />
        <JoinedCard
          heading={"Other Hosting Companies"}
          content={
            "Even industry players are switching to Dahab - because they’re tired of slow setups, deposits, and long contracts.We made it simpler, faster, and cheaper - and they noticed."
          }
          image={"/page0/img-3.png"}
          style={"w-[150px] overflow-hidden self-center "}
        />
        <JoinedCard
          heading={"Investors"}
          content={
            "Looking to diversify their assets through digital infrastructure. We help you understand the legal and tax side before you begin."
          }
          image={"/page0/img-4.png"}
          style={"w-[250px] self-center mt-auto"}
        />
        <JoinedCard
          heading={"Businesses"}
          content={
            "Adding Bitcoin mining as a new revenue stream? We’ll help you structure a scalable plan that fits your company’s goals."
          }
          image={"/page0/img-5.png"}
          style={"w-[180px] self-center"}
        />
      </div>
    </div>
  );
}
