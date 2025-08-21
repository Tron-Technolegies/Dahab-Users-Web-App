import React, { useContext, useEffect, useState } from "react";
import { IoWarningOutline } from "react-icons/io5";
import FormInput from "../../../FormInput";

import { CalculatorContext } from "../../../../CalculatorContext";
import HoldModeCalculator from "./HoldModeCalculator";
import ProfitModeCalculator from "./ProfitModeCalculator";

const rows = [];

export default function ROICalculator({ miner }) {
  const [mode, setMode] = useState("hold");
  const {
    miners,
    setMiners,
    btcPrice,
    setBtcPrice,
    expectedPrice,
    setExpectedPrice,
    hostingPeriod,
    setHostingPeriod,
    investment,
    btcEarnedByBuying,
    btcEarnedByMining,
    convertUsdToAed,
    btcValueBuying,
    btcValueMining,
    netProfitBuying,
    netProfitMining,
    roiBuying,
    roiMining,
    miningRatio,
    buyingRatio,
    thPerDay,
  } = useContext(CalculatorContext);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="flex flex-col md:gap-5 gap-2 mt-20 my-10 ">
      <h3 className="relative md:text-3xl text-xl flex gap-2 justify-center font-semibold text-center text-[#76C6E0]">
        Bitcoin ROI Calculator
        <span
          className="text-orange-500 text-sm cursor-pointer"
          onMouseEnter={() => setShowInfo(true)}
          onMouseLeave={() => setShowInfo(false)}
        >
          <IoWarningOutline />
        </span>
        {showInfo && (
          <div
            className="absolute top-10 bg-black p-5 rounded-lg z-10 lg:w-[400px] w-[300px] flex flex-col gap-3 items-center"
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
          >
            <p className="text-center text-xs text-white font-normal">
              These figures are estimates only and may change due to Bitcoin
              price, mining difficulty, and operational factors. Past
              performance is not a guarantee of future results.
            </p>
          </div>
        )}
      </h3>
      <p className="text-center">Buy vs Mining</p>
      <div className=" w-full mx-auto flex flex-col gap-7 border-b border-[#011E34]">
        <div className={`flex flex-col gap-3 w-fit`}>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className={`p-2 text-[#0194FE] rounded-md outline-0 bg-[#011532] disabled:cursor-not-allowed`}
          >
            <option value={"hold"}>BTC Hold</option>
            <option value={"profit"} className="disabled:cursor-not-allowed">
              BTC Profit
            </option>
          </select>
        </div>
        <div className="bg-[#011532] p-5 md:px-10 rounded-md grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-7 border-t border-[#4D8DAF]">
          <FormInput
            title={"No of Miners"}
            type={"number"}
            styles={"bg-[#07EAD314]"}
            value={miners}
            onChange={(e) => setMiners(e.target.value)}
          />
          <FormInput
            title={"Hosting Period (years)"}
            type={"number"}
            styles={"bg-[#07EAD314] w-full"}
            value={hostingPeriod}
            onChange={(e) => setHostingPeriod(e.target.value)}
            disabled
          />
          <FormInput
            title={"Current BTC Price (USD)"}
            type={"number"}
            styles={"bg-[#07EAD314]"}
            value={btcPrice}
            onChange={(e) => setBtcPrice(e.target.value)}
            disabled
          />
          <FormInput
            title={"Expected Price(3 Years-USD)"}
            type={"number"}
            styles={"bg-[#07EAD314]"}
            value={expectedPrice}
            onChange={(e) => setExpectedPrice(e.target.value)}
          />
        </div>
      </div>
      {mode === "hold" && <HoldModeCalculator miner={miner} />}
      {mode === "profit" && <ProfitModeCalculator miner={miner} />}
    </div>
  );
}
