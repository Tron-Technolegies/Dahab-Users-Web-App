import React, { useContext } from "react";
import TopSection from "../dashboard/detailed/TopSection/TopSection";
import DetailedTable from "../dashboard/detailed/detailedTable/DetailedTable";
import SIngleMinerStats from "./SIngleMinerStats";
import { UserContext } from "../../UserContext";

export default function MinerStatSection() {
  const { selectedMiner } = useContext(UserContext);
  return (
    <section id="stat">
      <div className="flex md:flex-row flex-col justify-between items-center my-5">
        <p className="md:text-2xl text-lg">{selectedMiner?.name}</p>
        <button className="px-3 py-1 rounded-md bg-[#011532] border border-[#76C6E054]">
          Report Issue
        </button>
      </div>
      <SIngleMinerStats data={selectedMiner} />
      <p className="md:text-2xl text-lg my-5">Other Workers</p>
      <DetailedTable />
    </section>
  );
}
