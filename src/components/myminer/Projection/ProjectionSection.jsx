import { motion } from "framer-motion";
import React, { useContext } from "react";
import FieldItem from "../../dashboard/FinancialAnalysis/FieldItem";
import { CalculatorContext } from "../../../CalculatorContext";
import { ProjectionContext } from "../../../ProjectionContext";

export default function ProjectionSection() {
  const { btcPrice, thPerDay } = useContext(CalculatorContext);
  const {
    currentBatch,
    totalInvestment,
    avgHostingToPay,
    daysToLeft,
    minerPurchasedPrice,
    avgCoinToMine,
    coinIn3Yrs,
    convertUsdToAed,
    valueIn3Yrs,
    netProfit,
    profitRatio,
    roi,
    buyingBTC,
  } = useContext(ProjectionContext);
  return (
    <motion.div
      className="my-10 bg-[#011532] max-w-[600px] md:w-[600px] w-full mx-auto"
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
        <p className="md:text-lg">Financial Projection (3 Years)</p>
        <p className="md:text-xs text-[10px] text-[#949494]">
          Overview of your Bitcoin portfolio performance
        </p>
      </div>
      <div className="lg:px-20 md:px-5 px-[6px] py-10 flex flex-col gap-3">
        <FieldItem
          item={"Total Investment"}
          value={`${totalInvestment} AED`}
          formula={
            "Miner Purchased in current Batch + Hosting Fees Paid Already + Avg.Hosting Fees To be Paid "
          }
          description={`<p>This indicates the sum of all the miners purchased on the current batch, Hosting fees that has been paid already and the average hosting fees to be paid in the future.</p><p>Miner Purchased - ${minerPurchasedPrice} AED</p><p>Hosting Fee Paid - ${
            currentBatch?.hostingFeePaid
          } AED</p><p>Avg.Hosting fee to be paid - ${`${
            currentBatch?.itemId.power
          }kw (current power) * 24 hr * ${
            currentBatch?.qty
          } (miners in current batch) * ${daysToLeft}(validity in days) * ${
            currentBatch?.itemId.hostingFeePerKw * 3.67
          }(hosting fee per KW/h per day) AED`} = ${avgHostingToPay} AED</p>`}
        />
        <FieldItem
          item={"Total BTC Mined"}
          value={`${coinIn3Yrs} BTC`}
          formula={
            "Mined Revenue of Current Batch + Avg. BTC to be mined by machines of the current Batch in Future"
          }
          description={`<p>This indicates the total BTC mined by the machines of the current batch in 3 years. This will be the sum of the already mined BTC and the avg BTC that will be mined by the machines in the remaining validity of the current batch.</p><p>Current Mined Revenue - ${
            currentBatch?.minedRevenue
          } BTC</p><p>Avg. BTC To be Mined - ${`${thPerDay.toFixed(9)} BTC * ${
            currentBatch?.itemId.hashRate
          } (Hashrate of current batch) * ${
            currentBatch?.qty
          } (number of machines in current batch) * ${daysToLeft} (validity remaining in days)`} = ${avgCoinToMine}</p>`}
        />
        <FieldItem
          item={"BTC Price (3 yrs)"}
          value={`${convertUsdToAed(200000)} AED`}
          description={`<p>This indicates the expected BTC price after 3 years. This Value is just an assumption based on the current trend in market. This is not a real value</p>`}
        />
        <FieldItem
          item={"Your BTC Value (3 yrs)"}
          value={`${valueIn3Yrs} AED`}
          formula={"Total BTC Mined in 3 Yrs x Expected BTC Price in 3 yrs"}
          description={`<p>This represents the value of BTC you owned after 3 years.</p><p>BTC Mined in 3 yrs - ${coinIn3Yrs} BTC</p><p>Expected BTC Price in 3 yrs - ${`${convertUsdToAed(
            200000
          )} AED (200K USD)`}</p>`}
        />
        <FieldItem
          item={"Net Profit (3 Yrs)"}
          value={`${netProfit}`}
          formula={"Value of Your Mined BTC - Total Investment"}
          description={`<p>This describes the net profit after 3 years. This is the value after subtracting the total investment which includes miner price and its hosting fees, from the actual value of BTC mined over 3 years.</p><p>Your Mined BTC Value - ${valueIn3Yrs} AED</p><p>Total Investment - ${totalInvestment} AED</p>`}
        />
        <FieldItem
          item={"Profit : Investment"}
          value={`${profitRatio}`}
          formula={"Profit / Investment"}
          description={`<p>This is the ratio of Profit in 3 years to the total Investment in 3 years</p><p>Net Profit in 3 yrs - ${netProfit} AED</p><p>Total Investment - ${totalInvestment} AED</p>`}
        />
        <FieldItem
          item={"ROI (%)"}
          value={roi}
          formula={"(Your Mined BTC Value x  100) / Total Investment"}
          description={`<p>This value represents the Return of Investment. It gives the info about how much percentage more returns you got compared to your investment.</p><p>Your BTC Value - ${valueIn3Yrs} AED</p><p>Total Investment - ${totalInvestment} AED</p><p> >100 % - Positive Returns</p><p> <100 % - Negative Returns</p><p> =100 % - No Returns</p>`}
        />
        <FieldItem
          item={"Buying BTC Now"}
          value={`${buyingBTC} BTC`}
          formula={"Total Investment / BTC Price Now"}
          description={`<p>This indicates the Total BTC you can buy now with the investment you spent in 3 years</p><p>BTC Price Now - ${convertUsdToAed(
            btcPrice
          )} AED</p><p>Total Investment - ${totalInvestment} AED</p>`}
        />
      </div>
      {buyingBTC < coinIn3Yrs && (
        <p className="mb-5 p-5 border-t border-[#0194FE] text-sm text-center">
          You will get{" "}
          <span className="text-lg font-semibold text-[#0194FE]">
            {(coinIn3Yrs / buyingBTC).toFixed(2)}X
          </span>{" "}
          coins if you do mining
        </p>
      )}
    </motion.div>
  );
}
