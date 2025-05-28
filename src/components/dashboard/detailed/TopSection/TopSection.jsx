import React from "react";
import FormSelect from "../../../FormSelect";
import StatElement1 from "./StatElement1";
import ActiveButtonCard from "../../statsSection/ActiveButtonCard";
import GraphElement1 from "./GraphElement1";

export default function TopSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 items-start">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-3">
          <StatElement1 stat={"3.64 PH"} statName={"Hashrate"} />
          <StatElement1 stat={"96.86 %"} statName={"Share Efficiency"} />
          <StatElement1 stat={"0.00183547 BTC"} statName={"Mined Rewards"} />
        </div>
        <div className="flex sm:flex-row flex-col justify-center  gap-10 items-center my-10">
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
        <FormSelect list={["24 hr", "7 day", "30 days"]} />
        <GraphElement1 />
      </div>
    </div>
  );
}
