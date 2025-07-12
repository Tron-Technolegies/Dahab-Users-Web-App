import React, { useState } from "react";
import FormSelect from "../../../FormSelect";
import FormInput from "../../../FormInput";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableRowComponent from "./TableRowComponent";
const rows = [];

export default function ROICalculator() {
  const [miners, setMiners] = useState(1);
  const [hostingPeriod, setHostingPeriod] = useState("3 Year");
  const [btcPrice, setBtcPrice] = useState(118000);
  const [expectedPrice, setExpectedPrice] = useState(200000);
  return (
    <div className="flex flex-col gap-3 my-20">
      <h3 className="text-3xl font-semibold text-center text-[#76C6E0]">
        Bitcoin ROI Calculator
      </h3>
      <p className="text-center">Buy vs Mining</p>
      <div className="max-w-[1000px] w-full mx-auto flex flex-col gap-5">
        <FormSelect list={["BTC Hold", "BTC Profit"]} />
        <div className="bg-[#011532] p-5 rounded-md grid sm:grid-cols-2 gap-7">
          <FormInput
            title={"No of Miners"}
            type={"number"}
            styles={"bg-[#858E9147]"}
            value={miners}
            onChange={(e) => setMiners(e.target.value)}
          />
          <FormSelect
            title={"Hosting Period"}
            list={["3 Year", "1 Year", "2 Year", "4 Year", "5 Year"]}
            styles={"bg-[#858E9147] w-full"}
            value={hostingPeriod}
            onChange={(e) => setHostingPeriod(e.target.value)}
            full
          />
          <FormInput
            title={"Current BTC Price"}
            type={"number"}
            styles={"bg-[#858E9147]"}
            value={btcPrice}
            onChange={(e) => setBtcPrice(e.target.value)}
          />
          <FormInput
            title={"Expected BTC Price(3 Years)"}
            type={"number"}
            styles={"bg-[#858E9147]"}
            value={expectedPrice}
            onChange={(e) => setExpectedPrice(e.target.value)}
          />
        </div>
        <div>
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
                  <TableCell sx={{ border: "0", textAlign: "center" }}>
                    Cost
                  </TableCell>
                  <TableCell sx={{ border: "0", textAlign: "center" }}>
                    Buying BTC
                  </TableCell>
                  <TableCell sx={{ border: "0", textAlign: "center" }}>
                    Buying Miner
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRowComponent type={"Miner Price"} />
                <TableRowComponent type={"Electricity Cost"} />
                <TableRowComponent type={"Total Cost Incurred"} />
                <TableRowComponent type={"BTC Earned"} />
                <TableRowComponent type={"Expected BTC Price"} />
                <TableRowComponent type={"Your BTC Value"} />
                <TableRowComponent type={"Net Profit"} />
                <TableRowComponent type={"ROI"} />
                <TableRowComponent type={"Profit: Investment"} />
              </TableBody>
            </Table>
          </TableContainer>
          <div className="bg-[#011532] px-5 py-10 flex flex-col gap-2">
            <p className="text-[#07EAD3] text-2xl">
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
        </div>
      </div>
    </div>
  );
}
