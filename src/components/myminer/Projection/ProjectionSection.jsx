import { motion } from "framer-motion";
import React from "react";
import FieldItem from "../../dashboard/FinancialAnalysis/FieldItem";

export default function ProjectionSection() {
  return (
    <motion.div
      className="my-10 bg-[#011532] max-w-[600px] w-[600px] mx-auto"
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
      <div className="flex flex-col items-center gap-0 py-5 border-b border-[#0194FE]">
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
            "Miner Purchased in current Batch + Hosting Fees Paid Already + Avg.Hosting Fees To be Paid "
          }
          description={`<p>This indicates the sum of all the miners purchased on the current batch, Hosting fees that has been paid already and the average hosting fees to be paid in the future.</p><p>Miner Purchased - ${"N/A"}</p><p>Hosting Fee Paid - ${"N/A"}</p><p>Avg.Hosting fee to be paid - ${`3.55kw * 24 hr * number of miners in current batch * validity in days for batch * 0.051 AED`}</p>`}
        />
        <FieldItem
          item={"Total BTC Mined"}
          value={"N/A"}
          formula={
            "Mined Revenue of Current Batch + Avg. BTC to be mined by machines of the current Batch in Future"
          }
          description={`<p>This indicates the total BTC mined by the machines of the current batch in 3 years. This will be the sum of the already mined BTC and the avg BTC that will be mined by the machines in the remaining validity of the current batch.</p><p>Current Mined Revenue - ${"N/A"}</p><p>Avg. BTC To be Mined - ${"0.0000075 BTC * Hashrate of current batch * number of machines in current batch * validity remaining in days"}</p>`}
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
          description={``}
        />
        <FieldItem item={"Net Profit (3 Yrs)"} value={"N/A"} />
        <FieldItem item={"Profit : Investment"} value={"N/A"} />
        <FieldItem item={"ROI (%)"} value={"N/A"} />
        <FieldItem item={"Buying BTC Now"} value={"N/A"} />
      </div>
    </motion.div>
  );
}
