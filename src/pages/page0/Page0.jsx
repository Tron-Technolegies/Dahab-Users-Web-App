import React from "react";
import ZeroLanding from "../../components/page0/ZeroLanding";
import ZeroPageHeader from "../../components/page0/ZeroPageHeader";
import HowDoesItWork from "../../components/page0/HowDoesItWork/HowDoesItWork";

export default function Page0() {
  return (
    <div className="">
      <ZeroPageHeader />
      <ZeroLanding />
      <HowDoesItWork />
    </div>
  );
}
