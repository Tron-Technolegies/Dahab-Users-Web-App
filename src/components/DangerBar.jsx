import React from "react";

const getGradientClass = (percentage) => {
  if (percentage <= 25) {
    return `bg-green-500`;
  } else if (percentage <= 50) {
    return `bg-gradient-to-r from-green-500 to-yellow-400`;
  } else if (percentage <= 75) {
    return `bg-gradient-to-r from-green-500 via-yellow-400 to-orange-500`;
  } else {
    return `bg-gradient-to-r from-green-500 via-yellow-400 via-orange-500 to-red-600`;
  }
};

export default function DangerBar({ percentage }) {
  const gradientClass = getGradientClass(percentage);
  return (
    <div className="w-full h-3 bg-gray-200 rounded overflow-hidden">
      <div
        className={`h-full ${gradientClass} transition-all duration-300`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
