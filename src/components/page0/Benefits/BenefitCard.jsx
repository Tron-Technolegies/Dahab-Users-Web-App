import React from "react";

export default function BenefitCard({ icon, content }) {
  return (
    <div className="border border-[#76C6E0] p-5 rounded-lg flex flex-col gap-5 justify-center items-center ">
      <img src={icon} className="w-[30px]" />
      <p className="text-center">{content}</p>
    </div>
  );
}
