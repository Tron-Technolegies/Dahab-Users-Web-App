import React, { useContext, useEffect } from "react";
import StartMiner from "../../components/myminer/StartMiner";
import OwnedSection from "../../components/myminer/OwnedSection";
import { UserContext } from "../../UserContext";

export default function MyMinerPage() {
  const { ownedMiners } = useContext(UserContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10">
      {ownedMiners.length > 0 ? <OwnedSection /> : <StartMiner />}
    </div>
  );
}
