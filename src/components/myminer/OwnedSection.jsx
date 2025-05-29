import React from "react";
import { LuRefreshCcw } from "react-icons/lu";
import MinerList from "./MinerList";
import MinerStatSection from "./MinerStatSection";

export default function OwnedSection() {
  return (
    <div className="flex flex-col gap-10">
      <button className="flex gap-3 items-center text-[#0194FE] text-xl cursor-pointer ms-auto">
        Refresh{" "}
        <span className="">
          <LuRefreshCcw />
        </span>
      </button>
      <MinerList />
      <MinerStatSection />
    </div>
  );
}
