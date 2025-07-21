import { createContext, useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { CalculatorContext } from "./CalculatorContext";
import { UserContext } from "./UserContext";

export const DashboardContext = createContext();

export default function DashBoardContextProvider({ children }) {
  const { btcPrice } = useContext(CalculatorContext);
  const [totalHashrate, setTotalHashrate] = useState(0);
  const [totalMiners, setTotalMiners] = useState(0);
  const [minedRevenue, setMinedRevenue] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [hostingDue, setHostingDue] = useState(0);
  const [avgValidity, setAvgValidity] = useState(0);
  const [hostingPaid, setHostingPaid] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [ownedBTCValue, setOwnedBTCValue] = useState(0);
  const [roi, setRoi] = useState(0);
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
      return acc + parseInt(daysLeft * item.qty);
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
    const totalInv = totalMinerPrice + totalHostingPaid;
    setTotalInvestment(totalInv);
    const ownedBTCVlu = minedRevenue * convertUsdToAed(btcPrice);
    setOwnedBTCValue(ownedBTCVlu);
    const ROI = (ownedBTCVlu * 100) / totalInv;
    setRoi(ROI);
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
        roi,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
