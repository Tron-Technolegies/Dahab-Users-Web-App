import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

export default function TransactionHistory() {
  const rows = [
    { id: 1, date: "29/10/2025", amount: "100", type: "fee", balance: "0.00" },
    {
      id: 2,
      date: "28/10/2025",
      amount: "100",
      type: "recharge",
      balance: "100",
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      <p
        className={`px-4 py-1 w-fit rounded-b-md border-b text-white border-[#0194FE]`}
      >
        Transactions
      </p>
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
                Transaction Date
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                Amount
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                Current Balance
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
                  <div className="flex justify-center items-center gap-5">
                    {row.type === "fee" ? (
                      <p className="text-red-500 text-xl font-semibold">
                        <FiMinus />
                      </p>
                    ) : (
                      <p className="text-green-600 text-xl font-semibold">
                        <GoPlus />
                      </p>
                    )}
                    {row.amount}
                  </div>
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    border: "0",
                    borderBottom: "1px solid #76C6E036",
                    color: "#FFFFFF",
                  }}
                >
                  {row.balance}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
