import { motion } from "framer-motion";
import React, { useContext } from "react";
import FieldItem from "./FieldItem";
import { CalculatorContext } from "../../../CalculatorContext";
import { DashboardContext } from "../../../DashBoardContext";

export default function AnalysisSection() {
  const { btcPrice } = useContext(CalculatorContext);
  const { totalInvestment, minedRevenue, convertUsdToAed, ownedBTCValue, roi } =
    useContext(DashboardContext);
  return (
    <motion.div
      className="max-w-[600px] md:w-[600px] bg-[#011532]"
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
      <div className="flex items-center gap-0 px-10 py-2 border-b border-[#0194FE]">
        <img src="/home/bitcoin-2.png" className="w-[70px] mt-4" />
        <div className="flex flex-col gap-0">
          <p className="text-lg">Financial Analysis</p>
          <p className="text-xs text-[#949494]">
            Overview of your Bitcoin portfolio performance
          </p>
        </div>
      </div>
      <div className="lg:px-20 px-5 py-10 flex flex-col gap-3">
        <FieldItem
          item={"Current BTC Value"}
          value={`${convertUsdToAed(btcPrice)} AED`}
          formula={""}
          description={
            "This value represents the current market price of Bitcoin in USD. This value is subjected to change"
          }
        />
        <FieldItem
          item={"Total Investment"}
          value={`${totalInvestment} AED`}
          formula={"Total Miner Price + Total Hosting Fees Paid"}
          description={`<p>This Value represents the total amount you have spent on purchasing all the machines plus the amount that has been spend on paying the hosting fees</p><p>Cost of Total Miners-${"NA"}</p><p>Total Hosting Paid-${"NA"}</p>`}
        />
        <FieldItem
          item={"Total BTC Mined"}
          value={`${minedRevenue} BTC`}
          formula={"Current BTC Balance + Sum of Withdrawals"}
          description={`<p>This value represents the total BTC mined in your account. This is the sum of your current BTC Balance and the total sum of all the BTC withdrawals you made</p><p>Current Balance - ${"N/A"}</p><p>Sum of total Withdrawals - ${"N/A"}</p>`}
        />
        {/* <FieldItem
          item={"Total Hosting Due"}
          value={"N/A"}
          description={`<p>This is the pending amount of hosting fee for all of your machines. You have to pay to avoid disruption of service.</p>`}
        /> */}
        <FieldItem
          item={"Your BTC Value"}
          value={`${ownedBTCValue} AED`}
          formula={"Total BTC Mined x Current BTC Value"}
          description={`<p>This indicates the total value of the bitcoin you owned.</p><p>Total Bitcoin Owned - ${"N/A"}</p><p>Current BTC Value - ${btcPrice}</p>`}
        />
        <FieldItem
          item={"ROI (%)"}
          value={roi}
          formula={"(Your BTC Value x  100) / Total Investment"}
          description={`<p>This value represents the Return of Investment. It gives the info about how much percentage more returns you got compared to your investment.</p><p> >100 % - Positive Returns</p><p> <100 % - Negative Returns</p><p> =100 % - No Returns</p>`}
        />
      </div>
    </motion.div>
  );
}
