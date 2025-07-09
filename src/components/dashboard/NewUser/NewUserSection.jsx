import React from "react";
import NewUserLanding from "./NewUserLanding";
import Numbers2 from "./Numbers2";
import HowDoesItWork from "../../page0/HowDoesItWork/HowDoesItWork";
import DahabFeatures from "../../page0/DahabFeatures/DahabFeatures";
import PayoutInfo from "../../page0/payoutInfo/PayoutInfo";
import CollectCoins from "../../page0/collectCoins/CollectCoins";
import HowItWorks from "./HowItWorks/HowItWorks";

export default function NewUserSection() {
  return (
    <div className="w-full">
      <NewUserLanding />
      <Numbers2 />
      <HowItWorks />
      <HowDoesItWork oneA />
      <DahabFeatures oneA />
      <PayoutInfo oneA />
      <CollectCoins oneA />
    </div>
  );
}
