import React from "react";
import NewUserLanding from "../../components/dashboard/NewUser/NewUserLanding";
import LivePrice from "../../components/dashboard/livePrice/LivePrice";
import ProductSuggestions from "../../components/dashboard/products/ProductSuggestions";
import StatsSection from "../../components/dashboard/statsSection/StatsSection";

export default function DashBoardPage() {
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 ">
      <StatsSection />
      <NewUserLanding />
      {/* <LivePrice /> */}
      <ProductSuggestions />
    </div>
  );
}
