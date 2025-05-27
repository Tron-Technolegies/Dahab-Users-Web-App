import React, { useState } from "react";
import { Line, LineChart } from "recharts";

const data1 = [
  { x: 1, y: 2 },
  { x: 2, y: 5.5 },
  { x: 3, y: 2 },
  { x: 5, y: 8.5 },
  { x: 8, y: 1.5 },
  { x: 10, y: 5 },
];

const data2 = [
  { x: 1, y: 4 },
  { x: 2, y: 6 },
  { x: 3, y: 9 },
  { x: 5, y: 10 },
  { x: 8, y: 16 },
  { x: 10, y: 5 },
];
const data3 = [
  { x: 1, y: 8 },
  { x: 2, y: 2 },
  { x: 3, y: 6 },
  { x: 5, y: 8 },
  { x: 8, y: 16 },
  { x: 10, y: 5 },
];
export default function GraphStat() {
  const [active, setActive] = useState("24");
  return (
    <div className="w-full text-black">
      <div className="flex justify-between items-center w-full">
        <p className="text-lg font-semibold">Earnings</p>
        <div className="text-[#A2A2A2] flex gap-3">
          <button
            className={`${active === "24" && "text-[#0194FE]"} cursor-pointer`}
            onClick={() => setActive("24")}
          >
            24 hr
          </button>
          <button
            className={`${active === "7" && "text-[#0194FE]"} cursor-pointer`}
            onClick={() => setActive("7")}
          >
            7 Day
          </button>
          <button
            className={`${active === "30" && "text-[#0194FE]"} cursor-pointer`}
            onClick={() => setActive("30")}
          >
            30 Day
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <LineChart
          width={350}
          height={200}
          data={active === "24" ? data1 : active === "7" ? data2 : data3}
        >
          <Line type="monotone" dataKey="y" stroke="#1EA8FC" dot={true} />
        </LineChart>
      </div>
    </div>
  );
}
