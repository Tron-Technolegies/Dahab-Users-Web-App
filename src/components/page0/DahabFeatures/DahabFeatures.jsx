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
              With other mining companies, you usually have to:
            </p>
            <div className="ms-5 flex flex-col gap-2">
              <p className="flex gap-2 items-center">
                <span className="text-[8px]">
                  <FaCircle />
                </span>
                <span>Wait weeks for your machine to arrive</span>
              </p>
              <p className="flex gap-2 items-center">
                <span className="text-[8px]">
                  <FaCircle />
                </span>
                <span>Deal with customs, shipping, and import taxes</span>
              </p>
              <p className="flex gap-2 items-center">
                <span className="text-[8px]">
                  <FaCircle />
                </span>
                <span>Pay setup fees, deposits, and complicated paperwork</span>
              </p>
              <p className="flex gap-2 items-center">
                <span className="text-[8px]">
                  <FaCircle />
                </span>
                <span>Hope everything gets connected properly</span>
              </p>
            </div>
          </div>
          <p className=" my-5 text-[#76C6E0]">
            It’s slow, risky, and frustrating — especially for beginners.
          </p>
        </div>

        <div className="sm:border-s border-[#76C6E0] p-5 w-full flex flex-col justify-between gap-10 sm:items-center">
          <div>
            <p className="text-[#76C6E0] my-5">
              With Dahab, you skip all of that:
            </p>
            <div className="ms-5 flex flex-col gap-2">
              <p className="flex gap-2 items-center">
                <span className="text-[8px]">
                  <FaCircle />
                </span>
                <span>The machines are already online and running</span>
              </p>
              <p className="flex gap-2 items-center">
                <span className="text-[8px]">
                  <FaCircle />
                </span>
                <span>
                  You simply buy — and your miner starts working instantly
                </span>
              </p>
              <p className="flex gap-2 items-center">
                <span className="text-[8px]">
                  <FaCircle />
                </span>
                <span>No hidden fees, no deposits, no delays</span>
              </p>
              <p className="flex gap-2 items-center">
                <span className="text-[8px]">
                  <FaCircle />
                </span>
                <span>Full transparency, full control</span>
              </p>
              <p className="flex gap-2 items-center">
                <span className="text-[8px]">
                  <FaCircle />
                </span>
                <span>
                  Track your earnings live through your personal dashboard
                </span>
              </p>
            </div>
          </div>

          <p className=" my-5 text-[#76C6E0]">
            Real mining made instant — and effortless.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
