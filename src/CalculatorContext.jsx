import { createContext, useEffect, useState } from "react";

export const CalculatorContext = createContext();

export default function CalculatorContextProvider({ children }) {
  const [minerPage, setMinerPage] = useState(null);
  const [thPerDay, setThPerDay] = useState(0.0000005);
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
  //profit mode
  const [btcEarnedPro, setBtcEarnedPro] = useState(0);
  const [btcValueBuyingPro, setBtcValueBuyingPro] = useState(0);
  const [btcValueMiningPro, setBtcValueMiningPro] = useState(0);
  const [netProfitBuyingPro, setNetProfitBuyingPro] = useState(0);
  const [netProfitMiningPro, setNetProfitMiningPro] = useState(0);
  const [roiBuyingPro, setRoiBuyingPro] = useState(0);
  const [roiMiningPro, setRoiMiningPro] = useState(0);
  const [buyingRatioPro, setBuyingRatioPro] = useState(0);
  const [miningRatioPro, setMiningRatioPro] = useState(0);

  function convertUsdToAed(usd) {
    return (usd * 3.67).toFixed(2);
  }

  function calculateAll() {
    //Hold Mode
    //calculating total Investment
    const totalInv = (
      minerPage?.price * miners +
      minerPage?.power *
        24 *
        miners *
        365 *
        hostingPeriod *
        minerPage?.hostingFeePerKw *
        3.67
    ).toFixed(2);
    setInvestment(totalInv);

    //calculating Total BTC Earned When Buying
    const btcEarnedBuying = (totalInv / convertUsdToAed(btcPrice)).toFixed(4);
    setBtcEarnedByBuying(btcEarnedBuying);

    //calculating BTC earned When Mining
    const btcEarnedMining = (
      thPerDay *
      minerPage?.hashRate *
      miners *
      365 *
      hostingPeriod
    ).toFixed(4);
    setBtcEarnedByMining(btcEarnedMining);

    //calculating value of BTC earned when buying
    const valueBuying = (
      btcEarnedBuying * convertUsdToAed(expectedPrice)
    ).toFixed(2);
    setBtcValueBuying(valueBuying);

    //calculating value of BTC earned when Mining
    const valueMining = (
      btcEarnedMining * convertUsdToAed(expectedPrice)
    ).toFixed(2);
    setBtcValueMining(valueMining);

    //calculating profit while buying
    const profitBuying = (valueBuying - totalInv).toFixed(2);
    setNetProfitBuying(profitBuying);

    //calculating profit while mining
    const profitMining = (valueMining - totalInv).toFixed(2);
    setNetProfitMining(profitMining);

    //calculating roi while buying
    const roi1 = ((valueBuying / totalInv) * 100).toFixed(2);
    setRoiBuying(roi1);

    //calculating roi while mining
    const roi2 = ((valueMining / totalInv) * 100).toFixed(2);
    setRoiMining(roi2);

    //calculating ratio while buying
    const ratio1 = (profitBuying / totalInv).toFixed(2);
    setBuyingRatio(ratio1);

    //calculating ratio while mining
    const ratio2 = (profitMining / totalInv).toFixed(2);
    setMiningRatio(ratio2);

    //profit mode
    //calculating btc earned while buying and mining
    const profitModeBTCEarned =
      (minerPage?.price * miners) / convertUsdToAed(btcPrice);
    setBtcEarnedPro(profitModeBTCEarned);
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
        thPerDay,
        setThPerDay,
        btcEarnedPro,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}
