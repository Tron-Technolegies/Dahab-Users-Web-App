import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { IoNotifications } from "react-icons/io5";
import { FaUserCircle, FaAlignRight } from "react-icons/fa";
import DrawerComponent from "./DrawerComponent";
import AccountSettings from "./AccountSettings";

export default function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { user } = useContext(UserContext);
  const location = useLocation();

  return (
    <header className="md:h-20 h-16 px-5 md:px-10 lg:px-[120px] xl:px-[180px] md:py-5 py-2 flex justify-between items-center">
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
      <nav className="md:flex lg:gap-5 gap-3 xl:gap-10 text-sm xl:text-base font-medium hidden">
        <NavLink
          className={` ${
            location.pathname === "/" || location.pathname.includes("detailed")
              ? "text-[#07EAD3]"
              : "text-white"
          }`}
          to={"/"}
        >
          Dashboard
        </NavLink>
        <NavLink
          className={` ${
            location.pathname.includes("my-miners")
              ? "text-[#07EAD3]"
              : "text-white"
          }`}
          to={"/my-miners"}
        >
          My Miners
        </NavLink>
        <NavLink
          className={` ${
            location.pathname.includes("payouts")
              ? "text-[#07EAD3]"
              : "text-white"
          }`}
          to={"/payouts"}
        >
          Payouts
        </NavLink>
        <NavLink
          className={` ${
            location.pathname.includes("buy") ? "text-[#07EAD3]" : "text-white"
          }`}
          to={"/buy"}
        >
          Buy Miners
        </NavLink>
      </nav>
      {user ? (
        <div className="flex gap-2 items-center text-2xl">
          <span className="text-[#07EAD3]">
            <IoNotifications />
          </span>
          <AccountSettings user={user} />
          <p className="text-xl md:hidden" onClick={() => setOpenDrawer(true)}>
            <FaAlignRight />
          </p>
        </div>
      ) : (
        <div className="flex gap-5 items-center ">
          <Link to={"/register"} className="md:block hidden">
            Create Account
          </Link>
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, backgroundColor: "#7decda" }} // Change color on hover
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }} // Smooth animation
            className="btn-bg text-white rounded-lg hidden py-2 md:block"
            // onClick={handleChatClick}
          >
            <Link to={"/login"} className="px-6 py-3">
              Login
            </Link>
          </motion.button>
        </div>
      )}
      {!user && (
        <p className="text-xl md:hidden" onClick={() => setOpenDrawer(true)}>
          <FaAlignRight />
        </p>
      )}
      <DrawerComponent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </header>
  );
}
