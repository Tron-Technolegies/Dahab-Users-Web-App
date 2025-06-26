import { motion } from "framer-motion";
import React, { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";

export default function PayoutSelector() {
  const [payout, setPayout] = useState("profit");
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="my-10">
      <div className="flex gap-7 items-center">
        <p className="relative">
          Payout{" "}
          <span
            className="absolute text-yellow-600 font-bold -top-2 -right-6 text-xl cursor-pointer"
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
          >
            <CiCircleInfo />
          </span>
        </p>
        {showInfo && (
          <div
            className="bg-black p-5 rounded-lg max-w-[300px] absolute"
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
          >
            <p className="text-sm mb-2 text-yellow-400">
              Only able to switch once every 60 days
            </p>
            <p className="text-sm mb-2">BTC Profit</p>
            <p className="text-xs mb-2">
              Segregates electricity payments from mining revenue, with all BTC
              earnings going directly to the user\'s wallet. Users are
              responsible for paying electricity separately
            </p>
            <p className="text-sm mb-2">BTC Hold</p>
            <p className="text-xs">
              Integrates electricity payments directly with mining revenue,
              using an intermediary wallet to deduct costs before transferring
              the net profit to the user. This mode also facilitates commission
              payments to service providers from the mining earnings
            </p>
          </div>
        )}
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
    </div>
  );
}
