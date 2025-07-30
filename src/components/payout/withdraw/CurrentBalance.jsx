import React, { useContext } from "react";
import { UserContext } from "../../../UserContext";

export default function CurrentBalance() {
  const { user } = useContext(UserContext);
  return (
    <div
      className="p-2 border border-[#42E8E03B] rounded-md w-full h-fit"
      id="balance-box"
    >
      <div className="rounded-md p-5 bg-[#011532] flex justify-center items-center gap-5">
        <img src="/home/bitcoin.png" className="w-10" />
        <div>
          <p className="text-xl text-[#587078]">Current Balance</p>
          <p className="text-2xl">{user?.currentBalance} BTC</p>
        </div>
      </div>
    </div>
  );
}
