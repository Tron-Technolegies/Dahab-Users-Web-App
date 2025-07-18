import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import dayjs from "dayjs";

export const DashboardContext = createContext();

export default function DashBoardContextProvider({ children }) {
  const [totalHashrate, setTotalHashrate] = useState(0);
  const [totalMiners, setTotalMiners] = useState(0);
  const [minedRevenue, setMinedRevenue] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [hostingDue, setHostingDue] = useState(0);
  const [avgValidity, setAvgValidity] = useState(0);
  const [hostingPaid, setHostingPaid] = useState(0);
  const { user } = useContext(UserContext);

  function calculateTotalHashrate() {
    if (!user || user?.ownedMiners.length === 0) return;
    const totalHash = user?.ownedMiners.reduce((acc, item) => {
      return acc + parseFloat(item.qty) * parseFloat(item?.itemId?.hashRate);
    }, 0);
    return totalHash;
  }

  function calculateTotalMiners() {
    if (!user || user?.ownedMiners.length === 0) return;
    const totalMiners = user?.ownedMiners.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    return totalMiners;
  }

  function calculateTotalRevenue() {
    if (!user || user?.ownedMiners.length === 0) return;
    const totalRevenue = user?.ownedMiners.reduce((acc, item) => {
      return acc + item.minedRevenue;
    }, 0);
    return totalRevenue;
  }

  function calculateTotalHostingDue() {
    if (!user || user?.ownedMiners.length === 0) return;
    const totalhostingDue = user?.ownedMiners.reduce((acc, item) => {
      return acc + item.HostingFeeDue;
    }, 0);
    return totalhostingDue;
  }

  function calculateAvgValidity() {
    if (!user || user?.ownedMiners.length === 0) return;
    const totalValidity = user?.ownedMiners.reduce((acc, item) => {
      const future = dayjs(item.validity);
      const today = dayjs();
      const daysLeft = future.diff(today, "day");
      return acc + parseInt(daysLeft * item.qty);
    }, 0);
    console.log(totalValidity);
    const totalMiners = user?.ownedMiners.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    console.log(totalMiners);

    return (parseInt(totalValidity) / parseInt(totalMiners)).toFixed(1);
  }

  function calculateHostingPaid() {
    if (!user || user?.ownedMiners.length === 0) return;
    const totalHostingPaid = user?.ownedMiners.reduce((acc, item) => {
      return acc + item.hostingFeePaid;
    }, 0);
    return totalHostingPaid;
  }
  useEffect(() => {
    setTotalHashrate(calculateTotalHashrate());
    setTotalMiners(calculateTotalMiners());
    setMinedRevenue(calculateTotalRevenue());
    setCurrentBalance(user?.currentBalance);
    setHostingDue(calculateTotalHostingDue());
    setAvgValidity(calculateAvgValidity());
    setHostingPaid(calculateHostingPaid);
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
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
