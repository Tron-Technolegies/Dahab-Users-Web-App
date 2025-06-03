import React from "react";

export default function PayoutTopSection({ active, setActive }) {
  return (
    <div className="flex gap-1">
      <button
        onClick={() => setActive("payouts")}
        className={`px-4 py-2 cursor-pointer duration-100 ease-in-out ${
          active === "payouts"
            ? "text-white border-b border-[#0194FE]"
            : "text-gray-500"
        } `}
      >
        Payouts
      </button>
      <button
        onClick={() => setActive("rewards")}
        className={`px-4 py-2 cursor-pointer duration-100 ease-in-out ${
          active === "rewards"
            ? "text-white border-b border-[#0194FE]"
            : "text-gray-500"
        } `}
      >
        Rewards
      </button>
    </div>
  );
}
