import { motion } from "framer-motion";
import React, { useState } from "react";

export default function PayoutSelector() {
  const [payout, setPayout] = useState("profit");
  return (
    <div className="my-10">
      <div className="flex gap-3 items-center">
        <p>Payout</p>
        <div
          className={`bg-[#011532]  p-1 border border-[#76C6E04D] rounded-s-full rounded-e-full flex items-center gap-5`}
        >
          <motion.button
            className={`text-white p-1 px-2 `}
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
            className={`text-white p-1 px-2`}
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
  );
}
