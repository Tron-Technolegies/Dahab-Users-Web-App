import React from "react";

export default function BenefitCard({ icon, content, sub }) {
  return (
    <div className="border border-[#76C6E0] p-5 rounded-lg flex flex-col gap-5 justify-center items-center ">
      <img src={icon} className="w-[30px]" />
      <p className="text-center">{content}</p>
      <p className="text-center text-sm text-[#9F9F9F]">{sub}</p>
    </div>
  );
}
