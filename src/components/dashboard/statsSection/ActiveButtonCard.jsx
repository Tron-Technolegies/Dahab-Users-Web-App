import React from "react";

export default function ActiveButtonCard({ icon, name, count }) {
  return (
    <div className="flex gap-2 items-center px-4 py-4 bg-[#011532] w-[180px] rounded-lg justify-center">
      <img src={icon} />
      <p>{name}</p>
      <p>({count})</p>
    </div>
  );
}
