import React from "react";
import ZeroLanding from "../../components/page0/ZeroLanding";
import ZeroPageHeader from "../../components/page0/ZeroPageHeader";
import HowDoesItWork from "../../components/page0/HowDoesItWork/HowDoesItWork";
import CollectCoins from "../../components/page0/collectCoins/CollectCoins";
import DahabFeatures from "../../components/page0/DahabFeatures/DahabFeatures";
import PayoutInfo from "../../components/page0/payoutInfo/PayoutInfo";

export default function Page0() {
  return (
    <div className="">
      <ZeroPageHeader />
      <ZeroLanding />
      <HowDoesItWork />
      <CollectCoins />
      <DahabFeatures />
      <PayoutInfo />
    </div>
  );
}
