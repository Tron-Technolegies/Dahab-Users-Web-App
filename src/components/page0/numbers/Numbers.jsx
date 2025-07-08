import React from "react";
import NumberBox from "./NumberBox";

export default function Numbers() {
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] md:py-5 py-2 my-10">
      <h3 className="text-3xl text-[#76C6E0] text-center">
        Dahab makes currencies digital
      </h3>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-3 gap-7 my-14">
        <NumberBox
          heading={"Top 10"}
          content={"One of the leading Bitcoin pools worldwide"}
          styles={"md:border-e border-[#02285F]"}
        />
        <NumberBox
          heading={"40,000 +"}
          content={"Active users worldwide"}
          styles={"md:border-e border-[#02285F]"}
        />
        <hr className="text-[#02285F] md:hidden" />
        <hr className="text-[#02285F] md:hidden" />
        <NumberBox
          heading={"10,000 +"}
          content={"ASICs in the ecosystem"}
          styles={"md:border-e border-[#02285F]"}
        />
        <NumberBox heading={"30 +"} content={"countries"} />
      </div>
    </div>
  );
}
