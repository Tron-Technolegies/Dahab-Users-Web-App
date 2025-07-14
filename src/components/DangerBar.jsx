import React from "react";

const getGradientClass = (percentage) => {
  if (percentage <= 25) {
    return `bg-[#0c399bfc]`;
  } else if (percentage <= 50) {
    return `bg-gradient-to-r from-[#0c399bfc] to-[#06266afc]`;
  } else if (percentage <= 75) {
    return `bg-gradient-to-r from-[#0c399bfc] via-[#06266afc] to-[#031b4dfc]`;
  } else {
    return `bg-gradient-to-r from-[#0c399bfc] via-[#06266afc] via-[#031b4dfc] to-[#040f27]`;
  }
};

export default function DangerBar({ percentage }) {
  const gradientClass = getGradientClass(percentage);
  return (
    <div className="w-full h-3 bg-gray-200 rounded overflow-hidden bg-[#0c399bfc]">
      <div
        className={`h-full ${gradientClass} transition-all duration-300`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
