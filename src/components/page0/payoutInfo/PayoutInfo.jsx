import React from "react";
import PayoutBox from "./PayoutBox";

export default function PayoutInfo({ oneA }) {
  return (
    <div
      className={`${
        oneA ? "py-2 my-10" : "px-5 md:px-10 lg:px-[120px] md:py-5 py-2 my-10"
      } `}
    >
      <h3 className="text-[#76C6E0] max-w-[400px] mx-auto text-3xl font-semibold text-center">
        Two Simple Payout Modes You Choose
      </h3>
      <div className="flex md:flex-row flex-col justify-center gap-10 my-10 max-w-[1000px] mx-auto">
        <PayoutBox
          heading={"BTC Hold Mode"}
          list={[
            "your machine mines Bitcoin and all of it goes to you.",
            "You just pay the electricity bill separately in crypto or fiat.",
            "This is the best option if you want to save and grow your Bitcoin over time.",
            "We recommend this because it’s like owning your own Bitcoin ATM — collecting Bitcoin daily at a fixed cost.",
          ]}
          recommended
        />
        <PayoutBox
          heading={"BTC Profit Mode"}
          list={[
            "If you want something easier, this mode automatically pays for electricity from your mining rewards.",
            "You get the profit that’s left over, and you can withdraw anytime.",
            "Choose what fits your style — long-term saving or quick profits.",
          ]}
        />
      </div>
    </div>
  );
}
