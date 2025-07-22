import React, { useContext, useEffect, useState } from "react";
import FormSelect from "../../../FormSelect";
import FormInput from "../../../FormInput";
import { FaBitcoin } from "react-icons/fa";
import { GiMining } from "react-icons/gi";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import TableRowComponent from "./TableRowComponent";
import { CalculatorContext } from "../../../../CalculatorContext";
import { motion } from "framer-motion";
import FieldItem from "../../../dashboard/FinancialAnalysis/FieldItem";

const rows = [];

export default function ROICalculator({ miner }) {
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
  } = useContext(CalculatorContext);

  return (
    <div className="flex flex-col gap-5 mt-20 my-10 ">
      <h3 className="text-3xl font-semibold text-center text-[#76C6E0]">
        Bitcoin ROI Calculator
      </h3>
      <p className="text-center">Buy vs Mining</p>
      <div className="max-w-[1000px] w-full mx-auto flex flex-col gap-7 border-b border-[#011E34]">
        <FormSelect list={["BTC Hold", "BTC Profit"]} />
        <div className="bg-[#011532] p-5 px-10 rounded-md grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-7 border-t border-[#4D8DAF]">
          <FormInput
            title={"No of Miners"}
            type={"number"}
            styles={"bg-[#07EAD314]"}
            value={miners}
            onChange={(e) => setMiners(e.target.value)}
          />
          <FormSelect
            title={"Hosting Period (years)"}
            list={[3, 1, 2, 4, 5]}
            styles={"bg-[#07EAD314] w-full"}
            value={hostingPeriod}
            onChange={(e) => setHostingPeriod(e.target.value)}
            full
          />
          <FormInput
            title={"Current BTC Price (USD)"}
            type={"number"}
            styles={"bg-[#07EAD314]"}
            value={btcPrice}
            onChange={(e) => setBtcPrice(e.target.value)}
          />
          <FormInput
            title={"Expected Price(3 Years-USD)"}
            type={"number"}
            styles={"bg-[#07EAD314]"}
            value={expectedPrice}
            onChange={(e) => setExpectedPrice(e.target.value)}
          />
        </div>
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
            <div className="flex items-center gap-2 justify-center border-b border-[#4D8DAF] py-3">
              <div className="text-[#252528] text-4xl bg-[#5B5B5B] rounded-full">
                <FaBitcoin />
              </div>
              <div>
                <p>Buying BTC</p>
                <p className="text-xs text-[#949494]">
                  Overview of your Bitcoin portfolio performance
                </p>
              </div>
            </div>
            <div className="my-5 px-16 flex flex-col gap-3">
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
                  parseFloat(miner?.hostingFeePerKw)
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
            <div className="w-full flex flex-col gap-2 px-16 pb-5 lg:hidden border-b border-[#4D8DAF]">
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
            <div className="flex items-center justify-center gap-2 border-b border-[#4D8DAF] py-3">
              <div className="text-[#5B5B5B] text-3xl bg-[#252528] rounded-full">
                <GiMining />
              </div>
              <div>
                <p>Buying Miner</p>
                <p className="text-xs text-[#949494]">
                  Overview of your Bitcoin portfolio performance
                </p>
              </div>
            </div>
            <div className="my-5 px-16 flex flex-col gap-3 border-l border-[#4D8DAF59] relative">
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
                  miner?.hostingFeePerKw
                ).toFixed(2)} AED`}
                style={"text-[#A4A4A6]"}
                description={`<p>The total electricity fees you have to pay for ${hostingPeriod} years. You can change the hosting years in the above options</p><p>Electricity Fees - ${miner?.power} (power of the machine) x 24 hrs x ${miners} (total miners) x 365 days x ${hostingPeriod} (hosting period) x ${miner?.hostingFeePerKw} (price for 1KW/h /day)</p>`}
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
                  miner?.hostingFeePerKw
                ).toFixed(2)} AED</p>`}
              />
              <FieldItem
                item={"BTC Earned"}
                value={`${btcEarnedByMining} BTC`}
                style={"text-[#A4A4A6]"}
                description={`<p>The BTC expected to earn if the miners operate at 100% uptime and successfully mine BTC</p><p>BTC earned = 0.00000075(Current BTC earned for 1TH/s for a day ) x ${miner?.hashRate} (miner's Hashrate) x ${miners} (total miners) x 365 days x ${hostingPeriod} (hosting period)</p>`}
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
      </div>
      {roiMining > roiBuying && (
        <div className=" px-5 py-1 flex flex-col gap-2">
          <p className="text-[#07EAD3] text-xl text-center">
            Mining is more profitable.
          </p>
        </div>
      )}
    </div>
  );
}

{
  /* <div>
  <TableContainer component={Paper} id="payout">
    <Table
      sx={{
        minWidth: 650,
        borderRadius: "6px",
        borderBottom: "#3DB2E8",
      }}
      aria-label="simple table"
    >
      <TableHead>
        <TableRow
          sx={{
            backgroundColor: "#3DB2E8",
            fontWeight: "bolder",
            color: "#011532",
          }}
        >
          <TableCell sx={{ border: "0", textAlign: "center" }}>Cost</TableCell>
          <TableCell sx={{ border: "0", textAlign: "center" }}>
            Buying BTC
          </TableCell>
          <TableCell sx={{ border: "0", textAlign: "center" }}>
            Buying Miner
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRowComponent
          type={"Miner Price"}
          btcValue={0}
          minerValue={minerPrice}
        />
        <TableRowComponent
          type={"Electricity Cost"}
          btcValue={0}
          minerValue={electricity}
        />
        <TableRowComponent
          type={"Total Cost Incurred"}
          btcValue={investment}
          minerValue={investment}
        />
        <TableRowComponent
          type={"BTC Earned"}
          btcValue={btcEarnedByBuying}
          minerValue={btcEarnedByMining}
        />
        <TableRowComponent
          type={"Expected BTC Price"}
          btcValue={expectedPrice}
          setBtcChange={setExpectedPrice}
          minerValue={expectedPrice}
          setMinerChange={setExpectedPrice}
        />
        <TableRowComponent
          type={"Your BTC Value"}
          btcValue={btcValueBuying}
          minerValue={btcValueMining}
        />
        <TableRowComponent
          type={"Net Profit"}
          btcValue={netProfitBuying}
          minerValue={netProfitMining}
        />
        <TableRowComponent
          type={"ROI %"}
          btcValue={roiBuying}
          minerValue={roiMining}
        />
        <TableRowComponent
          type={"Profit: Investment"}
          btcValue={buyingRatio}
          minerValue={miningRatio}
        />
      </TableBody>
    </Table>
  </TableContainer>
  {roiMining > roiBuying && (
    <div className="bg-[#011532] px-5 py-10 flex flex-col gap-2">
      <p className="text-[#07EAD3] text-2xl text-center">
        Mining is more profitable.
      </p>
      <div className="flex gap-2 items-center text-sm">
        <img src="/page0/icon-12.png" />
        <p>You spend ₹1,60,000 and get ₹6,00,000 in value.</p>
      </div>
      <div className="flex gap-2 items-center text-sm">
        <img src="/page0/icon-13.png" />
        <p>If you bought 1 BTC directly, you’d need ₹3,00,000.</p>
      </div>
    </div>
  )}
</div>; */
}
