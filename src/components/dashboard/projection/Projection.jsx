import { motion } from "framer-motion";
import React, { useContext } from "react";
import FieldItem from "../FinancialAnalysis/FieldItem";
import { CalculatorContext } from "../../../CalculatorContext";

export default function Projection() {
  const { btcPrice } = useContext(CalculatorContext);
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
        <p className="text-lg">Financial Projection (3 Years)</p>
        <p className="text-xs text-[#949494]">
          Overview of your Bitcoin portfolio performance
        </p>
      </div>
      <div className="lg:px-20 px-5 py-10 flex flex-col gap-3">
        <FieldItem
          item={"Total Investment"}
          value={"N/A"}
          formula={
            "Miner Purchased in All Batch + Hosting Fees Paid Already + Avg.Hosting Fees To be Paid "
          }
          description={`<p>This indicates the sum of all the miners purchased on all batches, Hosting fees that has been paid already and the average hosting fees to be paid in the future.</p><p>Miner Purchased - ${"N/A"}</p><p>Hosting Fee Paid - ${"N/A"}</p><p>Avg.Hosting fee to be paid - ${`3.55kw * 24 hr * number of miners in all batches * validity in days for all batches * 0.051 AED`}</p>`}
        />
        <FieldItem
          item={"Total BTC Mined"}
          value={"N/A"}
          formula={
            "Mined Revenue of All Batch + Avg. BTC to be mined by machines of the all Batches in Future"
          }
          description={`<p>This indicates the total BTC mined by the machines of the all batches in 3 years. This will be the sum of the already mined BTC and the avg BTC that will be mined by the machines in the remaining validity of the all batches.</p><p>Current Mined Revenue - ${"N/A"}</p><p>Avg. BTC To be Mined - ${"0.0000075 BTC * Hashrate of all batches * number of machines in all batches * validity remaining in days"}</p>`}
        />
        <FieldItem
          item={"BTC Price (After 3 yrs)"}
          value={"300000 USD"}
          description={`<p>This indicates the expected BTC price after 3 years. This Value is just an assumption based on the current trend in market. This is not a real value</p>`}
        />
        <FieldItem
          item={"Your BTC Value (After 3 yrs)"}
          value={"N/A"}
          formula={"Total BTC Mined in 3 Yrs x Expected BTC Price in 3 yrs"}
          description={`<p>This represents the value of BTC you owned after 3 years.</p><p>BTC Mined in 3 yrs - ${"N/A"}</p><p>Expected BTC Price in 3 yrs - ${"300000 USD"}</p>`}
        />
        <FieldItem
          item={"Net Profit (3 Yrs)"}
          value={"N/A"}
          formula={"Value of Your Mined BTC - Total Investment"}
          description={`<p>This describes the net profit after 3 years. This is the value after subtracting the total investment which includes miner price and its hosting fees, from the actual value of BTC mined over 3 years.</p><p>Your Mined BTC Value - ${"N/A"}</p><p>Total Investment - ${"N/A"}</p>`}
        />
        <FieldItem
          item={"Profit : Investment"}
          value={"N/A"}
          formula={"Profit / Investment"}
          description={`<p>This is the ratio of Profit in 3 years to the total Investment in 3 years</p><p>Net Profit in 3 yrs - ${"N/A"}</p><p>Total Investment - ${"N/A"}</p>`}
        />
        <FieldItem
          item={"ROI (%)"}
          value={"N/A"}
          formula={"(Your Mined BTC Value x  100) / Total Investment"}
          description={`<p>This value represents the Return of Investment. It gives the info about how much percentage more returns you got compared to your investment.</p><p> >100 % - Positive Returns</p><p> <100 % - Negative Returns</p><p> =100 % - No Returns</p>`}
        />
        <FieldItem
          item={"Buying BTC Now"}
          value={"N/A"}
          formula={"Total Investment / BTC Price Now"}
          description={`<p>This indicates the Total BTC you can buy now with the investment you spent in 3 years</p><p>BTC Price Now - ${btcPrice}</p><p>Total Investment - ${"N/A"}</p>`}
        />
      </div>
    </motion.div>
  );
}
