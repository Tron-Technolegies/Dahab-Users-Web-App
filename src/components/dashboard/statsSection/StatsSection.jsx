import React from "react";
import StatsMainCard from "./StatsMainCard";
import ActiveButtonCard from "./ActiveButtonCard";
import AlertContainer from "./AlertContainer";
import CreateContainer from "./CreateContainer";
import PayoutSelector from "./PayoutSelector";

export default function StatsSection() {
  return (
    <div className="flex flex-col items-center">
      <StatsMainCard />
      <div className="flex sm:flex-row flex-col justify-center md:gap-20 gap-10 items-center my-10">
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
      <div className="flex lg:flex-row flex-col justify-center gap-10 lg:gap-20">
        <AlertContainer />
        <CreateContainer />
      </div>
      <PayoutSelector />
    </div>
  );
}
