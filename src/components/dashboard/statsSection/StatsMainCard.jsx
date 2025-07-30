// import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import GraphStat from "./GraphStat";
import { DashboardContext } from "../../../DashBoardContext";
import { UserContext } from "../../../UserContext";

export default function StatsMainCard() {
  const [on, setOn] = useState(false);
  const {
    totalHashrate,
    totalMiners,
    currentBalance,
    hostingDue,
    avgValidity,
  } = useContext(DashboardContext);
  const { user } = useContext(UserContext);

  return (
    <div
      className={`p-10 ${
        on
          ? "bg-gray-200"
          : "bg-gradient-to-r from-[#59b3e4] via-[#0692DC] to-[#59b3e4]"
      } lg:w-3/4 sm:w-3/4 w-full rounded-4xl relative flex flex-col gap-3 items-center mb-10`}
      id="main-stat-card"
    >
      {on ? (
        <GraphStat />
      ) : (
        <div className="flex flex-col gap-2 items-center w-full ">
          <div className="flex flex-col gap-2 items-center w-full p-4 border-b border-[#57B9FF]">
            <p>Current Balance</p>
            <div className="flex gap-5 justify-center items-center">
              <img src="/home/bitcoin.png" className="w-10" />
              <p className="text-2xl font-semibold">{currentBalance} BTC</p>
            </div>
            <p className=" p-2 w-full text-center rounded-lg">
              Total Miners -{" "}
              <span className="text-xl  font-bold">{totalMiners}</span>
            </p>
          </div>

          <div className="flex lg:flex-row flex-col lg:text-left text-center lg:gap-5 justify-between w-full">
            <p className=" p-2 w-full rounded-lg">
              Total Hashrate -{" "}
              <span className="text-xl  font-bold">{totalHashrate} TH/s</span>
            </p>
            <p className=" p-2 w-full text-center rounded-lg lg:text-end">
              Payout Mode -{" "}
              <span className="text-xl capitalize font-bold">
                BTC {user?.payoutMode}
              </span>
            </p>
          </div>
          <div className="flex lg:flex-row flex-col-reverse lg:text-left text-center lg:gap-5 justify-between w-full">
            <p
              className={`p-2 w-full flex gap-1 lg:justify-start justify-center items-center rounded-lg ${
                user?.walletBalance <= 0 && "text-red-600"
              }`}
            >
              Wallet Balance -{" "}
              <span className="text-xl  font-bold">
                {user?.walletBalance} AED
              </span>
              <button className="ms-2 text-sm rounded-lg cursor-pointer px-3 py-1 border text-white">
                Topup
              </button>
            </p>
            <p className=" p-2 w-full rounded-lg lg:text-end">
              Avg. Validity Left -{" "}
              <span className="text-xl  font-bold">{avgValidity} Days</span>
            </p>
          </div>
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
