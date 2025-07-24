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
            "You receive 100% of the Bitcoin mined",
            "Electricity is paid separately - in crypto or fiat",
            "Best for those who want to accumulate and grow Bitcoin",
            "Like owning a personal BTC ATM - mine daily at a fixed cost",
            "Recommended if you believe Bitcoin will rise over time",
          ]}
          recommended
        />
        <PayoutBox
          heading={"BTC Profit Mode"}
          list={[
            "Electricity cost is auto-deducted from your daily earnings",
            "You receive the remaining profit - withdraw anytime",
            "Easiest option with no wallets to manage",
            "Great for short-term profits or passive BTC flow",
            "You choose the style: saving or spending",
          ]}
        />
      </div>
    </div>
  );
}
