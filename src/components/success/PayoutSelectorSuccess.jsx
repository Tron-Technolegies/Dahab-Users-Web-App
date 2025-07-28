import { motion } from "framer-motion";
import React, { useState } from "react";
import PayoutBox from "../page0/payoutInfo/PayoutBox";
import useSetPayoutMode from "../../hooks/cart/useSetPayoutMode";
import Loading from "../Loading";

export default function PayoutSelectorSuccess() {
  const [payout, setPayout] = useState("hold");
  const { loading, selectPayout } = useSetPayoutMode();
  return (
    <div className="w-full my-10 flex flex-col gap-5 items-center">
      <div className="flex flex-col w-full gap-5 items-center">
        <p className="font-semibold">Choose Your Payout To Continue</p>
        <div className="flex gap-7 items-center relative">
          <div
            className={`bg-[#011532]  p-1 border border-[#76C6E04D] rounded-s-full rounded-e-full flex items-center gap-5`}
          >
            <motion.button
              className={`text-white p-1 px-2 disabled:cursor-not-allowed`}
              animate={{
                backgroundColor: payout === "profit" ? "#0194FE" : "#011532",
                borderRadius: payout === "profit" ? "999px" : "0px",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setPayout("profit")}
            >
              BTC Profit
            </motion.button>
            <motion.button
              className={`text-white p-1 px-2 disabled:cursor-not-allowed`}
              animate={{
                backgroundColor: payout === "hold" ? "#0194FE" : "",
                borderRadius: payout === "hold" ? "999px" : "0px",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setPayout("hold")}
            >
              BTC Hold
            </motion.button>
          </div>
        </div>
      </div>
      <button
        onClick={() => selectPayout({ mode: payout })}
        className="capitalize px-3 py-2 rounded-lg bg-[#07EAD3] cursor-pointer text-black"
      >{`Continue with BTC ${payout} Mode`}</button>
      {loading && <Loading />}
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
