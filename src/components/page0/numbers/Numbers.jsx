import React from "react";
import NumberBox from "./NumberBox";

export default function Numbers() {
  return (
    <div className="px-5 md:px-10 lg:px-[120px] md:py-5 py-2 my-20">
      <h3 className="text-3xl text-[#76C6E0] text-center">
        Dahab by the Numbers
      </h3>
      {/* <p className="text-sm my-5 text-center">
        Powering the future of Bitcoin mining — one machine at a time.
      </p> */}
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-3 gap-7 my-14">
        <NumberBox
          heading={"5,000+ Miners Under Management"}
          content={"Running across our UAE and Ethiopia facilities"}
          styles={"md:border-e border-[#02285F]"}
        />
        <NumberBox
          heading={"Lowest Hosting Rates - From $0.055/kWh"}
          content={"No deposits, Repair or Setup Fees."}
          styles={"md:border-e border-[#02285F]"}
        />
        <hr className="text-[#02285F] md:hidden" />
        <hr className="text-[#02285F] md:hidden" />
        <NumberBox
          heading={"100% Operated by Our Own Team"}
          content={"No middlemen. No outsourcing."}
          styles={"md:border-e border-[#02285F]"}
        />
        <NumberBox
          heading={"Clients in 20+ Countries"}
          content={"From everyday users to global investors"}
        />
      </div>
    </div>
  );
}
