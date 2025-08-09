import { createContext, useContext, useEffect, useState } from "react";

export const ProjectionContext = createContext();

import React from "react";
import { UserContext } from "./UserContext";
import dayjs from "dayjs";
import { CalculatorContext } from "./CalculatorContext";

export default function ProjectionContextProvider({ children }) {
  const { user } = useContext(UserContext);
  const { btcPrice, thPerDay } = useContext(CalculatorContext);
  const [selectedId, setSelectedId] = useState(null);
  const [currentBatch, setCurrentBatch] = useState(null);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [minerPurchasedPrice, setMinerPurchasedPrice] = useState(0);
  const [avgHostingToPay, setAvgHostingToPay] = useState(0);
  const [daysToLeft, setDaysLeft] = useState(0);
  const [avgCoinToMine, setAvgCoinToMine] = useState(0);
  const [coinIn3Yrs, setCoinIn3Yrs] = useState(0);
  const [valueIn3Yrs, setValueIn3Yrs] = useState(0);
  const [netProfit, setNetProfit] = useState(0);
  const [profitRatio, setProfitRatio] = useState(0);
  const [roi, setRoi] = useState(0);
  const [buyingBTC, setBuyingBTC] = useState(0);

  function convertUsdToAed(usd) {
    return (usd * 3.67).toFixed(2);
  }
  function calculateProjectionStats() {
    const selectedBatch = user?.ownedMiners.find(
      (item) => item._id?.toString() === selectedId?.toString()
    );
    setCurrentBatch(selectedBatch);
    const totalMinersPurchasedPrice =
      selectedBatch?.itemId.price * selectedBatch?.qty;
    setMinerPurchasedPrice(totalMinersPurchasedPrice);
    const future = dayjs(selectedBatch?.validity);
    const today = dayjs();
    const daysLeft = future.diff(today, "day");
    setDaysLeft(daysLeft);
    const avgHostingPay = (
      selectedBatch?.itemId.power *
      24 *
      selectedBatch?.qty *
      parseInt(daysLeft) *
      selectedBatch?.itemId.hostingFeePerKw *
      3.67
    ).toFixed(2);
    setAvgHostingToPay(avgHostingPay);
    const totalInv = (
      parseFloat(totalMinersPurchasedPrice) +
      parseFloat(selectedBatch?.hostingFeePaid) +
      parseFloat(avgHostingPay)
    ).toFixed(2);
    setTotalInvestment(totalInv);
    const avgBTCToMine = (
      thPerDay *
      parseFloat(selectedBatch?.qty) *
      parseFloat(selectedBatch?.itemId.hashRate) *
      parseFloat(daysLeft)
    ).toFixed(4);
    setAvgCoinToMine(avgBTCToMine);
    const threeYearCoin = (
      parseFloat(selectedBatch?.minedRevenue) + parseFloat(avgBTCToMine)
    ).toFixed(7);
    setCoinIn3Yrs(threeYearCoin);
    const threeYearValue = (
      parseFloat(threeYearCoin) * convertUsdToAed(200000)
    ).toFixed(2);
    setValueIn3Yrs(threeYearValue);
    const profit = parseFloat(threeYearValue) - parseFloat(totalInv);
    setNetProfit(profit);
    const ratio = (parseFloat(profit) / parseFloat(totalInv)).toFixed(2);
    setProfitRatio(ratio);
    const newRoi = (
      (parseFloat(threeYearValue) * 100) /
      parseFloat(totalInv)
    ).toFixed(2);
    setRoi(newRoi);
    const buyingNow = (
      parseFloat(totalInv) / convertUsdToAed(btcPrice)
    ).toFixed(7);
    setBuyingBTC(buyingNow);
  }

  useEffect(() => {
    calculateProjectionStats();
  }, [selectedId]);
  return (
    <ProjectionContext.Provider
      value={{
        selectedId,
        setSelectedId,
        daysToLeft,
        currentBatch,
        totalInvestment,
        avgHostingToPay,
        minerPurchasedPrice,
        avgCoinToMine,
        coinIn3Yrs,
        convertUsdToAed,
        valueIn3Yrs,
        netProfit,
        profitRatio,
        roi,
        buyingBTC,
      }}
    >
      {children}
    </ProjectionContext.Provider>
  );
}
