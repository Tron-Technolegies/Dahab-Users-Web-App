import React, { useState } from "react";
import { minersMock } from "../../utils/miners";
import MyMinerCard from "./MyMinerCard";
import MinerStatSection from "./MinerStatSection";

export default function MinerList() {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between place-items-center gap-5 border-b border-[#76C6E054] pb-10">
      {minersMock.map((item) => (
        <div
          key={item.id}
          className={`${selectedId === item.id && "col-span-full w-full"}`}
        >
          <MyMinerCard
            image={item.image}
            name={item.name}
            hashrate={item.h24_hashRate}
            power={item.power}
            status={item.status}
            isSelected={selectedId === item.id}
            setSelected={setSelectedId}
            id={item.id}
          />
          {selectedId === item.id && (
            <div className="col-span-full">
              <MinerStatSection selectedMiner={item} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
