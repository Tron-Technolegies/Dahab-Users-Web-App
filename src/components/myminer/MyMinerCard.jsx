import React, { useContext } from "react";
import { AiOutlineRise } from "react-icons/ai";
import { UserContext } from "../../UserContext";
import { minersMock } from "../../utils/miners";

export default function MyMinerCard({
  hashrate,
  power,
  isSelected,
  image,
  name,
  setSelected,
  id,
  qty,
  batchId,
}) {
  const handleScrollToStat = () => {
    const statSection = document.getElementById("stat");
    if (statSection) {
      statSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  // const { setSelectedMiner } = useContext(UserContext);
  // const handleSelection = (id) => {
  //   const newMiner = minersMock.find((item) => item.id === id);
  //   setSelectedMiner(newMiner);
  // };
  return (
    <div
      className={`p-5 rounded-md flex flex-col items-center gap-1 w-[300px] hover:scale-105 hover:bg-[#0194FE] duration-300 ease-in-out ${
        isSelected ? "bg-[#0194FE] scale-105" : "bg-[#011532]"
      }`}
      onClick={() => {
        // handleSelection(id);
        setSelected((prevId) => (prevId === id ? null : id));
        handleScrollToStat();
      }}
    >
      <div className="flex justify-between w-full">
        <div
          className={`${
            isSelected ? "text-white" : "text-[#76C6E0]"
          } text-sm flex flex-col gap-2 `}
        >
          <div className="flex gap-2 items-center">
            <img src="/my-miners/i2.png" />
            <p>{hashrate} TH/s</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src="/my-miners/i1.png" />
            <p>{power} KW/h</p>
          </div>
        </div>
        <div>
          <p className={`${isSelected ? "text-white" : "text-[#76C6E0]"}`}>
            Qty : {qty}
          </p>
        </div>
      </div>
      <img src={image} className="w-36 object-cover" />
      <p className="text-center">{name}</p>
      <div className="flex flex-col justify-center gap-5 items-center">
        <p className="text-xs">Batch Id - xxxx-xxxx-{batchId.slice(-5)}</p>
        <button
          className="flex gap-2 items-center px-2 py-1 rounded-md disabled:cursor-not-allowed border border-[#CCF2FF2E] text-sm"
          disabled
        >
          DOA <img src="/my-miners/i4.png" />
        </button>
      </div>
    </div>
  );
}
