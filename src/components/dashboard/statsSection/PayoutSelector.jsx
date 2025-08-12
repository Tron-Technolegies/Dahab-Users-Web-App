import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../UserContext";
import PayoutBox from "../../page0/payoutInfo/PayoutBox";
import ConfirmPopup from "../../payoutSelectorPage/ConfirmPopup";

export default function PayoutSelector({ inside }) {
  const { user } = useContext(UserContext);
  const [payout, setPayout] = useState(user?.payoutMode);
  const [isDisabled, setIsDisabled] = useState(true);
  const [daysRemaining, setDaysRemaining] = useState(0);
  const [open, setOpen] = useState(false);

  const calculateDaysRemaining = () => {
    const startDate = new Date(user.lastPayoutSelected);
    const targetDate = new Date(startDate);
    targetDate.setDate(startDate.getDate() + 60);
    const today = new Date();

    const daysLeftMs = targetDate - today;
    const daysLeft = Math.ceil(daysLeftMs / (1000 * 60 * 60 * 24));
    setDaysRemaining(daysLeft);
  };

  useEffect(() => {
    if (!user) {
      setIsDisabled(true);
      return;
    }

    if (!user.lastPayoutSelected) {
      setIsDisabled(false);
      return;
    }

    const lastPayoutDate = new Date(user.lastPayoutSelected);
    const now = new Date();
    const diffInDays = (now - lastPayoutDate) / (1000 * 60 * 60 * 24);
    setIsDisabled(diffInDays < 60);

    calculateDaysRemaining();
    const interval = setInterval(() => {
      calculateDaysRemaining();
    }, 1000 * 60 * 60 * 24);

    return () => clearInterval(interval);
  }, [user]);

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
            className={`text-white p-1 px-2 cursor-pointer disabled:cursor-not-allowed`}
            animate={{
              backgroundColor: payout === "profit" ? "#0194FE" : "#011532",
              borderRadius: payout === "profit" ? "999px" : "0px",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={async () => {
              setPayout("profit");
              setOpen(true);
            }}
            disabled={isDisabled}
          >
            BTC Profit
          </motion.button>
          <motion.button
            className={`text-white p-1 px-2 cursor-pointer disabled:cursor-not-allowed`}
            animate={{
              backgroundColor: payout === "hold" ? "#0194FE" : "",
              borderRadius: payout === "hold" ? "999px" : "0px",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={async () => {
              setPayout("hold");
              setOpen(true);
            }}
            disabled={isDisabled}
          >
            BTC Hold
          </motion.button>
        </div>
      </div>

      {isDisabled && (
        <p className="text-sm">{`Only able to change once in every 60 days (${daysRemaining} Days Remaining)`}</p>
      )}

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
      {open && (
        <ConfirmPopup
          open={open}
          setOpen={setOpen}
          mode={payout}
          setMode={setPayout}
        />
      )}
    </div>
  );
}
