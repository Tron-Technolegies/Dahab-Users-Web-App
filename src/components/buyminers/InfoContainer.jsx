import React from "react";
import DangerBar from "../DangerBar";

export default function InfoContainer({ name, percent }) {
  return (
    <div className="flex items-center justify-between gap-5">
      <p className="w-[120px] text-[#07EAD3]">{name}</p>
      <DangerBar percentage={percent} />
    </div>
  );
}
