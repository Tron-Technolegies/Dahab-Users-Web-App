import React from "react";

export default function PayoutTopSection({ active, setActive }) {
  return (
    <div className="flex gap-1">
      <button
        onClick={() => setActive("rewards")}
        className={`px-4 py-1  cursor-pointer duration-100 ease-in-out border-r border-l rounded-b-md border-b ${
          active === "rewards"
            ? "text-white border-[#0194FE] scale-105"
            : "text-gray-500 border-gray-400"
        } `}
      >
        Rewards
      </button>
      <button
        onClick={() => setActive("payouts")}
        className={`px-4 py-1 cursor-pointer duration-100 ease-in-out border-b border-l border-r rounded-b-md ${
          active === "payouts"
            ? "text-white  border-[#0194FE] scale-105"
            : "text-gray-500 border-gray-600"
        } `}
      >
        Payouts
      </button>
      <button
        onClick={() => setActive("mode")}
        className={`px-4 py-1 cursor-pointer duration-100 ease-in-out border-b border-l border-r rounded-b-md ${
          active === "mode"
            ? "text-white  border-[#0194FE] scale-105"
            : "text-gray-500 border-gray-600"
        } `}
      >
        Payout-mode
      </button>
    </div>
  );
}
