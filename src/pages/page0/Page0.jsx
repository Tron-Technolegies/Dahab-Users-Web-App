import React from "react";
import ZeroLanding from "../../components/page0/ZeroLanding";
import ZeroPageHeader from "../../components/page0/ZeroPageHeader";
import HowDoesItWork from "../../components/page0/HowDoesItWork/HowDoesItWork";
import CollectCoins from "../../components/page0/collectCoins/CollectCoins";
import DahabFeatures from "../../components/page0/DahabFeatures/DahabFeatures";
import PayoutInfo from "../../components/page0/payoutInfo/PayoutInfo";
import JoinedUsSection from "../../components/page0/joinedUs/JoinedUsSection";
import HardwareSection from "../../components/page0/hardware/HardwareSection";
import Benefits from "../../components/page0/Benefits/Benefits";
import Numbers from "../../components/page0/numbers/Numbers";
import Form from "../../components/page0/form/Form";
import Footer from "../../components/footer/Footer";

export default function Page0() {
  return (
    <div className="">
      <ZeroPageHeader />
      <ZeroLanding />
      <HowDoesItWork />
      <CollectCoins />
      <DahabFeatures />
      <PayoutInfo />
      <JoinedUsSection />
      <HardwareSection />
      <Benefits />
      <Numbers />
      <Form />
      <Footer />
    </div>
  );
}
