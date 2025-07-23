import { createContext, useEffect, useState } from "react";

export const CalculatorContext = createContext();

export default function CalculatorContextProvider({ children }) {
  const [minerPage, setMinerPage] = useState(null);
  const [miners, setMiners] = useState(1);
  const [hostingPeriod, setHostingPeriod] = useState(3);
  const [btcPrice, setBtcPrice] = useState(118000);
  const [expectedPrice, setExpectedPrice] = useState(200000);
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

  function convertUsdToAed(usd) {
    return (usd * 3.65).toFixed(2);
  }

  function calculateAll() {
    const totalInv = (
      minerPage?.price * miners +
      minerPage?.power *
        24 *
        miners *
        365 *
        hostingPeriod *
        minerPage?.hostingFeePerKw
    ).toFixed(2);
    setInvestment(totalInv);
    const btcEarnedBuying = (totalInv / convertUsdToAed(btcPrice)).toFixed(4);
    setBtcEarnedByBuying(btcEarnedBuying);
    const btcEarnedMining = (
      0.00000075 *
      minerPage?.hashRate *
      miners *
      365 *
      hostingPeriod
    ).toFixed(4);
    setBtcEarnedByMining(btcEarnedMining);
    const valueBuying = (
      btcEarnedBuying * convertUsdToAed(expectedPrice)
    ).toFixed(2);
    setBtcValueBuying(valueBuying);
    const valueMining = (
      btcEarnedMining * convertUsdToAed(expectedPrice)
    ).toFixed(2);
    setBtcValueMining(valueMining);
    const profitBuying = (valueBuying - totalInv).toFixed(2);
    setNetProfitBuying(profitBuying);
    const profitMining = (valueMining - totalInv).toFixed(2);
    setNetProfitMining(profitMining);
    const roi1 = ((valueBuying / totalInv) * 100).toFixed(2);
    setRoiBuying(roi1);
    const roi2 = ((valueMining / totalInv) * 100).toFixed(2);
    setRoiMining(roi2);
    const ratio1 = (profitBuying / totalInv).toFixed(2);
    setBuyingRatio(ratio1);
    const ratio2 = (profitMining / totalInv).toFixed(2);
    setMiningRatio(ratio2);
  }

  useEffect(() => {
    calculateAll();
  }, [minerPage, miners, expectedPrice, hostingPeriod]);

  return (
    <CalculatorContext.Provider
      value={{
        miners,
        setMiners,
        setMinerPage,
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
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}
