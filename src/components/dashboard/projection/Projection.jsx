import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import FieldItem from "../FinancialAnalysis/FieldItem";
import { CalculatorContext } from "../../../CalculatorContext";
import { DashboardContext } from "../../../DashBoardContext";
import { IoWarningOutline } from "react-icons/io5";

export default function Projection() {
  const { btcPrice, expectedPrice, thPerDay } = useContext(CalculatorContext);
  const {
    avgHostingFee3Yrs,
    totalInvestment3Yrs,
    hostingPaid,
    totalMinerPrice,
    avgBTCToMine3Yrs,
    totalMined3Yrs,
    minedRevenue,
    convertUsdToAed,
    valueIn3Yrs,
    netProfit3Yrs,
    profitRatio3Yrs,
    roi3Yrs,
    buyingBTCNow,
  } = useContext(DashboardContext);
  const [showInfo, setShowInfo] = useState(false);
  return (
    <motion.div
      className="my-10 bg-[#011532] max-w-[900px] lg:w-[900px] md:w-[600px] w-full md:mx-auto"
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
      <div className="flex flex-col items-center md:gap-0 py-5 border-b border-[#0194FE]">
        <p className="md:text-lg text-base flex gap-2 justify-center relative">
          Financial Projection (3 Years){" "}
          <span
            className="text-orange-500 text-sm cursor-pointer"
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
          >
            <IoWarningOutline />
          </span>
          {showInfo && (
            <div
              className="absolute top-10 bg-black p-5 rounded-lg z-10 lg:w-[400px] w-[300px] flex flex-col gap-3 items-center"
              onMouseEnter={() => setShowInfo(true)}
              onMouseLeave={() => setShowInfo(false)}
            >
              <p className="text-center text-xs text-white font-normal">
                These figures are estimates only and may change due to Bitcoin
                price, mining difficulty, and operational factors. Past
                performance is not a guarantee of future results.
              </p>
            </div>
          )}
        </p>
        <p className="md:text-xs text-[10px] text-[#949494]">
          Overview of your Bitcoin portfolio performance
        </p>
      </div>
      <div className="lg:px-20 md:px-5 px-[6px] md:py-10 py-5 flex flex-col gap-3">
        <FieldItem
          item={"Total Investment"}
          value={`${totalInvestment3Yrs.toFixed(2)} AED`}
          formula={
            "Miner Purchased in All Batch + Hosting Fees Paid Already for All miners + Avg.Hosting Fees To be Paid for all miners"
          }
          description={`<p>This indicates the sum of all the miners purchased on all batches, Hosting fees that has been paid already and the average hosting fees to be paid in the future.</p><p>Miner Purchased - ${totalMinerPrice} AED</p><p>Hosting Fee Paid - ${hostingPaid} AED</p><p>Avg.Hosting fee to be paid = ${`power of each miner in all batches * 24 hr * number of miners in all batches * validity in days for all batches * hosting fee per kw in day for each miner in AED = ${avgHostingFee3Yrs.toFixed(
            2
          )}`}</p>`}
        />
        <FieldItem
          item={"Total BTC Mined"}
          value={`${totalMined3Yrs} BTC`}
          formula={
            "Mined Revenue of All Batch + Avg. BTC to be mined by machines of the all Batches in Future"
          }
          description={`<p>This indicates the total BTC mined by the machines of the all batches in 3 years. This will be the sum of the already mined BTC and the avg BTC that will be mined by the machines in the remaining validity of the all batches.</p><p>Current Mined Revenue = ${minedRevenue} BTC</p><p>Avg. BTC To be Mined = ${thPerDay.toFixed(
            9
          )}${"BTC * Hashrate of all batches * validity remaining in days "} = ${avgBTCToMine3Yrs.toFixed(
            4
          )} BTC</p>`}
        />
        <FieldItem
          item={"BTC Price (3 yrs)"}
          value={`${convertUsdToAed(expectedPrice)} AED`}
          description={`<p>This indicates the expected BTC price after 3 years. This Value is just an assumption based on the current trend in market. This is not a real value</p>`}
        />
        <FieldItem
          item={"Your BTC Value (3 yrs)"}
          value={`${valueIn3Yrs} AED`}
          formula={"Total BTC Mined in 3 Yrs x Expected BTC Price in 3 yrs"}
          description={`<p>This represents the value of BTC you owned after 3 years.</p><p>BTC Mined in 3 yrs - ${totalMined3Yrs} BTC</p><p>Expected BTC Price in 3 yrs - ${convertUsdToAed(
            expectedPrice
          )} AED</p>`}
        />
        <FieldItem
          item={"Net Profit (3 Yrs)"}
          value={`${netProfit3Yrs} AED`}
          formula={"Value of Your Mined BTC - Total Investment"}
          description={`<p>This describes the net profit after 3 years. This is the value after subtracting the total investment which includes miner price and its hosting fees, from the actual value of BTC mined over 3 years.</p><p>Your Mined BTC Value - ${valueIn3Yrs} AED</p><p>Total Investment - ${totalInvestment3Yrs.toFixed(
            2
          )} AED</p>`}
        />
        <FieldItem
          item={"Profit : Investment"}
          value={`${profitRatio3Yrs}`}
          formula={"Profit / Investment"}
          description={`<p>This is the ratio of Profit in 3 years to the total Investment in 3 years</p><p>Net Profit in 3 yrs - ${netProfit3Yrs} AED</p><p>Total Investment - ${totalInvestment3Yrs.toFixed(
            2
          )} AED</p>`}
        />
        <FieldItem
          item={"ROI (%)"}
          value={`${roi3Yrs}`}
          formula={"(Your Mined BTC Value x  100) / Total Investment"}
          description={`<p>This value represents the Return of Investment. It gives the info about how much percentage more returns you got compared to your investment.</p><p>Mined BTC Value - ${valueIn3Yrs} AED</p><p>Total Investment - ${totalInvestment3Yrs.toFixed(
            2
          )} AED</p><p> >100 % - Positive Returns</p><p> <100 % - Negative Returns</p><p> =100 % - No Returns</p>`}
        />
        <FieldItem
          item={"Buying BTC Now"}
          value={`${buyingBTCNow} BTC`}
          formula={"Total Investment / BTC Price Now"}
          description={`<p>This indicates the Total BTC you can buy now with the investment you spent in 3 years</p><p>BTC Price Now - ${btcPrice} USD</p><p>Total Investment - ${totalInvestment3Yrs.toFixed(
            2
          )} AED</p>`}
        />
        {buyingBTCNow < totalMined3Yrs && (
          <p className=" border-t border-[#0194FE] text-sm text-center">
            You will get{" "}
            <span className="text-lg font-semibold text-[#0194FE]">
              {(totalMined3Yrs / buyingBTCNow).toFixed(2)}X
            </span>{" "}
            coins if you do mining
          </p>
        )}
      </div>
    </motion.div>
  );
}
