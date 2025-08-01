import React, { useContext, useEffect, useState } from "react";
import PayoutTopSection from "../../components/payout/PayoutTopSection";
import PayoutTable from "../../components/payout/PayoutTable";

import RewardsTable from "../../components/payout/RewardsTable";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import StartMiner from "../../components/myminer/StartMiner";
import PayoutSelector from "../../components/dashboard/statsSection/PayoutSelector";

export default function PayoutPage() {
  const [active, setActive] = useState("payouts");
  const { user } = useContext(UserContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return user?.ownedMiners?.length > 0 ? (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col gap-5">
      <div className="flex flex-col gap-5" id="payout-table">
        <PayoutTopSection active={active} setActive={setActive} />
        {active === "payouts" && <PayoutTable />}
        {active === "rewards" && <RewardsTable />}
        {active === "mode" && <PayoutSelector inside />}
      </div>
      <div
        className="flex sm:flex-row flex-col justify-center sm:gap-10 items-center"
        id="withdraw"
      >
        <Link
          to={"/dashboard/payouts/withdraw"}
          className="px-6 py-1 rounded-full bg-[#07EAD3] text-black"
        >
          Withdraw
        </Link>
      </div>
    </div>
  ) : (
    <StartMiner />
  );
}
