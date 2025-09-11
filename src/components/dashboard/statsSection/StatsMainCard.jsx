// import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import GraphStat from "./GraphStat";
import { DashboardContext } from "../../../DashBoardContext";
import { UserContext } from "../../../UserContext";
import { sendTopupRequest } from "../../../utils/whatsapp";

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
      className={`md:p-10 py-5 px-2 ${
        on
          ? "bg-gray-200"
          : "bg-gradient-to-r from-[#59b3e4] via-[#0692DC] to-[#59b3e4]"
      } lg:w-3/4 sm:w-3/4 w-full rounded-4xl relative flex flex-col md:gap-3 gap-5 items-center mb-10`}
      id="main-stat-card"
    >
      {on ? (
        <GraphStat />
      ) : (
        <div className="flex flex-col gap-2 items-center w-full ">
          <div className="flex flex-col gap-2 items-center w-full p-4 border-b border-[#57B9FF]">
            <p>Current Balance</p>
            <div className="flex gap-5 justify-center items-center md:border-0 border-b border-[#57B9FF] md:pb-0 pb-2 w-full">
              <img src="/home/bitcoin.png" className="md:w-10 w-8" />
              <p className="md:text-2xl text-lg font-semibold">
                {currentBalance?.toFixed(8)} BTC
              </p>
            </div>
            <p className=" md:p-2 w-full text-center  rounded-lg">
              Total Miners -{" "}
              <span className="md:text-xl text-base font-bold">
                {totalMiners}
              </span>
            </p>
          </div>

          <div className="md:p-0 px-4 flex lg:flex-row flex-col lg:text-left md:text-center lg:gap-5 gap-2 justify-between w-full">
            <p className=" md:p-2 w-full rounded-lg flex gap-2 items-center lg:justify-start justify-between">
              Total Hashrate{" "}
              <span className="md:text-xl text-base  font-bold">
                {totalHashrate / 1000} PH/s
              </span>
            </p>
            <p className=" md:p-2 w-full md:text-center rounded-lg lg:text-end flex gap-2 items-center lg:justify-end justify-between">
              Payout Mode{" "}
              <span className="md:text-xl text-base capitalize font-bold">
                BTC {user?.payoutMode}
              </span>
            </p>
          </div>
          <div className="md:p-0 px-4 flex lg:flex-row flex-col-reverse lg:text-left md:text-center lg:gap-5 gap-2 justify-between w-full md:border-0 border-b md:pb-0 pb-3 border-[#57B9FF]">
            <p
              className={`md:p-2 w-full flex gap-1 lg:justify-start justify-between  items-center rounded-lg ${
                user?.walletBalance <= 0 && "text-red-600"
              }`}
            >
              Wallet Balance{" "}
              <span className="md:text-xl text-base  font-bold">
                {user?.walletBalance?.toFixed(2)} AED
              </span>
              <Link
                to={"/dashboard/wallet"}
                className="ms-2 text-sm rounded-lg cursor-pointer px-3 py-1 border text-white lg:block hidden"
              >
                Topup
              </Link>
            </p>
            <p className=" md:p-2 w-full rounded-lg lg:text-end flex gap-2 items-center lg:justify-end justify-between">
              Avg. Validity Left{" "}
              <span className="md:text-xl text-base font-bold">
                {avgValidity} Days
              </span>
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
      <div className="flex lg:justify-center justify-between items-center w-full pt-3 lg:border-0 border-t border-[#57B9FF] px-5 ">
        <Link
          to={"/dashboard/detailed"}
          className={`underline ${on && "text-black"}`}
          id="see-details"
        >
          Detailed View
        </Link>
        <Link
          to={"/dashboard/wallet"}
          className=" text-sm rounded-lg cursor-pointer px-3 py-1 border text-white lg:hidden w-fit"
        >
          Topup
        </Link>
      </div>
    </div>
  );
}
