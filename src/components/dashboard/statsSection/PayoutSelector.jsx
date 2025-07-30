import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { UserContext } from "../../../UserContext";
import PayoutBox from "../../page0/payoutInfo/PayoutBox";

export default function PayoutSelector({ inside }) {
  const { user } = useContext(UserContext);
  const [payout, setPayout] = useState(user?.payoutMode);

  return (
    <div className="my-10 flex flex-col gap-5">
      {!inside && (
        <p className="text-2xl text-[#76C6E0]">Select Your Payout Mode</p>
      )}

      <div className="flex gap-7 justify-between items-center py-5 border-b border-[#244A66]">
        <p className="text-lg font-semibold">Payout Mode</p>
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
            disabled
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
            disabled
          >
            BTC Hold
          </motion.button>
        </div>
      </div>
      <p className="text-sm">Only able to change once in every 60 days</p>
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
