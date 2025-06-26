import React from "react";
import FormSelect from "../../../FormSelect";
import StatElement1 from "./StatElement1";
import ActiveButtonCard from "../../statsSection/ActiveButtonCard";
import GraphElement1 from "./GraphElement1";

export default function TopSection({ hidden }) {
  return (
    <div
      className="flex flex-col gap-7 items-start my-7 w-full h-full"
      id="detailed-total-miners"
    >
      <div className="flex lg:flex-row flex-col gap-5 w-full ">
        <div className="flex flex-col gap-3 lg:w-2/3" id="dash-stats">
          <StatElement1 stat={"3.64 PH"} statName={"Hashrate"} />
          <StatElement1 stat={"96.86 %"} statName={"Share Efficiency"} />
          <StatElement1 stat={"0.00183547 BTC"} statName={"Mined Rewards"} />
        </div>
        <div
          className={`flex lg:w-1/3 flex-col justify-center  gap-3 items-center ${
            hidden && "hidden"
          }`}
          id="active-miners"
        >
          <ActiveButtonCard
            icon={"/home/active.png"}
            name={"Active"}
            count={"2"}
          />
          <ActiveButtonCard
            icon={"/home/warning.png"}
            name={"Warning"}
            count={"0"}
          />
          <ActiveButtonCard
            icon={"/home/inactive.png"}
            name={"Inactive"}
            count={"2"}
          />
        </div>
      </div>

      <div className="flex flex-col gap-10 w-full">
        <div className="self-start">
          <FormSelect list={["24 hr", "7 day", "30 days"]} />
        </div>

        <GraphElement1 />
      </div>
    </div>
  );
}
