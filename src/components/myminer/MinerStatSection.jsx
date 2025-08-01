import React, { useContext, useState } from "react";
// import TopSection from "../dashboard/detailed/TopSection/TopSection";
// import DetailedTable from "../dashboard/detailed/detailedTable/DetailedTable";
import SIngleMinerStats from "./SIngleMinerStats";
import { UserContext } from "../../UserContext";
import ReportIssue from "./ReportIssue";
import ProjectionSection from "./Projection/ProjectionSection";

export default function MinerStatSection({ selectedMiner }) {
  const [open, setOpen] = useState(false);
  return (
    <section id="stat" className="col-span-full">
      <div className="flex md:flex-row flex-col justify-between items-center my-5">
        <p className="md:text-2xl text-lg">{selectedMiner?.itemId?.name}</p>
        {/* <button
          onClick={() => setOpen(true)}
          className="px-3 py-1 rounded-md bg-[#011532] border border-[#76C6E054] cursor-pointer"
        >
          Report Issue
        </button> */}
      </div>
      <SIngleMinerStats data={selectedMiner} />
      <ProjectionSection />
      {/* <p className="md:text-2xl text-lg my-5">Other Workers</p>
      <DetailedTable /> */}
      <ReportIssue open={open} setOpen={setOpen} />
    </section>
  );
}
