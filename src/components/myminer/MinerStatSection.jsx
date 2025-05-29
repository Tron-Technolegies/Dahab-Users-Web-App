import React from "react";
import TopSection from "../dashboard/detailed/TopSection/TopSection";
import DetailedTable from "../dashboard/detailed/detailedTable/DetailedTable";

export default function MinerStatSection() {
  return (
    <section id="stat">
      <div className="flex md:flex-row flex-col justify-between items-center my-5">
        <p className="md:text-2xl text-lg">Bitmain AntMiner L7 (9.5GH)</p>
        <button className="px-3 py-1 rounded-md bg-[#011532] border border-[#76C6E054]">
          Report Issue
        </button>
      </div>
      <TopSection hidden />
    </section>
  );
}
