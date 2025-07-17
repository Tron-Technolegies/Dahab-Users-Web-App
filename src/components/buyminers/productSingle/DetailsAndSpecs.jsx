import React, { useState } from "react";

export default function DetailsAndSpecs({ miner }) {
  const [selected, setSelected] = useState("Description");
  return (
    <div>
      <div className="flex justify-center gap-10 border-b my-10 border-[#043377]">
        <button
          className={`px-5 py-3 cursor-pointer ease-in duration-100 ${
            selected === "Description" && "border-b border-[#07EAD3]"
          }`}
          onClick={() => setSelected("Description")}
        >
          Description
        </button>
        <button
          className={`px-5 py-3 cursor-pointer ease-in duration-100 ${
            selected === "Specification" && "border-b border-[#07EAD3]"
          }`}
          onClick={() => setSelected("Specification")}
        >
          Specification
        </button>
      </div>
      {selected === "Description" && <p>{miner?.description}</p>}
      {selected === "Specification" && (
        <div>
          <li>Power: {miner?.power} KW/h</li>
          <li>HashRate: {miner?.hashRate} TH/s</li>
          <li>Coin Type: {miner?.coin}</li>
          <li>Algorithm: {miner?.algorithm}</li>
        </div>
      )}
    </div>
  );
}
