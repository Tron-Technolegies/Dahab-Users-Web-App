import { motion } from "framer-motion";
import React from "react";
import FooterLinks from "./FooterLinks";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

export default function Footer({ isZero }) {
  return (
    <motion.footer
      className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] pt-5 bg-[#000618]"
      initial={{
        borderImageSource:
          "linear-gradient(to bottom right, #004DF480 0%, transparent 50%, transparent 50%, #0194FE80 100%)",
        borderWidth: "2px",
        borderImageSlice: 1,
        borderRadius: "12px",
        boxShadow: "0px 0px 20px rgba(1, 148, 254, 0.6)",
      }}
      style={{
        borderStyle: "solid",
      }}
    >
      <div className="flex lg:flex-row flex-col gap-10 justify-between items-start lg:items-center">
        <div className="flex flex-col">
          <a
            href="https://dahabminers.com/"
            className="w-[170px] h-[170px] rounded-md overflow-hidden"
          >
            <img
              src="/home/logo.png"
              className="overflow-hidden"
              alt="asic-miners-in-abu-dhabi-UAE-for-new-miners"
              title="Dahab Miners is the premier crypto mining service in UAE Explore our Bitcoin machines in Abu Dhabi and maximize your cryptocurrency earnings!"
            ></img>
          </a>
          <div>
            <button></button>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-sm font-medium text-white">
          {!isZero && (
            <>
              <Link to={"/dashboard"}>Dashboard</Link>
              <Link to={"/dashboard/my-miners"}>My Miners</Link>
              <Link to={"/dashboard/payouts"}>Payout</Link>
              <Link to={"/dashboard/buy"}>Buy Miners</Link>
            </>
          )}
          <div className="flex gap-5 text-base font-normal text-white mt-5">
            <FooterLinks
              link={"https://www.instagram.com/dahabminersuae/"}
              icon={<FaInstagram />}
            />
            <FooterLinks
              link={"https://www.facebook.com/dahabminers"}
              icon={<FaFacebookF />}
            />
            <FooterLinks
              link={"https://www.linkedin.com/company/thedahab-miners"}
              icon={<FaLinkedinIn />}
            />
          </div>
        </div>
        <div className="bg-[#030815] rounded-md p-5 max-w-[400px]">
          <p className="text-lg font-semibold text-white lg:text-center text-left">
            Contact Us
          </p>
          <div className="flex flex-col gap-7 text-sm font-medium text-white my-5">
            {/* <div className="flex sm:flex-row flex-col gap-5 justify-between items-start"> */}
            <a
              className="flex gap-3 items-start"
              href="https://maps.app.goo.gl/PCJcJS8TUPDGca6HA"
              target="_blank"
            >
              <div>
                <CiLocationOn />
              </div>
              <p>
                Saif Thamer General Transport Establishment building, Al
                Jubailah, Liwa, Abu Dhabi
              </p>
            </a>
            {/* <div className="text-4xl font-thin h-10 border-l sm:block hidden"></div> */}
            <a
              className="flex gap-3 items-start"
              href="https://maps.app.goo.gl/nvicitwD6T9yF4Ei8"
              target="_blank"
            >
              <div>
                <CiLocationOn />
              </div>
              <p>WM92+VCQ Alem Gena, Ethiopia</p>
            </a>
            {/* </div> */}

            <div className="flex gap-3 items-center">
              <div>
                <CiMail />
              </div>
              <p
                className="cursor-pointer"
                onClick={() =>
                  (window.location.href = `mailto:support@dahabminers.ae`)
                }
              >
                support@dahabminers.ae
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <div>
                <CiPhone />
              </div>
              <p
                className="cursor-pointer"
                onClick={() => (window.location.href = `tel:${+971509669623}`)}
              >
                +971509669623
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-center items-center copyright-bg py-1">
        <p className="text-black text-xs font-normal text-center">
          © 2025 Dahab Miners. All Rights Reserved
        </p>
      </div>
    </motion.footer>
  );
}
