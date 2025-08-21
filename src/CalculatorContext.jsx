import { createContext, useEffect, useState } from "react";

export const CalculatorContext = createContext();

export default function CalculatorContextProvider({ children }) {
  const [minerPage, setMinerPage] = useState(null);
  const [thPerDay, setThPerDay] = useState(0.0000005);
  const [miners, setMiners] = useState(1);
  const [hostingPeriod, setHostingPeriod] = useState(3);
  const [btcPrice, setBtcPrice] = useState(118000);
  const [expectedPrice, setExpectedPrice] = useState(200000);
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
  //profit mode
  const [btcEarnedPro, setBtcEarnedPro] = useState(0);
  const [netBTCEarnedPro, setNetBTCEarnedPro] = useState(0);
  const [btcValueBuyingPro, setBtcValueBuyingPro] = useState(0);
  const [btcValueMiningPro, setBtcValueMiningPro] = useState(0);
  const [netProfitBuyingPro, setNetProfitBuyingPro] = useState(0);
  const [netProfitMiningPro, setNetProfitMiningPro] = useState(0);
  const [roiBuyingPro, setRoiBuyingPro] = useState(0);
  const [roiMiningPro, setRoiMiningPro] = useState(0);
  const [buyingRatioPro, setBuyingRatioPro] = useState(0);
  const [miningRatioPro, setMiningRatioPro] = useState(0);

  function convertUsdToAed(usd) {
    return usd * 3.67;
  }

  function calculateAll() {
    //Hold Mode
    //calculating total Investment
    const totalInv =
      minerPage?.price * miners +
      minerPage?.power *
        24 *
        miners *
        365 *
        hostingPeriod *
        minerPage?.hostingFeePerKw *
        3.67;
    setInvestment(totalInv);

    //calculating electricity
    const elect =
      minerPage?.power *
      24 *
      miners *
      365 *
      hostingPeriod *
      minerPage?.hostingFeePerKw *
      3.67;
    setElectricity(elect);

    //calculating Total BTC Earned When Buying
    const btcEarnedBuying = totalInv / convertUsdToAed(btcPrice);
    setBtcEarnedByBuying(btcEarnedBuying);

    //calculating BTC earned When Mining
    const btcEarnedMining =
      thPerDay * minerPage?.hashRate * miners * 365 * hostingPeriod;
    setBtcEarnedByMining(btcEarnedMining);

    //calculating value of BTC earned when buying
    const valueBuying = btcEarnedBuying * convertUsdToAed(expectedPrice);
    setBtcValueBuying(valueBuying);

    //calculating value of BTC earned when Mining
    const valueMining = btcEarnedMining * convertUsdToAed(expectedPrice);
    setBtcValueMining(valueMining);

    //calculating profit while buying
    const profitBuying = valueBuying - totalInv;
    setNetProfitBuying(profitBuying);

    //calculating profit while mining
    const profitMining = valueMining - totalInv;
    setNetProfitMining(profitMining);

    //calculating roi while buying
    const roi1 = (valueBuying / totalInv) * 100;
    setRoiBuying(roi1);

    //calculating roi while mining
    const roi2 = (valueMining / totalInv) * 100;
    setRoiMining(roi2);

    //calculating ratio while buying
    const ratio1 = profitBuying / totalInv;
    setBuyingRatio(ratio1);

    //calculating ratio while mining
    const ratio2 = profitMining / totalInv;
    setMiningRatio(ratio2);

    //profit mode
    //calculating btc earned while buying
    const profitModeBTCEarned =
      (minerPage?.price * miners) / convertUsdToAed(btcPrice);
    setBtcEarnedPro(profitModeBTCEarned);

    //calculating net BTC earned after electricity
    const electricityBTC = elect / convertUsdToAed(btcPrice);
    const netBTCPro = btcEarnedMining - electricityBTC;
    setNetBTCEarnedPro(netBTCPro);

    //calculating value of BTC in buying
    const valueInBuyingPro =
      profitModeBTCEarned * convertUsdToAed(expectedPrice);
    setBtcValueBuyingPro(valueInBuyingPro);

    //calculating value of net BTC in mining
    const netBTCValueProMin = netBTCPro * convertUsdToAed(expectedPrice);
    setBtcValueMiningPro(netBTCValueProMin);

    //calculating net profit in buying
    const profitInBuyingPro = valueInBuyingPro - minerPage?.price * miners;
    setNetProfitBuyingPro(profitInBuyingPro);

    //calculating net profit in mining
    const profitInMiningPro = netBTCValueProMin - minerPage?.price * miners;
    setNetProfitMiningPro(profitInMiningPro);

    //calculate roi in buying
    const roiProfitBuying =
      (valueInBuyingPro / (minerPage?.price * miners)) * 100;
    setRoiBuyingPro(roiProfitBuying);

    //calculating roi in mining
    const roiProfitMining =
      (netBTCValueProMin / (minerPage?.price * miners)) * 100;
    setRoiMiningPro(roiProfitMining);

    //calculating profit ratio buying
    const buyingProfitRatio = profitInBuyingPro / (minerPage?.price * miners);
    setBuyingRatioPro(buyingProfitRatio);

    //Calculating profit ratio mining
    const miningProfitRatio = profitInMiningPro / (minerPage?.price * miners);
    setMiningRatioPro(miningProfitRatio);
  }

  useEffect(() => {
    calculateAll();
  }, [minerPage, miners, expectedPrice, hostingPeriod]);

  return (
    <CalculatorContext.Provider
      value={{
        buyingRatioPro,
        miningRatioPro,
        roiBuyingPro,
        roiMiningPro,
        netProfitBuyingPro,
        netProfitMiningPro,
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
        electricity,
        netBTCEarnedPro,
        btcValueBuyingPro,
        btcValueMiningPro,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}
