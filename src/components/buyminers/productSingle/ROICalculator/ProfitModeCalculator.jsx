import React, { useContext, useState } from "react";
import { FaBitcoin } from "react-icons/fa";
import { GiMining } from "react-icons/gi";
import { motion } from "framer-motion";
import FieldItem from "../../../dashboard/FinancialAnalysis/FieldItem";
import { CalculatorContext } from "../../../../CalculatorContext";

export default function ProfitModeCalculator({ miner }) {
  const {
    miners,
    btcPrice,
    expectedPrice,
    hostingPeriod,
    btcEarnedByMining,
    convertUsdToAed,
    roiBuying,
    roiMining,
    thPerDay,
    btcEarnedPro,
    electricity,
    netBTCEarnedPro,
    btcValueBuyingPro,
    btcValueMiningPro,
    netProfitBuyingPro,
    netProfitMiningPro,
    roiBuyingPro,
    roiMiningPro,
    buyingRatioPro,
    miningRatioPro,
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
              value={`${parseFloat(miner?.price) * parseFloat(miners)} AED`}
              style={"text-[#A4A4A6]"}
              description={`<p>This is same as the price for the miners purchased</p>`}
            />
            <FieldItem
              item={"BTC Earned"}
              value={`${btcEarnedPro.toFixed(7)} BTC`}
              style={"text-[#A4A4A6]"}
              formula={"Total Cost Incurred / BTC Price Now in AED"}
              description={`<p>This gives you how much BTC you can buy now with the total cost which will be otherwise spend on buying a machine and paying its electricity bill</p><p>Total Cost Incurred - ${
                parseFloat(miner?.price) * parseFloat(miners)
              } AED</p><p>BTC Price Now(AED) - ${convertUsdToAed(
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
              value={`${btcValueBuyingPro.toFixed(2)} AED`}
              style={"text-[#A4A4A6]"}
              formula={`BTC Owned x Expected Price in ${hostingPeriod} years`}
              description={`<p>This is the value of the BTC owned by you after ${hostingPeriod} years</p><p>BTC owned - ${btcEarnedPro.toFixed(
                7
              )} BTC</p><p>Expected Price in ${hostingPeriod} years - ${convertUsdToAed(
                expectedPrice
              )} AED</p>`}
            />
          </div>
          <div className="w-full flex flex-col gap-2 md:px-16 px-3 pb-5 lg:hidden border-b border-[#4D8DAF]">
            <FieldItem
              item={"Net Profit"}
              value={`${netProfitBuyingPro.toFixed(2)} AED`}
              style={"text-[#A4A4A6]"}
              style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
              formula={`Value of BTC Owned - Total Cost Incurred`}
              description={`<p>This gives information about how much profit is gained in ${hostingPeriod} years if You buy bitcoin </p><p>Value of BTC owned - ${btcValueBuyingPro.toFixed(
                2
              )} AED</p><p>Total Investment - ${miner?.price * miners} AED</p>`}
            />
            <FieldItem
              item={"ROI %"}
              value={roiBuyingPro.toFixed(2)}
              style={"text-[#A4A4A6]"}
              style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
              formula={`(Value of Net BTC Owned / Total Investment) x 100`}
              description={`<p>This value represents the Return of Investment. It gives the info about how much percentage more returns you got compared to your investment.</p><p>Your BTC Value - ${btcValueBuyingPro.toFixed(
                2
              )} AED</p><p>Total Investment - ${
                miner?.price * miners
              } AED</p><p> >100 % - Positive Returns</p><p> <100 % - Negative Returns</p><p> =100 % - No Returns</p>`}
            />
            <FieldItem
              item={"Profit:Investment"}
              value={buyingRatioPro.toFixed(2)}
              style={"text-[#A4A4A6]"}
              style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
              formula={`Net Profit / Total Cost Incurred`}
              description={`<p>This gives the ratio of the Net Profit to that of the total cost incurred</p><p>Net Profit - ${netProfitBuyingPro.toFixed(
                2
              )}</p><p>Total cost Incurred - ${miner?.price * miners}</p>`}
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
              item={"Total Cost incurred"}
              value={`${parseFloat(miner?.price) * parseFloat(miners)} AED`}
              style={"text-[#A4A4A6]"}
              description={`<p>This is same as the price for the miners purchased</p>`}
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
              item={"Electricity Cost"}
              value={`${electricity.toFixed(2)} AED`}
              style={"text-[#A4A4A6]"}
              description={`<p>The total electricity fees you have to pay for ${hostingPeriod} years. You can change the hosting years in the above options</p><p>Electricity Fees - ${
                miner?.power
              } (power of the machine) x 24 hrs x ${miners} (total miners) x 365 days x ${hostingPeriod} (hosting period) x ${(
                miner?.hostingFeePerKw * 3.67
              ).toFixed(4)} (price for 1KW/h /day)</p>`}
            />
            <FieldItem
              item={"Electricity Cost (BTC)"}
              value={`${(electricity / convertUsdToAed(btcPrice)).toFixed(
                7
              )} BTC`}
              style={"text-[#A4A4A6]"}
              formula={"Electricity cost / Price of BTC today in AED"}
              description={`<p>This is the Total electricity fees you have to pay in terms of BTC</p>`}
            />
            <FieldItem
              item={"Net BTC earned"}
              value={`${netBTCEarnedPro.toFixed(7)} BTC`}
              style={"text-[#A4A4A6]"}
              formula={"BTC Earned - Electricity Cost in BTC"}
              description={`<p>This is the Net BTC in hand after the payment of electricity cost</p>`}
            />

            <FieldItem
              item={"Expected BTC Price"}
              value={`${convertUsdToAed(expectedPrice)} AED`}
              style={"text-[#A4A4A6]"}
              description={`<p>This is the expected value of BTC in AED after the ${hostingPeriod} years. You can change the years and amount in the above options</p>`}
            />
            <FieldItem
              item={"Your BTC Value"}
              value={`${btcValueMiningPro.toFixed(2)} AED`}
              style={"text-[#A4A4A6]"}
              formula={`Net BTC Earned x Expected Price in ${hostingPeriod} years`}
              description={`<p>This is the value of the BTC owned by you after ${hostingPeriod} years</p><p>Net BTC earned - ${netBTCEarnedPro.toFixed(
                7
              )} BTC</p><p>Expected Price in ${hostingPeriod} years - ${convertUsdToAed(
                expectedPrice
              )} AED</p>`}
            />
            <div className="w-full flex flex-col gap-2 pb-5 lg:hidden ">
              <FieldItem
                item={"Net Profit"}
                value={`${netProfitMiningPro.toFixed(2)} AED`}
                style={"text-[#A4A4A6]"}
                style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
                formula={`Value of Net BTC Owned - Total Cost Incurred`}
                description={`<p>This gives information about how much profit is gained in ${hostingPeriod} years if You mine bitcoin </p><p>Value of Net BTC owned - ${btcValueMiningPro.toFixed(
                  2
                )} AED</p><p>Total Investment - ${
                  miner?.price * miners
                } AED</p>`}
              />
              <FieldItem
                item={"ROI %"}
                value={roiMiningPro.toFixed(2)}
                style={"text-[#A4A4A6]"}
                style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
                formula={`(Value of Net BTC Owned / Total Investment) x 100`}
                description={`<p>This value represents the Return of Investment. It gives the info about how much percentage more returns you got compared to your investment.</p><p>Your Net BTC Value - ${btcValueMiningPro.toFixed(
                  2
                )} AED</p><p>Total Investment - ${
                  miner?.price * miners
                } AED</p><p> >100 % - Positive Returns</p><p> <100 % - Negative Returns</p><p> =100 % - No Returns</p>`}
              />
              <FieldItem
                item={"Profit:Investment"}
                value={miningRatioPro.toFixed(2)}
                style={"text-[#A4A4A6]"}
                style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
                formula={`Net Profit / Total Cost Incurred`}
                description={`<p>This gives the ratio of the Net Profit to that of the total cost incurred</p><p>Net Profit - ${netProfitMiningPro.toFixed(
                  2
                )}</p><p>Total cost Incurred - ${miner?.price * miners}</p>`}
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
            value={`${netProfitBuyingPro.toFixed(2)} AED`}
            style={"text-[#A4A4A6]"}
            style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
            formula={`Value of BTC Owned - Total Cost Incurred`}
            description={`<p>This gives information about how much profit is gained in ${hostingPeriod} years if You buy bitcoin </p><p>Value of BTC owned - ${btcValueBuyingPro.toFixed(
              2
            )} AED</p><p>Total Investment - ${miner?.price * miners} AED</p>`}
          />
          <FieldItem
            item={"ROI %"}
            value={roiBuyingPro.toFixed(2)}
            style={"text-[#A4A4A6]"}
            style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
            formula={`(Value of Net BTC Owned / Total Investment) x 100`}
            description={`<p>This value represents the Return of Investment. It gives the info about how much percentage more returns you got compared to your investment.</p><p>Your BTC Value - ${btcValueBuyingPro.toFixed(
              2
            )} AED</p><p>Total Investment - ${
              miner?.price * miners
            } AED</p><p> >100 % - Positive Returns</p><p> <100 % - Negative Returns</p><p> =100 % - No Returns</p>`}
          />
          <FieldItem
            item={"Profit:Investment"}
            value={buyingRatioPro.toFixed(2)}
            style={"text-[#A4A4A6]"}
            style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
            formula={`Net Profit / Total Cost Incurred`}
            description={`<p>This gives the ratio of the Net Profit to that of the total cost incurred</p><p>Net Profit - ${netProfitBuyingPro.toFixed(
              2
            )}</p><p>Total cost Incurred - ${miner?.price * miners}</p>`}
          />
        </div>
        <div className="w-full flex flex-col gap-3 px-5">
          <FieldItem
            item={"Net Profit"}
            value={`${netProfitMiningPro.toFixed(2)} AED`}
            style={"text-[#A4A4A6]"}
            style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
            formula={`Value of Net BTC Owned - Total Cost Incurred`}
            description={`<p>This gives information about how much profit is gained in ${hostingPeriod} years if You mine bitcoin </p><p>Value of Net BTC owned - ${btcValueMiningPro.toFixed(
              2
            )} AED</p><p>Total Investment - ${miner?.price * miners} AED</p>`}
          />
          <FieldItem
            item={"ROI %"}
            value={roiMiningPro.toFixed(2)}
            style={"text-[#A4A4A6]"}
            style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
            formula={`(Value of Net BTC Owned / Total Investment) x 100`}
            description={`<p>This value represents the Return of Investment. It gives the info about how much percentage more returns you got compared to your investment.</p><p>Your Net BTC Value - ${btcValueMiningPro.toFixed(
              2
            )} AED</p><p>Total Investment - ${
              miner?.price * miners
            } AED</p><p> >100 % - Positive Returns</p><p> <100 % - Negative Returns</p><p> =100 % - No Returns</p>`}
          />
          <FieldItem
            item={"Profit:Investment"}
            value={miningRatioPro.toFixed(2)}
            style={"text-[#A4A4A6]"}
            style2={"border border-[#26DDFF4F] px-3 py-1 rounded-md"}
            formula={`Net Profit / Total Cost Incurred`}
            description={`<p>This gives the ratio of the Net Profit to that of the total cost incurred</p><p>Net Profit - ${netProfitMiningPro.toFixed(
              2
            )}</p><p>Total cost Incurred - ${miner?.price * miners}</p>`}
          />
        </div>
        <img
          src="/buy-miners/icon-4.png"
          className="w-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {roiMiningPro > roiBuyingPro && (
        <div className=" px-5 py-1 flex flex-col gap-2">
          <p className="text-[#07EAD3] text-xl text-center">
            Mining is more profitable.
          </p>
        </div>
      )}
    </>
  );
}
