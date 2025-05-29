import React, { useContext } from "react";
import NewUserLanding from "../../components/dashboard/NewUser/NewUserLanding";
import LivePrice from "../../components/dashboard/livePrice/LivePrice";
import ProductSuggestions from "../../components/dashboard/products/ProductSuggestions";
import StatsSection from "../../components/dashboard/statsSection/StatsSection";
import { UserContext } from "../../UserContext";

export default function DashBoardPage() {
  const { ownedMiners } = useContext(UserContext);
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 ">
      {/* {ownedMiners?.length > 0 ? <StatsSection /> : <NewUserLanding />} */}
      <NewUserLanding />
      <StatsSection />
      <LivePrice />
      <ProductSuggestions />
    </div>
  );
}
