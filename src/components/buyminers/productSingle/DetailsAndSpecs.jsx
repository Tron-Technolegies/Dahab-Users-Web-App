import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";

export default function DetailsAndSpecs({ miner }) {
  const [selected, setSelected] = useState("Features");
  return (
    <div>
      <div className="flex justify-center gap-10 border-b my-10 border-[#043377]">
        <button
          className={`px-5 py-3 cursor-pointer ease-in duration-100 ${
            selected === "Features" && "border-b border-[#07EAD3]"
          }`}
          onClick={() => setSelected("Features")}
        >
          Features
        </button>
        <button
          className={`px-5 py-3 cursor-pointer ease-in duration-100 ${
            selected === "Specification" && "border-b border-[#07EAD3]"
          }`}
          onClick={() => setSelected("Specification")}
        >
          Specifications
        </button>
      </div>
      {selected === "Features" && (
        <div>
          <p className="text-[#07EAD3] text-lg mb-5">Key Attributes</p>
          <div className="flex flex-col gap-3 mb-5">
            {miner?.features.map((item) => (
              <p key={item} className="flex gap-2 items-center">
                <GoDotFill />
                <span>{item}</span>
              </p>
            ))}
          </div>
          <p className="text-[#07EAD3] text-lg mb-5">Perfect For</p>
          <div className="flex flex-col gap-3 mb-5">
            {miner?.idealFor.map((item) => (
              <p key={item} className="flex gap-2 items-center">
                <GoDotFill />
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>
      )}
      {selected === "Specification" && (
        <div className="flex flex-col gap-3">
          <li>Power: {miner?.power} KW/h</li>
          <li>HashRate: {miner?.hashRate} TH/s</li>
          <li>Coin Type: {miner?.coin}</li>
          <li>Algorithm: {miner?.algorithm}</li>
          <li>Validity: 3 Years</li>
        </div>
      )}
    </div>
  );
}
