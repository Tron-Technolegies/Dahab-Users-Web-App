import React from "react";

export default function ActiveButtonCard({ icon, name, count }) {
  return (
    <div className="flex gap-2 items-center px-4 py-1 bg-[#011532] rounded-lg">
      <img src={icon} />
      <p>{name}</p>
      <p>({count})</p>
    </div>
  );
}
