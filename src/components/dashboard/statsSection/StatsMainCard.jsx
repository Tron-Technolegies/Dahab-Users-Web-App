import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import GraphStat from "./GraphStat";

export default function StatsMainCard() {
  const [on, setOn] = useState(false);

  return (
    <div
      className={`p-10 ${
        on ? "bg-gray-200" : "bg-gradient-to-r from-[#0692DC] to-[#59b3e4]"
      } lg:w-1/2 sm:w-3/4 w-full rounded-4xl relative flex flex-col gap-3 items-center`}
    >
      {on ? (
        <GraphStat />
      ) : (
        <div className="flex flex-col gap-5 items-center">
          <p>Daily Earnings</p>
          <div className="flex gap-5 justify-center items-center">
            <img src="/home/bitcoin.png" className="w-10" />
            <p className="text-2xl">
              0.00012 BTC <span className="text-sm">/day</span>
            </p>
          </div>
          <div className="flex gap-10">
            <p>Hashrate - 12.5 TH/s</p>
            <p>Efficiency - 96.86%</p>
          </div>
        </div>
      )}

      <div className="flex gap-3 items-center mt-7">
        <img src="/home/graph-switch.png" className="w-7" />
        <div
          className={`${
            on ? "bg-[#2CA6FF]" : "bg-[#A8A8A8]"
          } px-1 py-1 rounded-s-full rounded-e-full flex items-center gap-5`}
        >
          <motion.button
            className={`text-[#DA1E21] p-2 `}
            animate={{
              backgroundColor: on ? "" : "#E0E0E0",
              borderRadius: !on ? "999px" : "0px",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => setOn(!on)}
          ></motion.button>
          <motion.button
            className={`text-[#DA1E21] p-2 `}
            animate={{
              backgroundColor: on ? "#26DDFF" : "",
              borderRadius: on ? "999px" : "0px",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => setOn(!on)}
          ></motion.button>
        </div>
      </div>
      <Link to={"/detailed"} className={`underline ${on && "text-black"}`}>
        Detailed View
      </Link>
    </div>
  );
}
