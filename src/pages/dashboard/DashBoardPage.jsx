import React, { useContext, useEffect } from "react";
import NewUserLanding from "../../components/dashboard/NewUser/NewUserLanding";
import LivePrice from "../../components/dashboard/livePrice/LivePrice";
import ProductSuggestions from "../../components/dashboard/products/ProductSuggestions";
import StatsSection from "../../components/dashboard/statsSection/StatsSection";
import { UserContext } from "../../UserContext";

export default function DashBoardPage() {
  const { ownedMiners } = useContext(UserContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 ">
      {ownedMiners?.length > 0 ? <StatsSection /> : <NewUserLanding />}
      {/* <NewUserLanding /> */}

      <LivePrice />
      <ProductSuggestions />
    </div>
  );
}
