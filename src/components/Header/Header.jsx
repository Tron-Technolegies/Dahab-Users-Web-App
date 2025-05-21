import { motion } from "framer-motion";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="md:h-20 h-16 px-5 md:px-10 lg:px-[120px] xl:px-[180px] md:py-5 py-2 flex justify-between items-center">
      <Link
        to={"/"}
        className="w-36 h-14 mt-5"
        onClick={() => window.scrollTo(0, 0)}
      >
        <img
          src="/home/logo.png"
          alt="Special-offers-on-crypto-mining-machines-in-abu-dhabi-UAE"
          title="Explore top-tier CRYPTO MINING MACHINES IN UAE at Dahab Miners. Specializing in high-efficiency ASIC miners in Abu Dhabi, UAE, we offer the best solutions for crypto mining in UAE. Browse our range today and enhance your mining setup!"
        ></img>
      </Link>
      <nav className="lg:flex gap-5 xl:gap-10 text-sm xl:text-base font-medium hidden">
        <NavLink className={"text-white"} to={"/"}>
          Dashboard
        </NavLink>
        <NavLink className={"text-white"} to={"/my-miners"}>
          My Miners
        </NavLink>
        <NavLink className={"text-white"} to={"/payouts"}>
          Payouts
        </NavLink>
        <NavLink className={"text-white"} to={"/buy"}>
          Buy Miners
        </NavLink>
      </nav>
      <div className="flex gap-5 items-center ">
        <Link to={"/register"}>Create Account</Link>
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, backgroundColor: "#7decda" }} // Change color on hover
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }} // Smooth animation
          className="btn-bg text-white rounded-lg hidden py-2 lg:block"
          // onClick={handleChatClick}
        >
          <Link to={"/login"} className="px-6 py-3">
            Login
          </Link>
        </motion.button>
      </div>

      {/* <button
        className="lg:hidden text-white text-xl"
        onClick={() => setShowSmallBar(!showSmallBar)}
      >
        <RxHamburgerMenu />
      </button>
      {showSmallBar && (
        <div className="absolute w-full top-16 left-0 z-20 animate-slideInTop">
          <SmallHeader setSmallBar={setShowSmallBar} />
        </div>
      )} */}
    </header>
  );
}
