import React, { useContext, useEffect, useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoIosTrendingUp } from "react-icons/io";
import DangerBar from "../../DangerBar";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { CalculatorContext } from "../../../CalculatorContext";

export default function ProductDescription({ miner }) {
  const { thPerDay } = useContext(CalculatorContext);
  const [btcGen, setBtcGen] = useState(0);
  const [hosting, setHosting] = useState(0);
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);

  useEffect(() => {
    if (miner) {
      setBtcGen(Number(thPerDay) * Number(miner.hashRate) * 30);
      setHosting(Number(miner.hostingFeePerKw) * Number(miner.power) * 24 * 30);
    }
  }, [miner]);
  return (
    <div className="p-3 w-full flex flex-col gap-5">
      <h1 className="md:text-2xl text-xl text-[#1ECBAF] lg:text-left text-center font-semibold">
        {miner?.name}
      </h1>
      <p className="lg:text-left md:text-base text-sm text-justify font-semibold">
        {miner?.subtitle}
      </p>
      <p className="lg:text-left md:text-base text-sm text-justify">
        {miner?.description}
      </p>
      <div className="relative w-full flex flex-col gap-3 justify-center">
        <div className="justify-between">
          <p>
            <span className="text-[#07EAD3]">Coin</span> - BTC
          </p>
        </div>
        <div className="w-full flex flex-col gap-1">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-3 text-sm">
              <IoIosTrendingUp className="text-[#76C6E0]" />
              <p className="text-gray-300">Bitcoin Generation</p>
              <span
                className="opacity-50 cursor-pointer"
                onMouseEnter={() => setShowInfo1(true)}
                onMouseLeave={() => setShowInfo1(false)}
              >
                <IoInformationCircleOutline />
              </span>
            </div>
            <p className="text-sm text-gray-300">{btcGen.toFixed(6)}</p>
          </div>
          <DangerBar percentage={70} />
        </div>
        <div className="w-full flex flex-col gap-1">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-3 text-sm">
              <HiOutlineCurrencyDollar className="text-[#76C6E0]" />
              <p className="text-gray-300">Hosting Fee</p>
              <span
                className="opacity-50 cursor-pointer"
                onMouseEnter={() => setShowInfo2(true)}
                onMouseLeave={() => setShowInfo2(false)}
              >
                <IoInformationCircleOutline />
              </span>
            </div>
            <p className="text-sm text-gray-300">{hosting.toFixed(2)}</p>
          </div>
          <DangerBar percentage={30} />
        </div>
        {showInfo1 && (
          <div
            className="absolute bottom-0 bg-black p-5 rounded-lg z-10 lg:w-[400px] w-[300px] flex flex-col gap-3 items-center"
            onMouseEnter={() => setShowInfo1(true)}
            onMouseLeave={() => setShowInfo1(false)}
          >
            <p className="text-center">{"Bitcoin Generation Per Month"}</p>
            <p className="text-sm font-semibold">
              {`HashRate: ${miner?.hashRate} TH/s`}
            </p>
            <p className="text-sm font-semibold">{`BTC/TH/Day: ${thPerDay.toFixed(
              8
            )} BTC`}</p>
            <div
              className="text-xs text-justify flex flex-col gap-1"
              dangerouslySetInnerHTML={{
                __html: `BTC/Month =  ${miner?.hashRate} x ${thPerDay.toFixed(
                  8
                )} x 30`,
              }}
            ></div>
          </div>
        )}
        {showInfo2 && (
          <div
            className="absolute bottom-0 bg-black p-5 rounded-lg z-10 lg:w-[400px] w-[300px] flex flex-col gap-3 items-center"
            onMouseEnter={() => setShowInfo2(true)}
            onMouseLeave={() => setShowInfo2(false)}
          >
            <p className="text-center">{"Hosting Fee Per Month"}</p>
            <p className="text-sm font-semibold">{`Power: ${miner?.power} KW`}</p>
            <p className="text-sm font-semibold">{`Hosting Fee Per KW: $ ${miner?.hostingFeePerKw} `}</p>
            <div
              className="text-xs text-justify flex flex-col gap-1"
              dangerouslySetInnerHTML={{
                __html: `Hosting Fee per month = ${miner?.power} x ${miner?.hostingFeePerKw} x 24hr x 30`,
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}
