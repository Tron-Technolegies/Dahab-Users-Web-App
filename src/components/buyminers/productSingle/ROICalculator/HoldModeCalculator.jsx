import React, { useContext, useState } from "react";
import { FaBitcoin } from "react-icons/fa";
import { GiMining } from "react-icons/gi";
import { motion } from "framer-motion";
import FieldItem from "../../../dashboard/FinancialAnalysis/FieldItem";
import { CalculatorContext } from "../../../../CalculatorContext";

export default function HoldModeCalculator({ miner }) {
  const {
    miners,
    setMiners,
    btcPrice,
    setBtcPrice,
    expectedPrice,
    setExpectedPrice,
    hostingPeriod,
    setHostingPeriod,
    investment,
    btcEarnedByBuying,
    btcEarnedByMining,
    convertUsdToAed,
    btcValueBuying,
    btcValueMining,
    netProfitBuying,
    netProfitMining,
    roiBuying,
    roiMining,
    miningRatio,
    buyingRatio,
    thPerDay,
  } = useContext(CalculatorContext);

  return (
    <>
      <motion.div
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
        className="bg-[#011532] flex lg:flex-row flex-col justify-between items-start"
      >
        <div className="w-full">
          <div className="flex items-center gap-2 justify-center border-b border-[#4D8DAF] px-3 py-3">
            <div className="text-[#252528] text-4xl bg-[#5B5B5B] rounded-full">
              <FaBitcoin />
            </div>
            <div>
              <p className="md:text-base text-sm">Buying BTC</p>
              <p className="md:text-xs text-[10px] text-[#949494]">
                Overview of your Bitcoin portfolio performance
              </p>
            </div>
          </div>
          <div className="my-5 md:px-16 px-3 flex flex-col gap-3">
            <FieldItem
              item={"Total Cost incurred"}
              value={`${investment} AED`}
              style={"text-[#A4A4A6]"}
              description={`<p>The total cost incurred when purchasing ${miners} miner and paying its electricity fee for ${hostingPeriod} years </p><p>Miner Price = ${
                miner?.price
              } X ${miners} = ${
                parseFloat(miner?.price) * parseFloat(miners)
              } AED</p><p>Electricity Fee for ${hostingPeriod} yrs - ${(
                miner?.power *
                24 *
                miners *
                365 *
                hostingPeriod *
                parseFloat(miner?.hostingFeePerKw) *
                3.67
              ).toFixed(2)} AED</p>`}
            />
            <FieldItem
              item={"BTC Earned"}
              value={`${btcEarnedByBuying} BTC`}
              style={"text-[#A4A4A6]"}
              formula={"Total Cost Incurred / BTC Price Now in AED"}
              description={`<p>This gives you how much BTC you can buy now with the total cost which will be otherwise spend on buying a machine and paying its electricity bill</p><p>Total Cost Incurred - ${investment} AED</p><p>BTC Price Now(AED) - ${convertUsdToAed(
                btcPrice
              )}</p>`}
            />
            <FieldItem
              item={"Expected BTC Price"}
              value={`${convertUsdToAed(expectedPrice)} AED`}
              style={"text-[#A4A4A6]"}
              description={`<p>This is the expected value of BTC in AED after the ${hostingPeriod} years. You can change the years and amount in the above options</p>`}
            />
            <FieldItem
              item={"Your BTC Value"}
              value={`${btcValueBuying} AED`}
              style={"text-[#A4A4A6]"}
              formula={`BTC Owned x Expected Price in ${hostingPeriod} years`}
              description={`<p>This is the value of the BTC owned by you after ${hostingPeriod} years</p><p>BTC owned - ${btcEarnedByBuying} BTC</p><p>Expected Price in ${hostingPeriod} years - ${convertUsdToAed(
                expectedPrice
              )} AED</p>`}
            />
          </div>
          <div className="w-full flex flex-col gap-2 md:px-16 px-3 pb-5 lg:hidden border-b border-[#4D8DAF]">
            <FieldItem
              item={"Net Profit"}
              value={`${netProfitBuying} AED`}
              style={"text-[#A4A4A6]"}
              style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
              formula={`Value of BTC Owned - Total Cost Incurred`}
              description={`<p>This gives information about how much profit is gained in ${hostingPeriod} years if You buy bitcoin </p><p>Value of BTC owned - ${btcValueBuying} AED</p><p>Total Investment - ${investment} AED</p>`}
            />
            <FieldItem
              item={"ROI %"}
              value={`${roiBuying}`}
              style={"text-[#A4A4A6]"}
              style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
              formula={`(Value of BTC Owned / Total Investment) x 100`}
              description={`<p>This value represents the Return of Investment. It gives the info about how much percentage more returns you got compared to your investment.</p><p>Your BTC Value - ${btcValueBuying} AED</p><p>Total Investment - ${investment} AED</p><p> >100 % - Positive Returns</p><p> <100 % - Negative Returns</p><p> =100 % - No Returns</p>`}
            />
            <FieldItem
              item={"Profit:Investment"}
              value={buyingRatio}
              style={"text-[#A4A4A6]"}
              style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
              formula={`Net Profit / Total Cost Incurred`}
              description={`<p>This gives the ratio of the Net Profit to that of the total cost incurred</p><p>Net Profit - ${netProfitBuying}</p><p>Total cost Incurred - ${investment}</p>`}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-center gap-2 border-b border-[#4D8DAF] p-3">
            <div className="text-[#5B5B5B] text-3xl bg-[#252528] rounded-full">
              <GiMining />
            </div>
            <div>
              <p className="md:text-base text-sm">Buying Miner</p>
              <p className="md:text-xs text-[10px] text-[#949494]">
                Overview of your Bitcoin portfolio performance
              </p>
            </div>
          </div>
          <div className="my-5 md:px-16 px-3 flex flex-col gap-3 border-l border-[#4D8DAF59] relative">
            <FieldItem
              item={"Miner Price"}
              value={`${parseFloat(miner?.price) * parseFloat(miners)} AED`}
              style={"text-[#A4A4A6]"}
              formula={`Miner Price x No of Miners`}
              description={`<p>The price of total no of miners purchased</p><p>Miner Price - ${miner?.price} AED</p><p>No of Miners - ${miners}</p>`}
            />
            <FieldItem
              item={"Electricity Cost"}
              value={`${(
                miner?.power *
                24 *
                miners *
                365 *
                hostingPeriod *
                miner?.hostingFeePerKw *
                3.67
              ).toFixed(2)} AED`}
              style={"text-[#A4A4A6]"}
              description={`<p>The total electricity fees you have to pay for ${hostingPeriod} years. You can change the hosting years in the above options</p><p>Electricity Fees - ${
                miner?.power
              } (power of the machine) x 24 hrs x ${miners} (total miners) x 365 days x ${hostingPeriod} (hosting period) x ${(
                miner?.hostingFeePerKw * 3.67
              ).toFixed(4)} (price for 1KW/h /day)</p>`}
            />
            <FieldItem
              item={"Total Cost incurred"}
              value={`${investment} AED`}
              style={"text-[#A4A4A6]"}
              formula={"Miner Price + Total Electricity Fees"}
              description={`<p>The total cost incurred when purchasing ${miners} miner and paying its electricity fee for ${hostingPeriod} years </p><p>Miner Price = ${
                miner?.price
              } X ${miners} = ${
                parseFloat(miner?.price) * parseFloat(miners)
              } AED</p><p>Electricity Fee for ${hostingPeriod} yrs - ${(
                miner?.power *
                24 *
                miners *
                365 *
                hostingPeriod *
                miner?.hostingFeePerKw *
                3.67
              ).toFixed(2)} AED</p>`}
            />
            <FieldItem
              item={"BTC Earned"}
              value={`${btcEarnedByMining} BTC`}
              style={"text-[#A4A4A6]"}
              description={`<p>The BTC expected to earn if the miners operate at 100% uptime and successfully mine BTC</p><p>BTC earned = ${thPerDay.toFixed(
                9
              )}(Current BTC earned for 1TH/s for a day ) x ${
                miner?.hashRate
              } (miner's Hashrate) x ${miners} (total miners) x 365 days x ${hostingPeriod} (hosting period)</p>`}
            />
            <FieldItem
              item={"Expected BTC Price"}
              value={`${convertUsdToAed(expectedPrice)} AED`}
              style={"text-[#A4A4A6]"}
              description={`<p>This is the expected value of BTC in AED after the ${hostingPeriod} years. You can change the years and amount in the above options</p>`}
            />
            <FieldItem
              item={"Your BTC Value"}
              value={`${btcValueMining} AED`}
              style={"text-[#A4A4A6]"}
              formula={`BTC Owned x Expected Price in ${hostingPeriod} years`}
              description={`<p>This is the value of the BTC owned by you after ${hostingPeriod} years</p><p>BTC owned - ${btcEarnedByMining} BTC</p><p>Expected Price in ${hostingPeriod} years - ${convertUsdToAed(
                expectedPrice
              )} AED</p>`}
            />
            <div className="w-full flex flex-col gap-2 pb-5 lg:hidden ">
              <FieldItem
                item={"Net Profit"}
                value={`${netProfitMining} AED`}
                style={"text-[#A4A4A6]"}
                style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
                formula={`Value of BTC Owned - Total Cost Incurred`}
                description={`<p>This gives information about how much profit is gained in ${hostingPeriod} years if You mine bitcoin </p><p>Value of BTC owned - ${btcValueMining} AED</p><p>Total Investment - ${investment} AED</p>`}
              />
              <FieldItem
                item={"ROI %"}
                value={roiMining}
                style={"text-[#A4A4A6]"}
                style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
                formula={`(Value of BTC Owned / Total Investment) x 100`}
                description={`<p>This value represents the Return of Investment. It gives the info about how much percentage more returns you got compared to your investment.</p><p>Your BTC Value - ${btcValueMining} AED</p><p>Total Investment - ${investment} AED</p><p> >100 % - Positive Returns</p><p> <100 % - Negative Returns</p><p> =100 % - No Returns</p>`}
              />
              <FieldItem
                item={"Profit:Investment"}
                value={miningRatio}
                style={"text-[#A4A4A6]"}
                style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
                formula={`Net Profit / Total Cost Incurred`}
                description={`<p>This gives the ratio of the Net Profit to that of the total cost incurred</p><p>Net Profit - ${netProfitMining}</p><p>Total cost Incurred - ${investment}</p>`}
              />
            </div>
            <img
              src="/buy-miners/icon-3.png"
              className="w-14 rounded-full absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
            />
          </div>
        </div>
      </motion.div>
      <div className="lg:flex justify-between gap-20 py-5 relative hidden">
        <div className="w-full flex flex-col gap-3 px-5">
          <FieldItem
            item={"Net Profit"}
            value={`${netProfitBuying} AED`}
            style={"text-[#A4A4A6]"}
            style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
            formula={`Value of BTC Owned - Total Cost Incurred`}
            description={`<p>This gives information about how much profit is gained in ${hostingPeriod} years if You buy bitcoin </p><p>Value of BTC owned - ${btcValueBuying} AED</p><p>Total Investment - ${investment} AED</p>`}
          />
          <FieldItem
            item={"ROI %"}
            value={roiBuying}
            style={"text-[#A4A4A6]"}
            style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
            formula={`(Value of BTC Owned / Total Investment) x 100`}
            description={`<p>This value represents the Return of Investment. It gives the info about how much percentage more returns you got compared to your investment.</p><p>Your BTC Value - ${btcValueBuying} AED</p><p>Total Investment - ${investment} AED</p><p> >100 % - Positive Returns</p><p> <100 % - Negative Returns</p><p> =100 % - No Returns</p>`}
          />
          <FieldItem
            item={"Profit:Investment"}
            value={buyingRatio}
            style={"text-[#A4A4A6]"}
            style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
            formula={`Net Profit / Total Cost Incurred`}
            description={`<p>This gives the ratio of the Net Profit to that of the total cost incurred</p><p>Net Profit - ${netProfitBuying}</p><p>Total cost Incurred - ${investment}</p>`}
          />
        </div>
        <div className="w-full flex flex-col gap-3 px-5">
          <FieldItem
            item={"Net Profit"}
            value={`${netProfitMining} AED`}
            style={"text-[#A4A4A6]"}
            style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
            formula={`Value of BTC Owned - Total Cost Incurred`}
            description={`<p>This gives information about how much profit is gained in ${hostingPeriod} years if You mine bitcoin </p><p>Value of BTC owned - ${btcValueMining} AED</p><p>Total Investment - ${investment} AED</p>`}
          />
          <FieldItem
            item={"ROI %"}
            value={roiMining}
            style={"text-[#A4A4A6]"}
            style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
            formula={`(Value of BTC Owned / Total Investment) x 100`}
            description={`<p>This value represents the Return of Investment. It gives the info about how much percentage more returns you got compared to your investment.</p><p>Your BTC Value - ${btcValueMining} AED</p><p>Total Investment - ${investment} AED</p><p> >100 % - Positive Returns</p><p> <100 % - Negative Returns</p><p> =100 % - No Returns</p>`}
          />
          <FieldItem
            item={"Profit:Investment"}
            value={miningRatio}
            style={"text-[#A4A4A6]"}
            style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
            formula={`Net Profit / Total Cost Incurred`}
            description={`<p>This gives the ratio of the Net Profit to that of the total cost incurred</p><p>Net Profit - ${netProfitMining}</p><p>Total cost Incurred - ${investment}</p>`}
          />
        </div>
        <img
          src="/buy-miners/icon-4.png"
          className="w-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {roiMining > roiBuying && (
        <div className=" px-5 py-1 flex flex-col gap-2">
          <p className="text-[#07EAD3] text-xl text-center">
            Mining is more profitable.
          </p>
        </div>
      )}
    </>
  );
}
