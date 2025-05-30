import React, { useState } from "react";
import { minersMock } from "../../utils/miners";
import MyMinerCard from "./MyMinerCard";

export default function MinerList() {
  const [selectedId, setSelectedId] = useState(1);
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between place-items-center gap-5 border-b border-[#76C6E054] pb-10">
      {minersMock.map((item) => (
        <MyMinerCard
          key={item.id}
          image={item.image}
          name={item.name}
          hashrate={item.h24_hashRate}
          power={item.power}
          status={item.status}
          isSelected={selectedId === item.id}
          setSelected={setSelectedId}
          id={item.id}
        />
      ))}
    </div>
  );
}
