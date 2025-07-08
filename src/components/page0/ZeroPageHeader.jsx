import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function ZeroPageHeader() {
  return (
    <header
      //   id="navbar"
      className="md:h-20 h-16 px-5 md:px-10 lg:px-[120px] xl:px-[180px] md:py-5 py-2 flex justify-between items-center bg-[#000518] "
    >
      <Link
        to={"/"}
        className="md:w-36 md:h-14 w-28 h-12 mt-5"
        onClick={() => window.scrollTo(0, 0)}
      >
        <img
          src="/home/logo.png"
          alt="Special-offers-on-crypto-mining-machines-in-abu-dhabi-UAE"
          title="Explore top-tier CRYPTO MINING MACHINES IN UAE at Dahab Miners. Specializing in high-efficiency ASIC miners in Abu Dhabi, UAE, we offer the best solutions for crypto mining in UAE. Browse our range today and enhance your mining setup!"
        ></img>
      </Link>
      {/* <nav className="md:flex lg:gap-5 gap-3 xl:gap-10 text-sm xl:text-base font-medium hidden">
        <a>About</a>
        <a>For Who</a>
        <a>Hardware</a>
        <a>Benefits</a>
        <a>Terms</a>
        <a>About Us</a>
      </nav> */}
      <Link
        to={"/dashboard"}
        className="px-4 py-2 rounded-full bg-[#07EAD3] w-fit "
      >
        Get Started
      </Link>
    </header>
  );
}
