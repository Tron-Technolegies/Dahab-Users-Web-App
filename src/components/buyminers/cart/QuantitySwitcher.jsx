import { useScroll } from "framer-motion";
import React, { useState } from "react";

export default function QuantitySwitcher({ qty, onChange }) {
  function handleDecrease() {
    if (qty === 1) return;
    onChange(qty - 1);
  }
  function handleIncrease() {
    onChange(qty + 1);
  }
  return (
    <div className="flex items-center border border-[#76C6E036]">
      <button
        className="p-3 text-center border-r border-[#76C6E036] cursor-pointer"
        onClick={handleDecrease}
      >
        -
      </button>
      <p className="p-3 text-center">{qty}</p>
      <button
        className="p-3 text-center border-l border-[#76C6E036] cursor-pointer"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
}
