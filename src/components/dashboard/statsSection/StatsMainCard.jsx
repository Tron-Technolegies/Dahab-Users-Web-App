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
      } lg:w-3/5 sm:w-3/4 w-full rounded-4xl relative flex flex-col gap-3 items-center mb-10`}
      id="main-stat-card"
    >
      {on ? (
        <GraphStat />
      ) : (
        <div className="flex flex-col gap-5 items-center w-full text-black">
          <div className="flex flex-col gap-2 items-center bg-gray-200 p-4 rounded-xl">
            <p>Current Balance</p>
            <div className="flex gap-5 justify-center items-center">
              <img src="/home/bitcoin.png" className="w-10" />
              <p className="text-2xl">0.00012 BTC</p>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col lg:text-left text-center gap-5 justify-between w-full">
            <p className="bg-gray-200 p-2 w-full rounded-lg">
              Total Hashrate -{" "}
              <span className="text-xl text-black font-bold">12.5 TH/s</span>
            </p>
            <p className="bg-gray-200 p-2 w-full rounded-lg">
              Total Miners -{" "}
              <span className="text-xl text-black font-bold">2</span>
            </p>
          </div>
          <div className="flex lg:flex-row flex-col lg:text-left text-center gap-5 justify-between w-full">
            <p className="bg-gray-200 p-2 w-full rounded-lg">
              Hosting Fee Due -{" "}
              <span className="text-xl text-black font-bold">1000 AED</span>
            </p>
            <p className="bg-gray-200 p-2 w-full rounded-lg">
              Avg. Validity Left -{" "}
              <span className="text-xl text-black font-bold">900 Days</span>
            </p>
          </div>
          <p className="bg-gray-200 p-2 w-full text-center rounded-lg">
            Payout Mode -{" "}
            <span className="text-xl text-black font-bold">BTC Hold</span>
          </p>
        </div>
      )}

      {/* <div className="flex gap-3 items-center mt-7" id="graph-switch">
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
      </div> */}
      <Link
        to={"/dashboard/detailed"}
        className={`underline ${on && "text-black"}`}
        id="see-details"
      >
        Detailed View
      </Link>
    </div>
  );
}
