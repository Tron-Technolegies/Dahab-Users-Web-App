import { motion } from "framer-motion";
import React from "react";
import { FaCircle } from "react-icons/fa";

export default function DahabFeatures({ oneA }) {
  return (
    <div
      id="features"
      className={`${
        oneA
          ? "my-10 flex flex-col gap-7 items-center"
          : " px-5 md:px-10 lg:px-[120px] md:py-5 py-2 my-10 flex flex-col gap-0 items-center"
      }`}
    >
      <h3 className="text-[#76C6E0] max-w-[350px] text-3xl font-semibold text-center my-10">
        What Makes Dahab’s App Different?
      </h3>
      <div className="text-[#76C6E0] sm:text-xl text-center flex justify-around items-center lg:w-[800px] w-full">
        <p className="w-full">Real Mining</p>
        <p className="w-full border-s border-e">No Delays</p>
        <p className="w-full">No Headaches</p>
      </div>
      <motion.div
        className={`sm:p-10 p-3 flex sm:flex-row flex-col justify-between ${
          oneA ? "max-w-full" : "max-w-[1000px]"
        }  w-full my-10`}
        initial={{
          borderImageSource:
            "linear-gradient(to bottom right, #004DF480 0%, transparent 50%, transparent 50%, #0194FE80 100%)",
          borderWidth: "2px",
          borderImageSlice: 1,
          borderRadius: "12px",
          scale: 1,
        }}
        whileHover={{
          borderImageSource:
            "linear-gradient(to bottom right, #004DF480 0%, #A5E7F380 50%, #0194FE80 100%)",
          borderWidth: "2px",
          boxShadow: "0px 0px 20px rgba(1, 148, 254, 0.6)",

          transition: { duration: 0.6, ease: "easeOut" },
        }}
        style={{
          borderStyle: "solid",
        }}
      >
        <div className="p-5 w-full flex flex-col justify-between gap-10 sm:items-center">
          <div>
            <p className="text-[#76C6E0] my-5">
              With Other Mining Companies, You Deal With:
            </p>
            <div className="ms-5 flex flex-col gap-2">
              <p className="flex gap-2 items-center">
                <span className="text-[8px]">
                  <FaCircle />
                </span>
                <span>Weeks of delay for shipping and customs</span>
              </p>
              <p className="flex gap-2 items-center">
                <span className="text-[8px]">
                  <FaCircle />
                </span>
                <span>Complicated setup, deposits, and paperwork</span>
              </p>
              <p className="flex gap-2 items-center">
                <span className="text-[8px]">
                  <FaCircle />
                </span>
                <span>High risk if your miner goes offline</span>
              </p>
              <p className="flex gap-2 items-center">
                <span className="text-[8px]">
                  <FaCircle />
                </span>
                <span>Surprise repair or hosting costs</span>
              </p>
              <p className="flex gap-2 items-center">
                <span className="text-[8px]">
                  <FaCircle />
                </span>
                <span>Confusing softwares and Multiple apps</span>
              </p>
            </div>
          </div>
          <p className=" my-5 text-[#76C6E0]">
            It’s slow, risky, and frustrating - especially for beginners.
          </p>
        </div>

        <div className="sm:border-s border-[#76C6E0] p-5 w-full flex flex-col justify-between gap-10 sm:items-center">
          <div>
            <p className="text-[#76C6E0] my-5">With Dahab, It’s Seamless:</p>
            <div className="ms-5 flex flex-col gap-2">
              <p className="flex gap-2 items-center">
                <span className="text-[8px]">
                  <FaCircle />
                </span>
                <span>Miners are already online in our mining farms</span>
              </p>
              <p className="flex gap-2 items-center">
                <span className="text-[8px]">
                  <FaCircle />
                </span>
                <span>You simply buy - your Dahab Miner starts instantly</span>
              </p>
              <p className="flex gap-2 items-center">
                <span className="text-[8px]">
                  <FaCircle />
                </span>
                <span>No setup, no repair worries, no delays</span>
              </p>
              <p className="flex gap-2 items-center">
                <span className="text-[8px]">
                  <FaCircle />
                </span>
                <span>Daily payouts based on your share of total power</span>
              </p>
              <p className="flex gap-2 items-center">
                <span className="text-[8px]">
                  <FaCircle />
                </span>
                <span>
                  24/7 dashboard to track earnings and control payouts
                </span>
              </p>
            </div>
          </div>

          <p className=" my-5 text-[#76C6E0]">Real mining. Zero stress.</p>
        </div>
      </motion.div>
    </div>
  );
}
