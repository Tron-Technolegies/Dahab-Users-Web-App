import React from "react";

const getGradientClass = (percentage) => {
  if (percentage <= 25) {
    return `bg-[#3195d3]`;
  } else if (percentage <= 50) {
    return `bg-gradient-to-r from-[#3195d3] to-[#1142ab]`;
  } else if (percentage <= 75) {
    return `bg-gradient-to-r from-[#3195d3] via-[#1142ab] to-[#061c4b]`;
  } else {
    return `bg-gradient-to-r from-[#3195d3] via-[#1142ab] via-[#061c4b] to-[#040f27]`;
  }
};

export default function DangerBar({ percentage }) {
  const gradientClass = getGradientClass(percentage);
  return (
    <div
      className="w-full h-3 bg-gray-200 rounded overflow-hidden 
    "
    >
      <div
        className={`h-full ${gradientClass} transition-all duration-300`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
