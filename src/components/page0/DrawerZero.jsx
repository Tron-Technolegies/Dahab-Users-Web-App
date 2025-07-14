import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";

export default function DrawerZero({ setOpenDrawer, openDrawer }) {
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
            <a href="#working" className="border-b w-full py-2">
              Working
            </a>
            <a href="#features" className="border-b w-full py-2">
              Features
            </a>
            <a href="#benefits" className="border-b w-full py-2">
              Benefits
            </a>
            <a href="#customers" className="border-b w-full py-2">
              Customers
            </a>
            <a href="#contact" className="border-b w-full py-2">
              Contact Us
            </a>
          </div>
          <Link
            to={"/dashboard"}
            className="px-4 py-2 rounded-full bg-[#07EAD3] w-fit me-auto ms-2"
          >
            Get Started
          </Link>
        </div>
      </Box>
    </Drawer>
  );
}
