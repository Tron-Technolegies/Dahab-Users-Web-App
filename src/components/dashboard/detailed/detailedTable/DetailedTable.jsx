import React, { useState } from "react";
import FormSelect from "../../../FormSelect";
import { IoSearch } from "react-icons/io5";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Backdrop from "@mui/material/Backdrop";
import SingleGraph from "./SingleGraph";

export default function DetailedTable() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const handleClose = () => {
    setName("");
    setOpen(false);
  };
  const handleOpen = (name) => {
    setName(name);
    setOpen(true);
  };
  const rows = [
    {
      name: "001",
      status: "Active",
      h1_hash: "61.30 TH",
      h24_hash: "65.44 TH",
      h1_efficiency: "100.00%",
      h24_efficiency: "99.94%",
      h24_revenue: "0.00003383 BTC",
      h1_valid: "194",
      h1_stale: "0",
      h1_rejected: "0",
      last_share: "25-03-25: 12:00:00",
    },
    {
      name: "002",
      status: "Inactive",
      h1_hash: "61.30 TH",
      h24_hash: "65.44 TH",
      h1_efficiency: "100.00%",
      h24_efficiency: "99.94%",
      h24_revenue: "0.00003383 BTC",
      h1_valid: "194",
      h1_stale: "0",
      h1_rejected: "0",
      last_share: "25-03-25: 12:00:00",
    },
    {
      name: "003",
      status: "Warning",
      h1_hash: "61.30 TH",
      h24_hash: "65.44 TH",
      h1_efficiency: "100.00%",
      h24_efficiency: "99.94%",
      h24_revenue: "0.00003383 BTC",
      h1_valid: "194",
      h1_stale: "0",
      h1_rejected: "0",
      last_share: "25-03-25: 12:00:00",
    },
    {
      name: "004",
      status: "Active",
      h1_hash: "61.30 TH",
      h24_hash: "65.44 TH",
      h1_efficiency: "100.00%",
      h24_efficiency: "99.94%",
      h24_revenue: "0.00003383 BTC",
      h1_valid: "194",
      h1_stale: "0",
      h1_rejected: "0",
      last_share: "25-03-25: 12:00:00",
    },
    {
      name: "005",
      status: "Active",
      h1_hash: "61.30 TH",
      h24_hash: "65.44 TH",
      h1_efficiency: "100.00%",
      h24_efficiency: "99.94%",
      h24_revenue: "0.00003383 BTC",
      h1_valid: "194",
      h1_stale: "0",
      h1_rejected: "0",
      last_share: "25-03-25: 12:00:00",
    },
    {
      name: "006",
      status: "Active",
      h1_hash: "61.30 TH",
      h24_hash: "65.44 TH",
      h1_efficiency: "100.00%",
      h24_efficiency: "99.94%",
      h24_revenue: "0.00003383 BTC",
      h1_valid: "194",
      h1_stale: "0",
      h1_rejected: "0",
      last_share: "25-03-25: 12:00:00",
    },
    {
      name: "007",
      status: "Active",
      h1_hash: "61.30 TH",
      h24_hash: "65.44 TH",
      h1_efficiency: "100.00%",
      h24_efficiency: "99.94%",
      h24_revenue: "0.00003383 BTC",
      h1_valid: "194",
      h1_stale: "0",
      h1_rejected: "0",
      last_share: "25-03-25: 12:00:00",
    },
    {
      name: "008",
      status: "Active",
      h1_hash: "61.30 TH",
      h24_hash: "65.44 TH",
      h1_efficiency: "100.00%",
      h24_efficiency: "99.94%",
      h24_revenue: "0.00003383 BTC",
      h1_valid: "194",
      h1_stale: "0",
      h1_rejected: "0",
      last_share: "25-03-25: 12:00:00",
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center gap-5">
        <FormSelect list={["All", "Active", "Warning", "Inactive"]} />
        <div className="w-full relative">
          <p className="absolute text-xl text-[#0194FE] left-2 top-[10px]">
            <IoSearch />
          </p>
          <input
            type="text"
            className="px-4 ps-10 py-2 rounded-md bg-[#011532] text-[#0194FE] w-full outline-0"
            placeholder="Search Worker"
          />
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#000C26",
                borderColor: "#07EAD345",
              }}
            >
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                Status
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                1H Hashrate
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                24H Hashrate
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                1H Efficiency
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                24H Efficiency
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                Revenue (24H)
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                1H Valid Shares
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                1H Stale Shares
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                1H Rejected Shares
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                Last Share Time
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  //
                  cursor: "pointer",
                  backgroundColor: "#000C26",
                  "&:hover": {
                    backgroundColor: "#011840",
                  },
                }}
                onClick={() => {
                  handleOpen(row.name);
                }}
              >
                <TableCell
                  sx={{ textAlign: "center", border: "0", color: "#FFFFFF" }}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{ textAlign: "center", border: "0", color: "#FFFFFF" }}
                >
                  <p
                    className={`${
                      row.status === "Active"
                        ? "text-[#07EAD3]"
                        : row.status === "Warning"
                        ? "text-[#F7931A]"
                        : "text-[#E11A38]"
                    }`}
                  >
                    {row.status}
                  </p>
                </TableCell>
                <TableCell
                  sx={{ textAlign: "center", border: "0", color: "#FFFFFF" }}
                >
                  {row.h1_hash}
                </TableCell>
                <TableCell
                  sx={{ textAlign: "center", border: "0", color: "#FFFFFF" }}
                >
                  {row.h24_hash}
                </TableCell>
                <TableCell
                  sx={{ textAlign: "center", border: "0", color: "#FFFFFF" }}
                >
                  {row.h1_efficiency}
                </TableCell>
                <TableCell
                  sx={{ textAlign: "center", border: "0", color: "#FFFFFF" }}
                >
                  {row.h24_efficiency}
                </TableCell>
                <TableCell
                  sx={{ textAlign: "center", border: "0", color: "#FFFFFF" }}
                >
                  {row.h24_revenue}
                </TableCell>
                <TableCell
                  sx={{ textAlign: "center", border: "0", color: "#FFFFFF" }}
                >
                  {row.h1_valid}
                </TableCell>
                <TableCell
                  sx={{ textAlign: "center", border: "0", color: "#FFFFFF" }}
                >
                  {row.h1_stale}
                </TableCell>
                <TableCell
                  sx={{ textAlign: "center", border: "0", color: "#FFFFFF" }}
                >
                  {row.h1_rejected}
                </TableCell>
                <TableCell
                  sx={{ textAlign: "center", border: "0", color: "#FFFFFF" }}
                >
                  {row.last_share}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Backdrop
        sx={(theme) => ({
          color: "#fff",
          zIndex: theme.zIndex.drawer + 1,
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        })}
        open={open}
        onClick={handleClose}
      >
        <SingleGraph name={name} />
      </Backdrop>
    </div>
  );
}
