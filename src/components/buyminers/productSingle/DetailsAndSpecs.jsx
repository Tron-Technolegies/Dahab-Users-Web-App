import React, { useState } from "react";

export default function DetailsAndSpecs() {
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
      {selected === "Description" && (
        <p>
          The Bitmain Antminer S19J Pro (100Th) is a high-performance Bitcoin
          miner known for its efficiency and reliability. It delivers 100
          terahashes per second, making it ideal for maximizing mining profits.
        </p>
      )}
      {selected === "Specification" && (
        <div>
          <li>Power: N/A</li>
          <li>HashRate: N/A</li>
          <li>Coin Type: N/A</li>
          <li>Algorithm: N/A</li>
        </div>
      )}
    </div>
  );
}
