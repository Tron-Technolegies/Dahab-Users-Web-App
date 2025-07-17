import React, { useContext, useState } from "react";
import { minersMock } from "../../utils/miners";
import MyMinerCard from "./MyMinerCard";
import MinerStatSection from "./MinerStatSection";
import { UserContext } from "../../UserContext";

export default function MinerList() {
  const [selectedId, setSelectedId] = useState(null);
  const { user } = useContext(UserContext);
  return (
    <div
      id="my-miners"
      className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between place-items-center gap-5 border-b border-[#76C6E054] pb-10"
    >
      {user?.ownedMiners.map((item) => (
        <div
          key={item._id}
          className={`${selectedId === item._id && "col-span-full w-full"}`}
        >
          <MyMinerCard
            image={item?.itemId?.image}
            name={item?.itemId?.name}
            hashrate={item?.itemId?.hashRate}
            power={item?.itemId?.power}
            isSelected={selectedId === item._id}
            setSelected={setSelectedId}
            id={item._id}
            qty={item.qty}
            batchId={item.batchId}
          />
          {selectedId === item._id && (
            <div className="col-span-full">
              <MinerStatSection selectedMiner={item} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
