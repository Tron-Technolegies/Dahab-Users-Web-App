import React from "react";

export default function CurrentBalance() {
  return (
    <div className="p-2 border border-[#42E8E03B] rounded-md w-full h-fit">
      <div className="rounded-md p-5 bg-[#011532] flex justify-center items-center gap-5">
        <img src="/home/bitcoin.png" className="w-10" />
        <div>
          <p className="text-xl text-[#587078]">Current Balance</p>
          <p className="text-2xl">0.0005897 BTC</p>
        </div>
      </div>
    </div>
  );
}
