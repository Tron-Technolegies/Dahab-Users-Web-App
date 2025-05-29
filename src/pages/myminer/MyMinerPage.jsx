import React from "react";
import StartMiner from "../../components/myminer/StartMiner";
import OwnedSection from "../../components/myminer/OwnedSection";

export default function MyMinerPage() {
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10">
      <StartMiner />
      <OwnedSection />
    </div>
  );
}
