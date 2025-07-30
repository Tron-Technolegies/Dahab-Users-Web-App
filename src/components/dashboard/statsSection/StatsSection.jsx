import React, { useContext } from "react";
// import AlertContainer from "./AlertContainer";
// import CreateContainer from "./CreateContainer";
// import PayoutSelector from "./PayoutSelector";
// import TopSection from "../detailed/TopSection/TopSection";
import { Link } from "react-router-dom";
import StatsMainCard from "./StatsMainCard";
import AnalysisSection from "../FinancialAnalysis/AnalysisSection";
import Projection from "../projection/Projection";
import { UserContext } from "../../../UserContext";

export default function StatsSection() {
  const { user } = useContext(UserContext);
  return (
    <div className="flex flex-col gap-3 items-center">
      <p className="my-5 text-xl text-left w-full font-semibold">
        Welcome back, <span className="text-[#07EAD3]">{user?.username}</span>
      </p>
      <StatsMainCard />
      <AnalysisSection />
      <Projection />
      {/* <Link
        to={"/dashboard/detailed"}
        className="px-4 py-2 mb-3 rounded-md bg-[#0194FE] hover:bg-[#01d4fe] hover:scale-105 ease-in-out duration-300"
      >
        {"View More Details >"}
      </Link> */}
      {/* <div className="flex lg:flex-row flex-col justify-center gap-10 lg:gap-20">
        <AlertContainer />
        <CreateContainer />
      </div>
      <div id="payout-selector-1">
        {" "}
        <PayoutSelector />
      </div> */}
    </div>
  );
}
