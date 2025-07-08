import { motion } from "framer-motion";
import React from "react";
import InfoContainer from "../../buyminers/InfoContainer";
import { Link } from "react-router-dom";

function HardwareSection() {
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] md:py-5 py-2 my-10">
      <h3 className="text-3xl text-[#76C6E0] font-semibold text-center">
        We offer top hardware directly from leading manufacturers
      </h3>
      <div className="flex justify-center gap-5 my-10">
        <img src="/page0/icon-5.png" className="h-[50px] object-cover" />
        <img src="/page0/icon-6.png" className="h-[50px] object-cover" />
        <img src="/page0/icon-7.png" className="h-[50px] object-cover" />
      </div>
      <motion.div
        className="p-10 max-w-[1000px] mx-auto flex md:flex-row flex-col-reverse gap-10 items-center"
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
        <img src="/page0/icon-1.png" className="max-w-[300px] object-cover" />
        <div className="flex flex-col gap-5">
          <h4 className="text-2xl text-[#1ECBAF] md:text-left text-center">
            Bitmain Antminer S19J Pro (100Th)
          </h4>
          <p className="text-sm md:text-left text-justify">
            The Bitmain Antminer S19J Pro (100Th) is a high-performance Bitcoin
            miner known for its efficiency and reliability. It delivers 100
            terahashes per second, making it ideal for maximizing mining
            profits.
          </p>
          <div className="w-full flex flex-col gap-3 justify-center">
            <div className="justify-between">
              <p>
                <span className="text-[#07EAD3]">Coin</span> - BTC
              </p>
            </div>
            <InfoContainer name={"Investment"} percent={50} />
            <InfoContainer name={"Revenue"} percent={60} />
            <InfoContainer name={"Efficiency"} percent={70} />
            <InfoContainer name={"Risk"} percent={20} />
            <InfoContainer name={"Hosting"} percent={40} />
          </div>
          <Link
            to={"/login"}
            className="px-4 py-2 rounded-full bg-[#07EAD3] w-fit md:me-auto mx-auto "
          >
            Get Started Now
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default HardwareSection;
