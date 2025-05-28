import React from "react";

export default function StatElement1({ stat, statName }) {
  return (
    <div className="flex flex-col gap-1 rounded-md bg-[#011532] p-5">
      <p className="text-lg">{stat}</p>
      <p className="text-sm text-[#62656B]">{statName}</p>
    </div>
  );
}
