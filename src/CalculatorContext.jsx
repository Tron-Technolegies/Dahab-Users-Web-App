import { createContext, useEffect, useState } from "react";

export const CalculatorContext = createContext();

import React from "react";
import {
  btcEarned1,
  calculateBtcEarnedByMining,
  calculateBtcValue,
  calculateElectricity,
  calculateMinerPrice,
  CalculateNetProfit,
  CalculateProfitRatio,
  calculateROI,
  totalInvestment,
} from "./utils/calculatorFunctions";

export default function CalculatorContextProvider({ children }) {
  const [miners, setMiners] = useState(1);
  const [hostingPeriod, setHostingPeriod] = useState(3);
  const [btcPrice, setBtcPrice] = useState(118000);
  const [expectedPrice, setExpectedPrice] = useState(200000);
  const [minerPrice, setMinerPrice] = useState(1997);
  const [electricity, setElectricity] = useState(0);
  const [investment, setInvestment] = useState(0);
  const [btcEarnedByBuying, setBtcEarnedByBuying] = useState(0);
  const [btcEarnedByMining, setBtcEarnedByMining] = useState(0);
  const [btcValueBuying, setBtcValueBuying] = useState(0);
  const [btcValueMining, setBtcValueMining] = useState(0);
  const [netProfitBuying, setNetProfitBuying] = useState(0);
  const [netProfitMining, setNetProfitMining] = useState(0);
  const [roiBuying, setRoiBuying] = useState(0);
  const [roiMining, setRoiMining] = useState(0);
  const [buyingRatio, setBuyingRatio] = useState(0);
  const [miningRatio, setMiningRatio] = useState(0);

  useEffect(() => {
    setMinerPrice(calculateMinerPrice(miners));
    setElectricity(calculateElectricity(miners, hostingPeriod));
    setInvestment(totalInvestment(minerPrice, electricity));
    setBtcEarnedByBuying(btcEarned1(investment, btcPrice));
    setBtcEarnedByMining(calculateBtcEarnedByMining(miners, hostingPeriod));
    setBtcValueBuying(calculateBtcValue(expectedPrice, btcEarnedByBuying));
    setBtcValueMining(calculateBtcValue(expectedPrice, btcEarnedByMining));
    setNetProfitBuying(CalculateNetProfit(btcValueBuying, investment));
    setNetProfitMining(CalculateNetProfit(btcValueMining, investment));
    setRoiBuying(calculateROI(btcValueBuying, investment));
    setRoiMining(calculateROI(btcValueMining, investment));
    setBuyingRatio(CalculateProfitRatio(netProfitBuying, investment));
    setMiningRatio(CalculateProfitRatio(netProfitMining, investment));
  }, [
    miners,
    hostingPeriod,
    electricity,
    minerPrice,
    investment,
    btcPrice,
    expectedPrice,
    btcValueBuying,
    btcValueMining,
    btcEarnedByBuying,
    btcEarnedByMining,
    netProfitBuying,
    netProfitMining,
  ]);

  return (
    <CalculatorContext.Provider
      value={{
        miners,
        setMiners,
        hostingPeriod,
        setHostingPeriod,
        btcPrice,
        setBtcPrice,
        expectedPrice,
        setExpectedPrice,
        minerPrice,
        setMinerPrice,
        electricity,
        setElectricity,
        investment,
        setInvestment,
        btcEarnedByBuying,
        setBtcEarnedByBuying,
        btcEarnedByMining,
        setBtcEarnedByMining,
        btcValueBuying,
        setBtcValueBuying,
        btcValueMining,
        setBtcValueMining,
        netProfitBuying,
        setNetProfitBuying,
        netProfitMining,
        setNetProfitMining,
        roiBuying,
        setRoiBuying,
        roiMining,
        setRoiMining,
        buyingRatio,
        setBuyingRatio,
        miningRatio,
        setMiningRatio,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}
