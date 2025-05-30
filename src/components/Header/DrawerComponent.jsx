import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Link, NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { IoNotifications } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function DrawerComponent({ openDrawer, setOpenDrawer }) {
  const location = useLocation();
  const { user } = useContext(UserContext);
  return (
    <Drawer
      open={openDrawer}
      anchor="right"
      onClose={() => setOpenDrawer(false)}
      slotProps={{
        paper: {
          sx: {
            backgroundColor: "#011532", // Replace with your desired color
            color: "#ffffff", // Optional text color
          },
        },
      }}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={() => setOpenDrawer(false)}
      >
        <div className="flex flex-col gap-5 items-center mt-10">
          <img
            src="/home/logo.png"
            className="w-28"
            alt="Special-offers-on-crypto-mining-machines-in-abu-dhabi-UAE"
            title="Explore top-tier CRYPTO MINING MACHINES IN UAE at Dahab Miners. Specializing in high-efficiency ASIC miners in Abu Dhabi, UAE, we offer the best solutions for crypto mining in UAE. Browse our range today and enhance your mining setup!"
          ></img>
          <div className="flex flex-col gap-5 items-start w-full p-5">
            <NavLink
              className={` ${
                location.pathname === "/" ||
                location.pathname.includes("detailed")
                  ? "text-[#07EAD3]"
                  : "text-white"
              } border-b w-full pb-2`}
              to={"/"}
            >
              Dashboard
            </NavLink>
            <NavLink
              className={` ${
                location.pathname.includes("my-miners")
                  ? "text-[#07EAD3]"
                  : "text-white"
              }  border-b w-full pb-2`}
              to={"/my-miners"}
            >
              My Miners
            </NavLink>
            <NavLink
              className={` ${
                location.pathname.includes("payouts")
                  ? "text-[#07EAD3]"
                  : "text-white"
              }  border-b w-full pb-2`}
              to={"/payouts"}
            >
              Payouts
            </NavLink>
            <NavLink
              className={` ${
                location.pathname.includes("buy")
                  ? "text-[#07EAD3]"
                  : "text-white"
              }  border-b w-full pb-2`}
              to={"/buy"}
            >
              Buy Miners
            </NavLink>
          </div>
          {!user && (
            <div className="flex flex-col gap-5 items-start w-full p-5 ">
              <Link to={"/register"} className="">
                Create Account
              </Link>
              <motion.button
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, backgroundColor: "#7decda" }} // Change color on hover
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }} // Smooth animation
                className="btn-bg text-white rounded-lg py-2"
                // onClick={handleChatClick}
              >
                <Link to={"/login"} className="px-6 py-3">
                  Login
                </Link>
              </motion.button>
            </div>
          )}
        </div>
      </Box>
    </Drawer>
  );
}
