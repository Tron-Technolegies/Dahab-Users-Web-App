import React from "react";
import HowItWorkCard from "./HowItWorkCard";

export default function HowItWorks() {
  return (
    <div className="md:my-20 my-10 flex flex-col gap-3">
      <h2 className="text-3xl text-center">How It Works</h2>
      <p className="text-center">Start mining with just a few simple steps.</p>
      <div className="w-full grid md:grid-cols-2 justify-items-center-safe gap-10 gap-y-20 my-10">
        <HowItWorkCard
          heading={"Create an Account"}
          content={"Sign up on Dahab Miners in just a few clicks."}
          number={1}
        />
        <HowItWorkCard
          heading={"Choose Your Miner"}
          content={"Select a mining package that fits your budget and goals."}
          number={2}
        />
        <HowItWorkCard
          heading={"Start Mining Instantly"}
          content={
            "Our machines are pre-installed and ready to run. No setup delays."
          }
          number={3}
        />
        <HowItWorkCard
          heading={"Track & Earn"}
          content={
            "Monitor your mining output and earnings in real-time from your dashboard."
          }
          number={4}
        />
      </div>
    </div>
  );
}
