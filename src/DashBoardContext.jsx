import { createContext, useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { CalculatorContext } from "./CalculatorContext";
import { UserContext } from "./UserContext";

export const DashboardContext = createContext();

export default function DashBoardContextProvider({ children }) {
  const { btcPrice, expectedPrice } = useContext(CalculatorContext);
  const [totalHashrate, setTotalHashrate] = useState(0);
  const [totalMiners, setTotalMiners] = useState(0);
  const [minedRevenue, setMinedRevenue] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [hostingDue, setHostingDue] = useState(0);
  const [avgValidity, setAvgValidity] = useState(0);
  const [hostingPaid, setHostingPaid] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [ownedBTCValue, setOwnedBTCValue] = useState(0);
  const [totalMinerPrice, setTotalMinerPrice] = useState(0);
  const [roi, setRoi] = useState(0);
  const [totalInvestment3Yrs, setTotalInvestment3Yrs] = useState(0);
  const [avgHostingFee3Yrs, setAvgHostingFee3Yrs] = useState(0);
  const [avgBTCToMine3Yrs, setAvgBTCToMine3Yrs] = useState(0);
  const [totalMined3Yrs, setTotalMined3Yrs] = useState(0);
  const [valueIn3Yrs, setValueIn3Yrs] = useState(0);
  const [netProfit3Yrs, setNetProfit3Yrs] = useState(0);
  const [profitRatio3Yrs, setProfitRatio3Yrs] = useState(0);
  const [roi3Yrs, setRoi3yrs] = useState(0);
  const [buyingBTCNow, setBuyingBTCNow] = useState(0);
  const { user } = useContext(UserContext);

  function convertUsdToAed(usd) {
    return (usd * 3.65).toFixed(2);
  }

  function calculateDashboardStats() {
    if (!user || user?.ownedMiners.length === 0) return;
    const totalHash = user?.ownedMiners.reduce((acc, item) => {
      return acc + parseFloat(item.qty) * parseFloat(item?.itemId?.hashRate);
    }, 0);
    setTotalHashrate(totalHash);
    const totalMiners = user?.ownedMiners.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalMiners(totalMiners);
    const totalRevenue = user?.ownedMiners.reduce((acc, item) => {
      return acc + item.minedRevenue;
    }, 0);
    setMinedRevenue(totalRevenue);
    const totalhostingDue = user?.ownedMiners.reduce((acc, item) => {
      return acc + item.HostingFeeDue;
    }, 0);
    setHostingDue(totalhostingDue);
    const totalValidity = user?.ownedMiners.reduce((acc, item) => {
      const future = dayjs(item.validity);
      const today = dayjs();
      const daysLeft = future.diff(today, "day");
      return acc + parseFloat(daysLeft * item.qty);
    }, 0);
    const aveValidity = (
      parseInt(totalValidity) / parseInt(totalMiners)
    ).toFixed(1);
    setAvgValidity(aveValidity);
    const totalHostingPaid = user?.ownedMiners.reduce((acc, item) => {
      return acc + item.hostingFeePaid;
    }, 0);
    setHostingPaid(totalHostingPaid);
    const totalMinerPrice = user?.ownedMiners.reduce((acc, item) => {
      return acc + item.itemId.price * item.qty;
    }, 0);
    setTotalMinerPrice(totalMinerPrice);
    const totalInv = totalMinerPrice + totalHostingPaid;
    setTotalInvestment(totalInv);
    const ownedBTCVlu = totalRevenue * convertUsdToAed(btcPrice);
    setOwnedBTCValue(ownedBTCVlu);
    const ROI = (ownedBTCVlu * 100) / totalInv;
    setRoi(ROI);
    const totalAvgHosting3Yr = user?.ownedMiners.reduce((acc, item) => {
      const future = dayjs(item.validity);
      const today = dayjs();
      const daysLeft = future.diff(today, "day");
      return (
        acc +
        item.itemId.power *
          24 *
          item.qty *
          parseInt(daysLeft) *
          item.itemId.hostingFeePerKw
      );
    }, 0);
    setAvgHostingFee3Yrs(totalAvgHosting3Yr);
    const totalInv3Yr = totalMinerPrice + totalHostingPaid + totalAvgHosting3Yr;
    setTotalInvestment3Yrs(totalInv3Yr);
    const totalAvgcoinToMine = user?.ownedMiners.reduce((acc, item) => {
      const future = dayjs(item.validity);
      const today = dayjs();
      const daysLeft = future.diff(today, "day");
      return (
        acc + 0.0000075 * item.itemId.hashRate * item.qty * parseInt(daysLeft)
      );
    }, 0);
    setAvgBTCToMine3Yrs(totalAvgcoinToMine);
    const totalCombinedMined = (totalRevenue + totalAvgcoinToMine).toFixed(4);
    setTotalMined3Yrs(totalCombinedMined);
    const valueIn3 = (
      totalCombinedMined * convertUsdToAed(expectedPrice)
    ).toFixed(2);
    setValueIn3Yrs(valueIn3);
    const profitIn3Yrs = (valueIn3 - totalInv3Yr).toFixed(2);
    setNetProfit3Yrs(profitIn3Yrs);
    const profitByInvestment = (profitIn3Yrs / totalInv3Yr).toFixed(2);
    setProfitRatio3Yrs(profitByInvestment);
    const threeYrRoi = ((valueIn3 * 100) / totalInv3Yr).toFixed(2);
    setRoi3yrs(threeYrRoi);
    const buyingBTC = (totalInv3Yr / convertUsdToAed(btcPrice)).toFixed(4);
    setBuyingBTCNow(buyingBTC);
  }
  useEffect(() => {
    calculateDashboardStats();
    setCurrentBalance(user?.currentBalance);
  }, [user]);

  return (
    <DashboardContext.Provider
      value={{
        totalHashrate,
        totalMiners,
        minedRevenue,
        currentBalance,
        hostingDue,
        avgValidity,
        hostingPaid,
        totalInvestment,
        convertUsdToAed,
        ownedBTCValue,
        totalMinerPrice,
        roi,
        avgHostingFee3Yrs,
        totalInvestment3Yrs,
        avgBTCToMine3Yrs,
        totalMined3Yrs,
        valueIn3Yrs,
        netProfit3Yrs,
        profitRatio3Yrs,
        roi3Yrs,
        buyingBTCNow,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
