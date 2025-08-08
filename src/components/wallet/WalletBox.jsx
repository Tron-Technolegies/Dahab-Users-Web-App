import React, { useContext } from "react";
import { UserContext } from "../../UserContext";

export default function WalletBox() {
  const { user, estHostingFee, estDaysRemaining } = useContext(UserContext);
  return (
    <div className="p-7 bg-[#0194FE] max-w-[700px] mx-auto w-full rounded-lg">
      <div className="flex justify-between items-center pb-5 border-b border-[#26DDFF5E]">
        <div className="flex gap-2 items-center">
          <img src="/wallet/icon-1.png" className="w-12" />
          <p>Available Balance</p>
        </div>
        <button className="flex gap-2 items-center px-3 py-1 border rounded-lg border-[#26DDFF5E] cursor-pointer">
          <img src="/wallet/icon-2.png" className="w-5" />
          Top-up
        </button>
      </div>
      <div className="py-5 border-b border-[#26DDFF5E] flex justify-around items-center">
        <p className={`text-3xl ${user?.walletBalance <= 0 && "text-red-600"}`}>
          {user?.walletBalance?.toFixed(2)} <span className="text-sm">AED</span>
        </p>
        <p className="text-sm text-[#c1e4fd]">
          Est. Hosting Fee/Day: {estHostingFee?.toFixed(2)} AED
        </p>
      </div>
      <div className="py-5">
        <p className="text-sm text-[#c1e4fd] text-center">
          Est. Days Remaining: {Math.floor(estDaysRemaining)} days
        </p>
      </div>
    </div>
  );
}
