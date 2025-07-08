import React from "react";
import NumberBox from "../../page0/numbers/NumberBox";

export default function Numbers2() {
  return (
    <div className="my-20">
      <h3 className="text-3xl text-[#76C6E0] text-center">
        Dahab by the Numbers
      </h3>
      <p className="text-sm my-5 text-center">
        Powering the future of Bitcoin mining — one machine at a time.
      </p>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-3 gap-7 my-14">
        <NumberBox
          heading={"10,000+ Miners Under Management"}
          content={
            "Thousands of machines running across our facilities in the UAE and Ethiopia."
          }
          styles={"md:border-e border-[#02285F]"}
        />
        <NumberBox
          heading={"Lowest Hosting Rates in the Industry"}
          content={
            "Hosting starts from just $0.051/kWh — no deposits, no surprises."
          }
          styles={"md:border-e border-[#02285F]"}
        />
        <hr className="text-[#02285F] md:hidden" />
        <hr className="text-[#02285F] md:hidden" />
        <NumberBox
          heading={"100% Managed by Our In-House Team"}
          content={
            "From installation to maintenance — no outsourcing, no middlemen."
          }
          styles={"md:border-e border-[#02285F]"}
        />
        <NumberBox
          heading={"Trusted by Clients in 20+ Countries"}
          content={
            "From individuals to institutions — people choose Dahab for real mining."
          }
        />
      </div>
    </div>
  );
}
