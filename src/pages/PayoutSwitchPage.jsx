import React from "react";
import PayoutSelector from "../components/dashboard/statsSection/PayoutSelector";

export default function PayoutSwitchPage() {
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col gap-5">
      <PayoutSelector />
    </div>
  );
}
