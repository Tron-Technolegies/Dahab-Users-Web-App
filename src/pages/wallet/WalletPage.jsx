import React from "react";
import WalletBox from "../../components/wallet/WalletBox";
import TransactionHistory from "../../components/wallet/TransactionHistory";
import ProfitModeTable from "../../components/wallet/ProfitModeTable";

export default function WalletPage() {
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col gap-5">
      <p className="text-2xl text-[#76C6E0]">My Wallet</p>
      <WalletBox />
      <TransactionHistory />
      <ProfitModeTable />
    </div>
  );
}
