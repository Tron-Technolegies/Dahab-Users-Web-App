import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FormSelect from "../FormSelect";

export default function PayoutTable() {
  const rows = [
    { id: 1, date: "2025/04/25", amount: "0.000000234 BTC", status: "Pending" },
    {
      id: 2,
      date: "2025/04/26",
      amount: "0.000000234 BTC",
      status: "Completed",
    },
    {
      id: 3,
      date: "2025/04/27",
      amount: "0.000000234 BTC",
      status: "Completed",
    },
    {
      id: 4,
      date: "2025/04/28",
      amount: "0.000000234 BTC",
      status: "Completed",
    },
    { id: 5, date: "2025/04/29", amount: "0.000000234 BTC", status: "Pending" },
    {
      id: 6,
      date: "2025/04/30",
      amount: "0.000000234 BTC",
      status: "Completed",
    },
    {
      id: 7,
      date: "2025/04/31",
      amount: "0.000000234 BTC",
      status: "Completed",
    },
    { id: 8, date: "2025/04/22", amount: "0.000000234 BTC", status: "Pending" },
    { id: 9, date: "2025/04/23", amount: "0.000000234 BTC", status: "Pending" },
    {
      id: 10,
      date: "2025/04/25",
      amount: "0.000000234 BTC",
      status: "Pending",
    },
    {
      id: 11,
      date: "2025/04/25",
      amount: "0.000000234 BTC",
      status: "Pending",
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 self-end">
        <label>Sort</label>
        <FormSelect list={["All", "Pending", "Completed"]} />
      </div>
      <TableContainer component={Paper} id="payout">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#011532",
                borderColor: "#07EAD345",
              }}
            >
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                Date
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                Amount
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  //
                  cursor: "pointer",

                  backgroundColor: "#000C26",
                  "&:hover": {
                    backgroundColor: "#011840",
                  },
                }}
              >
                <TableCell
                  sx={{
                    textAlign: "center",
                    border: "0",
                    borderBottom: "1px solid #76C6E036",
                    color: "#FFFFFF",
                  }}
                >
                  {row.date}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    border: "0",
                    borderBottom: "1px solid #76C6E036",
                    color: "#FFFFFF",
                  }}
                >
                  {row.amount}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    border: "0",
                    borderBottom: "1px solid #76C6E036",
                    color: "#FFFFFF",
                  }}
                >
                  <p
                    className={`${
                      row.status === "Completed"
                        ? "text-[#07EAD3]"
                        : "text-[#F7931A]"
                    }`}
                  >
                    {row.status}
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
